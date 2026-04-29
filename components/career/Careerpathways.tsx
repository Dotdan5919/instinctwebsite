'use client'
import { useState } from 'react'
import Image from 'next/image'
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

// ─── Static content — never changes ───────────────────────────────────
const staticBody = {
  paragraph1: 'Working at Instinct means being part of a team actively shaping the built environment across Nigeria. Our work is hands-on, dynamic, and requires a strong commitment to execution.',
  paragraph2: 'Whether on-site in Lagos or across project locations, our teams are engaged in real construction environments that demand focus, adaptability, and technical competence.',
}

export default function CareerPathways() {
  const [activeId, setActiveId] = useState(1)

  // Only description changes — everything else is static
  const activeDescription = pathways.find((p) => p.id === activeId)!.description

  return (
    <section className="w-full bg-[#FAFAFA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-40 items-start mb-10">
          <h2 className="font-bebas col-start-1 col-end-2 text-gray-900 text-[48px] sm:text-[56px] lg:text-[64px] leading-none tracking-wide">
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
              <Btn text="See all Roles"  href="/career/joblisting" />
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

            {/* Image — only the overlay description text changes */}
            <div className="relative h-[300px] lg:h-auto min-h-[320px] rounded-lg overflow-hidden">
              <Image
                src={careerpathway}
                alt="Career pathway"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* ✅ Only this text changes */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-montserrat leading-relaxed">
                  {activeDescription}
                </p>
              </div>
            </div>

            {/* Body text — completely static, never changes */}
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
    </section>
  )
}
