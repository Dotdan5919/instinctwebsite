"use client"
import Navbar from "@/components/Navbar";
import Preheader from "@/components/Preheader";
import Hero from "@/components/Hero";
import ExtraordinarySection from "@/components/ExtraordinarySection";
import TrustedSection from "@/components/TrustedSection";
import NumbersSection from "@/components/NumbersSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import QualityPeopleSection from "@/components/QualityPeopleSection";
import BuildingTogetherSection from "@/components/BuildingTogetherSection";
import FooterSection from "@/components/FooterSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const backgrounds = [
    "bg-[url('../images/hero_bg.png')]",
    "bg-[url('../images/hero_bg_2.png')]",
    "bg-[url('../images/hero_bg_1.png')]",
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="flex flex-col relative">

      {/* Vertical border lines — hidden on mobile, visible from lg up */}
     <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
  <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
    <div className="absolute inset-y-0 left-5 right-5 
                    border-l border-r border-white/20" />
  </div>
</div>
      {/* Hero wrapper */}
      <div
        id="hero-wrapper"
        className={`
          flex w-full overflow-hidden flex-col
          ${backgrounds[currentStep]}
          bg-cover bg-no-repeat bg-center
          min-h-screen
          transition-[background-image] duration-700
        `}
      >
        <Preheader />
        <Navbar />
        <Hero currentStep={currentStep} />
      </div>

      <ExtraordinarySection />
      <TrustedSection />
      <NumbersSection />
      <FeaturedProjectsSection />
      <WhatWeDoSection />
      <QualityPeopleSection />
      <BuildingTogetherSection />
      <FooterSection />
    </div>
  );
}