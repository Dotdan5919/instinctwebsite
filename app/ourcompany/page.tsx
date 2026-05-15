"use client"
import Preheader from "@/components/Preheader"
import Navbar from "@/components/Navbar"
import OtherHero from "@/components/OtherHero"
import Aboutus from "@/components/about_components/Aboutus"
import Whoweare from "@/components/about_components/Whoweare";
import OurValues from "@/components/about_components/OurValues";
import Mission from "@/components/about_components/Mission";
import Footersection from "@/components/FooterSection";
import OurPartners from "@/components/about_components/OurPartners";



export default function OurCompany() {
  return (
    <div className=" flex flex-col relative min-h-screen  text-white">
  <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
  <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
    <div className="absolute inset-y-0 left-8 right-8 
                    border-l border-r border-white/20" />
  </div>
</div>

    <div className={`flex w-screen overflow-hidden flex-col bg-[url('/images/about-hero.jpg')] bg-cover bg-no-repeat bg-center min-h-[50vh] sm:min-h-screen relative`}>
      <Preheader />
        
        <Navbar />

        <OtherHero title="About Us" subtitle={<>MORE THAN CONSTRUCTION.<br /> A SYSTEM OF DELIVERY.</>} />
     <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
       
      </div>


      <Aboutus />

      <Whoweare/>

      <OurValues />

      <Mission/>

      <OurPartners />

  
      <Footersection />
    

      
    </div>
  )
}

