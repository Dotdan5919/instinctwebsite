'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface Project {
  id: string
  title: string
  location: string
  category: string
  status?: 'active'
  image?: string | StaticImport
}

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: '3 / 4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      {project.image ? (
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="object-cover"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
      ) : (
        <div className="w-full h-full bg-slate-400" />
      )}

      {/* Gradient overlay — deepens on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-350"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 50%, transparent 75%)',
          opacity: hovered ? 1 : 0.7,
        }}
      />

      {/* Title + location + arrow */}
      <div
        className="absolute left-0 right-0 px-4 py-4 flex items-end justify-between"
        style={{
          bottom: hovered ? '10px' : '4px',
          transition: 'bottom 0.3s ease',
        }}
      >
        <div>
          <p className="text-white font-bold text-sm leading-tight mb-1">{project.title}</p>
          <p className="text-white/70 text-xs">{project.location}</p>
        </div>

        {/* Amber arrow — always shown for active, fades in on hover for others */}
        <div
          className="w-8 h-8 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 ml-3"
          style={{
            opacity: hovered || project.status === 'active' ? 1 : 0,
            transform: hovered || project.status === 'active' ? 'scale(1)' : 'scale(0.6)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 11L11 3M11 3H5M11 3v6"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}