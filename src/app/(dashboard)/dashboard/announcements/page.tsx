import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function DashboardAnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">Announcements</h1>
        <p className="text-gray-600">
          Stay updated with the latest announcements.
        </p>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-gray-500">No announcements yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}
