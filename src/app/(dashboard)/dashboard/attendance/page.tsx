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

export default async function DashboardAttendancePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: attendance } = await supabase
    .from("attendance")
    .select("*, enrollment:enrollments(*, batch:batches(*))")
    .eq("enrollment.user_id", user.id)
    .order("date", { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">Attendance</h1>
        <p className="text-gray-600">
          Track your attendance records for enrolled batches.
        </p>
      </div>

      {attendance && attendance.length > 0 ? (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendance.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      {new Date(record.date).toLocaleDateString("en-IN")}
                    </TableCell>
                    <TableCell>
                      {record.enrollment?.batch?.name || "N/A"}
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
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500">
              No attendance records found. Attend classes to see your attendance
              here.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
