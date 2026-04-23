'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard, { type Project } from './Projectscard'
import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import preconstruction from '@/images/precision.jpg'
import constructionManagement from '@/images/precision.jpg'
import buildingConstruction from '@/images/precision.jpg'

// ─── Filter categories ────────────────────────────────────────────────────────
const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'preconstruction', label: 'Preconstruction' },
  { id: 'construction-management', label: 'Construction Management' },
  { id: 'building-construction', label: 'Building construction' },
  { id: 'road-infrastructure', label: 'Road & Infrastructure' },
  { id: 'project-partnering', label: 'Project Partnering' },
  { id: 'roofing-system', label: 'Roofing system' },
  { id: 'flooring', label: 'Flooring' },
  { id: 'reconstruction-upgrade', label: 'Reconstruction and Upgrade' },
]

// ─── Projects data — replace images with real imports/paths ──────────────────
const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Shonibare Estate Reside...',
    location: 'Maryland, Lagos',
    category: 'building-construction',
    status: 'active',
    image: buildingConstruction,
  },
  {
    id: 'proj-2',
    title: '3km Drainage Project',
    location: 'Ikire, Osun State',
    category: 'road-infrastructure',
    image: preconstruction,
  },
  {
    id: 'proj-3',
    title: '5 Bedroom Duplex...',
    location: 'Magodo Phase 2, Lagos',
    category: 'building-construction',
    status: 'active',
    image: buildingConstruction,
  },
  {
    id: 'proj-4',
    title: 'Block of 8 Luxury Flats',
    location: 'Ajah, Lagos',
    category: 'building-construction',
    image: buildingConstruction,
  },
  {
    id: 'proj-5',
    title: 'Oshodi Cantonment Mar...',
    location: 'Oshodi, Lagos',
    category: 'road-infrastructure',
    image: constructionManagement,
  },
  {
    id: 'proj-6',
    title: 'Preconstruction Survey',
    location: 'VI, Lagos',
    category: 'preconstruction',
    image: preconstruction,
  },
  {
    id: 'proj-7',
    title: 'Magodo Phase 2 Villas',
    location: 'Magodo, Lagos',
    category: 'building-construction',
    image: buildingConstruction,
  },
  {
    id: 'proj-8',
    title: 'Airport Road Expansion',
    location: 'Ikeja, Lagos',
    category: 'road-infrastructure',
    image: constructionManagement,
  },
  {
    id: 'proj-9',
    title: 'Construction Management',
    location: 'Maryland, Lagos',
    category: 'construction-management',
    status: 'active',
    image: constructionManagement,
  },
  {
    id: 'proj-10',
    title: 'Shonibare Estate Reside...',
    location: 'Maryland, Lagos',
    category: 'building-construction',
    status: 'active',
    image: buildingConstruction,
  },
  {
    id: 'proj-11',
    title: '3km Drainage Project',
    location: 'Ikire, Osun State',
    category: 'road-infrastructure',
    image: preconstruction,
  },
  {
    id: 'proj-12',
    title: '5 Bedroom Duplex...',
    location: 'Magodo Phase 2, Lagos',
    category: 'building-construction',
    status: 'active',
    image: buildingConstruction,
  },
]

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const displayed =
    activeFilter === 'all'
      ? projects
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
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className="px-4 py-2 text-sm rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap flex-shrink-0 border-0"
                  style={{
                    background: isActive ? '#fde68a' : '#ebebea',
                    color: isActive ? '#92400e' : '#555',
                    fontWeight: isActive ? 500 : 400,
                    fontFamily: 'inherit',
                  }}
                >
                  {f.label}
                </button>
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