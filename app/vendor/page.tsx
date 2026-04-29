import React from 'react'
import OtherHero from '@/components/OtherHero'
import Preheader from '@/components/Preheader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'
import WhoWeWorkWith from "@/components/vendor/Whoweworkwith";
import VendorRequirements from "@/components/vendor/Vendorrequirements";
import VendorProcess from "@/components/vendor/Vendorprocess";
import VendorHero from '@/components/vendor/Vendorhero'

export default function page() {
  return (
    <div className="flex flex-col relative min-h-screen bg-slate-950 text-white">
             <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
         <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
           <div className="absolute inset-y-0 left-8 right-8 
                           border-l border-r border-white/20" />
         </div>
       </div>
            
               <div className={`flex w-screen overflow-hidden flex-col bg-[url('/images/vendor/1.jpg')] bg-cover bg-no-repeat bg-center min-h-screen relative`}>
                     <Preheader />
                     
                     <Navbar />
             
                     <OtherHero title="Become a Vendor" subtitle="Work with us" />
                     <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
       
                   </div>
                   <div className="flex flex-col px-30 bg-white">
                   <VendorHero />
  <WhoWeWorkWith />
      <VendorRequirements />
      <VendorProcess />
</div>
                   <FooterSection/>
      
    </div>
  )
}

