import Navbar from "@/components/Navbar";
import Preheader from "@/components/Preheader";
import Hero from "@/components/Hero";
import ExtraordinarySection from "@/components/ExtraordinarySection";
import TrustedSection from "@/components/TrustedSection";
import NumbersSection from "@/components/NumbersSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-screen overflow-hidden flex-col bg-[url('../images/hero_bg.png')] bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="absolute z-10 left-24 w-[1300px] h-[2000px] flex-col border-l border-r border-white/20" />
        <Preheader />
        <Navbar />

        <Hero />
      </div>

      <ExtraordinarySection />
      <TrustedSection />
      <NumbersSection />
      <FeaturedProjectsSection />
    </div>
  );










  
}
