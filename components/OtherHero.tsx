'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
      className=" px-6 sm:px-10 md:px-14 lg:px-16 pt-10 mb-15 mx-auto w-full max-w-7xl relative overflow-hidden flex flex-col items-center bg-cover bg-center transition-all duration-1000 z-10"
    >
      <div className="absolute inset-0 z-10" />

     <div className="relative z-20 w-full mt-30 sm:mt-20 md:mt-24 min-h-0 sm:min-h-[260px] md:min-h-[300px]  flex flex-col justify-center gap-1.5 sm:justify-end">

  <p className="font-montserrat text-amber-500 text-sm sm:text-base">
    {title}
  </p>

  <h1
    className="
      font-bebas uppercase leading-none tracking-wide mb-0 sm:mb-8 text-white pt-2 sm:pt-6 md:pt-8
      sm:text-[clamp(36px,10vw,100px)] text-4xl
    "
  >
    {subtitle}
  </h1>
</div>
    </motion.section>
  )
}