'use client'
import React from 'react'
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
    <div className="flex py-8 border-b border-slate-200 last:border-0">
      <p className="text-sm font-semibold text-slate-900 w-44 shrink-0">{label}:</p>
      <div>
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-slate-700 leading-relaxed">{l}</p>
        ))}
      </div>
    </div>
  )
}

export default function ProjectOverviewPanel({ open, onClose, overview }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel slides in from right */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            {/* Amber header */}
            <div
              className="flex items-center justify-between px-8 py-7 shrink-0"
              style={{ background: '#8B6400' }}
            >
              <h2 className="text-white text-xl font-semibold">Project Overview</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors text-2xl font-light leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* White card body */}
            <div className="flex-1 overflow-y-auto bg-white" style={{ background: '#8B6400' }}>
              <div className="mx-6 my-6 rounded-xl border border-slate-200 bg-white px-8">
                <Row label="Status" value={overview.status} />
                <Row label="Year Completed" value={overview.yearCompleted} />
                <Row label="Scope" value={overview.scope} />
                <Row label="Size" value={overview.size} />
                <Row label="Clients" value={overview.clients} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}