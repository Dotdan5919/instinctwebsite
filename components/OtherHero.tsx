'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const steps = [
  { num: '01', label: 'Defined Before Build' },
  { num: '02', label: 'Controlled Delivery' },
  { num: '03', label: 'Built to Perform' },
]

export default function OtherHero({title, subtitle}: {title?: string, subtitle?: string}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
      setProgress(0)
    }, 5000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / 50), 100))
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
      className="px-14 md:px-16 mx-auto w-full max-w-7xl relative  overflow-hidden flex flex-col items-center bg-cover bg-center transition-all duration-1000"
    >

      {/* Dark overlay */}
      
      <div className="absolute inset-0 z-10" />


      {/* Content */}
      <div className="relative z-20 w-full mt-24 h-[300px] flex flex-col justify-end ">

        {/* Headline */}
        <p className="font-montserrat text-amber-500">{title}</p>
        <h1 className="font-bebas uppercase leading-none tracking-wide mb-8 text-[100px] text-white pt-8">
         
         {subtitle }
          
        </h1>

     
      </div>

   
   
   
    </motion.section>
  )
}