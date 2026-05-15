'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Btn from '../Btn'

const careerpathway = "/images/career/careerpathway.jpg"

const pathways = [
  {
    id: 1,
    num: '01',
    label: 'Internship',
    description: 'Gain hands-on experience in real construction environments and develop foundational skills within engineering and project delivery.',
  },
  {
    id: 2,
    num: '02',
    label: 'Apprenticeship',
    description: 'A structured programme for recent graduates to develop professional skills across engineering, project management, and construction delivery.',
  },
  {
    id: 3,
    num: '03',
    label: 'New Graduates',
    description: 'Join as a fresh graduate and contribute to real construction projects across Nigeria with mentorship and structured growth.',
  },
  {
    id: 4,
    num: '04',
    label: 'Professionals',
    description: 'For experienced professionals who want to apply their expertise on structured, well-managed construction projects.',
  },
]

const staticBody = {
  paragraph1: 'Working at Instinct means being part of a team actively shaping the built environment across Nigeria. Our work is hands-on, dynamic, and requires a strong commitment to execution.',
  paragraph2: 'Whether on-site in Lagos or across project locations, our teams are engaged in real construction environments that demand focus, adaptability, and technical competence.',
}

export default function CareerPathways() {
  const [activeId, setActiveId] = useState(1)
  const activeDescription = pathways.find((p) => p.id === activeId)!.description

  return (
    <section className="w-full bg-[#FAFAFA] py-0 pt-10 pb-28 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* ── MOBILE LAYOUT ─────────────────────────────────────────────── */}
        <div className="lg:hidden">

          {/* Title */}
          <h2 className="font-bebas text-gray-900 text-[32px] leading-none tracking-wide mb-4">
            CAREER PATHWAYS
          </h2>

          {/* Two paragraphs */}
          <p className="text-gray-600 text-[13px] font-montserrat leading-relaxed mb-3">
            {staticBody.paragraph1}
          </p>
          <p className="text-gray-600 text-[13px] font-montserrat leading-relaxed mb-5">
            {staticBody.paragraph2}
          </p>

          {/* Amber circle-arrow CTA */}
          <Link href="/career/joblisting" className="inline-flex items-center gap-3 mb-6 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8950A] flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-montserrat text-[13.5px] font-semibold text-[#E8950A]">
              See all Roles
            </span>
          </Link>

          {/* Horizontally scrollable filter tabs */}
          <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
            {pathways.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`
                  px-5 py-2.5 rounded-lg text-sm font-montserrat font-medium whitespace-nowrap flex-shrink-0
                  transition-all duration-200
                  ${activeId === p.id
                    ? 'bg-[#FFE3B0] text-[#593A00]'
                    : 'bg-[#E6E6E6] text-gray-600 hover:border-[#FFE3B0] hover:text-[#593A00]'
                  }
                `}
              >
                {p.num} {p.label}
              </button>
            ))}
          </div>

          {/* Full-width image with gradient overlay + active description */}
          <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-0">
            <Image
              src={careerpathway}
              alt="Career pathway"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-[13px] font-montserrat leading-relaxed">
                {activeDescription}
              </p>
            </div>
          </div>

          {/* Static body text below image */}
          <div className="bg-white px-5 py-7 flex flex-col gap-4 mt-0">
            <p className="text-gray-600 text-[13px] font-montserrat leading-relaxed">
              {staticBody.paragraph1}
            </p>
            <p className="text-gray-600 text-[13px] font-montserrat leading-relaxed">
              {staticBody.paragraph2}
            </p>
          </div>

        </div>

        {/* ── DESKTOP LAYOUT ────────────────────────────────────────────── */}
        <div className="hidden lg:block">

          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-40 items-start mb-10">
            <h2 className="font-bebas col-start-1 col-end-2 text-gray-900 text-3xl sm:text-[56px] lg:text-[64px] leading-none tracking-wide">
              CAREER<br />PATHWAYS
            </h2>
            <div className="flex flex-col gap-3 col-span-4">
              <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                {staticBody.paragraph1}
              </p>
              <div className="flex items-end justify-between gap-4">
                <p className="text-gray-600 text-sm font-montserrat leading-relaxed flex-1">
                  {staticBody.paragraph2}
                </p>
                <Btn text="See all Roles" href="/career/joblisting" />
              </div>
            </div>
          </div>

          {/* Interactive panel */}
          <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr] gap-5 rounded-lg overflow-hidden border border-gray-100">

            {/* Left — dark brown tab panel */}
            <div className="flex flex-col p-[60px] pl-[100px] pt-[150px] rounded-lg" style={{ backgroundColor: '#593A00' }}>
              {pathways.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`
                    flex items-center gap-3 px-5 py-5 text-left w-full
                    transition-all duration-200
                    ${activeId === p.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
                  `}
                >
                  <span
                    className={`w-[3px] h-5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                      activeId === p.id ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                  <span className="text-white/50 text-xs font-montserrat font-medium w-5 flex-shrink-0">
                    {p.num}
                  </span>
                  <span
                    className={`text-sm font-montserrat font-medium ${
                      activeId === p.id ? 'text-white font-semibold' : 'text-white/60'
                    }`}
                  >
                    {p.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex w-full flex-col gap-10">

              {/* Image with overlay description */}
              <div className="relative h-[300px] lg:h-auto min-h-[320px] rounded-lg overflow-hidden">
                <Image
                  src={careerpathway}
                  alt="Career pathway"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-montserrat leading-relaxed">
                    {activeDescription}
                  </p>
                </div>
              </div>

              {/* Static body text */}
              <div className="bg-white px-8 py-8 flex flex-col gap-4 justify-center">
                <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                  {staticBody.paragraph1}
                </p>
                <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                  {staticBody.paragraph2}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}