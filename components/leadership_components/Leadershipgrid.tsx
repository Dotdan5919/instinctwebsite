'use client'
import React from 'react'
import { motion } from 'framer-motion'
import MemberCard, { type Member } from '@/components/leadership_components/Membercard'

interface LeadershipGridProps {
  title: string
  members: Member[]
  /** Max columns in the grid. Board uses 3, ops uses 3, management uses 3 */
  columns?: 2 | 3
}

export default function LeadershipGrid({
  title,
  members,
  columns = 3,
}: LeadershipGridProps) {
  return (
    <section className="bg-white pb-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="font-bebas text-xl tracking-widest uppercase text-slate-950 mb-8"
        >
          {title}
        </motion.h2>

        {/* Grid */}
        <div
          className={`grid gap-4 ${
            columns === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {members.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}