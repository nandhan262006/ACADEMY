import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Handle payment.captured event
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;

      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      // Update payment record
      const { error: paymentError } = await supabase
        .from("payments")
        .update({
          razorpay_payment_id: payment.id,
          status: "captured",
        })
        .eq("razorpay_order_id", payment.order_id);

      if (paymentError) {
        console.error("Payment update error:", paymentError);
      }

      // Get enrollment from payment record
      const { data: paymentRecord } = await supabase
        .from("payments")
        .select("enrollment_id")
        .eq("razorpay_order_id", payment.order_id)
        .single();

      if (paymentRecord) {
        // Update enrollment status
        const { error: enrollmentError } = await supabase
          .from("enrollments")
          .update({ status: "active" })
          .eq("id", paymentRecord.enrollment_id);

        if (enrollmentError) {
          console.error("Enrollment update error:", enrollmentError);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
