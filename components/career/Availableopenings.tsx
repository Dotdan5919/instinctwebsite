'use client'
import { useState } from 'react'
import Link from 'next/link'
import Btn from '../Btn'


const categories = [ 'Internship', 'Apprenticeship', 'New graduates and students', 'Professionals']

const jobs = [
  { id: 1,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Professionals' },
  { id: 2,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Internship' },
  { id: 3,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Apprenticeship' },
  { id: 4,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Professionals' },
  { id: 5,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'New graduates and students' },
  { id: 6,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Internship' },
  { id: 7,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Apprenticeship' },
  { id: 8,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Professionals' },
  { id: 9,  title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'New graduates and students' },
  { id: 10, title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Internship' },
  { id: 11, title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Professionals' },
  { id: 12, title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Apprenticeship' },
  { id: 13, title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Internship' },
  { id: 14, title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'New graduates and students' },
  { id: 15, title: 'Site Project Manager', location: 'Epe, Lagos state.', date: '4/23/2026', category: 'Professionals' },
]

export default function AvailableOpenings() {
  const [activeCategory, setActiveCategory] = useState('Internship')

  const filtered = activeCategory === 'Internship'
    ? jobs
    : jobs.filter((job) => job.category === activeCategory)

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Heading */}
        <h2 className="font-bebas text-gray-900 text-[40px] sm:text-[52px] lg:text-[58px] leading-none tracking-wide text-center mb-12">
          AVAILABLE OPENINGS
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2.5 rounded-lg text-sm font-montserrat font-medium
                 transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-[#FFE3B0] text-[#593A00]'
                  : 'bg-[#E6E6E6] text-gray-600 hover:border-[#FFE3B0] hover:text-[#593A00]'
                }
              `}
            >
              {cat}
            </button>
            
          ))}
        </div>

        {/* Job grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="flex flex-col gap-3 p-6 bg-[#FAFAFA] hover:bg-[#FFF6E6] hover:border hover:border-[#FFE3B0] rounded-lg"
              >
                {/* Title */}
                <p className="text-gray-900 text-[15px] font-bold font-montserrat">
                  {job.title}
                </p>

                {/* Location */}
                <p className="text-gray-500 text-sm font-montserrat">
                  {job.location}
                </p>

                {/* Date */}
                <p className="text-gray-500 text-sm font-montserrat">
                  {job.date}
                </p>

                {/* See details link */}
                {/* <Link
                  href={`/careers/${job.id}`}
                  className="flex items-center gap-2 mt-1 group"
                >
                  <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-amber-500 text-sm font-semibold font-montserrat group-hover:text-amber-600 transition-colors">
                    See details
                  </span>
                </Link> */}


<div className="flex w-fit">
                <Btn text="See details" href={`/career/${job.id}`} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm font-montserrat">
              No openings available in this category at the moment.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
