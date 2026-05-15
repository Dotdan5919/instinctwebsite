'use client'
import { useState } from 'react'
import Btn from '../Btn'

const hireCategories = [
  {
    id: 1,
    label: 'Engineering',
    title: 'Engineering',
    description:
      'Civil, structural, and site engineers responsible for technical execution and site coordination.',
  },
  {
    id: 2,
    label: 'Project Delivery',
    title: 'Project Delivery',
    description:
      'Project managers and supervisors overseeing planning, coordination, and execution.',
  },
  {
    id: 3,
    label: 'Skilled Workforce',
    title: 'Skilled Workforce',
    description:
      'Experienced tradespeople including masons, carpenters, tilers, and roofing specialists.',
  },
  {
    id: 4,
    label: 'Business Support',
    title: 'Business Support',
    description:
      'Procurement, finance, and administrative roles supporting operational efficiency.',
  },
]

export default function WhoWeHire() {
  const [activeId, setActiveId] = useState(1)
  const active = hireCategories.find((c) => c.id === activeId)!

  return (
    <section className="w-full bg-white py-0 pt-10 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* ── MOBILE LAYOUT (hidden on lg+) ─────────────────────────────── */}
        <div className="lg:hidden">
          {/* Cream card wrapper */}
          <div className="rounded-[24px] bg-[#FFF3DC] px-5 pt-7 pb-8">

            {/* Title */}
            <h2 className="font-bebas text-gray-900 text-[32px] leading-none tracking-wide mb-3">
              WHO WE HIRE
            </h2>

            {/* Subtitle */}
            <p className="text-gray-700 text-[13.5px] leading-relaxed font-montserrat mb-5">
              We are building a team across multiple disciplines within construction and project
              delivery. Whether on-site or in a support function, every role contributes to
              structured execution.
            </p>

            {/* Image — same source as desktop bg, no overlay */}
            <div className="rounded-[18px] overflow-hidden mb-6 w-full aspect-[4/3]">
              <img
                src="/images/building.jpg"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Feature list */}
            <div className="flex flex-col">
              {hireCategories.map((cat) => (
                <div key={cat.id}>
                  <div className="h-px bg-[#E2C98A] w-full" />
                  <div className="py-4">
                    <p className="font-montserrat font-bold text-gray-900 text-[14px] mb-1">
                      {cat.title}
                    </p>
                    <p className="font-montserrat text-gray-600 text-[13px] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="h-px bg-[#E2C98A] w-full" />
            </div>

            {/* Custom Btn — same as desktop */}
            <div className="mt-6">
              <Btn text="See open roles" href="/career/joblisting" />
            </div>

          </div>
        </div>

        {/* ── DESKTOP LAYOUT (hidden on mobile) ────────────────────────── */}
        <div className="hidden lg:block">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-start mb-12">
            <h2 className="font-bebas text-gray-900 text-3xl sm:text-[52px] lg:text-[58px] leading-none tracking-wide">
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

              {/* Left — amber tab list */}
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

              {/* Right — image + text */}
              <div className="relative bg-gray-900 bg-[url('/images/building.jpg')] bg-cover bg-center bg-no-repeat px-8 sm:px-12 py-10 flex flex-col justify-between gap-8 min-h-[280px]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  <p className="text-white text-lg font-montserrat pt-5 leading-relaxed max-w-xl">
                    {active.description}
                  </p>
                </div>

                {/* Button */}
                <div className="relative z-10 w-fit">
                  <Btn text="See open roles" href="/career/joblisting" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}