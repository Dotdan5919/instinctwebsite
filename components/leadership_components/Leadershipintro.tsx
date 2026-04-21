'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function LeadershipIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-16 text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20 items-start">
          {/* Left — heading */}
          <h1 className="font-bebas text-5xl uppercase tracking-tight text-slate-950 sm:text-6xl">
            OUR LEADERSHIP
          </h1>

          {/* Right — copy */}
          <div className="space-y-4">
            <p className="text-lg leading-7 text-slate-600">

                
              Our leadership team brings together decades of experience across engineering,
              construction, and project delivery.
            </p>
            <p className="text-lg leading-7 text-slate-600">
              Their role is not oversight alone, but active participation in ensuring that every
              project meets the standards we are known for.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}