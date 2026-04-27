'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface Member {
  name: string
  role: string
  image?: string | StaticImport
  bio?: string
}

// ─── Silhouette placeholder SVG ───────────────────────────────────────────────
function Silhouette() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="220" fill="#eeeeed" />
      <ellipse cx="100" cy="190" rx="72" ry="48" fill="#8b8f96" />
      <rect x="62" y="130" width="76" height="70" rx="8" fill="#8b8f96" />
      <polygon points="100,128 107,145 100,170 93,145" fill="#6b6f75" />
      <polygon points="86,128 100,145 114,128 107,124 100,132 93,124" fill="#a0a4ab" />
      <ellipse cx="100" cy="90" rx="38" ry="44" fill="#8b8f96" />
    </svg>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const updatePill = () => {
    const el = scrollRef.current
    const pill = pillRef.current
    const track = trackRef.current
    if (!el || !pill || !track) return
    const trackH = track.offsetHeight
    const scrollable = el.scrollHeight - el.clientHeight
    const ratio = scrollable > 0 ? el.scrollTop / scrollable : 0
    const pillH = Math.max(28, trackH * (el.clientHeight / el.scrollHeight))
    pill.style.height = `${pillH}px`
    pill.style.top = `${ratio * (trackH - pillH)}px`
  }

  useEffect(() => {
    setTimeout(updatePill, 100)
  }, [member])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative z-10 bg-white rounded-xl shadow-2xl w-full max-w-lg pt-8 overflow-hidden"
          style={{ maxHeight: '90vh' }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* hide webkit scrollbar */}
          <style>{`#member-scroll::-webkit-scrollbar { display: none; }`}</style>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-gray-700 hover:bg-gray-100 transition-colors text-lg font-light"
            aria-label="Close"
          >
            ✕
          </button>

          {/* scroll wrapper */}
          <div style={{ position: 'relative', maxHeight: '90vh', borderRadius: '0.75rem', overflow: 'hidden' }}>

            {/* actual scrollable area */}
            <div
              id="member-scroll"
              ref={scrollRef}
              onScroll={updatePill}
              style={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                maxHeight: '90vh',
                paddingRight: '24px',
                paddingBottom: '24px',
              } as React.CSSProperties}
            >
              <div className="mx-auto h-[250px] w-64 flex items-center justify-center rounded-t-xl relative border-l-4 border-amber-500">
                {member.image ? (
                  <Image src={member.image} fill alt={member.name} className="object-contain object-top rounded-lg" />
                ) : (
                  <Silhouette />
                )}
              </div>
              <div className="px-8 py-6">
                <h2 className="text-xl font-bold text-black">{member.name}</h2>
                <p className="text-sm text-gray-600 mt-1 mb-4">{member.role}</p>
                {member.bio && (
                  <p className="text-sm leading-7 text-gray-800 whitespace-pre-line">{member.bio}</p>
                )}
              </div>
            </div>

            {/* custom amber pill */}
            <div
              ref={trackRef}
              style={{
                position: 'absolute',
                top: '10px',
                right: '5px',
                width: '4px',
                height: 'calc(100% - 20px)',
                borderRadius: '4px',
                background: 'rgba(0,0,0,0.08)',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              <div
                ref={pillRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-2px',
                  width: '8px',
                  height: '40px',
                  background: '#e8a020',
                  borderRadius: '4px',
                  transition: 'top 0.08s linear, height 0.08s linear',
                }}
              />
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
// ─── The card itself ──────────────────────────────────────────────────────────
export default function MemberCard({
  member,
  index = 0,
}: {
  member: Member
  index?: number
}) {
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const hasPhoto = !!member.image

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.07 }}
        viewport={{ once: true }}
        className="relative cursor-pointer rounded-lg overflow-hidden"
        style={{
          aspectRatio: '3 / 3.6',
          borderLeft: hasPhoto
            ? `4px solid ${hovered ? '#e8a020' : 'transparent'}`
            : '4px solid #e8a020',
          background: hasPhoto ? 'transparent' : '#f5f5f2',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* ── Image / silhouette ── */}
        {hasPhoto ? (
          <div className="absolute inset-0">
            <Image
              src={member.image!}
              fill
              alt={member.name}
              className="object-cover object-top"
              style={{
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center pb-16">
            <div className="w-3/4 h-3/4">
              <Silhouette />
            </div>
          </div>
        )}

        {/* ── Dark gradient overlay — fades in on hover (photo cards only) ── */}
        {hasPhoto && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)',
              opacity: hovered ? 1 : 0.45,
              transition: 'opacity 0.35s ease',
            }}
          />
        )}

        {/* ── Name badge — slides up on hover ── */}
        {hasPhoto ? (
          <div
            className="absolute left-0 right-0 px-5 py-4"
            style={{
              bottom: hovered ? '28px' : '8px',
              transition: 'bottom 0.35s ease',
            }}
          >
            {/* frosted pill */}
            <div className="rounded-lg bg-white/15 backdrop-blur-[3px] px-4 py-3">
              <p className="text-base font-bold text-white leading-tight">{member.name}</p>
              <p className="text-sm text-white/75 mt-0.5">{member.role}</p>
            </div>
          </div>
        ) : (
          /* No-photo card: static label below silhouette */
          <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
            <p className="text-sm font-bold text-black">{member.name}</p>
            <p className="text-xs text-gray-600 mt-0.5">{member.role}</p>
          </div>
        )}

        {/* ── Arrow button — appears on hover ── */}
        {hasPhoto && (
          <div
            className="absolute bottom-6 right-5 w-9 h-9 rounded-full bg-[#e8a020] flex items-center justify-center"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(0.6)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3v6"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <MemberModal member={member} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}