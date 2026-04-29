import React from 'react'
import OtherHero from '@/components/OtherHero'
import Preheader from '@/components/Preheader'

import Navbar from '@/components/Navbar'
import Ourapproachbody from '@/components/ourapproach/Ourapproachbody'
import FooterSection from '@/components/FooterSection'


export default function page() {
  return (
       <div className="flex flex-col relative min-h-screen bg-slate-950 text-white">
    <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
  <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
    <div className="absolute inset-y-0 left-8 right-8 
                    border-l border-r border-white/20" />
  </div>
</div>
 
     <div className={`flex w-screen overflow-hidden flex-col bg-[url('../images/ourapproach/ourapproach.jpg')] bg-cover bg-no-repeat bg-center min-h-screen relative`}>
           <Preheader />
           
           <Navbar />
   
           <OtherHero title="Our Approach" subtitle={<>WE OPERATE THROGH A <br/>DEFINED SYSTEM OF DELIVERY.</>} />
         <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
       
         </div>
         <Ourapproachbody />
         <FooterSection/>
      
    </div>
  )
}
