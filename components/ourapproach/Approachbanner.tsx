'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const onesystem = "/images/ourapproach/onesystem.jpg";
import Btn from '../Btn';

export default function ApproachBanner() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden min-h-[420px] flex items-end"
        >
          {/* Background image */}
          <Image
            src={onesystem}
            
            fill
            alt="Construction workers collaborating"
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 px-10 py-12 max-w-2xl">
            <h2 className="font-bebas text-5xl sm:text-6xl uppercase text-white leading-tight mb-5">
              ONE SYSTEM.<br />FULLY ALIGNED.
            </h2>
            <p className="text-sm leading-7 text-white/85 mb-3">
              Each stage of our approach is interconnected — forming a single, coordinated system of delivery. From early planning through to final execution, our processes ensure continuity, reduce risk, and maintain alignment across all project components.
            </p>
            <p className="text-sm leading-7 text-white/85 mb-8">
              This integrated approach allows us to deliver projects with consistency, clarity, and confidence.
            </p>

            {/* Arrow CTA */}
         

            <Btn text='See our Expertise' />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
