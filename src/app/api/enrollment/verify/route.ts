import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { verifyRazorpayPayment } from "@/lib/razorpay";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { orderId, paymentId, signature, enrollmentId } =
      await request.json();

    // Verify payment signature
    const isValid = await verifyRazorpayPayment(orderId, paymentId, signature);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Update payment record
    const { error: paymentError } = await supabase
      .from("payments")
      .update({
        razorpay_payment_id: paymentId,
        status: "captured",
      })
      .eq("razorpay_order_id", orderId)
      .eq("user_id", user.id);

    if (paymentError) {
      return NextResponse.json(
        { error: "Failed to update payment" },
        { status: 500 }
      );
    }

    // Update enrollment status
    const { error: enrollmentError } = await supabase
      .from("enrollments")
      .update({ status: "active" })
      .eq("id", enrollmentId)
      .eq("user_id", user.id);

    if (enrollmentError) {
      return NextResponse.json(
        { error: "Failed to update enrollment" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
