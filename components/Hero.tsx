'use client'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

const cyclingWords = ['CERTAINTY.', 'CONTROL.', 'DISCIPLINE.']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [animState, setAnimState] = useState<'visible' | 'exit' | 'enter'>('visible')

  useEffect(() => {
    const interval = setInterval(() => {
      // Exit animation
      setAnimState('exit')

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length)
        setAnimState('enter')
        setTimeout(() => setAnimState('visible'), 400)
      }, 400)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  const wordStyle: React.CSSProperties = {
    display: 'inline-block',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
    transform:
      animState === 'exit'
        ? 'translateY(40px)'
        : animState === 'enter'
        ? 'translateY(-40px)'
        : 'translateY(0)',
    opacity: animState === 'visible' ? 1 : 0,
  }

  return (
    <section className=" px-14 md:px-16  mx-auto w-full max-w-7xl relative min-h-screen overflow-hidden flex flex-col items-center bg-[url('/images/hero_bg.png')] bg-cover bg-center">
    
    
     {/* Dark overlay */}
      <div className="absolute inset-0  z-10" />

      {/* Content */}
      <div className="relative z-20 w-full  pt-24">

        {/* Headline */}
        <h1
          className="font-bebas leading-none tracking-wide mb-8 text-[100px]"
          
        >
          <span className="">BUILT WITH INTENT. <br/></span>
          <span className="">
            DELIVERED WITH{' '}
            <span className="text-amber-500" style={wordStyle}>
              {cyclingWords[wordIndex]}
            </span>
          </span>
        </h1>

        {/* Description + CTA row */}
        <div className="flex items-center  mb-16 max-w-4xl justify-between ">
          <div className="flex gap-4 items-center">
            <div className="w-3 h-2 p-2 bg-amber-500  mt-1" />
            <p className="text-gray-300 text-[15px] leading-relaxed font-montserrat ">
              At Instinct Engineering, construction is approached as a disciplined system
              where planning, precision, and execution align to produce outcomes that endure.
            </p>
          </div>

          <button className="flex-shrink-0 flex items-center gap-3 text-white font-semibold text-sm px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 hover:text-amber-500 font-montserrat transition-all duration-300 whitespace-nowrap">
  Explore our Approach
  <span className="text-base">↗</span>
</button>
        </div>

        {/* Steps */}
        <div className="flex gap-0">
          {[
            { num: '01', label: 'Defined Before Build', active: false },
            { num: '02', label: 'Controlled Delivery', active: true },
            { num: '03', label: 'Built to Perform', active: false },
          ].map((step) => (
            <div key={step.num} className="flex flex-col mr-16">
              <div className="w-48 h-[3px] mb-3" style={{ background: step.active ? '#f59e0b' : 'rgba(255,255,255,0.3)' }}>
                {step.active && <div className="h-full w-1/2 bg-amber-500" />}
              </div>
              <p className="text-white text-sm font-medium">
                <span className="text-white/60 mr-1">{step.num}</span>
                <span className="text-white/40 mr-2">|</span>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    {/* Rotating circular badge */}
<div className="absolute bottom-24 right-25 z-20 w-[140px] h-[140px] hover:scale-105 transition-transform duration-500">
  <div className="relative w-52 h-52 rounded-2xl bg-[#8F5E03] hover:bg-amber-900 flex items-center justify-center p-20">
    
    {/* Static circular text */}
    <svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 140 140"
>
  <defs>
    {/* Top arc - left to right */}
    <path
      id="top-arc"
      d="M 22,70 a 48,48 0 1,1 96,0"
    />
    {/* Bottom arc - right to left */}
    <path
      id="bottom-arc"
      d="M 118,70 a 48,48 0 1,1 -96,0"
    />
  </defs>

  {/* Top text */}
  <text fill="#f5d07a" style={{ fontSize: '7px', fontWeight: '600', letterSpacing: '3.5px' }}>
    <textPath href="#top-arc">
      Instinct Engineering
    </textPath>
  </text>

  {/* Bottom text */}
  <text fill="#f5d07a" style={{ fontSize: '7px', fontWeight: '600', letterSpacing: '3.5px' }}>
    <textPath href="#bottom-arc">
      Construction Limited
    </textPath>
  </text>
</svg>

    {/* Center */}
    <div className="flex flex-col items-center gap-1 z-10">
      <style>{`
        @keyframes arrowPulse {
          0%, 100% { opacity: 0.2; transform: translateY(-2px); }
          50% { opacity: 1; transform: translateY(2px); }
        }
        .arrow-pulse {
          animation: arrowPulse 2s ease-in-out infinite;
        }
      `}</style>
      <svg
        className="arrow-pulse w-5 h-5"
        fill="none"
        stroke="#FFA500"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <span className="text-[#f5d07a] text-[8px] font-semibold tracking-widest  w-20 h-7 flex items-center justify-center">Scroll down</span>
    </div>

  </div>
</div>
    </section>
  )
}