import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function DashboardBatchesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">My Batches</h1>
        <p className="text-gray-600">View your enrolled batches and schedules.</p>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-gray-500 mb-4">
            You haven&apos;t enrolled in any batches yet.
          </p>
          <a
            href="/batches"
            className="text-navy hover:underline font-medium"
          >
            Browse available batches →
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
