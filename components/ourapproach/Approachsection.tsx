'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface ApproachSectionProps {
  title: string
  paragraphs: string[]
  tags: string[]
  image: string | StaticImport
  imageAlt: string
  /** 'left' = text left + image right | 'right' = image left + text right */
  imagePosition?: 'left' | 'right'
  index?: number
  id?: string
}

function Tag({ label }: { label: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="inline-block rounded-lg bg-[#fdf6e3]  text-gray-900 text-lg px-4 py-2.5 font-medium"
    >
      {label}
    </motion.span>
  )
}

export default function ApproachSection({
  id,
  title,
  paragraphs,
  tags,
  image,
  imageAlt,
  imagePosition = 'right',
  index = 0,
}: ApproachSectionProps) {
  const isImageLeft = imagePosition === 'left'

  const textCol = (
    <motion.div
      initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center"
      id={id}
    >
      <h2 className="font-bebas text-4xl sm:text-5xl uppercase tracking-tight text-black mb-5 leading-none">
        {title}
      </h2>
      <div className="space-y-4 mb-8">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-7 text-gray-700">
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  )

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden"
      style={{ aspectRatio: '4/3' }}
      id={id}
    >
      <Image
        src={image}
        fill
        alt={imageAlt}
        className="object-cover"
      />
    </motion.div>
  )

  return (
    <section className="bg-white py-12" id={id}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14" id={id}>
        {/* Two-col grid — text and image swap sides per imagePosition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
          {isImageLeft ? (
            <>
              {imageCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {imageCol}
            </>
          )}
        </div>

        {/* Tags row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}