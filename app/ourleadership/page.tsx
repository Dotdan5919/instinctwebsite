import React from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Preheader from '@/components/Preheader'
import OtherHero from '@/components/OtherHero'
import OurLeadershipBody from '@/components/leadership_components/Ourleadershipbody'



export default function page() {
  return (
    <div className="flex flex-col relative min-h-screen bg-slate-950 text-white ">
    <div className="absolute z-10 left-24 w-[1300px] h-full border-l border-r border-white/20 pointer-events-none" />

    <div className="absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none h-screen" />
          <div className={`flex w-screen overflow-hidden flex-col bg-[url('../images/leadership.png')] bg-cover bg-no-repeat bg-center min-h-screen`}>
            <Preheader />
            
            <Navbar />
    
            <OtherHero title="Our Leadership" subtitle="GROUNDED IN EXECUTION DEFINED BY RESPONSIBILITY" />
            </div>
<OurLeadershipBody/>


            <FooterSection/>
      
    </div>
  )
}
