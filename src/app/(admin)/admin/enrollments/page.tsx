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

export default async function AdminEnrollmentsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select(
      "*, user:profiles(full_name, email), batch:batches(name, course:courses(title))"
    )
    .order("enrolled_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Enrollments</h1>
          <p className="text-gray-600">Manage student enrollments.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Enrolled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enrollments?.map((enrollment) => (
                <TableRow key={enrollment.id}>
                  <TableCell className="font-medium">
                    {enrollment.user?.full_name}
                  </TableCell>
                  <TableCell>{enrollment.user?.email}</TableCell>
                  <TableCell>{enrollment.batch?.name}</TableCell>
                  <TableCell>{enrollment.batch?.course?.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        enrollment.status === "active" ? "default" : "secondary"
                      }
                      className={
                        enrollment.status === "active"
                          ? "bg-green-100 text-green-700"
                          : enrollment.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : enrollment.status === "cancelled"
                              ? "bg-red-100 text-red-700"
                              : ""
                      }
                    >
                      {enrollment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(enrollment.enrolled_at).toLocaleDateString(
                      "en-IN"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
