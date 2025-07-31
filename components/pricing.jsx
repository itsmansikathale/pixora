"use client";

// import { PricingTable } from "@clerk/nextjs";
import useIntersectionObserver from "@/hooks/use-intersection-observer";
import { useAuth, useClerk } from "@clerk/nextjs";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const PricingCard = ({
  id,
  plan,
  price,
  features,
  featured = false,
  planId,
  buttonText,
}) => {
  const { clerk } = useClerk();
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);
  const { has } = useAuth();

  const isCurrentPlan = id ? has?.({ plan: id }) : false;

  const handlePopup = async () => {
    if (isCurrentPlan) return;
    try {
      if (window.Clerk && window.Clerk.__internal_openCheckout) {
        await window.Clerk.__internal_openCheckout({
          planId: "cplan_30dS67oelbEspVXuhZofN7WeK2l",
          planPeriod: "month",
          subscriberType: "user",
        });
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Something Went Wrong" + error.message);
    }
  };

  //     try {
  //       if (clerk?.openPlans) {
  //         await clerk.openPlans();
  //       } else {
  //         console.warn("Clerk Plans popup is not available");
  //       }
  //     } catch (error) {
  //       console.error("Checkout Error", error);
  //       toast.error("Something went wrong: " + error.message);
  //     }
  //   };

  return (
    <div
      ref={ref}
      className={` relative backdrop-blur-lg border
    rounded-3xl p-8 transition-all duration-700 cursor-pointer ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } ${isHovered ? "transform scale-105 rotate-1 z-10" : ""}
    
    ${
      featured
        ? "bg-gradient-to-b from-red-500/20 to-purple-600/20 border-blue-400/50 scale-105"
        : "bg-white/5 border-white/10"
    } }
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div
            className="bg-gradient-to-r from-red-500 to-purple-600 text-white 
            px-6 py-2 rounded-full text-sm font-bold"
          >
            Most Popular
          </div>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-500 mb-2">{plan}</h3>
        <div
          className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text 
        text-transparent mb-5"
        >
          ${price}
          {price > 0 && <span className="text-lg text-gray-400">/ Month</span>}
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="text-green-400"> ✔️</span>
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant={featured ? "primary" : "glass"}
          size="xl"
          className="w-full"
          onClick={handlePopup}
          disabled={isCurrentPlan || !planId}
        >
          {isCurrentPlan ? "Current Plan " : buttonText}
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      id: "free_user",
      plan: "Free",
      price: "0",
      features: [
        "3 Projects Maximum ",
        "20 Exports Per Month",
        "Basic Crop & Resize",
        "Color Transparent",
        "Text Tool",
      ],
      buttonText: "Try Pixoraa Free",
    },
    {
      id: "pro",
      plan: "Pro",
      price: "12$",
      features: [
        "Unlimited Projects ",
        "Unlimited Exports ",
        "All Editing Tools",
        "AI Background Remover",
        "AI _ Retouch, Upscalar and Many More",
      ],
      featured: true,
      planId: "cplan_30dS67oelbEspVXuhZofN7WeK2l",
      buttonText: "Upgrade To Pro ",
    },
  ];

  return (
    <section className="py-20 " id="pricing">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-500
          bg-clip-text pb-6 text-transparent"
          >
            Pricing Plans
          </h2>
          <p className="text-xl  text-gray-300">
            Go beyond basics with advanced AI features, faster results &
            stunning quality. Start free — upgrade when you're ready!.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
