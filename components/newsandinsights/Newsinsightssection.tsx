'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import building from '@/images/building.jpg'

const tabs = ['News', 'Reports', 'Blogs', 'White Papers']

const articles = [
  {
    id: 1,
    category: 'Company News',
    title: 'Completion of Residential Development in Ajah',
    date: 'April 23, 2026',
    tab: 'News',
    image: building,
    hasArrow: true,
  },
  {
    id: 2,
    category: 'All News | Graduates',
    title: 'New Infrastructure Project Awarded in Lagos',
    date: 'April 23, 2026',
    tab: 'News',
    image: building,
    hasArrow: true,
  },
  {
    id: 3,
    category: 'All News | Events',
    title: 'Piling Phase Completed for Chisco Court Devel...',
    date: 'April 23, 2026',
    tab: 'News',
    image: building,
    hasArrow: true,
  },
  {
    id: 4,
    category: 'Company News',
    title: 'Completion of Residential Development in Ajah',
    date: 'April 23, 2026',
    tab: 'News',
    image: building,
    hasArrow: true,
  },
  {
    id: 5,
    category: 'All News | Graduates',
    title: 'New Infrastructure Project Awarded in Lagos',
    date: 'April 23, 2026',
    tab: 'News',
    image: building,
    hasArrow: true,
  },
  {
    id: 6,
    category: 'All News | Events',
    title: 'Piling Phase Completed for Chisco Court Devel...',
    date: 'April 23, 2026',
    tab: 'News',
    image: building,
    hasArrow: true,
  },
  {
    id: 7,
    category: 'Reports',
    title: '2026 Construction Industry Annual Report',
    date: 'April 23, 2026',
    tab: 'Reports',
    image: building,
    hasArrow: true,
  },
  {
    id: 8,
    category: 'Reports',
    title: 'Q1 Infrastructure Delivery Summary',
    date: 'April 23, 2026',
    tab: 'Reports',
    image: building,
    hasArrow: true,
  },
  {
    id: 9,
    category: 'Blogs',
    title: 'How Lean Construction is Changing Project Delivery',
    date: 'April 23, 2026',
    tab: 'Blogs',
    image: building,
    hasArrow: true,
  },
  {
    id: 10,
    category: 'White Papers',
    title: 'Structured Methodology in Nigerian Construction',
    date: 'April 23, 2026',
    tab: 'White Papers',
    image: building,
    hasArrow: true,
  },
]

const tabDescriptions: Record<string, string> = {
  News: 'Stay informed on our latest projects, industry perspectives, technical insights, and company updates, reflecting how we think, operate, and deliver across construction and infrastructure.',
  Reports: 'Our reports provide structured insights into how we plan, execute, and deliver projects.From project-level documentation to company-wide performance reviews, each report reflects our commitment to clarity, accountability, and continuous improvement across all aspects of construction delivery.',
  Blogs: 'Read thought leadership articles written by our team on construction methods, project delivery, and industry trends.',
  'White Papers': 'Download in-depth white papers on technical topics, construction systems, and structured delivery approaches.',
}

export default function NewsInsightsSection() {
  const [activeTab, setActiveTab] = useState('News')

  const filtered = articles.filter((a) => a.tab === activeTab)

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* ── Tab filters ── */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
                className={`
                px-5 py-2.5 rounded-lg text-sm font-montserrat font-medium
                 transition-all duration-200
                ${activeTab === tab
                  ? 'bg-[#FFE3B0] text-[#593A00]'
                  : 'bg-[#E6E6E6] text-gray-600 hover:border-[#FFE3B0] hover:text-[#593A00]'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Section heading + description ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 items-start mb-12">
          <h2 className="font-bebas text-gray-900 text-[40px] leading-none tracking-wide">
            {activeTab.toUpperCase()}
          </h2>
          <p className="text-gray-600 text-sm font-montserrat leading-relaxed max-w-2xl">
            {tabDescriptions[activeTab]}
          </p>
        </div>

        {/* ── Articles grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <Link
                key={article.id}
                href={`/newsandinsights/${article.id}`}
                className="flex flex-col gap-3 group"
              >
                {/* Image */}
                <div className="relative w-full h-[220px] overflow-hidden rounded-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category */}
                <p className="text-amber-500 text-xs font-semibold font-montserrat tracking-wide">
                  {article.category}
                </p>

                {/* Title */}
                <p className="text-gray-900 text-sm font-bold font-montserrat leading-snug">
                  {article.title}
                </p>

                {/* Date + arrow */}
                <div className="flex items-center justify-between mt-1">
                  <p className="text-gray-400 text-xs font-montserrat">
                    {article.date}
                  </p>
                  {article.hasArrow && (
                    <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center
                                     group-hover:bg-amber-500 transition-colors flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8"
                              strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm font-montserrat">
              No articles available in this category yet.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}