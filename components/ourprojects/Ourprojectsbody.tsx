import React, { Suspense } from 'react'
import ProjectsIntro from './Projectsintro'
import ProjectsGridClient from './Projectsgrid'
import { getAllProjects } from '@/lib/projects'
import type { Project } from './Projectscard'

export default async function OurProjectsBody() {
  // Fetch all projects from the file system
  const allProjects = getAllProjects()
  
  // Convert to Project type with image URL
  const projects: Project[] = allProjects.map(p => ({
    id: p.id,
    title: p.title,
    location: 'Lagos, Nigeria',
    category: 'building-construction',
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