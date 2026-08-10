import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { getAllCourseDetails } from "@/lib/course-details";

export const dynamic = "force-dynamic";

export default async function DashboardBatchesPage() {
  const courses = await getAllCourseDetails().catch(() => []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">My Batches</h1>
        <p className="text-gray-600">View your enrolled batches and schedules.</p>
      </div>

      {courses.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <Card key={course.slug}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy">{course.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-4">
                  Batch Number
                </p>
                <p className="text-2xl font-bold text-navy">
                  Batch {course.batchNumber}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-3">
                  Batch Starts From
                </p>
                <p className="text-sm font-medium text-navy">
                  {course.batchStartsFrom}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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
