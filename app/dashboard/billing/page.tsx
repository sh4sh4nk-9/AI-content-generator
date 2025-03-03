"use client";
import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { UserSubscription } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";

const plans = [
  { name: "Free", price: 0, credits: 10000, description: "Great for starters" },
  { name: "Pro", price: 200, originalPrice: 300, credits: 100000, description: "Best for professionals & regular users" },
];

function BillingPage() {
  const { user } = useUser();
  const [selectedPlan, setSelectedPlan] = useState<string>("Free");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const { setUserSubscription } = useContext(UserSubscriptionContext);
  const { setTotalUsage } = useContext(TotalUsageContext);

  const CreateSubscription = async (plan: any) => {
    if (plan.name === "Free") return;

    try {
      setLoadingPlan(plan.name);
      const response = await axios.post("/api/create-subscription", { plan });
      console.log(response.data);
      OnPayment(response.data.id);
    } catch (error) {
      console.error("Error creating subscription:", error);
      alert("Something went wrong. Please try again.");
      setLoadingPlan(null);
    }
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "Nex9",
      description: "Monthly Subscription",
      handler: async (response: any) => {
        console.log(response);
        if (response) {
          await SaveSubscription(response.razorpay_payment_id);
        }
        setLoadingPlan(null);
      },
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    try {
      await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: paymentId,
        joinDate: moment().format("DD/MM/yyyy"),
      });

      console.log("Subscription saved successfully!");

      setUserSubscription(true);
      setTotalUsage(0);
      
      window.location.reload();
    } catch (error) {
      console.error("Error saving subscription:", error);
    }
  };

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className="text-3xl font-bold text-center">Choose a Plan</h1>
      <p className="text-gray-600 text-center mb-6">Upgrade your plan to get more AI credits.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md border bg-white hover:shadow-xl transition-all cursor-pointer ${
              selectedPlan === plan.name ? "border-blue-500" : ""
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h2 className="text-2xl font-bold text-center">{plan.name}</h2>
            <p className="text-xl font-semibold text-center text-primary mt-2">
              {plan.originalPrice && (
                <span className="text-gray-500 line-through mr-2">₹{plan.originalPrice}</span>
              )}
              ₹{plan.price}/month
            </p>
            <p className="text-gray-500 text-center mt-2">{plan.description}</p>
            <p className="text-gray-700 text-center mt-1">Credits: {plan.credits}</p>
            <button
              type="button"
              disabled={plan.name === "Free" || loadingPlan === plan.name}
              className={`w-full mt-4 py-2 flex items-center justify-center text-white font-medium rounded-full ${
                plan.name === "Free" ? "bg-gray-400" : "bg-primary hover:bg-red-700"
              }`}
              onClick={() => CreateSubscription(plan)}
            >
              {loadingPlan === plan.name && <Loader2Icon className="animate-spin mr-2 w-5 h-5" />}
              {selectedPlan === plan.name ? "Current Plan" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BillingPage;