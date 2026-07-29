import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function DashboardPaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">Payment History</h1>
        <p className="text-gray-600">View your payment records and receipts.</p>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-gray-500">No payment records found.</p>
        </CardContent>
      </Card>
    </div>
  );
}
