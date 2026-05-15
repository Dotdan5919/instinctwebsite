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
      className="bg-white py-0 pt-10 sm:py-24 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20 items-start">
          {/* Left — heading */}
          <h1 className="font-bebas text-3xl uppercase tracking-tight text-black sm:text-6xl">
            OUR LEADERSHIP
          </h1>

          {/* Right — copy */}
          <div className="space-y-4">
            <p className=" leading-7 text-slate-600">

                
              Our leadership team brings together decades of experience across engineering,
              construction, and project delivery.
            </p>
            <p className=" leading-7 text-slate-600">
              Their role is not oversight alone, but active participation in ensuring that every
              project meets the standards we are known for.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
