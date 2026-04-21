
'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Member {
  name: string
  role: string
  image?: string          // undefined = placeholder silhouette
  bio?: string            // shown in modal
}

// ─── Silhouette placeholder SVG ───────────────────────────────────────────────
function Silhouette() {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="200" height="220" fill="#eeeeed" />
      {/* body */}
      <ellipse cx="100" cy="190" rx="72" ry="48" fill="#8b8f96" />
      {/* torso */}
      <rect x="62" y="130" width="76" height="70" rx="8" fill="#8b8f96" />
      {/* tie */}
      <polygon points="100,128 107,145 100,170 93,145" fill="#6b6f75" />
      {/* collar */}
      <polygon points="86,128 100,145 114,128 107,124 100,132 93,124" fill="#a0a4ab" />
      {/* head */}
      <ellipse cx="100" cy="90" rx="38" ry="44" fill="#8b8f96" />
    </svg>
  )
}

// ─── Name/role overlay badge (bottom of photo cards) ─────────────────────────
function NameBadge({ name, role, dark = false }: { name: string; role: string; dark?: boolean }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 px-4 py-3 ${
        dark ? 'bg-black/55' : 'bg-white/80'
      } backdrop-blur-[2px]`}
      style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
    >
      <p className={`text-sm font-bold leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        {name}
      </p>
      <p className={`text-xs mt-0.5 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{role}</p>
    </div>
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Panel */}
        <motion.div
          className="relative z-10 bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-slate-600 hover:bg-slate-100 transition-colors text-lg font-light"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Photo */}
          <div className="w-full aspect-[3/2] overflow-hidden rounded-t-xl bg-slate-200">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <Silhouette />
            )}
          </div>

          {/* Info */}
          <div className="px-8 py-6">
            <h2 className="text-xl font-bold text-slate-900">{member.name}</h2>
            <p className="text-sm text-slate-500 mt-1 mb-4">{member.role}</p>
            {member.bio && (
              <p className="text-sm leading-7 text-slate-600 whitespace-pre-line">{member.bio}</p>
            )}
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
          // amber left border for no-photo cards; amber full border for photo cards on hover
          border: hasPhoto
            ? `2px solid ${hovered ? '#e8a020' : 'transparent'}`
            : '2px solid #e8a020',
          // no-photo cards: white bg; photo cards: no bg needed
          background: hasPhoto ? 'transparent' : '#f5f5f2',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Photo or silhouette */}
        {hasPhoto ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center pb-16">
            <div className="w-3/4 h-3/4">
              <Silhouette />
            </div>
          </div>
        )}

        {/* Name badge — always visible on photo cards; sits below silhouette on no-photo */}
        {hasPhoto ? (
          <NameBadge name={member.name} role={member.role} dark />
        ) : (
          <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
            <p className="text-sm font-bold text-slate-900">{member.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
          </div>
        )}

        {/* Arrow button — shows on hover for photo cards */}
        {hasPhoto && (
          <motion.div
            className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#e8a020] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.18 }}
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
          </motion.div>
        )}
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <MemberModal member={member} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}