'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import precision from "@/images/precision.jpg";
import accountability from "@/images/accountability.jpg";
import discipline from "@/images/Discipline.jpg";
import integrity from "@/images/integrity.jpg";
import improvement from "@/images/improvement.jpg";



import buildingHero from "@/images/building.jpg";

const values = [
  {
    label: "Precision",
    summary: "We take ownership of every stage of delivery — ensuring responsibilities are clearly defined and outcomes are consistently achieved.",
    bullets: [
      "Maintain clear responsibility across all project phases",
      "Deliver on commitments with consistency and reliability",
    ],
    image: precision,
  },
  {
    label: "Accountability",
    summary: "Every detail is measured, validated, and executed with accuracy — reducing risk and ensuring consistency across all stages of delivery.",
    bullets: [
      "Regularly evaluate and enhance internal processes",
      "Adopt better methods to improve delivery and performance",
    ],
    image: accountability,
  },
  {
    label: "Integrity",
    summary: "We uphold transparency in communication, quality in execution, and consistency in standards — building trust through every interaction.",
    bullets: [
      "Communicate openly and honestly with all stakeholders",
      "Maintain high standards across all operations",
    ],
    image: integrity,
  },
  {
    label: "Improvement",
    summary: "We continuously refine our systems, processes, and methodologies — improving efficiency, performance, and long-term outcomes.",
    bullets: [
      "Regularly evaluate and enhance internal processes",
      "Adopt better methods to improve delivery and performance",
    ],
    image: improvement,
  },
  {
    label: "Discipline",
    summary: "We operate through defined systems and structured processes — ensuring consistency, control, and clarity in execution.",
    bullets: [
      "Follow established processes across all project stages",
      "Maintain consistency in delivery and performance",
    ],
    image: discipline,
  },
]

export default function OurValues() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = values[activeIndex]

  return (
    <section 
      id="our-values"
    
      className="bg-[#f0eeeb] py-24 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Top — title left, text right */}
        <motion.div 
        
          initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
        
        className="grid gap-10 lg:grid-cols-[0.5fr_1fr] items-start mb-16">
          <h2 className="font-bebas text-5xl uppercase tracking-tight sm:text-6xl">
            OUR VALUE
          </h2>
          <div className="space-y-5">
            <p className="text-base leading-8 text-slate-700">
              Our values define how we operate, guiding every decision, every interaction, and every stage of delivery.
            </p>
            <p className="text-base leading-8 text-slate-700">
              They shape the standards we uphold, the expectations we set, and the outcomes we deliver. These principles are embedded in our processes, our teams, and our approach to construction. They are not stated ideals, they are applied in how we build, deliver, and maintain trust.
            </p>
          </div>
        </motion.div>

        {/* Bottom — value list left, dynamic content right */}
        <div className="grid lg:grid-cols-[0.5fr_1fr] gap-10 items-start">

          {/* Left — clickable value list */}
          <div className="flex flex-col">
            {values.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setActiveIndex(i)}
                className={`text-left py-5 border-b border-slate-300 transition-all duration-200 ${
                  i === activeIndex
                    ? 'text-black font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <span className="text-xl font-montserrat">{v.label}</span>
              </button>
            ))}
          </div>

          {/* Right — dynamic content */}
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-700">
              {active.summary}
            </p>
            <ul className="space-y-3">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-7 text-gray-900">
                  <span className="mt-2 w-2.5 h-2.5 flex-shrink-0 bg-slate-800 rounded-sm" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-2xl">
              <div className="aspect-[16/7] relative">
                <Image
                  key={activeIndex}
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}