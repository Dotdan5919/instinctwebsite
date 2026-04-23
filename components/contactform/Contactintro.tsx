'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactIntro() {
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
            CONTACT US
          </h1>

          {/* Right — description */}
          <p className="text-lg leading-7 text-gray-700  font-montserrat">
            Whether you're seeking a partner for a project, or are interested in a job opportunity,
            you can reach out to us for direct support. Our team is ready to assist and provide the
            expertise you need.
          </p>
        </div>
      </div>
    </motion.section>
  )
}