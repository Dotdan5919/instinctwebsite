'use client'
import Image from "next/image";
import buildingHero from "@/images/whoweare.jpg";
import React from 'react'
import { motion } from 'framer-motion'

export default function Whoweare() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white overflow-hidden"
    >
      <div className="grid lg:grid-cols-[1.2fr_1.1fr]">

        {/* Left — amber panel */}
        <div className="bg-[#e79c00] p-8 sm:p-12 xl:py-16 flex flex-col justify-center">
          <div className="flex flex-col sm:grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start sm:pl-10 lg:pl-20 xl:pl-30">
            
            {/* Title */}
            <h2 className="font-bebas text-4xl sm:text-5xl uppercase tracking-tight leading-tight text-white whitespace-nowrap">
              WHO WE ARE
            </h2>

            {/* Text */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm leading-7 text-white/90">
                We are a multidisciplinary team of engineers, builders, planners, and project specialists — brought together by a shared commitment to disciplined construction delivery.
              </p>
              <p className="text-sm leading-7 text-white/90">
                Our organization is built on technical depth and operational structure, allowing us to execute projects with a high degree of coordination, accuracy, and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Right — image flush */}
        <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[527px]">
          <Image
            src={buildingHero}
            alt="Field engineers reviewing plans"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </motion.section>
  )
}