import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ExternalLink } from "lucide-react";
import { LogoutButton } from "@/components/admin/logout-button";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const sidebarLinks = [
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-72px)]">
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
        <div className="p-4 border-t space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            View Site
          </Link>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
