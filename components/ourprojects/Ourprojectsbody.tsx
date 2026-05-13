import React, { Suspense } from 'react'
import ProjectsIntro from './Projectsintro'
import ProjectsGridClient from './Projectsgrid'
import { getAllProjects } from '@/lib/projects'
import type { Project } from './Projectscard'

export default async function OurProjectsBody() {
  // Fetch all projects from the file system
  const allProjects = getAllProjects()
  
  // Convert to Project type with image URL
const order = ['CHISCO MALL', 'CHISCO COURT', 'A BLOCK OF 13 UNITS OF 3 BEDRROM FLATS AT ODUDUWA WAY, IKEJA GRA']

const projects: Project[] = allProjects
  .sort((a, b) => {
    const ai = order.indexOf(a.folderName)
    const bi = order.indexOf(b.folderName)
    const aPos = ai === -1 ? Infinity : ai
    const bPos = bi === -1 ? Infinity : bi
    return aPos - bPos
  }).map(p => ({
  id: p.id,
  title: p.title,
  location: 'Lagos, Nigeria',
  category: 'building-construction',
  subCategory: p.folderName === 'CHISCO MALL' ? 'commercial-development' : 'residential-development',
  status: 'active' as const,
  image: `/images/project/PROJECTS/${encodeURIComponent(p.folderName)}/${p.images[0]}`,
}))

  return (
    <>
      <ProjectsIntro />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsGridClient projects={projects} />
      </Suspense>
    </>
  )
}
