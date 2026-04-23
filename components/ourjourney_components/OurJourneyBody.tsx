'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Btn from '../Btn'
import Timeline_1 from '@/images/Discipline.jpg'    

// ─── Data ─────────────────────────────────────────────────────────────────────
const milestones = [
  {
    year: ['2006'],
    heading: 'FOUNDATION',
    paragraphs: [
      'Establishment of Instinct Engineering, delivering early residential developments including multi-unit terrace housing at Peace Estate, Oregun.',
    ],
    image: Timeline_1,
  },
  {
    year: ['2008', 'To', '2010'],
    heading: 'EXPANSION INTO INFRASTRUCTURE & INSTITUTIONAL PROJECTS',
    paragraphs: [
      'Delivery of road construction within LSDPC Estate, Iba, and institutional projects including banking facilities and residential developments across Lagos and other states.',
      "This phase marked the company's expansion into infrastructure and multi-sector project delivery.",
    ],
    image: Timeline_1,
  },
  {
    year: ['2014', 'To', '2015'],
    heading: 'COMPLEX PROJECT DELIVERY',
    paragraphs: [
      'Execution of drainage systems, structural works, and high-end residential developments including luxury duplexes and estate projects in Lagos.',
      'Demonstrated capability in managing technically demanding and multi-phase projects.',
    ],
    image: Timeline_1,
  },
  {
    year: ['2016', 'To', '2018'],
    heading: 'RESIDENTIAL & MIXED DEVELOPMENT GROWTH',
    paragraphs: [
      'Delivery of multiple residential developments, including duplexes, apartment blocks, and renovation projects across Lekki, Ajah, Magodo, and surrounding areas.',
      'This period reflects strong growth in residential and mixed-use project execution.',
    ],
    image: Timeline_1,
  },
  {
    year: ['2020'],
    heading: 'CONSOLIDATION & CONTINUED DELIVERY',
    paragraphs: [
      'Each phase of our journey has strengthened our ability to deliver — refining the systems, expertise, and coordination that define our work today.',
    ],
    image: Timeline_1,
  },
]

// ─── Map-pin icon rotated to point LEFT ───────────────────────────────────────
// The pin's tail points left toward the year label; the round head sits on the spine.
// Achieved by drawing a standard top-pointing SVG pin and rotating -90deg.
function LocationPin() {
  return (
    <div
      className="absolute z-10"
      style={{
        // Centre the pin on the spine line at the year row's midpoint.
        // The pin SVG is 28×34. Rotated -90deg: effective width=34, height=28.
        // We want the pointy tail to touch left and the circle head on the spine.
        left: '50%',
        top: '50%',
        transform: 'translate(4%, -50%) rotate(90deg)',
        width: 28,
        height: 34,
      }}
    >
      <svg
  viewBox="0 0 28 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  width={28}
  height={34}
>
  {/* Pin body */}
  <path
    d="M14 0C7.373 0 2 5.373 2 12c0 9 12 22 12 22s12-13 12-22C26 5.373 20.627 0 14 0z"
    fill="#e8a020"
  />
  {/* White filled circle — larger to clearly show as solid white */}
  <circle cx="14" cy="12" r="5.5" fill="#ffffff" />
</svg>
    </div>
  )
}



// ─── Intro section ────────────────────────────────────────────────────────────
function JourneyIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-24 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20 items-start px-6">

          {/* Left — big heading */}
          <h1 className="font-bebas text-5xl uppercase tracking-tight text-black sm:text-6xl sticky top-24">
            OUR JOURNEY
          </h1>

          {/* Right — copy + CTA */}
          <div className="space-y-5 font-montserrat">
            <p className=" text-gray-900">Growth, measured over time.</p>
            <p className=" text-gray-700 ">
              Our journey reflects steady growth in capability, experience, and project delivery.
              Each milestone represents a progression — refining our systems, strengthening our
              expertise, and expanding our ability to execute complex projects.
            </p>
           
            <Btn text="See all projects"  />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ─── Single timeline row ──────────────────────────────────────────────────────
function TimelineItem({
  milestone,
  index,
  isLast,
}: {
  milestone: (typeof milestones)[0]
  index: number
  isLast: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: index * 0.15 }}
      viewport={{ once: false, margin: '0px 0px -100px 0px' }}
      className="grid"
      style={{ gridTemplateColumns: '80px 0px 1fr' }}
    >
      {/* ── Year label ── */}
      <div className="flex items-center justify-end pr-8 self-center">
        <div className="text-center  font-montserrat text-2xl font-bold text-black">
          {milestone.year.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      {/* ── Spine column (zero-width, overflows) ── */}
      <div className="relative flex justify-center">
        {/* vertical amber line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#e8a020]"
          style={{ top: 0, bottom: isLast ? '50%' : 0 }}
        />
        {/* Map-pin marker at year midpoint */}
        <LocationPin />
      </div>

      {/* ── Content ── */}
      <div className="pl-12 pb-16 pt-0 font-montserrat">
        <h2 className="mb-5  font-bold text-[24px] uppercase  text-gray-900">
          {milestone.heading}
        </h2>

        {milestone.paragraphs.map((p, i) => (
          <p
            key={i}
            className={` leading-7 text-gray-700 text-[18px]  ${
              i < milestone.paragraphs.length - 1 ? 'mb-3' : 'mb-6'
            }`}
          >
            {p}
          </p>
        ))}

        {/* Image */}
        <div
          className=" overflow-hidden rounded-lg bg-slate-300"
          style={{ aspectRatio: '16 / 5.2' }}
        >
          <Image
          width="100"
          height="100"

            src={milestone.image}
            alt={milestone.heading}
            className="h-full w-full object-cover"
            style={{ filter: 'grayscale(15%) brightness(0.85)' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// ─── Timeline section ─────────────────────────────────────────────────────────
function JourneyTimeline() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#f4f4ef]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 pt-16 pb-0">
        {milestones.map((m, i) => (
          <TimelineItem
            key={m.heading}
            milestone={m}
            index={i}
            isLast={i === milestones.length - 1}
          />
        ))}
      </div>
    </motion.section>
  )
}

// ─── Default export ───────────────────────────────────────────────────────────
export default function OurJourneyBody() {
  return (
    <>
      <JourneyIntro />
      <JourneyTimeline />
    </>
  )
}