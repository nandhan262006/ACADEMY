import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createRazorpayOrder(amount: number, receipt: string) {
  return razorpay.orders.create({
    amount: amount * 100, // Razorpay expects paise
    currency: "INR",
    receipt,
  });
}

export async function verifyRazorpayPayment(
  orderId: string,
  paymentId: string,
  signature: string
) {
  const crypto = await import("crypto");
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  return expectedSignature === signature;
}
