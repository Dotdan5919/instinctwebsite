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
      { id: '1', title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', image: preconstruction1 },
      { id: '2', title: 'Twin Tower Office Complex', location: 'VI, Lagos', image: preconstruction_2 },
      { id: '3', title: 'Twin Tower Office Complex', location: 'VI, Lagos', image: preconstruction_3 },
    ],
  },
  {
    id: 'construction-management',
    label: 'Construction Management',
    description: 'Providing structured oversight across all phases — aligning planning, resources, and site execution to ensure consistency, and control.',
    coverImage: construction,
    projects: [
      { id: '1', title: 'Shonibare Estate Reside...', location: 'Maryland, Lagos', status: 'active', image: construction_2 },
      { id: '2', title: 'Magodo Phase 2 Villas', location: 'Magodo, Lagos', image: construction_3 },
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
    ],
  },
  {
    id: 'roofing-system',
    label: 'Roofing system',
    description: 'Working alongside developers, investors, and public agencies to co-deliver projects that exceed scope and delivery expectations.',
    coverImage: roofingsystem,
    projects: [
      { id: '1', title: 'JV Mixed-Use Tower', location: 'Ikoyi, Lagos', image: roofingsystem },
      { id: '2', title: 'PPP Road Maintenance', location: 'Lekki Corridor', image: roofingsystem },
    ],
  },
  {
    id: 'flooring',
    label: 'Flooring',
    description: 'Working alongside developers, investors, and public agencies to co-deliver projects that exceed scope and delivery expectations.',
    coverImage: flooring_1,
    projects: [
      { id: '1', title: 'JV Mixed-Use Tower', location: 'Ikoyi, Lagos', image: flooring_1 },
      { id: '2', title: 'PPP Road Maintenance', location: 'Lekki Corridor', image: flooring_1 },
    ],
  },
  {
    id: 'reconstruction-upgrade',
    label: 'Reconstruction and Upgrade',
    description: 'Working alongside developers, investors, and public agencies to co-deliver projects that exceed scope and delivery expectations.',
    coverImage: reconstruction_1,
    projects: [
      { id: '1', title: 'JV Mixed-Use Tower', location: 'Ikoyi, Lagos', image: reconstruction_1 },
      { id: '2', title: 'PPP Road Maintenance', location: 'Lekki Corridor', image: reconstruction_1 },
    ],
  },
]

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/ourproject/${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block mb-12 last:mb-0 rounded-xl overflow-hidden"
    >
      <div
        className="relative w-full rounded-xl overflow-hidden mb-20 last:mb-0 flex-shrink-0"
        // Desktop: fixed 478px. Mobile/tablet: 16:9 aspect ratio via padding trick
        style={{ height: 'var(--card-h, 260px)' }}
      >
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
          background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 50%, transparent 80%)',
          opacity: hovered ? 1 : 0.75,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between">
        <div>
          <p className="text-white font-bold text-base leading-tight mb-1">{project.title}</p>
          <p className="text-white/70 text-sm">{project.location}</p>
        </div>
        <div
          className="w-9 h-9 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 ml-3 transition-all duration-200"
          style={{
            opacity: hovered || project.status === 'active' ? 1 : 0,
            transform: hovered || project.status === 'active' ? 'scale(1)' : 'scale(0.7)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 11L11 3M11 3H5M11 3v6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Category row ─────────────────────────────────────────────────────────────
function CategoryRow({ cat }: { cat: Category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="mb-12 sm:mb-16 lg:mb-20"
    >
      <style>{`
        #scroll-${cat.id} {
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        #scroll-${cat.id}::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── Mobile / tablet (< lg): stacked ── */}
      <div className="flex flex-col gap-6 lg:hidden">
        {/* Cover card — aspect ratio based, no fixed height */}
        <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
          {cat.coverImage ? (
            <Image src={cat.coverImage} fill alt={cat.label} className="object-cover object-center" />
          ) : (
            <div className="w-full h-full bg-slate-500" />
          )}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white font-bold text-base mb-2">{cat.label}</p>
            <p className="text-white/80 text-sm leading-relaxed">{cat.description}</p>
          </div>
        </div>

        {/* Project cards — natural flow, aspect ratio based */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-900">Explore Projects on {cat.label}</p>
            <Link href={`/ourproject?filter=${cat.id}`}>
              <button className="text-sm text-gray-700 hover:text-black transition-colors bg-transparent border-none cursor-pointer font-montserrat">
                See all
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {cat.projects.map((p) => (
              <Link key={p.id} href={`/ourproject/${p.id}`}>
                <div className="relative w-full rounded-xl overflow-hidden cursor-pointer group" style={{ aspectRatio: '16 / 9' }}>
                {p.image ? (
                  <Image
                    src={p.image}
                    fill
                    alt={p.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-400" />
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 50%, transparent 80%)', opacity: 0.75 }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-sm leading-tight mb-1">{p.title}</p>
                    <p className="text-white/70 text-xs">{p.location}</p>
                  </div>
                  {p.status === 'active' && (
                    <div className="w-8 h-8 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 ml-3">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop (>= lg): original two-column layout, exact original dimensions ── */}
      <div
        className="hidden lg:grid gap-10"
        style={{ gridTemplateColumns: '50% 50%' }}
      >
        {/* LEFT: Cover image — exact original h-[478px] w-[526px] */}
        <div className="relative rounded-xl overflow-hidden" style={{ height: 478, width: 526 }}>
          {cat.coverImage ? (
            <Image src={cat.coverImage} fill alt={cat.label} className="object-cover object-center" />
          ) : (
            <div className="w-full h-full bg-slate-500" />
          )}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white font-bold text-base mb-2">{cat.label}</p>
            <p className="text-white/80 text-sm leading-relaxed">{cat.description}</p>
          </div>
        </div>

        {/* RIGHT: Header + scrollable cards — exact original dimensions */}
        <div className="flex flex-col min-h-0 mt-10" style={{ width: 526 }}>
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <p className="text-sm font-semibold text-gray-900">Explore Projects on {cat.label}</p>
            <Link href={`/ourproject?filter=${cat.id}`}>
              <button className="text-sm text-gray-700 hover:text-black transition-colors bg-transparent border-none cursor-pointer font-montserrat">
                See all
              </button>
            </Link>
          </div>
          <div id={`scroll-${cat.id}`} style={{ height: 680 }}>
            {cat.projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
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

      {/* ── WHAT WE DO intro ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-16 border-b border-gray-300">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[260px_1fr] lg:gap-16 items-start">
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-5xl uppercase tracking-tight text-black leading-none">
            WHAT WE DO
          </h2>
          <div className="space-y-4 font-montserrat">
            <p className="text-sm leading-7 text-slate-600">
              Successful construction requires more than execution. It requires coordination across every stage of delivery.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              At Instinct Engineering, we operate through an integrated approach that aligns planning, project management, and construction within a single, structured system. This ensures that every phase, from early definition to final delivery, is connected, controlled, and executed with clarity.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              By maintaining alignment across design intent, resources, and site operations, we reduce complexity, improve efficiency, and deliver projects that meet defined standards for quality, performance, and reliability.
            </p>
          </div>
        </div>
      </div>

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

      {/* ── CATEGORY ROWS ── */}
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
              <CategoryRow key={cat.id} cat={cat} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
