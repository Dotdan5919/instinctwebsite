'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const lafarge = "/images/lafarge.png"
const dangote = "/images/dangote.png"
const dulux = "/images/dulux.png"
const plascon = "/images/Plascon.png"
const royal = "/images/Royal.png"
const virony = "/images/vivory.png"
const arium = "/images/arium.png"
const president = "/images/PP.png"

const partners = [
  { name: 'Lafarge', logo: lafarge },
  { name: 'Dangote', logo: dangote },
  { name: 'Dulux', logo: dulux },
  { name: 'Plascon', logo: plascon },
  { name: 'Royal', logo: royal },
  { name: 'Virony', logo: virony },
  { name: 'Arium', logo: arium },
  { name: 'President', logo: president },
]

const allPartners = [...partners, ...partners]

export default function OurPartners() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationId: number
    let position = 0
    const speed = 0.5
    const singleSetWidth = track.scrollWidth / 2

    const animate = () => {
      position += speed
      if (position >= singleSetWidth) position = 0
      track.style.transform = `translateX(-${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const pause = () => cancelAnimationFrame(animationId)
    const resume = () => { animationId = requestAnimationFrame(animate) }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animationId)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white py-0 pb-28 sm:py-24 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Top — title left, description right */}
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] items-start mb-12">
          <h2 className="font-bebas text-3xl uppercase tracking-tight text-black sm:text-6xl">
            OUR PARTNERS
          </h2>
          <p className="text-base leading-8 text-gray-900">
            Our work is strengthened through long-term partnerships with clients, consultants, and stakeholders who share a commitment to quality and structured execution. These relationships are built on trust, transparency, and consistent performance — enabling us to deliver projects that meet defined expectations across every stage of construction.
          </p>
        </div>

        {/* Framed logo slider */}
        <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-white py-8">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex items-center gap-16 w-max px-8"
              style={{ willChange: 'transform' }}
            >
              {allPartners.map((partner, i) => (
                <div key={`${partner.name}-${i}`} className="relative h-34 w-44 flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain  transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  )
}
