// import Features from "@/components/features";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturesSection from "@/components/features";

export default function Home() {
  const stats = [
    { label: "AI styles Applied", Value: 100000, suffix: "+" },
    { label: "Cities Reached", Value: 300, suffix: "+" },
    { label: "Users Edit on Mobile", Value: 75, suffix: "%" },
    { label: "User Satisfaction ", Value: 98.6, suffix: "%" },
  ];
  return (
    <div className="pt-36">
      {/* hero */}
      <HeroSection />

      {/* stats */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              return (
                <div key={index} className="text-center">
                  <div
                    className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r 
                  from-red-400 to-purple-500 bg-clip-text text-transparent"
                  >
                    {stat.Value.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-100 uppercase tracking-wider tex-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* features */}
      <FeaturesSection />

      {/* pricing */}

      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-4xl font-bold mb-5 ">
            Transform Your Photos with
            <span
              className="bg-gradient-to-r from-purple-800
             to-red-500 bg-clip-text text-transparent ml-3"
            >
              AI Magic 🪄
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Upload, edit, and enhance your photos instantly with our smart
            AI-powered photo editor.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" size="xl">
              Start Creating
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
