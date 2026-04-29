'use client'
import { useState, useRef, useEffect } from 'react'

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

export default function ShareJobButton({ jobId }: { jobId: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  const jobUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/career/${jobId}`
    : `/career/${jobId}`

  const jobTitle = 'Site Engineer — Instinct Engineering'

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(jobTitle)}&body=${encodeURIComponent(`Check out this job opening at Instinct Engineering:\n\n${jobUrl}`)}`,
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(jobUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-fit" ref={popupRef}>

      {/* Share Job button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-400 text-amber-400 text-sm font-montserrat font-medium hover:border-amber-400 hover:text-amber-500 transition-all duration-200">
        <ShareIcon />
        Share Job
      </button>

      {/* Popup */}
      {open && (
        <div className="absolute bottom-full mb-3 left-0 bg-white rounded-2xl shadow-2xl border border-amber-400 p-5 w-[260px] z-50 flex flex-col gap-3">

          <p className="text-gray-900 text-sm font-semibold font-montserrat mb-1">
            Share this job
          </p>

          {/* Facebook */}
          
          <a  href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#1660d0] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="text-white text-sm font-montserrat font-medium">
              Share on Facebook
            </span>
          </a>

          {/* LinkedIn */}
          
         <a   href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#0A66C2] hover:bg-[#0852a0] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" fill="white" />
              <circle cx="4" cy="4" r="2" fill="white" />
            </svg>
            <span className="text-white text-sm font-montserrat font-medium">
              Share on LinkedIn
            </span>
          </a>

          {/* Email */}
          
          <a  href={shareLinks.email}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-gray-700 text-sm font-montserrat font-medium">
              Share via Email
            </span>
          </a>

          {/* Divider + Copy link */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={handleCopy}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span className="text-gray-700 text-sm font-montserrat font-medium">
                {copied ? '✓ Link copied!' : 'Copy link'}
              </span>
            </button>
          </div>

        </div>
      )}
    </div>
  )
}
