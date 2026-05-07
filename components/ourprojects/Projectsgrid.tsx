'use client'
import React, { useState } from 'react'
import {  useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard, { type Project } from './Projectscard'

// ─── Filter categories ────────────────────────────────────────────────────────
const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'active', label: 'Active Projects' },
  { id: 'preconstruction', label: 'Preconstruction' },
  { id: 'construction-management', label: 'Construction Management' },
  { id: 'building-construction', label: 'Building construction' },
  { id: 'road-infrastructure', label: 'Road & Infrastructure' },
  { id: 'project-partnering', label: 'Project Partnering' },
  { id: 'roofing-system', label: 'Roofing system' },
  { id: 'flooring', label: 'Flooring' },
  { id: 'reconstruction-upgrade', label: 'Reconstruction and Upgrade' },
]
// ─── Filter Button ────────────────────────────────────────────────────────────
function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-4 py-2 text-sm rounded-lg cursor-pointer whitespace-nowrap flex-shrink-0 border-0"
      style={{
        background: isActive ? '#fde68a' : isHovered ? '#f2d852' : '#ebebea',
        color: isActive ? '#92400e' : isHovered ? '#333' : '#555',
        fontWeight: isActive || isHovered ? 500 : 400,
        fontFamily: 'inherit',
        transition: 'background 0.18s, color 0.18s',
      }}
    >
      {label}
    </button>
  )
}
export default function ProjectsGridClient({ projects: initialProjects }: { projects: Project[] }) {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('all')
  const projects = initialProjects

  // Handle filter changes
 useEffect(() => {
  const category = searchParams.get('category') // ← was 'filter'
  if (category && filters.some(f => f.id === category)) {
    setActiveFilter(category)
  }
}, [searchParams])

  const displayed =
    activeFilter === 'all'
      ? projects
      : activeFilter === 'active'
      ? projects.filter((p) => p.status === 'active')
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="bg-white pb-20">
      {/* ── Filter bar — single line, scrollable, no visible scrollbar ── */}
      <div className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <style>{`
            #proj-filter-bar {
              overflow-x: auto;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            #proj-filter-bar::-webkit-scrollbar { display: none; }
          `}</style>
          <div
            id="proj-filter-bar"
            className="flex gap-2 py-5"
            style={{ flexWrap: 'nowrap' }}
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.id
              return (
                <FilterButton
                  key={f.id}
    label={f.label}
    isActive={activeFilter === f.id}
    onClick={() => setActiveFilter(f.id)}
  />
              )
            })}
          </div>
        </div>
      </div>

      {/* ── 3-column project grid ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {displayed.length > 0 ? (
              displayed.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            ) : (
              <div className="col-span-3 py-20 text-center text-gray-500 text-sm">
                No projects found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
