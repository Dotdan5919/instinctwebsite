import React from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Preheader from '@/components/Preheader'
import OtherHero from '@/components/OtherHero'
import OurLeadershipBody from '@/components/leadership_components/Ourleadershipbody'



export default function page() {
  return (
    <div className="flex flex-col relative min-h-screen  text-white ">
    <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
  <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
    <div className="absolute inset-y-0 left-8 right-8 
                    border-l border-r border-white/20" />
  </div>
</div>
       <div className={`flex w-screen overflow-hidden flex-col bg-[url('/images/leadership.png')] bg-cover bg-no-repeat bg-center min-h-[50vh] sm:min-h-screen relative`}>
            <Preheader />
            
            <Navbar />
    
            <OtherHero title="Our Leadership" subtitle={<>GROUNDED IN EXECUTION <br /> DEFINED BY RESPONSIBILITY</>}   />
            <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
       
            </div>
<OurLeadershipBody/>


            <FooterSection/>
      
    </div>
  )
}

