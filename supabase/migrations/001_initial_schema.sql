-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create custom types
create type user_role as enum ('student', 'admin');
create type enrollment_status as enum ('pending', 'active', 'completed', 'cancelled');
create type payment_status as enum ('created', 'captured', 'failed', 'refunded');
create type batch_status as enum ('upcoming', 'active', 'completed');
create type attendance_status as enum ('present', 'absent', 'late');
create type inquiry_status as enum ('new', 'read', 'replied');

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null,
  phone text,
  avatar_url text,
  role user_role default 'student',
  created_at timestamptz default now()
);

-- Courses table
create table public.courses (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  description text not null,
  curriculum jsonb default '[]',
  duration_weeks integer not null default 8,
  price integer not null,
  thumbnail_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- Batches table
create table public.batches (
  id uuid primary key default uuid_generate_v4(),
  course_id uuid references public.courses(id) on delete cascade not null,
  name text not null,
  start_date date not null,
  end_date date not null,
  schedule jsonb not null default '{"days": ["Monday", "Wednesday", "Friday"], "time": "08:00 AM - 10:30 AM", "timezone": "IST"}',
  max_students integer not null default 30,
  current_students integer default 0,
  status batch_status default 'upcoming',
  created_at timestamptz default now()
);

-- Enrollments table
create table public.enrollments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  batch_id uuid references public.batches(id) on delete cascade not null,
  status enrollment_status default 'pending',
  enrolled_at timestamptz default now(),
  unique(user_id, batch_id)
);

