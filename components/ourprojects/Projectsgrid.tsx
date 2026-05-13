'use client'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard, { type Project } from './Projectscard'

// ─── Filter categories ────────────────────────────────────────────────────────
const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential-development', label: 'Residential Development' },
  { id: 'commercial-development', label: 'Commercial Development' },
  { id: 'project-partnering', label: 'Project Partnering' },
  { id: 'reconstruction-upgrade', label: 'Reconstruction and Upgrade' },
  { id: 'roofing-system', label: 'Roofing System' },
  { id: 'flooring', label: 'Flooring' },
  { id: 'road-infrastructure', label: 'Road & Infrastructure' },
]
export default function ProjectsGridClient({ projects: initialProjects }: { projects: Project[] }) {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)
  const projects = initialProjects

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && filters.some(f => f.id === category)) {
      setActiveFilter(category)
    }
  }, [searchParams])

const displayed =
  activeFilter === 'all'
    ? projects
    : activeFilter === 'commercial-development' || activeFilter === 'residential-development'
    ? projects.filter((p) => (p as any).subCategory === activeFilter)
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="bg-white pb-20">
      {/* ── Filter bar ── */}
      <div className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl relative">
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
            className="flex gap-2 py-5 px-6 sm:px-10 lg:px-14"
            style={{ flexWrap: 'nowrap' }}
            onScroll={(e) => {
              const el = e.currentTarget
              const left = document.getElementById('proj-arrow-left')
              const right = document.getElementById('proj-arrow-right')
              const atStart = el.scrollLeft <= 4
              const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
              if (left) {
                left.style.opacity = atStart ? '0' : '1'
                left.style.pointerEvents = atStart ? 'none' : 'auto'
              }
              if (right) {
                right.style.opacity = atEnd ? '0' : '1'
                right.style.pointerEvents = atEnd ? 'none' : 'auto'
              }
            }}
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.id
              const isHovered = hoveredFilter === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  onMouseEnter={() => setHoveredFilter(f.id)}
                  onMouseLeave={() => setHoveredFilter(null)}
                  className="px-4 py-2 text-sm rounded-lg cursor-pointer whitespace-nowrap flex-shrink-0 border-0"
                  style={{
                    background: isActive ? '#fde68a' : isHovered ? '#f2d852' : '#ebebea',
                    color: isActive ? '#92400e' : isHovered ? '#333' : '#555',
                    fontWeight: isActive || isHovered ? 500 : 400,
                    fontFamily: 'inherit',
                    transition: 'background 0.18s, color 0.18s',
                  }}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          {/* ── Left arrow ── */}
          <div
            id="proj-arrow-left"
            className="absolute left-0 top-0 bottom-0 flex items-center pl-2 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to left, transparent, white 40%)',
              paddingRight: '3rem',
              opacity: 0,
              pointerEvents: 'none',
            }}
            onClick={() => {
              const el = document.getElementById('proj-filter-bar')
              if (el) el.scrollBy({ left: -160, behavior: 'smooth' })
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7l4 4" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ── Right arrow ── */}
          <div
            id="proj-arrow-right"
            className="absolute right-0 top-0 bottom-0 flex items-center pr-2 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to right, transparent, white 40%)',
              paddingLeft: '3rem',
              pointerEvents: 'auto',
            }}
            onClick={() => {
              const el = document.getElementById('proj-filter-bar')
              if (el) el.scrollBy({ left: 160, behavior: 'smooth' })
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
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