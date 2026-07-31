import Link from "next/link";
import type { Metadata } from "next";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Calendar,
  Bell,
} from "lucide-react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/batches", label: "My Batches", icon: BookOpen },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/attendance", label: "Attendance", icon: Calendar },
  { href: "/dashboard/announcements", label: "Announcements", icon: Bell },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-navy">Student Dashboard</h2>
        </div>
        <nav className="flex-1 px-4 space-y-1">
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

      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
