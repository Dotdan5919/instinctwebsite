import React from 'react'
import OtherHero from '@/components/OtherHero'
import Preheader from '@/components/Preheader'
import Navbar from '@/components/Navbar'
import JobDescriptionSection from '@/components/career/Jobdescriptionsection'
import FooterSection from '@/components/FooterSection'
import ShareJobButton from '@/components/career/Sharejobbutton'

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
    
    <div className={`flex w-screen overflow-hidden flex-col bg-[url('../images/career/career2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen relative`}>
        <Preheader />
        <Navbar />
        <OtherHero title="Career" subtitle="Build your expertise. Shape what is next." />
     <div className="  absolute inset-0 z-0 bg-linear-to-r from-[#000000] via-[#0a0f1a]/75 to-[#6666664D]/10 pointer-events-none  w-screen " />
       
      </div>

      <JobDescriptionSection />

      {/* Share Job Button — sits between job description and footer */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
          <ShareJobButton jobId={params.id} />
        </div>
      </div>

      <FooterSection />
    </div>
  )
}