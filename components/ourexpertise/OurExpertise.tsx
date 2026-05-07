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
interface Category {
  id: string
  label: string
  description: string
  coverImage?: string | StaticImport
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    id: 'preconstruction',
    label: 'Preconstruction',
    description: 'Establishing clarity at the outset — defining scope, cost, timelines, and execution strategy to ensure every project begins with a coordinated foundation.',
    coverImage: preconstruction,
  },
  {
    id: 'construction-management',
    label: 'Construction Management',
    description: 'Providing structured oversight across all phases — aligning planning, resources, and site execution to ensure consistency and control.',
    coverImage: construction,
  },
  {
    id: 'building-construction',
    label: 'Building Construction',
    description: 'Delivering residential and commercial developments to defined specifications, ensuring structural integrity, functionality and long-term performance.',
    coverImage: building_con_1,
  },
  {
    id: 'road-infrastructure',
    label: 'Road & Infrastructure',
    description: 'Executing road and infrastructure projects designed to deliver efficiency, and long-term usability across varying environments.',
    coverImage: road_1,
  },
  {
    id: 'project-partnering',
    label: 'Project Partnering',
    description: 'Working alongside developers, investors, and public agencies to co-deliver projects that exceed scope and delivery expectations.',
    coverImage: projectmanagement,
  },
  {
    id: 'roofing-system',
    label: 'Roofing System',
    description: 'Designing and installing high-performance roofing solutions that provide lasting protection, structural reliability, and architectural quality.',
    coverImage: roofingsystem,
  },
  {
    id: 'flooring',
    label: 'Flooring',
    description: 'Supplying and installing premium flooring systems across residential and commercial spaces, combining durability, aesthetics, and precision.',
    coverImage: flooring_1,
  },
  {
    id: 'reconstruction-upgrade',
    label: 'Reconstruction & Upgrade',
    description: 'Restoring and upgrading existing structures to modern standards — improving performance, safety, and longevity through precise interventions.',
    coverImage: reconstruction_1,
  },
]

// ─── Arrow Icon ───────────────────────────────────────────────────────────────
function ArrowIcon({ color = '#111' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 11L11 3M11 3H5M11 3v6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Cover Card (links to /ourproject?category=...) ───────────────────────────
function CoverCard({ cat }: { cat: Category }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/ourproject?category=${cat.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block relative w-full rounded-xl overflow-hidden group"
      style={{ aspectRatio: '16 / 7' }}
    >
      {/* Background image */}
      {cat.coverImage ? (
        <Image
          src={cat.coverImage}
          fill
          alt={cat.label}
          className="object-cover object-center transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
        />
      ) : (
        <div className="w-full h-full bg-slate-500" />
      )}

      {/* Gradient overlay — deepens on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)',
          opacity: hovered ? 1 : 0.82,
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-6 sm:px-8 sm:py-7 flex items-end justify-between">
        <div>
          <p className="text-white font-bold text-base sm:text-lg mb-2">{cat.label}</p>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl">{cat.description}</p>

          {/* "View Projects" label — slides up on hover */}
          <p
            className="text-[#e8a020] text-sm font-medium mt-3 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0px)' : 'translateY(6px)',
            }}
          >
            View Projects
          </p>
        </div>

        {/* Arrow button */}
        <div
          className="w-10 h-10 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 ml-4 transition-all duration-300"
          style={{
            transform: hovered ? 'scale(1.12) rotate(0deg)' : 'scale(1) rotate(-10deg)',
            opacity: hovered ? 1 : 0.85,
          }}
        >
          <ArrowIcon color="#111" />
        </div>
      </div>
    </Link>
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
      <CoverCard cat={cat} />
    </motion.div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function OurExpertise() {
  const [activeFilter, setActiveFilter] = useState('preconstruction')
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)

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
  {/* ── All button ── */}
  {(() => {
    const isActive = activeFilter === 'all'
    const isHovered = hoveredFilter === 'all'
    return (
      <button
        key="all"
        onClick={() => setActiveFilter('all')}
        onMouseEnter={() => setHoveredFilter('all')}
        onMouseLeave={() => setHoveredFilter(null)}
        className="px-4 py-2 text-sm rounded-lg cursor-pointer whitespace-nowrap flex-shrink-0 border-0 flex items-center gap-2"
        style={{
          background: isActive ? '#fde68a' : isHovered ? '#e0e0de' : '#ebebea',
          color: isActive ? '#92400e' : isHovered ? '#333' : '#555',
          fontFamily: 'inherit',
          fontWeight: isActive || isHovered ? 500 : 400,
          transition: 'background 0.18s, color 0.18s, font-weight 0.18s',
        }}
      >
        All
       
      </button>
    )
  })()}

  {/* ── Category buttons ── */}
  {categories.map((cat) => {
    const isActive = activeFilter === cat.id
    const isHovered = hoveredFilter === cat.id
    return (
      <button
        key={cat.id}
        onClick={() => setActiveFilter(cat.id)}
        onMouseEnter={() => setHoveredFilter(cat.id)}
        onMouseLeave={() => setHoveredFilter(null)}
        className="px-4 py-2 text-sm rounded-lg cursor-pointer whitespace-nowrap flex-shrink-0 border-0 flex items-center gap-2"
        style={{
          background: isActive ? '#fde68a' : isHovered ? '#f2d852' : '#ebebea',
          color: isActive ? '#92400e' : isHovered ? '#333' : '#555',
          fontFamily: 'inherit',
          fontWeight: isActive || isHovered ? 500 : 400,
          transition: 'background 0.18s, color 0.18s, font-weight 0.18s',
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