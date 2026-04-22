import React from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Preheader from '@/components/Preheader'
import OtherHero from '@/components/OtherHero'
import OurProjectsBody from '@/components/ourprojects/Ourprojectsbody'
import ProjectDetailBody from '@/components/projectdetails/Projectdetailbody'
import building from '@/images/precision.jpg'
import define from '@/images/define.jpg'
import accountability from '@/images/accountability.jpg'

export default function page() {
  return (
   <div className="flex flex-col relative min-h-screen bg-slate-950 text-white ">
          <div className="absolute z-10 left-24 w-[1300px] h-full border-l border-r border-white/20 pointer-events-none" />
      
         
   
  

<ProjectDetailBody 

data={{
        // ── Hero card ──────────────────────────────────────────────────────
        breadcrumbs: ['Residential', 'Construction Management', 'Multi-Unit'],
        title: 'Block of 8 Luxury Flats',
        subtitle: 'Ajah, Lagos',
        address: ['Lagos, State.', 'Nigeria.'],
        heroImage: building,
 
        // ── Project overview panel ─────────────────────────────────────────
        overview: {
          status: 'Completed',
          yearCompleted: '2020',
          scope: 'Full construction',
          size: '234,000 sq. ft., 8 stories',
          clients: ['Private department', 'Lagos state Government'],
        },
 
        // ── Body paragraphs ────────────────────────────────────────────────
        introParagraphs: [
          'This project involved the development of a multi-unit residential building designed to deliver functional, durable, and well-structured living spaces.',
          'Instinct Engineering coordinated the project from planning through execution — ensuring alignment across design, resources, and construction activities to achieve a consistent and controlled outcome.',
        ],
 
        // ── Our Role ───────────────────────────────────────────────────────
        roleBody:
          'Instinct Engineering provided end-to-end construction management and execution, overseeing planning alignment, coordinating site activities, and ensuring that all work met defined specifications and quality standards.',
        roleImage: define,
        roleTags: [
          'Project planning and coordination',
          'Site supervision and execution control',
          'Quality assurance and compliance',
        ],
 
        // ── Our Approach ───────────────────────────────────────────────────
        approachBody:
          'The project was delivered through a structured approach — beginning with preconstruction planning and continuing through coordinated execution and controlled site management.',
        approachImage: accountability,
 
        // ── Gallery ────────────────────────────────────────────────────────
        galleryImages: [
          accountability,
          accountability,
          accountability,
          accountability,
          accountability,
        ],
 
        // ── Related projects ───────────────────────────────────────────────
        relatedProjects: [
          {
            id: 'rel-1',
            title: 'Block of 8 Luxury Flats',
            location: 'Ajah, Lagos',
            category: 'building-construction',
            status: 'active',
            image: define,
          },
          {
            id: 'rel-2',
            title: 'Block of 8 Luxury Flats',
            location: 'Ajah, Lagos',
            category: 'building-construction',
            status: 'active',
            image: define,
          },
          {
            id: 'rel-3',
            title: "St. Peter's Catholic Churc...",
            location: 'Langbasa, Ajah',
            category: 'building-construction',
            status: 'active',
            image: define,
          },
        ],
      }}


/>

      
                  <FooterSection/>
            
          </div>
  )
}
