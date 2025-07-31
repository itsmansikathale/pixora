"use client";

import useIntersectionObserver from "@/hooks/use-intersection-observer";
import {
  BotIcon,
  CameraIcon,
  ImagePlusIcon,
  SparkleIcon,
  Wand,
  // Wand2Icon,
} from "lucide-react";
import React, { useState } from "react";

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [hovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`backdrop-blur-lg bg-white/5 border border-white/10 
    rounded-2xl p-8 transition-all duration-700 cursor-pointer ${
      isVisible ? "opacity-100 tranlate-y-0" : "opacity-0 translate-y-10 "
    } ${hovered ? "transform scale-105 rotate-1 shadow-2xl" : ""}`}
      style={{ transitionDelay: `  ${delay}ms}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Wand className="h-8 w-8 text-red-500" />,
      title: "One-Click Magic",
      description:
        "Apply stunning Ai filters and corrections with just a single tap.",
    },
    {
      icon: <ImagePlusIcon className="h-8 w-8 text-purple-500" />,
      title: "Background Eraser",
      description:
        "Remove and replace backgrounds instantly with  AI accuracy.",
    },
    {
      icon: <CameraIcon className="h-8 w-8 text-red-500" />,
      title: "Auto Retouch",
      description:
        "Enhance portraits with skin smoothing, lighting fixes, and color correction.",
    },
    {
      icon: <BotIcon className="h-8 w-8 text-purple-500" />,
      title: "AI-Powered Style Transfer",
      description:
        "Turn your images into artworks with intelligent style transfer trained on real paintings and styles",
    },
    {
      icon: <SparkleIcon className="h-8 w-8 text-red-500" />,
      title: "Creative Filters",
      description:
        "From cyberpunk to film grain - explore 25+ smart filters that adopt to your photo's mood.",
    },
    {
      icon: <ImagePlusIcon className="h-8 w-8 text-purple-500" />,
      title: "Fast & Lightweight",
      description:
        "Pixoraa loads fast, edits faster - with optimization for low-bandwidth and mobile users.",
    },
  ];
  return (
    <section className="py-20" id="features">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold bg-gradient-r from-red-400 to-purple-500
          bg-clip-text text-transparent mb-6 "
          >
            Advanced AI Features
          </h2>
          <p className="text-xl  text-gray-300 max-w-3xl mx-auto">
            Pixoraa brings your vision to life with AI-driven precision and
            one-tap enhancements. Edit smarter, not harder.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return <FeatureCard key={index} {...feature} delay={index * 100} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
