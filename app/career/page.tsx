import React from 'react'
import OtherHero from '@/components/OtherHero'
import Preheader from '@/components/Preheader'
import Navbar from '@/components/Navbar'
import FooterSection from '@/components/FooterSection'
import CareerPathways from '@/components/career/Careerpathways'
import MoreThanWorkplace from '@/components/career/Morethanworkspace'
import WhoWeHire from '@/components/career/Whowehire'
import WorkingEnvironment from '@/components/career/Workingenvironment'
import WhyJoinInstinct from '@/components/career/Whyjoininstinct'


export default function page() {
  return (
    <div className="flex flex-col relative min-h-screen bg-slate-950 text-white">
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
      <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
        <div className="absolute inset-y-0 left-8 right-8 
                        border-l border-r border-white/20" />
      </div>
    </div>
             <div className={`flex w-screen overflow-hidden flex-col bg-[url('/images/career/careerhero.png')] bg-cover bg-no-repeat bg-center min-h-[50vh] sm:min-h-screen relative`}>
                  <Preheader />
                  
                  <Navbar />
          
                  <OtherHero title="Career" subtitle={<>Build your expertise.<br /> Shape what is next.</>} />
               <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
       
                </div>


   <MoreThanWorkplace />
      <WhyJoinInstinct />
      <WhoWeHire />
      <WorkingEnvironment />
      <CareerPathways />
      
                <FooterSection/>
      
    </div>
  )
}

