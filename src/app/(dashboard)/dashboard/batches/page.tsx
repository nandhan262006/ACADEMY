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
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export default async function DashboardBatchesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, batch:batches(*, course:courses(*))")
    .eq("user_id", user.id)
    .order("enrolled_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">My Batches</h1>
        <p className="text-gray-600">View your enrolled batches and schedules.</p>
      </div>

      {enrollments && enrollments.length > 0 ? (
        <div className="grid gap-4">
          {enrollments.map((enrollment) => (
            <Card key={enrollment.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-navy">
                      {enrollment.batch?.name}
                    </CardTitle>
                    <CardDescription>
                      {enrollment.batch?.course?.title}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      enrollment.status === "active" ? "default" : "secondary"
                    }
                    className={
                      enrollment.status === "active"
                        ? "bg-green-100 text-green-700"
                        : enrollment.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : ""
                    }
                  >
                    {enrollment.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="text-sm font-medium">
                        {enrollment.batch?.start_date} -{" "}
                        {enrollment.batch?.end_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" />
                    <div>
                      <p className="text-sm text-gray-500">Schedule</p>
                      <p className="text-sm font-medium">
                        {enrollment.batch?.schedule?.days?.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="text-sm font-medium">
                      {enrollment.batch?.schedule?.time}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}
