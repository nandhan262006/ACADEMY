import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function DashboardAttendancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">Attendance</h1>
        <p className="text-gray-600">
          Track your attendance records for enrolled batches.
        </p>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-gray-500">
            No attendance records found. Attend classes to see your attendance
            here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
