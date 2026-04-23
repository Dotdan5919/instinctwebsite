'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Preheader() {
  const [stage, setStage] = useState<'enter' | 'visible' | 'exit' | 'reset'>('enter')

  useEffect(() => {
    const enterDuration = 16000
    const visibleDuration = 14000
    const exitDuration = 16000
    const resetDuration = 8000

    if (stage === 'enter') {
      const t = setTimeout(() => setStage('visible'), enterDuration)
      return () => clearTimeout(t)
    }
    if (stage === 'visible') {
      const t = setTimeout(() => setStage('exit'), visibleDuration)
      return () => clearTimeout(t)
    }
    if (stage === 'exit') {
      const t = setTimeout(() => setStage('reset'), exitDuration)
      return () => clearTimeout(t)
    }
    if (stage === 'reset') {
      const t = setTimeout(() => setStage('enter'), resetDuration)
      return () => clearTimeout(t)
    }
  }, [stage])

  const getTransform = () => {
    switch (stage) {
      case 'enter':
        return 'translateX(0%) translateY(-50%)'
      case 'visible':
        return 'translateX(0%) translateY(-50%)'
      case 'exit':
        return 'translateX(-200vw) translateY(-50%)'
      case 'reset':
        return 'translateX(200vw) translateY(-50%)'
    }
  }

  const getTransition = () => {
    switch (stage) {
      case 'enter':
        return 'transform 10s linear'
      case 'visible':
        return 'none'
      case 'exit':
        return 'transform 10s linear'
      case 'reset':
        return 'transform 8s linear'
    }
  }

  const animationStyles: React.CSSProperties = {
    position: 'absolute',
    left: '0',
    top: '50%',
    width: '100%',
    textAlign: 'center',
    transform: getTransform(),
    transition: getTransition(),
    whiteSpace: 'nowrap',
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-[#0d0d0d] py-2 overflow-hidden "
    >
      <div className="relative h-8 overflow-hidden">
        <span className="text-sm font-medium font-montserrat text-white" style={animationStyles}>
          15+ Years of Construction Delivery &nbsp;&nbsp;•&nbsp;&nbsp; Multi-Sector Expertise &nbsp;&nbsp;•&nbsp;&nbsp; Proven Performance
        </span>
      </div>
    </motion.div>
  )
}