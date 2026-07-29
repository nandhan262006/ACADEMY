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

export default async function AdminPaymentsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: payments } = await supabase
    .from("payments")
    .select(
      "*, user:profiles(full_name, email), enrollment:enrollments(*, batch:batches(name))"
    )
    .order("created_at", { ascending: false });

  const totalRevenue =
    payments
      ?.filter((p) => p.status === "captured")
      .reduce((sum, p) => sum + p.amount, 0) || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy">Payments</h1>
          <p className="text-gray-600">Track all payment transactions.</p>
        </div>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-2xl font-bold text-navy">
            ₹{totalRevenue.toLocaleString("en-IN")}
          </p>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments?.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {payment.user?.full_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {payment.user?.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{payment.enrollment?.batch?.name || "N/A"}</TableCell>
                  <TableCell className="font-medium">
                    ₹{payment.amount.toLocaleString("en-IN")}
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {payment.razorpay_payment_id || "Pending"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        payment.status === "captured" ? "default" : "secondary"
                      }
                      className={
                        payment.status === "captured"
                          ? "bg-green-100 text-green-700"
                          : payment.status === "failed"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(payment.created_at).toLocaleDateString("en-IN")}
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