-- Payments table
create table public.payments (
  id uuid primary key default uuid_generate_v4(),
  enrollment_id uuid references public.enrollments(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  razorpay_order_id text unique not null,
  razorpay_payment_id text,
  amount integer not null,
  currency text default 'INR',
  status payment_status default 'created',
  created_at timestamptz default now()
);

-- Attendance table
create table public.attendance (
  id uuid primary key default uuid_generate_v4(),
  enrollment_id uuid references public.enrollments(id) on delete cascade not null,
  batch_id uuid references public.batches(id) on delete cascade not null,
  date date not null,
  status attendance_status not null,
  recorded_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

-- Announcements table
create table public.announcements (
  id uuid primary key default uuid_generate_v4(),
  batch_id uuid references public.batches(id) on delete cascade,
  title text not null,
  content text not null,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

-- Contact inquiries table
create table public.contact_inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  status inquiry_status default 'new',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.batches enable row level security;
alter table public.enrollments enable row level security;
alter table public.payments enable row level security;
alter table public.attendance enable row level security;
alter table public.announcements enable row level security;
alter table public.contact_inquiries enable row level security;

-- RLS Policies

-- Profiles: Users can read/update their own profile, admins can read all
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Admins can view all profiles" on public.profiles
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Courses: Everyone can view active courses
create policy "Anyone can view active courses" on public.courses
  for select using (is_active = true);

create policy "Admins can manage courses" on public.courses
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Batches: Everyone can view batches
create policy "Anyone can view batches" on public.batches
  for select using (true);

create policy "Admins can manage batches" on public.batches
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Enrollments: Users can view their own, admins can view all
create policy "Users can view own enrollments" on public.enrollments
  for select using (auth.uid() = user_id);

create policy "Users can create own enrollments" on public.enrollments
  for insert with check (auth.uid() = user_id);

create policy "Admins can view all enrollments" on public.enrollments
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admins can manage enrollments" on public.enrollments
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Payments: Users can view their own, admins can view all
create policy "Users can view own payments" on public.payments
  for select using (auth.uid() = user_id);

create policy "Users can create own payments" on public.payments
  for insert with check (auth.uid() = user_id);

create policy "Admins can view all payments" on public.payments
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admins can manage payments" on public.payments
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Attendance: Users can view their own, admins can manage
create policy "Users can view own attendance" on public.attendance
  for select using (
    exists (select 1 from public.enrollments where id = attendance.enrollment_id and user_id = auth.uid())
  );

create policy "Admins can manage attendance" on public.attendance
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Announcements: Authenticated users can view
create policy "Authenticated users can view announcements" on public.announcements
  for select using (auth.role() = 'authenticated');

create policy "Admins can manage announcements" on public.announcements
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Contact inquiries: Anyone can create, admins can view/manage
create policy "Anyone can create inquiries" on public.contact_inquiries
  for insert with check (true);

create policy "Admins can view all inquiries" on public.contact_inquiries
  for select using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admins can manage inquiries" on public.contact_inquiries
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
  );

-- Create indexes for better performance
create index idx_batches_course_id on public.batches(course_id);
create index idx_batches_status on public.batches(status);
create index idx_enrollments_user_id on public.enrollments(user_id);
create index idx_enrollments_batch_id on public.enrollments(batch_id);
create index idx_payments_user_id on public.payments(user_id);
create index idx_payments_enrollment_id on public.payments(enrollment_id);
create index idx_attendance_batch_id on public.attendance(batch_id);
create index idx_attendance_date on public.attendance(date);
create index idx_announcements_batch_id on public.announcements(batch_id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', new.email));
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Function to update batch student count
create or replace function public.update_batch_student_count()
returns trigger as $$
begin
  if TG_OP = 'INSERT' and new.status = 'active' then
    update public.batches
    set current_students = current_students + 1
    where id = new.batch_id;
  elsif TG_OP = 'UPDATE' and old.status != 'active' and new.status = 'active' then
    update public.batches
    set current_students = current_students + 1
    where id = new.batch_id;
  elsif TG_OP = 'UPDATE' and old.status = 'active' and new.status != 'active' then
    update public.batches
    set current_students = current_students - 1
    where id = new.batch_id;
  elsif TG_OP = 'DELETE' and old.status = 'active' then
    update public.batches
    set current_students = current_students - 1
    where id = old.batch_id;
  end if;
  return coalesce(new, old);
end;
$$ language plpgsql security definer;

-- Trigger for batch student count
create trigger on_enrollment_change
  after insert or update or delete on public.enrollments
  for each row execute function public.update_batch_student_count();

-- Insert sample course
insert into public.courses (title, slug, description, curriculum, duration_weeks, price, is_active)
values (
  'Online Photography Course',
  'online-photography-course',
  'The live-streamed sessions aim at offering the possibility to pursue photography, online at the comfort of your home. The online photography course made available with minimal cost focuses on fundamentals as well as lessons on composition, lighting, editing techniques, colour correction, etc.',
  '[
    {"id": "1", "title": "History of Photography", "order": 1},
    {"id": "2", "title": "Working Principles of DSLR & Mirrorless Cameras", "order": 2},
    {"id": "3", "title": "Genres & Basic Language of Photography", "order": 3},
    {"id": "4", "title": "Exposure (Shutter, Aperture & ISO)", "order": 4},
    {"id": "5", "title": "Metering Modes & Exposure Compensation", "order": 5},
    {"id": "6", "title": "Colours & White Balance", "order": 6},
    {"id": "7", "title": "Focusing Modes", "order": 7},
    {"id": "8", "title": "Depth of Field & Lenses", "order": 8},
    {"id": "9", "title": "Compositions", "order": 9},
    {"id": "10", "title": "Types of Lights & Light Modifiers", "order": 10},
    {"id": "11", "title": "Indoor & Outdoor Lighting Techniques", "order": 11},
    {"id": "12", "title": "Tabletop Photography", "order": 12},
    {"id": "13", "title": "Basics of Cinematography", "order": 13},
    {"id": "14", "title": "Manipulating & Retouching on Photoshop", "order": 14},
    {"id": "15", "title": "Introduction to Lightroom", "order": 15},
    {"id": "16", "title": "Introduction to Premiere Pro (Video Editing)", "order": 16},
    {"id": "17", "title": "Wedding Photography", "order": 17},
    {"id": "18", "title": "Branding & Marketing", "order": 18}
  ]'::jsonb,
  8,
  38000,
  true
);

-- Insert sample batch
insert into public.batches (course_id, name, start_date, end_date, schedule, max_students, status)
select
  id,
  'January 2026 Batch',
  '2026-01-15',
  '2026-03-15',
  '{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "time": "08:00 AM - 10:30 AM", "timezone": "IST"}'::jsonb,
  30,
  'upcoming'
from public.courses
where slug = 'online-photography-course';
