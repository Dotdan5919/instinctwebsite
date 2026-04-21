import React from 'react'
import { Member } from './Membercard';
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Silhouette from '@/components/Silhouette'

export default function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
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
          className="p-5 relative z-10 bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-slate-600 hover:bg-slate-100 transition-colors text-lg font-light"
            aria-label="Close"
          >
            ✕
          </button>

          <div className=" mx-auto h-[250px] w-64 flex items-center justify-center  rounded-t-xl  relative border-l-4  border-amber-500">
            {member.image ? (
              <Image
                src={member.image}
                fill
                alt={member.name}
                className="object-contain object-top rounded-lg"
              />
            ) : (
              <Silhouette />
            )}
          </div>

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