import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, BookOpen, CreditCard, Bell } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, batch:batches(*, course:courses(*))")
    .eq("user_id", user.id)
    .order("enrolled_at", { ascending: false });

  const activeEnrollment = enrollments?.find((e) => e.status === "active");
  const pendingEnrollment = enrollments?.find((e) => e.status === "pending");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">
          Welcome back, {profile?.full_name || "Student"}!
        </h1>
        <p className="text-gray-600">
          Here&apos;s an overview of your learning journey.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Batch
            </CardTitle>
            <BookOpen className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-navy">
              {activeEnrollment ? "1" : "0"}
            </div>
            <p className="text-xs text-gray-500">
              {activeEnrollment
                ? activeEnrollment.batch?.name
                : "No active batch"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pending Payment
            </CardTitle>
            <CreditCard className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-navy">
              {pendingEnrollment ? "₹38,000" : "₹0"}
            </div>
            <p className="text-xs text-gray-500">
              {pendingEnrollment
                ? "Complete payment to activate"
                : "No pending payments"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Attendance
            </CardTitle>
            <Calendar className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-navy">--</div>
            <p className="text-xs text-gray-500">No attendance data yet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Announcements
            </CardTitle>
            <Bell className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-navy">0</div>
            <p className="text-xs text-gray-500">No new announcements</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Enrollment */}
      {activeEnrollment && (
        <Card>
          <CardHeader>
            <CardTitle className="text-navy">Your Active Batch</CardTitle>
            <CardDescription>
              Details about your current enrollment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Batch Name</p>
                  <p className="font-medium">{activeEnrollment.batch?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Course</p>
                  <p className="font-medium">
                    {activeEnrollment.batch?.course?.title}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Schedule</p>
                  <p className="font-medium">
                    {activeEnrollment.batch?.schedule?.days?.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">
                    {activeEnrollment.batch?.schedule?.time}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/courses">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-navy" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Browse Courses</h3>
                <p className="text-sm text-gray-600">
                  Explore our photography courses
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/batches">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-navy" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">View Batches</h3>
                <p className="text-sm text-gray-600">
                  See upcoming batch schedules
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
