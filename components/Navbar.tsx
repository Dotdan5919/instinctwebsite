'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/icons/instinct-logo.png'

const megaMenuData: Record<string, {
  about: { title: string; desc: string; link: string };
  columns: { heading: string; items: string[] }[];
  cta?: { label: string; image?: boolean };
}> = {
  'Our Company': {
    about: {
      title: 'About Us',
      desc: 'Instinct Engineering is a fully integrated construction and engineering company delivering projects across residential, commercial, and infrastructure sectors.\n\nOur work is defined not only by what we build, but by how deliberately each project is conceived, structured, and executed.',
      link: 'Get to know us',
    },
    columns: [
      {
        heading: 'Who we are',
        items: ['About us', 'What we do', 'Our Leadership', 'Our Values', 'Our Clients', 'Milestones'],
      },
      {
        heading: 'Our Culture',
        items: ['Nigerian Content Execution strategy', 'Cooperate social Responsibility', 'QHSE Statement Policy'],
      },
    ],
    cta: { label: 'Become a Vendor', image: true },
  },
  'Our Services': {
    about: {
      title: 'Our Services',
      desc: 'We deliver end-to-end construction and engineering services tailored to every project stage — from concept to completion.',
      link: 'Explore services',
    },
    columns: [
      {
        heading: 'What We Offer',
        items: ['Civil Engineering', 'Structural Works', 'MEP Services', 'Project Management', 'Facility Management'],
      },
      {
        heading: 'Sectors',
        items: ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Oil & Gas'],
      },
    ],
  },
  'Our Projects': {
    about: {
      title: 'Our Projects',
      desc: 'A portfolio of precision-built projects that reflect our commitment to delivering outcomes that endure.',
      link: 'View all projects',
    },
    columns: [
      {
        heading: 'By Sector',
        items: ['Residential Projects', 'Commercial Projects', 'Infrastructure Projects', 'Industrial Projects'],
      },
      {
        heading: 'Featured',
        items: ['Landmark Developments', 'Ongoing Projects', 'Completed Works'],
      },
    ],
  },
  'News & Insights': {
    about: {
      title: 'News & Insights',
      desc: 'Stay updated with our latest news, project milestones, industry insights, and thought leadership.',
      link: 'Read latest',
    },
    columns: [
      {
        heading: 'Content',
        items: ['Company News', 'Industry Reports', 'Case Studies', 'Press Releases'],
      },
      {
        heading: 'Media',
        items: ['Photo Gallery', 'Videos', 'Publications'],
      },
    ],
  },
  Careers: {
    about: {
      title: 'Careers',
      desc: 'Join a team that builds with intent. We are always looking for talented professionals who share our values and vision.',
      link: 'See open roles',
    },
    columns: [
      {
        heading: 'Opportunities',
        items: ['Open Positions', 'Graduate Programme', 'Internships', 'Apprenticeships'],
      },
      {
        heading: 'Life at Instinct',
        items: ['Our Culture', 'Benefits & Perks', 'Learning & Development', 'Diversity & Inclusion'],
      },
    ],
  },
  Resources: {
    about: {
      title: 'Resources',
      desc: 'Tools, documents, and information to support your engagement with Instinct Engineering.',
      link: 'Browse resources',
    },
    columns: [
      {
        heading: 'Downloads',
        items: ['Company Profile', 'Project Sheets', 'Certifications', 'HSE Policy'],
      },
      {
        heading: 'Support',
        items: ['FAQs', 'Vendor Portal', 'Client Portal'],
      },
    ],
  },
}

const navItems = ['Our Company', 'Our Services', 'Our Projects', 'News & Insights', 'Careers', 'Resources']

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const menu = activeMenu ? megaMenuData[activeMenu] : null

  return (
    <div className="relative z-50  w-full h-24 mt-14  ">
      <div className="flex absolute border h-24 w-[3000px]  -left-96 border-white/20"></div>
      {/* Main navbar */}
      <div className="flex items-center  w-fit gap-6 pl-14   mx-auto  max-w-7xl    h-24 ">
        {/* Logo */}
        <div className="">
          <Image src={logo} alt="Instinct Logo" width={70} height={70} className="" />
        </div>

        {/* Nav items */}
        <ul className="flex font-montserrat h-full  text-white text-[14px] font-medium flex-1">
          {navItems.map((item) => (
            <li
              key={item}
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
              className={` font-montserrat relative cursor-pointer px-5 text-[16px] h-full  whitespace-nowrap transition-colors duration-200 flex items-center
                ${activeMenu === item
                  ? 'bg-white text-black'
                  : 'hover:text-amber-400'
                }`}
            >
              {item}
              {/* amber underline indicator */}
              {activeMenu !== item && (
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-amber-500 group-hover:w-full transition-all duration-300" />
              )}
            </li>
          ))}

          {/* Separator */}
          

<div className="flex  border-l border-white/20 pr-3.5 ">
          <li className="cursor-pointer px-5  whitespace-nowrap hover:text-amber-400 transition-colors duration-200 flex items-center">
            Contact us
          </li>
          <li className="cursor-pointer px-5   whitespace-nowrap hover:text-amber-400 transition-colors duration-200 flex items-center">
            Become a vendor
          </li>
          </div>
        </ul>
      </div>

      {/* Amber underline below navbar */}
      <div className="h-[2px]  w-[60%]" />

      {/* Mega dropdown */}
      {activeMenu && menu && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 flex"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Left amber panel */}
          <div className="w-[320px] flex-shrink-0 bg-amber-500 p-8 flex flex-col justify-between min-h-[380px]">
            <div>
              <h2 className="text-white text-2xl font-bold mb-4">{menu.about.title}</h2>
              {menu.about.desc.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/90 text-sm leading-relaxed mb-3">{para}</p>
              ))}
            </div>
            <a href="#" className="text-white text-sm font-semibold flex items-center gap-2 mt-4 hover:gap-3 transition-all">
              {menu.about.link} <span className="text-lg">↗</span>
            </a>
          </div>

          {/* Middle columns */}
          {menu.columns.map((col, i) => (
            <div key={i} className="flex-1 px-8 py-8 border-r border-gray-200">
              <h3 className="text-gray-900 text-base font-semibold mb-5">{col.heading}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 text-sm hover:text-amber-500 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA panel */}
          {menu.cta && (
            <div className="w-[240px] flex-shrink-0 px-8 py-8">
              <h3 className="text-gray-900 text-base font-semibold mb-5">{menu.cta.label}</h3>
              {menu.cta.image && (
                <div className="w-full h-[140px] bg-gray-200 rounded mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                </div>
              )}
              <a href="#" className="text-amber-500 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn How <span className="text-lg">↗</span>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}