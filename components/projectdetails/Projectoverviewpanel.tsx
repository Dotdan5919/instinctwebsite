'use client'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ProjectOverview {
  status: string
  yearCompleted: string
  scope: string
  size: string
  clients: string[]
}

interface Props {
  open: boolean
  onClose: () => void
  overview: ProjectOverview
}

function Row({ label, value }: { label: string; value: string | string[] }) {
  const lines = Array.isArray(value) ? value : [value]
  return (
    <div className="flex py-6 border-b border-slate-200 last:border-0">
      <p className="text-[15px] font-bold text-slate-900 w-44 shrink-0">{label}:</p>
      <div>
        {lines.map((l, i) => (
          <p key={i} className="text-[15px] text-slate-500 leading-relaxed">{l}</p>
        ))}
      </div>
    </div>
  )
}

export default function ProjectOverviewPanel({ open, onClose, overview }: Props) {

  // Lock body scroll AND prevent horizontal overflow while panel is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflowX = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflowX = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — overflow hidden clips the sliding panel */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ── MOBILE: slides in from right, height fits content only ── */}
          <motion.div
            className="fixed top-40 right-4 z-50 flex flex-col overflow-hidden rounded-2xl lg:hidden"
            style={{ width: 'calc(100vw - 2rem)', maxWidth: 380 }}
            initial={{ x: '110%' }}
            animate={{ x: 0 }}
            exit={{ x: '110%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            {/* Amber header */}
            <div
              className="flex items-center justify-between px-6 py-4 shrink-0"
              style={{ background: '#8B6400' }}
            >
              <h2 className="text-[16px] font-bold text-white">Project Overview</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors text-xl font-light leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* White card body */}
            <div style={{ background: '#8B6400' }}>
              <div className="mx-4 my-4 rounded-xl border border-slate-200 bg-white px-5">
                <Row label="Status"         value={overview.status} />
                <Row label="Year Completed" value={overview.yearCompleted} />
                <Row label="Scope"          value={overview.scope} />
                <Row label="Size"           value={overview.size} />
                <Row label="Clients"        value={overview.clients} />
              </div>
            </div>
          </motion.div>

          {/* ── DESKTOP: full height, brown bg, title + × on brown, white card below ── */}
          <motion.div
            className="hidden lg:flex fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex-col"
            style={{ background: '#8B6400' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            {/* Title row — sits on brown */}
            <div className="flex items-center justify-between px-8 pt-10 pb-6 shrink-0">
              <h2 className="text-white text-2xl font-bold tracking-tight">Project Overview</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors text-2xl font-light leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* White card — scrollable, fills remaining height */}
            <div className="flex-1 overflow-y-auto px-6 pb-10">
              <div className="rounded-2xl border border-slate-200 bg-white px-8">
                <Row label="Status"         value={overview.status} />
                <Row label="Year Completed" value={overview.yearCompleted} />
                <Row label="Scope"          value={overview.scope} />
                <Row label="Size"           value={overview.size} />
                <Row label="Clients"        value={overview.clients} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}