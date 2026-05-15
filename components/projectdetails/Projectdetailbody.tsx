'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import ProjectOverviewPanel, { type ProjectOverview } from './Projectoverviewpanel'
import GallerySection from './Gallerysection'
import ProjectCard, { type Project } from '../ourprojects/Projectscard'
import Navbar from '../Navbar'

// ─── Tag pill ─────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-lg bg-[#fdf6e3] text-gray-900 text-sm px-3 py-2 font-medium">
      {label}
    </span>
  )
}

// ─── Section block ────────────────────────────────────────────────────────────
function ContentBlock({
  heading,
  body,
  image,
  imageAlt,
  tags,
  imageLeft = false,
}: {
  heading: string
  body: string
  image: string | StaticImport
  imageAlt: string
  tags?: string[]
  imageLeft?: boolean
}) {
  const textCol = (
    <div className="flex flex-col justify-center">
      <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black leading-none mb-4 sm:mb-5">
        {heading}
      </h2>
      <p className="text-sm leading-7 text-gray-700 max-w-lg">{body}</p>
    </div>
  )

  const imgCol = (
    <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
      <Image src={image} fill alt={imageAlt} className="object-cover" />
    </div>
  )

  return (
    <div className="py-10 sm:py-12">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${tags ? 'mb-6 sm:mb-8' : ''}`}>
        {/* On mobile always show text first, then image. On lg respect imageLeft prop */}
        <div className="lg:hidden flex flex-col gap-6">
          {textCol}
          {imgCol}
        </div>
        <div className={`hidden lg:contents`}>
          {imageLeft ? <>{imgCol}{textCol}</> : <>{textCol}{imgCol}</>}
        </div>
      </div>
      {tags && (
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      )}
    </div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────
export interface ProjectDetailData {
  breadcrumbs: string[]
  title: string
  subtitle: string
  address: string[]
  heroImage: string | StaticImport
  overview: ProjectOverview
  introParagraphs: string[]
  roleBody: string
  roleImage: string | StaticImport
  roleTags: string[]
  approachBody: string
  approachImage: string | StaticImport
  galleryImages: (string | StaticImport)[]
  relatedProjects: Project[]
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProjectDetailBody({ data }: { data: ProjectDetailData }) {
  const [overviewOpen, setOverviewOpen] = useState(false)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-slate-900" style={{ minHeight: 480 }}>
        <Navbar />

        {/* Full-bleed hero image */}
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            fill
            alt={data.title}
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Info card — centred on mobile with small side gaps, left-aligned on desktop */}
        <div className="relative z-10 flex items-end justify-center lg:justify-start h-full min-h-[480px] w-full px-4 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md lg:max-w-xl bg-white rounded-t-xl px-5 sm:px-8 pt-5 sm:pt-6 pb-6 sm:pb-8"
          >
            {/* Breadcrumbs */}
            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
              {data.breadcrumbs.join(' · ')}
            </p>
            <div className="border-b border-slate-200 mb-4" />

            {/* Title */}
            <h1 className="text-base sm:text-lg font-bold text-black mb-1">{data.title}</h1>

            {/* Location + See Overview */}
            <div className="flex items-center justify-between mb-3 gap-3">
              <p className="text-sm font-semibold text-gray-900 shrink-0">{data.subtitle}</p>
              <button
                onClick={() => setOverviewOpen(true)}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-800 hover:text-black transition-colors group"
              >
                <span>See Project Overview</span>
                <span className="w-7 h-7 rounded-full bg-[#e8a020] flex items-center justify-center shrink-0 group-hover:bg-[#c98a18] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3v6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Address */}
            {data.address.map((line, i) => (
              <p key={i} className="text-xs text-gray-600 leading-relaxed">{line}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTRO PARAGRAPHS ── */}
      {/* mobile: 40px top padding matching design annotation */}
      <section className="bg-white pt-[40px] pb-8 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-14 space-y-4">
          {data.introParagraphs.map((p, i) => (
            <p key={i} className="text-sm leading-7 text-gray-800">{p}</p>
          ))}
        </div>
      </section>

      {/* ── OUR ROLE ── */}
      <section className="bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <ContentBlock
            heading="OUR ROLE"
            body={data.roleBody}
            image={data.roleImage}
            imageAlt="Our role"
            tags={data.roleTags}
            imageLeft={false}
          />
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className="bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <ContentBlock
            heading="OUR APPROACH"
            body={data.approachBody}
            image={data.approachImage}
            imageAlt="Our approach"
            imageLeft={true}
          />
        </div>
      </section>

      {/* ── GALLERY ── */}
      <div className="border-t border-slate-100">
        <GallerySection images={data.galleryImages} />
      </div>

      {/* ── RELATED PROJECTS ── */}
      <section className="bg-white py-12 sm:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="font-bebas text-3xl sm:text-4xl uppercase tracking-tight text-black">
              RELATED PROJECTS
            </h2>
            <a href="/ourproject" className="text-sm text-gray-700 hover:text-black transition-colors">
              See all
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.relatedProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW PANEL ── */}
      <ProjectOverviewPanel
        open={overviewOpen}
        onClose={() => setOverviewOpen(false)}
        overview={data.overview}
      />
    </>
  )
}