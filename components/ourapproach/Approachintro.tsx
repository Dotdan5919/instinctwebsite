'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ApproachIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-16 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20 items-start">
          {/* Left — heading */}
          <h1 className="font-bebas text-5xl uppercase tracking-tight text-black sm:text-6xl leading-none">
            HOW WE DELIVER
          </h1>

          {/* Right — copy */}
          <div className="space-y-4">
            <p className="text-sm font-semibold leading-7 text-gray-900">
              Successful construction requires more than execution. It requires coordination across every stage of delivery.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              At Instinct Engineering, we operate through an integrated approach that aligns planning, project management, and construction within a single, structured system. This ensures that every phase, from early definition to final delivery, is connected, controlled, and executed with clarity.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              By maintaining alignment across design intent, resources, and site operations, we reduce complexity, improve efficiency, and deliver projects that meet defined standards for quality, performance, and reliability.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}