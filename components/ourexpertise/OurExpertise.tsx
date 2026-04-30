'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

const preconstruction = "/images/whatwedo/preconstruction_1.jpg"
const preconstruction1 = "/images/whatwedo/preconstruction1.jpg"
const preconstruction_2 = "/images/whatwedo/preconstruction2.jpg"
const preconstruction_3 = "/images/whatwedo/preconstruction3.jpg"
const construction = "/images/whatwedo/construction_1.jpg"
const construction_2 = "/images/whatwedo/construction_2.jpg"
const construction_3 = "/images/whatwedo/construction_3.jpg"
const building_con_1 = "/images/whatwedo/building_con_1.jpg"
const building_con_2 = "/images/whatwedo/building_con_2.jpg"
const building_con_3 = "/images/whatwedo/building_con_3.jpg"
const road_1 = "/images/whatwedo/road_1.jpg"
const road_2 = "/images/whatwedo/road_2.jpg"
const projectmanagement = "/images/whatwedo/project-management.jpg"
const roofingsystem = "/images/whatwedo/roofing-system.jpg"
const flooring_1 = "/images/whatwedo/flooring_1.jpg"
const reconstruction_1 = "/images/whatwedo/reconstruction_1.png"

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: string
  title: string
  location: string
  status?: 'active'
  image?: string | StaticImport
}

