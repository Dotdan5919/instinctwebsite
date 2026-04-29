'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const vision = "/images/vision.jpg"

export default function Mission() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-white py-14 sm:py-20 md:py-24 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Outer rounded card */}
        <div className="grid lg:grid-cols-2 rounded-[24px] sm:rounded-[32px] overflow-hidden">

          {/* Left — amber panel */}
          <div className="bg-[#e79c00] p-8 sm:p-12 xl:p-14 flex flex-col justify-center">
            <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              OUR MISSION
            </h3>
            <p className="mt-6 sm:mt-8 text-sm leading-7 sm:leading-8 text-white/90 font-montserrat">
              At Instinct Engineering, our mission is grounded in structured execution. We plan, coordinate, and deliver projects through systems that align scope, timelines, and resources from the outset.
            </p>
            <p className="mt-4 sm:mt-5 text-sm leading-7 sm:leading-8 text-white/90 font-montserrat">
              Our approach ensures that projects are delivered on schedule, built to specification, and executed without compromise. Through this, we have established a reputation for reliability, responsiveness, and consistent performance across both private and public sector projects.
            </p>
          </div>

          {/* Right — image with floating vision card */}
          <div className="relative min-h-[400px] sm:min-h-[480px]">
            <Image
              src={vision}
              alt="Construction site"
              fill
              className="object-cover brightness-50"
            />
            {/* Floating vision card */}
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 lg:p-12">
              <div className="bg-white rounded-[16px] sm:rounded-[24px] p-6 sm:p-8 shadow-xl w-full">
                <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black">
                  OUR VISION
                </h3>
                <p className="mt-4 sm:mt-5 text-sm leading-7 text-gray-900 font-montserrat">
                  We aim to sustain and strengthen our reputation through a continued commitment to responsiveness, adaptability, and disciplined execution.
                </p>
                <p className="mt-3 sm:mt-4 text-sm leading-7 text-gray-900 font-montserrat">
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
