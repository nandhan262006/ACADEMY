import { CourseDetailsForm } from "@/components/admin/course-details-form";
import { getAllCourseDetails } from "@/lib/course-details";

export const dynamic = "force-dynamic";

export default async function AdminCoursesPage() {
  const courses = await getAllCourseDetails();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">Course Details</h1>
        <p className="text-gray-600">
          Edit the details shown across the website for each course.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {courses.map((course) => (
          <CourseDetailsForm key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
