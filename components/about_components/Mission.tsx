'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import vision from "@/images/vision.jpg"

export default function Mission() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-white py-24 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Outer rounded card */}
        <div className="grid lg:grid-cols-2 rounded-[32px] overflow-hidden min-h-[480px]">

          {/* Left — amber panel */}
          <div className="bg-[#e79c00] p-12 xl:p-14 flex flex-col justify-center">
            <h3 className="font-bebas text-5xl uppercase tracking-tight text-white sm:text-6xl">
              OUR MISSION
            </h3>
            <p className="mt-8 text-sm leading-8 text-white/90 font-montserrat">
              At Instinct Engineering, our mission is grounded in structured execution. We plan, coordinate, and deliver projects through systems that align scope, timelines, and resources from the outset.
            </p>
            <p className="mt-5 text-sm leading-8 text-white/90 font-montserrat">
              Our approach ensures that projects are delivered on schedule, built to specification, and executed without compromise. Through this, we have established a reputation for reliability, responsiveness, and consistent performance across both private and public sector projects.
            </p>
          </div>

          {/* Right — image with floating vision card */}
          <div className="relative">
            <Image
              src={vision}
              alt="Construction site"
              fill
              className="object-cover brightness-50"
            />
            {/* Floating vision card */}
            <div className="absolute inset-0 flex items-center justify-center p-15">
              <div className="bg-white rounded-[24px] p-8 shadow-xl max-w-lg w-full">
                <h3 className="font-bebas text-5xl uppercase tracking-tight text-black sm:text-6xl">
                  OUR VISION
                </h3>
                <p className="mt-5 text-sm leading-7 text-gray-900 font-montserrat">
                  We aim to sustain and strengthen our reputation through a continued commitment to responsiveness, adaptability, and disciplined execution.
                </p>
                <p className="mt-4 text-sm leading-7 text-gray-900 font-montserrat">
                  Our vision is to refine how construction is delivered — ensuring that every project reflects clarity in planning, coordination in execution, and confidence in outcome.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}