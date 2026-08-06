export interface Profile {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  avatar_url: string | null;
  role: "student" | "admin";
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  curriculum: CurriculumItem[];
  duration_weeks: number;
  price: number;
  thumbnail_url: string | null;
  is_active: boolean;
  created_at: string;
}

export interface CurriculumItem {
  id: string;
  title: string;
  description?: string;
  order: number;
}

export interface Batch {
  id: string;
  course_id: string;
  name: string;
  start_date: string;
  end_date: string;
  schedule: ScheduleInfo;
  max_students: number;
  current_students: number;
  status: "upcoming" | "active" | "completed";
  mode: "online" | "offline";
  location: string | null;
  created_at: string;
  course?: Course;
}

export interface ScheduleInfo {
  days: string[];
  time: string;
  timezone: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  batch_id: string;
  status: "pending" | "active" | "completed" | "cancelled";
  enrolled_at: string;
  batch?: Batch;
  user?: Profile;
}

export interface Payment {
  id: string;
  enrollment_id: string;
  user_id: string;
  order_id: string;
  payment_id: string | null;
  amount: number;
  currency: string;
  status: "created" | "captured" | "failed" | "refunded";
  created_at: string;
  enrollment?: Enrollment;
}

export interface Attendance {
  id: string;
  enrollment_id: string;
  batch_id: string;
  date: string;
  status: "present" | "absent" | "late";
  recorded_by: string;
  created_at: string;
}

export interface Announcement {
  id: string;
  batch_id: string | null;
  title: string;
  content: string;
  created_by: string;
  created_at: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
}
