import Link from "next/link";
import type { Metadata } from "next";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCheck,
  CreditCard,
  Calendar,
  Bell,
  MessageSquare,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const sidebarLinks = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
  { href: "/admin/batches", label: "Batches", icon: Calendar },
  { href: "/admin/enrollments", label: "Enrollments", icon: UserCheck },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/attendance", label: "Attendance", icon: Calendar },
  { href: "/admin/announcements", label: "Announcements", icon: Bell },
  { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-navy">Admin Dashboard</h2>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Settings className="h-5 w-5" />
            Student View
          </Link>
        </div>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
