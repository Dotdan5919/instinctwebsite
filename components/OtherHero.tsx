'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const steps = [
  { num: '01', label: 'Defined Before Build' },
  { num: '02', label: 'Controlled Delivery' },
  { num: '03', label: 'Built to Perform' },
]

export default function OtherHero({ title, subtitle }: { title?: string; subtitle?: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
      setProgress(0)
    }, 5000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / 50, 100))
    }, 100)

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="px-6 sm:px-10 md:px-14 lg:px-16 pt-16 mx-auto w-full max-w-7xl relative overflow-hidden flex flex-col items-center bg-cover bg-center transition-all duration-1000"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full mt-16 sm:mt-20 md:mt-24 h-auto min-h-[200px] sm:min-h-[260px] md:min-h-[300px] flex flex-col justify-end">

        {/* Eyebrow label */}
        <p className="font-montserrat text-amber-500 text-sm sm:text-base">
          {title}
        </p>

        {/* Headline — scales fluidly from mobile to desktop */}
        <h1
          className="
            font-bebas uppercase leading-none tracking-wide mb-6 sm:mb-8 text-white pt-4 sm:pt-6 md:pt-8
            text-[clamp(48px,12vw,100px)]
          "
        >
          {subtitle}
        </h1>
      </div>
    </motion.section>
  )
}