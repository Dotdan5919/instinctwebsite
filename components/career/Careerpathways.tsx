'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const pathways = [
  {
    id: 1,
    num: '01',
    label: 'Internship',
    title: 'Internship',
    description:
      'Gain hands-on experience in real construction environments and develop foundational skills within engineering and project delivery.',
    body: 'Working at Instinct means being part of a team actively shaping the built environment across Nigeria. Our work is hands-on, dynamic, and requires a strong commitment to execution. Whether on-site in Lagos or across project locations, our teams are engaged in real construction environments that demand focus, adaptability, and technical competence.',
    image: '/images/building.jpg',
  },
  {
    id: 2,
    num: '02',
    label: 'Graduate Programme',
    title: 'Graduate Programme',
    description:
      'A structured programme for recent graduates to develop professional skills across engineering, project management, and construction delivery.',
    body: 'Our graduate programme offers a two-year structured rotation across key departments. Graduates are mentored by senior professionals and exposed to live projects from day one. The programme is designed to build the next generation of Instinct leaders.',
    image: '/images/building.jpg',
  },
  {
    id: 3,
    num: '03',
    label: 'Experienced Hire',
    title: 'Experienced Hire',
    description:
      'Join as an experienced professional and contribute to complex, high-impact construction projects across Nigeria.',
    body: 'We actively recruit experienced engineers, project managers, and specialists who can hit the ground running. If you bring technical depth, leadership experience, and a delivery mindset, there is a place for you at Instinct Engineering.',
    image: '/images/building.jpg',
  },
  {
    id: 4,
    num: '04',
    label: 'Skilled Trade',
    title: 'Skilled Trade',
    description:
      'For trained tradespeople who want to apply their craft on structured, well-managed construction projects.',
    body: 'Instinct Engineering values skilled tradespeople as core contributors to project success. We provide structured site environments, clear supervision, and fair working conditions for all trades across our active project sites.',
    image: '/images/building.jpg',
  },
]

export default function CareerPathways() {
  const [activeId, setActiveId] = useState(1)
  const active = pathways.find((p) => p.id === activeId)!

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">
          <h2 className="font-bebas text-gray-900 text-[40px] sm:text-[52px] lg:text-[58px] leading-none tracking-wide">
            CAREER<br />PATHWAYS
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-montserrat">
              Working at Instinct means being part of a team actively shaping the built
              environment across Nigeria. Our work is hands-on, dynamic, and requires a
              strong commitment to execution.
            </p>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-montserrat">
              Whether on-site in Lagos or across project locations, our teams are
              engaged in real construction environments that demand focus,
              adaptability, and technical competence.
            </p>
            <Link
              href="/careers#roles"
              className="inline-flex items-center gap-2 text-amber-500 text-sm font-semibold
                         font-montserrat hover:gap-3 transition-all"
            >
              See all Roles <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Interactive section */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-0 border border-gray-100 rounded-lg overflow-hidden shadow-sm">

          {/* Left — pathway tabs */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100">
            {pathways.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`
                  flex items-center gap-3 px-5 lg:px-6 py-4 lg:py-5 text-left whitespace-nowrap lg:whitespace-normal
                  border-b border-gray-100 last:border-b-0 transition-all duration-200 w-full
                  ${activeId === p.id
                    ? 'bg-white border-l-2 lg:border-l-[3px] border-l-amber-500 text-gray-900'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-white border-l-2 border-l-transparent'
                  }
                `}
              >
                <span className={`text-xs font-montserrat font-semibold ${activeId === p.id ? 'text-amber-500' : 'text-gray-300'}`}>
                  {p.num}
                </span>
                <span className="text-sm font-montserrat font-semibold">{p.label}</span>
              </button>
            ))}
          </div>

          {/* Right — content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">

            {/* Image */}
            <div className="relative w-full h-[220px] sm:h-full min-h-[260px]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-amber-400 text-xs font-semibold font-montserrat tracking-wide">
                  {active.num} {active.label}
                </p>
                <p className="text-white text-sm font-montserrat leading-snug mt-1">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="bg-white px-7 py-8 flex flex-col gap-5 justify-center">
              <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                {active.body}
              </p>
              <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
                Whether on-site in Lagos or across project locations, our teams are
                engaged in real construction environments that demand focus, adaptability,
                and technical competence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}