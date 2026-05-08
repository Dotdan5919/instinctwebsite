import React from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Preheader from '@/components/Preheader'
import OtherHero from '@/components/OtherHero'
import OurProjectsBody from '@/components/ourprojects/Ourprojectsbody'
import ProjectDetailBody from '@/components/projectdetails/Projectdetailbody'
const building = "/images/precision.jpg"
const define = "/images/define.jpg"
const accountability = "/images/accountability.jpg"
const expertise_hero = "/images/expertise_hero.jpg"
const approach = "/images/project/approach.png"
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
  
  // Get related projects (exclude current project)
  const relatedProjects = projects
    .filter(p => p.id !== projectId)
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      title: p.title,
      location: 'Lagos, Nigeria',
      category: 'construction',
      status: 'active' as const,
      image: p.images.length > 0 ? `/images/project/PROJECTS/${encodeURIComponent(p.folderName)}/${p.images[0]}` : undefined,
    }))

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
        relatedProjects: relatedProjects,
      }}


/>

      
                  <FooterSection/>
            
          </div>
  )
}
