'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import preconstruction from "@/images/whatwedo/preconstruction_1.jpg";

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
    description:
      'Establishing clarity at the outset — defining scope, cost, timelines, and execution strategy to ensure every project begins with a coordinated foundation.',
    coverImage: preconstruction,
    projects: [
      {
        id: 'p1',
        title: 'Block of 8 Luxury Flats',
        location: 'Ajah, Lagos',
        image: preconstruction,
      },
      {
        id: 'p2',
        title: 'Twin Tower Office Complex',
        location: 'VI, Lagos',
        image: preconstruction,
      },
    ],
  },
  {
    id: 'construction-management',
    label: 'Construction Management',
    description:
      'Providing structured oversight across all phases — aligning planning, resources, and site execution to ensure consistency, and control.',
    coverImage: preconstruction,
    projects: [
      {
        id: 'c1',
        title: 'Shonibare Estate Reside...',
        location: 'Maryland, Lagos',
        status: 'active',
        image: preconstruction,
      },
      {
        id: 'c2',
        title: 'Magodo Phase 2 Villas',
        location: 'Magodo, Lagos',
        image: preconstruction,
      },
    ],
  },
  {
    id: 'building-construction',
    label: 'Building construction',
    description:
      'Delivering residential and commercial developments to defined specifications, ensuring structural integrity, functionality and long-term performance.',
    coverImage: preconstruction,
    projects: [
      {
        id: 'b1',
        title: 'Blocks of Flats',
        location: 'Ikota, Ofada, Maryland',
        status: 'active',
        image: preconstruction,
      },
      {
        id: 'b2',
        title: 'Commercial Plaza',
        location: 'Surulere, Lagos',
        image: preconstruction,
      },
    ],
  },
  {
    id: 'road-infrastructure',
    label: 'Road & Infrastructure',
    description:
      'Executing road and infrastructure projects designed to deliver efficiency, and long-term usability across varying environments.',
    coverImage: preconstruction,
    projects: [
      {
        id: 'r1',
        title: 'Oshodi Cantonment Mar...',
        location: 'Oshodi, Lagos',
        image: preconstruction,
      },
      {
        id: 'r2',
        title: 'Airport Road Expansion',
        location: 'Ikeja, Lagos',
        image: preconstruction,
      },
    ],
  },
  {
    id: 'project-partnering',
    label: 'Project Partnering',
    description:
      'Working alongside developers, investors, and public agencies to co-deliver projects that exceed scope and delivery expectations.',
    coverImage: preconstruction,
    projects: [
      {
        id: 'pp1',
        title: 'JV Mixed-Use Tower',
        location: 'Ikoyi, Lagos',
        image: preconstruction,
      },
      {
        id: 'pp2',
        title: 'PPP Road Maintenance',
        location: 'Lekki Corridor',
        image: preconstruction,
      },
    ],
  },
]

// ─── Project card (right panel) ───────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden mb-3 last:mb-0 flex-shrink-0"
      style={{ height: 260 }}
    >
      {/* Image */}
      {project.image ? (
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-slate-400" />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)',
        }}
      />

      {/* Title + location + optional arrow */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between">
        <div>
          <p className="text-white font-bold text-base leading-tight mb-1">{project.title}</p>
          <p className="text-white/70 text-sm">{project.location}</p>
        </div>

        {/* Amber arrow button for active projects */}
        {project.status === 'active' && (
          <div className="w-9 h-9 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 ml-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3v6"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── One full category row ────────────────────────────────────────────────────
function CategoryRow({ cat }: { cat: Category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="grid mb-24 gap-8"
      style={{ gridTemplateColumns: '37% 63%' }}
    >
      {/* ── LEFT: Cover image card ── */}
      <div className="relative rounded-xl overflow-hidden" style={{ height: 420 }}>
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

        {/* Dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 55%, transparent 100%)',
          }}
        />

        {/* Label + description */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white font-bold text-base mb-2">{cat.label}</p>
          <p className="text-white/80 text-sm leading-relaxed">{cat.description}</p>
        </div>
      </div>

      {/* ── RIGHT: Header + scrollable project cards ── */}
      <div className="pl-5 flex flex-col min-h-0 mt-6 w-lg">
        {/* "Explore … | See all" header */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <p className="text-sm font-semibold text-slate-800">
            Explore Projects on {cat.label}
          </p>
          <button className="text-sm text-slate-500 hover:text-slate-800 transition-colors bg-transparent border-none cursor-pointer">
            See all
          </button>
        </div>

        {/* Scrollable frame — height locked to match left card, custom amber scrollbar */}
        <style>{`
          #scroll-${cat.id}::-webkit-scrollbar { width: 5px; }
          #scroll-${cat.id}::-webkit-scrollbar-track { background: #f0efed; border-radius: 8px; }
          #scroll-${cat.id}::-webkit-scrollbar-thumb { background: #e8a020; border-radius: 8px; }
        
        `}</style>
        <div
          id={`scroll-${cat.id}`}
          className="flex flex-col overflow-y-auto pr-2"
          style={{
            height: 'calc(520px - 40px)',
            scrollbarWidth: 'thin',
            scrollbarColor: '#e8a020 #f0efed',
          } as React.CSSProperties}
        >
          {cat.projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
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
    <section className="bg-white font-sans">

      {/* ── WHAT WE DO intro ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-16 border-b border-slate-200">
        <div className="grid gap-16 lg:grid-cols-[260px_1fr] items-start">
          <h2 className="font-bebas text-5xl sm:text-6xl uppercase tracking-tight text-slate-950 leading-none">
            WHAT WE DO
          </h2>
          <div className="space-y-4">
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
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-5 border-b border-slate-200">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter((prev) => (prev === cat.id ? 'all' : cat.id))}
                className="px-4 py-2 text-sm rounded transition-colors duration-150 border cursor-pointer whitespace-nowrap"
                style={{
                  background: isActive ? '#1a1a1a' : '#ebebea',
                  color: isActive ? '#fff' : '#444',
                  borderColor: isActive ? '#1a1a1a' : '#ebebea',
                  fontFamily: 'inherit',
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── CATEGORY ROWS ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 py-8">
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