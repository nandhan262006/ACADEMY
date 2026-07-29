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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function AdminAttendancePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: attendance } = await supabase
    .from("attendance")
    .select(
      "*, enrollment:enrollments(user:profiles(full_name, email), batch:batches(name))"
    )
    .order("date", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Attendance</h1>
          <p className="text-gray-600">View and manage attendance records.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendance && attendance.length > 0 ? (
                attendance.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {record.enrollment?.user?.full_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {record.enrollment?.user?.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{record.enrollment?.batch?.name}</TableCell>
                    <TableCell>
                      {new Date(record.date).toLocaleDateString("en-IN")}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          record.status === "present" ? "default" : "secondary"
                        }
                        className={
                          record.status === "present"
                            ? "bg-green-100 text-green-700"
                            : record.status === "late"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8">
                    No attendance records found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
