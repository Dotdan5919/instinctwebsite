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
import LoadingScreen from "@/components/Loadingscreen";
import { useEffect, useState } from "react";

// These must be the resolved public paths to your images.
// Next.js static imports give you an object with `.src`; use those directly here.
const heroImagePaths = [
  '/images/hero_bg.png',
  '/images/hero_bg_2.png',
  '/images/hero_bg_1.png',
];

function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // resolve even on error so we don't hang
          img.src = src;
        })
    )
  );
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const backgrounds = [
    "bg-[url('../images/hero_bg.png')]",
    "bg-[url('../images/hero_bg_2.png')]",
    "bg-[url('../images/hero_bg_1.png')]",
  ];

  // Preload all hero images before hiding the loader
  useEffect(() => {
    preloadImages(heroImagePaths).then(() => {
      // Small buffer so the exit animation feels intentional, not abrupt
      setTimeout(() => setIsLoading(false), 300);
    });
  }, []);

  // Only start cycling once images are loaded
  useEffect(() => {
    if (isLoading) return;
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(stepInterval);
  }, [isLoading]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />

      <div className="flex flex-col relative">
        {/* Vertical border lines — hidden on mobile, visible from lg up */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
          <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
            <div className="absolute inset-y-0 left-5 right-5 border-l border-r border-white/20" />
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
    </>
  );
}