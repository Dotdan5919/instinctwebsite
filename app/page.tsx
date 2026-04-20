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
 "bg-[url('../images/hero_bg_1.png')]"
]


useEffect(() => {
  const stepInterval = setInterval(() => {
    setCurrentStep((prev) => (prev + 1) % backgrounds.length);
  }, 5000);

  return () => clearInterval(stepInterval);
}, []);
   
  return (
    <div className="flex flex-col relative">
          {/* Vertical border lines — span full page height */}
      <div className="absolute z-10 left-24 w-[1300px] h-full border-l border-r border-white/20 pointer-events-none" />

      <div className={`flex w-screen overflow-hidden flex-col ${backgrounds[currentStep]} bg-cover bg-no-repeat bg-center min-h-screen`}>
        <Preheader />
        <Navbar />
        <Hero />
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
