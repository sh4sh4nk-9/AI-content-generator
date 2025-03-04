import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
  try {

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET_KEY || !process.env.SUBSCRIPTION_PLAN_ID) {
      return NextResponse.json({ error: "Missing Razorpay credentials" }, { status: 500 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.SUBSCRIPTION_PLAN_ID,
      customer_notify: 1,
      quantity: 1,
      total_count: 1,
      addons: [],
      notes: {
        key1: "Note",
      },
    });

    console.log("Subscription created:", subscription);

    return NextResponse.json(subscription);
  } catch (error) {
    console.error("Error creating Razorpay subscription:", error);

    return NextResponse.json(
      { error: "Failed to create subscription", details: error.message },
      { status: 500 }
    );
  }
}