interface Category {
  id: string
  label: string
  description: string
  coverImage?: string | StaticImport
  projects: Project[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    id: 'preconstruction',
    label: 'Preconstruction',
    description: 'Establishing clarity at the outset — defining scope, cost, timelines, and execution strategy to ensure every project begins with a coordinated foundation.',
    coverImage: preconstruction,
    projects: [
      { id: '1', title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', status: 'active', image: preconstruction1 },
      { id: '2', title: 'Construction Management', location: 'Coordinated project delivery', image: preconstruction_2 },
      { id: '3', title: 'St. Peter\'s Catholic Church', location: 'Langbasa, Ajah', image: preconstruction_3 },
    ],
  },
  {
    id: 'construction-management',
    label: 'Construction Management',
    description: 'Providing structured oversight across all phases — aligning planning, resources, and site execution to ensure consistency and control.',
    coverImage: construction,
    projects: [
      { id: '1', title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', status: 'active', image: construction_2 },
      { id: '2', title: 'Construction Management', location: 'Coordinated project delivery', image: construction_3 },
      { id: '3', title: 'St. Peter\'s Catholic Church', location: 'Langbasa, Ajah', image: construction_2 },
    ],
  },
  {
    id: 'building-construction',
    label: 'Building construction',
    description: 'Delivering residential and commercial developments to defined specifications, ensuring structural integrity, functionality and long-term performance.',
    coverImage: building_con_1,
    projects: [
      { id: '1', title: 'Blocks of Flats', location: 'Ikota, Ofada, Maryland', status: 'active', image: building_con_2 },
      { id: '2', title: 'Commercial Plaza', location: 'Surulere, Lagos', image: building_con_3 },
      { id: '3', title: 'Twin Tower Office Complex', location: 'VI, Lagos', image: building_con_1 },
    ],
  },
  {
    id: 'road-infrastructure',
    label: 'Road & Infrastructure',
    description: 'Executing road and infrastructure projects designed to deliver efficiency, and long-term usability across varying environments.',
    coverImage: road_1,
    projects: [
      { id: '1', title: 'Oshodi Cantonment Mar...', location: 'Oshodi, Lagos', image: road_1 },
      { id: '2', title: 'Airport Road Expansion', location: 'Ikeja, Lagos', image: road_2 },
      { id: '3', title: 'Lekki Corridor Road', location: 'Lekki, Lagos', image: road_1 },
    ],
  },
  {
    id: 'project-partnering',
    label: 'Project Partnering',
    description: 'Working alongside developers, investors, and public agencies to co-deliver projects that exceed scope and delivery expectations.',
    coverImage: projectmanagement,
    projects: [
      { id: '1', title: 'JV Mixed-Use Tower', location: 'Ikoyi, Lagos', image: projectmanagement },
      { id: '2', title: 'PPP Road Maintenance', location: 'Lekki Corridor', image: projectmanagement },
      { id: '3', title: 'Public Agency Development', location: 'Abuja, FCT', image: projectmanagement },
    ],
  },
  {
    id: 'roofing-system',
    label: 'Roofing system',
    description: 'Designing and installing high-performance roofing solutions that provide lasting protection, structural reliability, and architectural quality.',
    coverImage: roofingsystem,
    projects: [
      { id: '1', title: 'Industrial Roofing Project', location: 'Apapa, Lagos', image: roofingsystem },
      { id: '2', title: 'Residential Roof Upgrade', location: 'Ikeja, Lagos', image: roofingsystem },
      { id: '3', title: 'Commercial Complex Roof', location: 'VI, Lagos', image: roofingsystem },
    ],
  },
  {
    id: 'flooring',
    label: 'Flooring',
    description: 'Supplying and installing premium flooring systems across residential and commercial spaces, combining durability, aesthetics, and precision.',
    coverImage: flooring_1,
    projects: [
      { id: '1', title: 'Luxury Apartment Flooring', location: 'Lekki, Lagos', image: flooring_1 },
      { id: '2', title: 'Office Complex Flooring', location: 'VI, Lagos', image: flooring_1 },
      { id: '3', title: 'Retail Space Flooring', location: 'Surulere, Lagos', image: flooring_1 },
    ],
  },
  {
    id: 'reconstruction-upgrade',
    label: 'Reconstruction and Upgrade',
    description: 'Restoring and upgrading existing structures to modern standards — improving performance, safety, and longevity through precise interventions.',
    coverImage: reconstruction_1,
    projects: [
      { id: '1', title: 'Heritage Building Upgrade', location: 'Lagos Island, Lagos', image: reconstruction_1 },
      { id: '2', title: 'Structural Renovation', location: 'Yaba, Lagos', image: reconstruction_1 },
      { id: '3', title: 'Commercial Refurbishment', location: 'Ikeja, Lagos', image: reconstruction_1 },
    ],
  },
]

// ─── Arrow Icon ───────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Project Card (grid item) ─────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/ourproject/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block rounded-xl overflow-hidden"
    >
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        {project.image ? (
          <Image
            src={project.image}
            fill
            alt={project.title}
            className="object-cover transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
        ) : (
          <div className="w-full h-full bg-slate-400" />
        )}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)',
            opacity: hovered ? 1 : 0.8,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 flex items-end justify-between">
          <div>
            <p className="text-white font-bold text-sm leading-tight mb-1">{project.title}</p>
            <p className="text-white/70 text-xs">{project.location}</p>
          </div>
          <div
            className="w-8 h-8 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 ml-3 transition-all duration-200"
            style={{
              opacity: 1,
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Cover Card (full-width) ──────────────────────────────────────────────────
function CoverCard({ cat }: { cat: Category }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16 / 7' }}>
      {cat.coverImage ? (
        <Image
          src={cat.coverImage}
          fill
          alt={cat.label}
          className="object-cover object-center"
        />
      ) : (
        <div className="w-full h-full bg-slate-500" />
      )}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-white font-bold text-base sm:text-lg mb-2">{cat.label}</p>
        <p className="text-white/80 text-sm leading-relaxed max-w-xl">{cat.description}</p>
      </div>
    </div>
  )
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({ cat }: { cat: Category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="mb-10 sm:mb-14"
    >
      {/* Full-width cover card */}
      <CoverCard cat={cat} />

      {/* 3-column project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cat.projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </motion.div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function OurExpertise() {
  const [activeFilter, setActiveFilter] = useState('all')

  const displayed =
    activeFilter === 'all'
      ? categories
      : categories.filter((c) => c.id === activeFilter)

  return (
    <section className="bg-white font-montserrat">

      {/* ── FILTER BAR ── */}
      <div className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <style>{`
            #filter-bar {
              overflow-x: auto;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            #filter-bar::-webkit-scrollbar { display: none; }
          `}</style>
          <div id="filter-bar" className="flex gap-2 py-5" style={{ flexWrap: 'nowrap' }}>
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter((prev) => (prev === cat.id ? 'all' : cat.id))}
                  className="px-4 py-2 text-sm rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap flex-shrink-0 border-0"
                  style={{
                    background: isActive ? '#fde68a' : '#ebebea',
                    color: isActive ? '#92400e' : '#555',
                    fontFamily: 'inherit',
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── CATEGORY SECTIONS ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {displayed.map((cat) => (
              <CategorySection key={cat.id} cat={cat} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}