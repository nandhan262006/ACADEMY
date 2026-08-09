import { revalidatePath } from "next/cache";
import {
  COURSE_SLUGS,
  getCourseDetails,
  parseCourseDetailsInput,
  updateCourseDetails,
} from "@/lib/course-details";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const course = await getCourseDetails(slug);
    if (!course) {
      return Response.json({ error: "Course not found" }, { status: 404 });
    }
    return Response.json({ course });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to load course" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (!(COURSE_SLUGS as readonly string[]).includes(slug)) {
      return Response.json({ error: "Unknown course" }, { status: 400 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const parsed = parseCourseDetailsInput(body);
    if (!parsed.ok || !parsed.value) {
      return Response.json({ error: parsed.error }, { status: 400 });
    }

    const updated = await updateCourseDetails(slug, parsed.value);
    if (!updated) {
      return Response.json({ error: "Course not found" }, { status: 404 });
    }

    revalidatePath("/");
    revalidatePath("/courses");
    revalidatePath(`/courses/${slug}`);
    revalidatePath("/contact");

    return Response.json({ course: updated });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to update course" },
      { status: 500 }
    );
  }
}
