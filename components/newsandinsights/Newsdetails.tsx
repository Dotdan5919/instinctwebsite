'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import building from '@/images/building.jpg'
import GallerySection from '../projectdetails/Gallerysection'

const tabs = ['News', 'Reports', 'Blogs', 'White Papers']

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
  gallery: [building, building, building, building, building],
}

const relatedNews = [
  { id: 1, title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', image: building },
  { id: 2, title: 'Block of 8 Luxury Flats', location: 'Ajah, Lagos', image: building },
  { id: 3, title: "St. Peter's Catholic Churc...", location: 'Langbasa, Ajah', image: building },
]

export default function NewsDetailSection() {
  const [activeTab, setActiveTab] = useState('News')
  const [galleryIndex, setGalleryIndex] = useState(0)

  const VISIBLE = 3
  const canPrev = galleryIndex > 0
  const canNext = galleryIndex < article.gallery.length - VISIBLE

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Tab filters
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-montserrat font-medium border transition-all duration-200 ${activeTab === tab ? 'bg-amber-400 border-amber-400 text-white' : 'bg-white border-gray-300 text-gray-600 hover:border-amber-400 hover:text-amber-500'}`}>
              {tab}
            </button>
          ))}
        </div> */}

        {/* Title + intro — constrained width */}
        <div className="max-w-[730px] mb-8">
          <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold font-montserrat leading-snug mb-6">
            {article.title}
          </h1>
          <p className="text-gray-600 text-sm font-montserrat leading-relaxed">
            {article.intro}
          </p>
        </div>

        {/* Main image — full width edge to edge of container */}
        <div className="relative w-full h-[320px] sm:h-[460px] overflow-hidden mb-8">
          <Image
            src={article.mainImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Body text — constrained */}
        <div className="max-w-[730px]">
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
          <div className="mb-16">
            {article.body2.split('\n').map((line, i) => (
              <p key={i} className="text-gray-600 text-sm font-montserrat leading-relaxed">{line}</p>
            ))}
          </div>
        </div>

        {/* Gallery */}
        
 <div className="border-t border-slate-100">
        <GallerySection images={article.gallery} />
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
                className="relative h-[400px] sm:h-[420px] rounded-sm overflow-hidden group">
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