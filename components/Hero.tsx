'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const cyclingWords = ['CERTAINTY.', 'CONTROL.', 'DISCIPLINE.']

const steps = [
  { num: '01', label: 'Defined Before Build' },
  { num: '02', label: 'Controlled Delivery' },
  { num: '03', label: 'Built to Perform' },
]

export default function Hero({ currentStep = 0 }: { currentStep?: number }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [animState, setAnimState] = useState<'visible' | 'exit' | 'enter'>('visible')

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('exit')
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length)
        setAnimState('enter')
        setTimeout(() => setAnimState('visible'), 400)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 9, behavior: 'smooth' })
  }

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
    <section className="px-6 sm:px-10 lg:px-14 mx-auto w-full max-w-7xl relative min-h-screen flex flex-col items-center">
      <style>{`
        @keyframes fillLine {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .fill-line {
          animation: fillLine 5s linear forwards;
        }
        @keyframes arrowPulse {
          0%, 100% { opacity: 0.2; transform: translateY(-2px); }
          50%       { opacity: 1;   transform: translateY(2px);  }
        }
        .arrow-pulse {
          animation: arrowPulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-10" />

      <div className="relative z-20 w-full pt-16 sm:pt-20 lg:pt-24">

        {/* ─── Headline ─── */}
      <h1 className="font-bebas leading-none tracking-wide mb-6 sm:mb-8
                text-[52px] sm:text-[72px] md:text-[88px] lg:text-[100px] text-white">
  <span>BUILT WITH INTENT.<br /></span>
  <span>
    DELIVERED WITH{' '}
    <span className="text-amber-500" style={wordStyle}>
      {cyclingWords[wordIndex]}
    </span>
  </span>
</h1>

        {/* ─── Subtitle row ─── */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-10 sm:mb-16
                        max-w-4xl gap-5 sm:gap-0 sm:justify-between">
          <div className="flex gap-3 sm:gap-4 items-start sm:items-center">
            <div className="w-3 h-2 p-2 bg-amber-500 mt-1 flex-shrink-0" />
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed font-montserrat max-w-[480px]">
              At Instinct Engineering, construction is approached as a disciplined system
              where planning, precision, and execution align to produce outcomes that endure.
            </p>
          </div>
          <Link href="/ourapproach" className="self-start sm:self-auto flex-shrink-0 flex items-center gap-3 text-white
                             font-semibold text-sm px-5 sm:px-6 py-3 rounded-lg border border-white/30
                             bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50
                             hover:text-amber-500 font-montserrat transition-all duration-300 whitespace-nowrap">
            Explore our Approach
            <span className="text-base">↗</span>
          </Link>
        </div>

        {/* ─── Steps ─── */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
          {steps.map((step, index) => {
            const isActive = index === currentStep
            const isDone = index < currentStep

            return (
              <div key={step.num} className="flex flex-col sm:mr-12 lg:mr-16">
                <div
                  className="w-full sm:w-36 md:w-44 lg:w-48 h-[3px] mb-3 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  {isDone && <div className="h-full w-full bg-amber-500" />}
                  {isActive && (
                    <div
                      key={currentStep}
                      className="fill-line h-full bg-amber-500"
                    />
                  )}
                </div>
                <p className="text-white text-sm font-medium">
                  <span className="text-white/60 mr-1">{step.num}</span>
                  <span className="text-white/40 mr-2">|</span>
                  <span style={{ opacity: isActive ? 1 : 0.4 }}>{step.label}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ─── Scroll badge ─── */}
      {/* Hidden on small screens, visible from md up */}
      <div
        className="hidden md:flex absolute bottom-16 lg:bottom-24 right-6 lg:right-24 z-20
                   w-[110px] h-[110px] lg:w-[140px] lg:h-[140px]
                   hover:scale-105 transition-transform duration-500 cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="relative w-full h-full rounded-2xl bg-[#8F5E03] hover:bg-amber-900
                        flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 140 140">
            <defs>
              <path id="top-arc"    d="M 22,70 a 48,48 0 1,1 96,0" />
              <path id="bottom-arc" d="M 118,70 a 48,48 0 1,1 -96,0" />
            </defs>
            <text fill="#f5d07a" style={{ fontSize: '7px', fontWeight: '600', letterSpacing: '3.5px' }}>
              <textPath href="#top-arc">Instinct Engineering</textPath>
            </text>
            <text fill="#f5d07a" style={{ fontSize: '7px', fontWeight: '600', letterSpacing: '3.5px' }}>
              <textPath href="#bottom-arc">Construction Limited</textPath>
            </text>
          </svg>
          <div className="flex flex-col items-center gap-1 z-10">
            <svg className="arrow-pulse w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="#FFA500" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-[#f5d07a] text-[7px] lg:text-[8px] font-semibold tracking-widest
                             w-16 lg:w-20 h-7 flex items-center justify-center">
              Scroll down
            </span>
          </div>
        </div>
      </div>

      {/* ─── Mobile scroll hint (replaces badge on small screens) ─── */}
      <div
        className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                   flex flex-col items-center gap-1 cursor-pointer opacity-60"
        onClick={handleScrollDown}
      >
        <svg className="arrow-pulse w-5 h-5" fill="none" stroke="#FFA500" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="text-[#f5d07a] text-[9px] font-semibold tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}
