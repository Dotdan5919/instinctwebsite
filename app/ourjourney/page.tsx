import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import OtherHero from '@/components/OtherHero'
import OurJourneyBody from '@/components/ourjourney_components/OurJourneyBody'
import Preheader from '@/components/Preheader'
import React from 'react'

export default function page() {
  return (
    <div className=" flex flex-col relative min-h-screen bg-slate-950 text-white">
      <div className="absolute z-10 left-24 w-[1300px] h-full border-l border-r border-white/20 pointer-events-none" />

 <div className="absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none h-screen" />
       <div className={`flex w-screen overflow-hidden flex-col bg-[url('../images/ourjourney.jpg')] bg-cover bg-no-repeat bg-center min-h-screen`}>
         <Preheader />
         
         <Navbar />
 
         <OtherHero title="Our Journey" subtitle={<>EXPERIENCE, DEVELOPED <br /> THROUGH DELIVERY</>} />
         </div>


<OurJourneyBody />
<FooterSection />



    </div>
  )
}
