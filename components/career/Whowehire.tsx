'use client'
import { useState } from 'react'
import Link from 'next/link'

const hireCategories = [
  {
    id: 1,
    label: 'Engineering',
    title: 'Engineering',
    description:
      'Civil, structural, and site engineers responsible for technical execution and site coordination.',
    details: [
      'Civil & Structural Engineers',
      'Site Engineers & Supervisors',
      'MEP Engineers',
      'Quality Control Engineers',
    ],
  },
  {
    id: 2,
    label: 'Project Delivery',
    title: 'Project Delivery',
    description:
      'Project managers and coordinators who ensure timelines, budgets, and scope are consistently met.',
    details: [
      'Project Managers',
      'Planning & Scheduling Officers',
      'Contract Administrators',
      'Site Coordinators',
    ],
  },
  {
    id: 3,
    label: 'Skilled Workforce',
    title: 'Skilled Workforce',
    description:
      'Trained tradespeople and artisans who deliver precision craftsmanship across all construction disciplines.',
    details: [
      'Masons & Concreters',
      'Carpenters & Formworkers',
      'Electricians & Plumbers',
      'Heavy Equipment Operators',
    ],
  },
  {
    id: 4,
    label: 'Business Support',
    title: 'Business Support',
    description:
      'Administrative, financial, and operational professionals who keep the business running efficiently.',
    details: [
      'Finance & Accounting',
      'Human Resources',
      'Procurement & Logistics',
      'Marketing & Communications',
    ],
  },
]

export default function WhoWeHire() {
  const [activeId, setActiveId] = useState(1)
  const active = hireCategories.find((c) => c.id === activeId)!

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-12">
          <h2 className="font-bebas text-gray-900 text-[40px] sm:text-[52px] lg:text-[58px] leading-none tracking-wide">
            WHO WE HIRE
          </h2>
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-montserrat">
            We are building a team across multiple disciplines within construction and project
            delivery. Whether on-site or in a support function, every role contributes to structured
            execution.
          </p>
        </div>

        {/* Interactive panel */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">

            {/* Left — amber tab list (structure from WhatWeDoSection) */}
            <div className="bg-[#E8950A] py-8 px-8">
              {hireCategories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className="w-full flex items-center gap-0 py-[11px] group relative text-left"
                >
                  {/* Active left border */}
                  <span
                    className={`absolute left-[-32px] top-0 bottom-0 w-[3px] rounded-r transition-colors duration-200 ${
                      activeId === cat.id ? 'bg-amber-600' : 'bg-white/20'
                    }`}
                  />

                  {/* Vertical divider */}
                  <span className="w-px h-[14px] bg-[#734A00]/30 mx-3 flex-shrink-0" />

                  {/* Number */}
                  <span
                    className={`text-sm font-medium w-7 flex-shrink-0 transition-colors duration-200 ${
                      activeId === cat.id ? 'text-white' : 'text-[#734A00]/50'
                    }`}
                  >
                    0{i + 1}
                  </span>

                  {/* Label */}
                  <span
                    className={`text-[13.5px] font-medium transition-colors duration-200 ${
                      activeId === cat.id ? 'text-white font-semibold' : 'text-[#734A00]/55'
                    }`}
                  >
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — text only, no image */}
            <div className="bg-gray-900 px-8 sm:px-12 py-10 flex flex-col justify-between gap-8 min-h-[280px]">
              <div className="flex flex-col gap-4">
                <h3 className="font-bebas text-white text-[32px] sm:text-[40px] leading-none tracking-wide">
                  {active.title}
                </h3>
                <p className="text-gray-300 text-sm font-montserrat leading-relaxed max-w-xl">
                  {active.description}
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {active.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 text-sm font-montserrat">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/careers#open-roles"
                className="inline-flex items-center gap-2 bg-amber-500 text-white text-xs
                           font-semibold font-montserrat px-5 py-3 w-fit rounded
                           hover:bg-amber-600 transition-colors"
              >
                See open roles <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}