import FooterSection from '@/components/FooterSection'
import Preheader from '@/components/Preheader'
import Navbar from '@/components/Navbar'
import OtherHero from '@/components/OtherHero'

import React from 'react'
import NewsDetailSection from '@/components/newsandinsights/Newsdetails'


export async function generateStaticParams() {
  return [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
    { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' },
    { id: '11' }, { id: '12' }, { id: '13' }, { id: '14' }, { id: '15' },
  ]
}

export default function page({ params }: { params: { id: string } }) {
  return (
     <div className="flex flex-col relative min-h-screen bg-slate-950 text-white">
         <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
           <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
             <div className="absolute inset-y-0 left-8 right-8 border-l border-r border-white/20" />
           </div>
         </div>
          <div className={`flex w-screen overflow-hidden flex-col bg-[url('/images/career/career2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen relative`}>
           <Preheader />
           <Navbar />
            <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
                    
         </div>

         <NewsDetailSection/>
      

      <FooterSection/>
    </div>
  )
}

