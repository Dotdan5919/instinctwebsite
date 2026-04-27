'use client'
import React, { Suspense } from 'react'
import ProjectsIntro from './Projectsintro'
import ProjectsGrid from './Projectsgrid'

export default function OurProjectsBody() {
  return (
    <>
      <ProjectsIntro />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsGrid />
      </Suspense>
    </>
  )
}