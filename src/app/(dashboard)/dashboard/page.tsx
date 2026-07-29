import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, BookOpen, CreditCard, Bell } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          This is a static preview. Login is currently disabled.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Batch
            </CardTitle>
            <BookOpen className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-navy">0</div>
            <p className="text-xs text-gray-500">No active batch</p>
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
            <div className="text-2xl font-bold text-navy">₹0</div>
            <p className="text-xs text-gray-500">No pending payments</p>
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
