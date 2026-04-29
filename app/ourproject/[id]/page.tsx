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
import expertise_hero from '@/images/expertise_hero.jpg'
import approach from '@/images/project/approach.png'
import project_1 from '@/images/whatwedo/building_con_1.jpg'
import project_2 from '@/images/whatwedo/construction_1.jpg'
import project_3 from '@/images/whatwedo/flooring_1.jpg'
import { getAllProjects, getProjectImages } from '@/lib/projects'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map(p => ({ id: p.id }))
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params
  
  // Get gallery images directly from the file system
  const galleryImages = getProjectImages(projectId)
  
  // Get project title for the page
  const projects = getAllProjects()
  const project = projects.find(p => p.id === projectId)
  const projectTitle = project?.title || 'Project'

  return (
   <div className="flex flex-col relative min-h-screen bg-slate-950 text-white ">
       <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
  <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
    <div className="absolute inset-y-0 left-8 right-8 
                    border-l border-r border-white/20 overflow-x-hidden" />
  </div>
</div>
   
  

<ProjectDetailBody 

data={{
        // ── Hero card ──────────────────────────────────────────────────────
        breadcrumbs: ['Residential', 'Construction Management', 'Multi-Unit'],
        title: projectTitle,
        subtitle: 'Lagos State',
        address: ['Lagos, State.', 'Nigeria.'],
        heroImage: expertise_hero,
 
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
        approachImage: approach,
 
        // ── Gallery ────────────────────────────────────────────────────────
        galleryImages: galleryImages.length > 0 ? galleryImages : [expertise_hero],
 
        // ── Related projects ───────────────────────────────────────────────
        relatedProjects: [
          {
            id: '1',
            title: 'Block of 8 Luxury Flats',
            location: 'Ajah, Lagos',
            category: 'building-construction',
            status: 'active',
            image: project_1,
          },
          {
            id: '2',
            title: 'Block of 8 Luxury Flats',
            location: 'Ajah, Lagos',
            category: 'building-construction',
            status: 'active',
            image: project_2,
          },
          {
            id: '3',
            title: "St. Peter's Catholic Churc...",
            location: 'Langbasa, Ajah',
            category: 'building-construction',
            status: 'active',
            image: project_3,
          },
        ],
      }}


/>

      
                  <FooterSection/>
            
          </div>
  )
}
