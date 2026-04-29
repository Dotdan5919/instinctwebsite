'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectsIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20 items-start">
          {/* Left — heading */}
          <h1 className="font-bebas text-5xl sm:text-6xl uppercase tracking-tight text-black leading-none">
            OUR PROJECTS
          </h1>

          {/* Right — copy */}
          <div className="space-y-4">
            <p className="text-lg font-montserrat  text-gray-700">
              This project involved the development of a multi-unit residential building designed to
              deliver functional, durable, and well-structured living spaces.
            </p>
            <p className="text-lg font-montserrat text-slate-600">
              Instinct Engineering coordinated the project from planning through execution —
              ensuring alignment across design, resources, and construction activities to achieve a
              consistent and controlled outcome.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
