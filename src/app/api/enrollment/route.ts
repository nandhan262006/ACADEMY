import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createRazorpayOrder } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { batchId } = await request.json();

    // Check if batch exists and has capacity
    const { data: batch } = await supabase
      .from("batches")
      .select("*, course:courses(*)")
      .eq("id", batchId)
      .single();

    if (!batch) {
      return NextResponse.json({ error: "Batch not found" }, { status: 404 });
    }

    if (batch.current_students >= batch.max_students) {
      return NextResponse.json(
        { error: "Batch is full" },
        { status: 400 }
      );
    }

    // Check if user is already enrolled
    const { data: existingEnrollment } = await supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", user.id)
      .eq("batch_id", batchId)
      .single();

    if (existingEnrollment) {
      return NextResponse.json(
        { error: "Already enrolled in this batch" },
        { status: 400 }
      );
    }

    // Create enrollment
    const { data: enrollment, error: enrollmentError } = await supabase
      .from("enrollments")
      .insert({
        user_id: user.id,
        batch_id: batchId,
        status: "pending",
      })
      .select()
      .single();

    if (enrollmentError) {
      return NextResponse.json(
        { error: "Failed to create enrollment" },
        { status: 500 }
      );
    }

    // Create Razorpay order
    const order = await createRazorpayOrder(
      batch.course.price,
      `enrollment_${enrollment.id}`
    );

    // Create payment record
    const { error: paymentError } = await supabase.from("payments").insert({
      enrollment_id: enrollment.id,
      user_id: user.id,
      razorpay_order_id: order.id,
      amount: batch.course.price,
      currency: "INR",
      status: "created",
    });

    if (paymentError) {
      return NextResponse.json(
        { error: "Failed to create payment record" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      orderId: order.id,
      amount: batch.course.price,
      currency: "INR",
      enrollmentId: enrollment.id,
    });
  } catch (error) {
    console.error("Enrollment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
