'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface GalleryProps {
  images: (string | StaticImport)[]
}

export default function GallerySection({ images }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' })
  }

  const prev = () => setLightboxIndex((i) => (i === null ? null : i === 0 ? images.length - 1 : i - 1))
  const next = () => setLightboxIndex((i) => (i === null ? null : i === images.length - 1 ? 0 : i + 1))

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setLightboxIndex(null)
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Header row */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-bebas text-4xl uppercase tracking-tight text-black">GALLERY</h2>
          <div className="flex gap-2">
            {/* Prev */}
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:border-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* Next */}
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#e8a020] flex items-center justify-center text-white hover:bg-[#c98a18] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll strip — no scrollbar */}
        <style>{`
          #gallery-strip::-webkit-scrollbar { display: none; }
          #gallery-strip { scrollbar-width: none; -ms-overflow-style: none; }
        `}</style>
        <div
          id="gallery-strip"
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
              style={{ width: 340, height: 240, scrollSnapAlign: 'start' }}
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={src}
                fill
                alt={`Gallery image ${i + 1}`}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {/* zoom icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 10l4 4M6.5 11A4.5 4.5 0 106.5 2a4.5 4.5 0 000 9zM6.5 4.5v4M4.5 6.5h4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl font-light z-10"
              onClick={() => setLightboxIndex(null)}
            >
              ✕
            </button>

            {/* Counter */}
            <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {images.length}
            </p>

            {/* Prev button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative"
              style={{ width: 'min(90vw, 900px)', height: 'min(80vh, 600px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                fill
                alt={`Gallery image ${lightboxIndex + 1}`}
                className="object-contain rounded-lg"
              />
            </motion.div>

            {/* Next button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 14l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}