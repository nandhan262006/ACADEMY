import { getAllCourseDetails } from "@/lib/course-details";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const courses = await getAllCourseDetails();
    return Response.json({ courses });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to load course details" },
      { status: 500 }
    );
  }
}
