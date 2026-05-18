'use client'
import { useState } from 'react'
import Btn from '../Btn'

const categories = ['Internship', 'Apprenticeship', 'New graduates and students', 'Professionals']

const jobs = [
  { id: 1,  title: 'Site Project Manager',      location: 'Epe, Lagos State.',       date: '5/30/2026', category: 'Professionals' },
  { id: 2,  title: 'Project Architect',          location: 'Victoria Island, Lagos.', date: '6/10/2026', category: 'Professionals' },
  { id: 3,  title: 'Site Engineer',              location: 'Lekki, Lagos State.',     date: '6/5/2026',  category: 'Professionals' },
  { id: 4,  title: 'Structural Engineer',        location: 'Abuja, FCT.',             date: '6/15/2026', category: 'Professionals' },
  { id: 5,  title: 'Quantity Surveyor',          location: 'Ikeja, Lagos State.',     date: '5/28/2026', category: 'Professionals' },

  { id: 6,  title: 'Architectural Intern',       location: 'Victoria Island, Lagos.', date: '6/1/2026',  category: 'Internship' },
  { id: 7,  title: 'Civil Engineering Intern',   location: 'Lekki, Lagos State.',     date: '6/8/2026',  category: 'Internship' },
  { id: 8,  title: 'Site Operations Intern',     location: 'Epe, Lagos State.',       date: '6/20/2026', category: 'Internship' },

  { id: 9,  title: 'Construction Apprentice',    location: 'Epe, Lagos State.',       date: '6/12/2026', category: 'Apprenticeship' },
  { id: 10, title: 'Electrical Apprentice',      location: 'Ikeja, Lagos State.',     date: '6/18/2026', category: 'Apprenticeship' },
  { id: 11, title: 'Plumbing Apprentice',        location: 'Abuja, FCT.',             date: '7/1/2026',  category: 'Apprenticeship' },

  { id: 12, title: 'Graduate Site Engineer',     location: 'Lekki, Lagos State.',     date: '6/6/2026',  category: 'New graduates and students' },
  { id: 13, title: 'Graduate Quantity Surveyor', location: 'Ikeja, Lagos State.',     date: '6/22/2026', category: 'New graduates and students' },
  { id: 14, title: 'Student Architect',          location: 'Victoria Island, Lagos.', date: '7/5/2026',  category: 'New graduates and students' },
]

export default function AvailableOpenings() {
  const [activeCategory, setActiveCategory] = useState('Internship')

  const filtered = jobs.filter((job) => job.category === activeCategory)

  return (
    <section className="w-full bg-white py-12 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        <h2 className="font-bebas text-gray-900 text-[40px] sm:text-[52px] lg:text-[58px] leading-none tracking-wide text-center mb-12">
          AVAILABLE OPENINGS
        </h2>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2.5 rounded-lg text-sm font-montserrat font-medium whitespace-nowrap flex-shrink-0
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

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="flex flex-col gap-3 p-6 bg-[#FAFAFA] hover:bg-[#FFF6E6] hover:border hover:border-[#FFE3B0] rounded-lg"
              >
                <p className="text-gray-900 text-[15px] font-bold font-montserrat">{job.title}</p>
                <p className="text-gray-500 text-sm font-montserrat">{job.location}</p>
                <p className="text-gray-500 text-sm font-montserrat">{job.date}</p>
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