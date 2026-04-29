'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const building = "/images/building.jpg"
import GallerySection from '../projectdetails/Gallerysection'
const gallery_1 = "/images/news&insights/news_2.jpg"
const gallery_2 = "/images/news&insights/news_1.jpg"
const gallery_3 = "/images/precision.jpg"
const news_1 = "/images/news&insights/news_2.jpg"
const news_2 = "/images/news&insights/news_1.jpg"

const article = {
  title: 'Completion of Residential Development in Ajah',
  intro: `Instinct Engineering has successfully delivered a multi-unit residential development in Ajah, Lagos — marking the completion of a project defined by structured execution, coordinated delivery, and adherence to quality standards. The project reflects our continued commitment to delivering residential developments that meet defined specifications while maintaining consistency across all phases of construction.`,
  mainImage: building,
  body1: `The development comprises a multi-unit residential structure designed to provide functional, durable, and well-organized living spaces.\nFrom initial planning through to final execution, the project was delivered within defined timelines and aligned with required construction standards.`,
  meta: [
    { label: 'Project Type', value: 'Residential (Multi-Unit)' },
    { label: 'Location', value: 'Ajah, Lagos' },
    { label: 'Scope', value: 'Full Construction' },
    { label: 'Status', value: 'Completed' },
    { label: 'Structure', value: 'Reinforced Concrete' },
  ],
  body2: `The completed development delivers functional and durable residential units aligned with defined specifications.\nThe project stands as a reflection of Instinct Engineering's ability to manage and execute residential developments through structured processes and disciplined delivery.`,
  gallery: [gallery_1, gallery_2, gallery_3, building, gallery_1, gallery_2],
}

const relatedNews = [
  { id: 1, title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', image: news_1 },
  { id: 2, title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', image: news_2 },
  { id: 3, title: "St. Peter's Catholic Churc...", location: 'Langbasa, Ajah', image: building },
]

// ─── Share Button ─────────────────────────────────────────────────────────────
// ─── Share Button with Popover ────────────────────────────────────────────────
function ShareButton() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
  const pageTitle = article.title

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(pageUrl)}`
  }

  return (
    <div className="flex justify-start my-10">
      <div ref={ref} className="relative inline-block">

        {/* ── Popover ── */}
        {open && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50">
            {/* Arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />

            <p className="font-bold text-gray-900 font-montserrat text-sm mb-4">Share this insight</p>

            {/* Facebook */}
            
             <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-[#1877F2] text-white font-montserrat font-semibold text-sm mb-2 hover:bg-[#166fe5] transition-colors" >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              Share on Facebook
            </a>

            {/* LinkedIn */}
            
             <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-[#0A66C2] text-white font-montserrat font-semibold text-sm mb-2 hover:bg-[#0958a8] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" fill="white" />
              </svg>
              Share on LinkedIn
            </a>

            {/* Email */}
            <button
              onClick={handleEmail}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-800 font-montserrat font-medium text-sm mb-2 hover:bg-gray-200 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Share via Email
            </button>

            {/* Copy link */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-800 font-montserrat font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
              {copied ? 'Link Copied!' : 'Copy link'}
            </button>
          </div>
        )}

        {/* ── Trigger button ── */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 px-8 py-4 rounded-md border-2 border-[#FFA500] text-[#FFA500] font-bold font-montserrat text-base hover:bg-[#FFA500]/5 transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="18" cy="5" r="3" stroke="#FFA500" strokeWidth="2" />
            <circle cx="6" cy="12" r="3" stroke="#FFA500" strokeWidth="2" />
            <circle cx="18" cy="19" r="3" stroke="#FFA500" strokeWidth="2" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Share Insights
        </button>

      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function NewsDetailSection() {
  const [activeTab, setActiveTab] = useState('News')

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 relative">

        <div className="flex flex-col gap-4 absolute -top-50 z-10">
          <p className='text-[#FFA500]'>News & Insights</p>
          <div className="flex bg-[#996300]">
            <h1 className="text-white text-2xl sm:text-[64px] leading-snug mb-6 px-8 pt-3 font-bebas uppercase">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Title + intro */}
        <div className="w-full mb-8">
          <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold font-montserrat leading-snug mb-6">
            {article.title}
          </h1>
          <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
            {article.intro}
          </p>
        </div>

        {/* Main image */}
        <div className="relative w-full h-[320px] sm:h-[460px] overflow-hidden mb-8">
          <Image src={article.mainImage} alt={article.title} fill className="object-cover" priority />
        </div>

        {/* Body text */}
        <div className="w-full">
          <div className="mb-6">
            {article.body1.split('\n').map((line, i) => (
              <p key={i} className="text-gray-600 text-sm font-montserrat leading-relaxed">{line}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2 mb-6">
            {article.meta.map((item, i) => (
              <p key={i} className="text-gray-700 text-sm font-montserrat">
                <span className="font-bold">{item.label}:</span>{' '}
                <span className="font-normal">{item.value}</span>
              </p>
            ))}
          </div>
          <div className="mb-8">
            {article.body2.split('\n').map((line, i) => (
              <p key={i} className="text-gray-600 text-sm font-montserrat leading-relaxed">{line}</p>
            ))}
          </div>
        </div>

        {/* ── Share button — sits right after body, before gallery ── */}
        <ShareButton />

        {/* Gallery */}
        <div className="border-t border-slate-100 scale-110 mb-10">
          <GallerySection images={article.gallery ?? []} />
        </div>

        {/* Related News */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bebas text-gray-900 text-[36px] sm:text-[44px] leading-none tracking-wide">
              RELATED NEWS
            </h2>
            <Link href="/news" className="text-gray-500 text-sm font-montserrat hover:text-amber-500 transition-colors">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedNews.map((item) => (
              <Link
                key={item.id}
                href={`/newsandinsights/${item.id}`}
                className="relative h-[400px] sm:h-[420px] rounded-sm overflow-hidden group"
              >
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <div>
                    <p className="text-white text-sm font-bold font-montserrat leading-snug">{item.title}</p>
                    <p className="text-white/70 text-xs font-montserrat mt-1">{item.location}</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors ml-3">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
