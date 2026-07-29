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

export default async function AdminBatchesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: batches } = await supabase
    .from("batches")
    .select("*, course:courses(*)")
    .order("start_date", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Batches</h1>
          <p className="text-gray-600">Manage course batches and schedules.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches?.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="font-medium">{batch.name}</TableCell>
                  <TableCell>{batch.course?.title}</TableCell>
                  <TableCell>
                    {new Date(batch.start_date).toLocaleDateString("en-IN")}
                  </TableCell>
                  <TableCell>
                    {new Date(batch.end_date).toLocaleDateString("en-IN")}
                  </TableCell>
                  <TableCell>
                    {batch.current_students}/{batch.max_students}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        batch.status === "active"
                          ? "default"
                          : batch.status === "upcoming"
                            ? "secondary"
                            : "outline"
                      }
                      className={
                        batch.status === "active"
                          ? "bg-green-100 text-green-700"
                          : batch.status === "upcoming"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }
                    >
                      {batch.status}
                    </Badge>
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
