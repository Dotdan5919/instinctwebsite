'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from '@/icons/instinct-logo.png'
import projectImage from '@/images/building.jpg'

const navItems = ['Our Company', 'Our Services', 'Our Projects', 'News & Insights', 'Careers', 'Resources']

// ─── Left amber panel ──────────────────────────────────────────────────
function LeftPanel({ title, paragraphs, linkLabel, href = '#' }: { title: string; paragraphs: string[]; linkLabel: string; href?: string }) {
  return (
    <div className="w-[460px] flex-shrink-0 bg-amber-500 px-10 py-12 flex flex-col justify-between min-h-[420px]">
      <div>
        <h2 className="text-white text-2xl font-bold mb-6">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-white/90 text-sm leading-relaxed mb-4">{p}</p>
        ))}
      </div>
      <Link href={href} className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
        {linkLabel} <span>↗</span>
      </Link>
    </div>
  )
}

// ─── Link column ──────────────────────────────────────────────────────
function LinkColumn({ heading, items }: { heading: string; items: { label: string; href: string }[] }) {
  return (
    <div className="px-10 py-10 border-r border-gray-100 min-w-[220px]">
      <h3 className="text-gray-900 text-base font-semibold mb-6">{heading}</h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="group flex items-center gap-2">
            <svg
              className="max-w-0 opacity-0 group-hover:max-w-[12px] group-hover:opacity-100 transition-all duration-200 text-amber-500 flex-shrink-0 overflow-hidden"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
            <Link
              href={item.href}
              className="text-gray-500 text-sm hover:text-amber-500 transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Content card ──────────────────────────────────────────────────────
function ContentCard({ label, title, linkLabel = 'See details', href = '#' }: { label?: string; title: string; linkLabel?: string; href?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-[110px] rounded overflow-hidden bg-gray-200">
        <Image src={projectImage} alt={title} fill className="object-cover" />
      </div>
      {label && <p className="text-amber-500 text-xs font-semibold">{label}</p>}
      <p className="text-gray-800 text-xs font-semibold leading-snug">{title}</p>
      <Link href={href} className="text-amber-500 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
        {linkLabel} <span>↗</span>
      </Link>
    </div>
  )
}

// ─── Vendor panel ──────────────────────────────────────────────────────
function VendorPanel() {
  return (
    <div className="w-[220px] flex-shrink-0 px-8 py-10">
      <h3 className="text-gray-900 text-base font-semibold mb-5">Become a Vendor</h3>
      <div className="relative w-full h-[140px] rounded overflow-hidden bg-gray-200 mb-4">
        <Image src={projectImage} alt="Become a vendor" fill className="object-cover" />
      </div>
      <Link href="/become-a-vendor" className="text-amber-500 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
        Learn How <span>↗</span>
      </Link>
    </div>
  )
}

// ─── Menu: Our Company ─────────────────────────────────────────────────
function OurCompanyMenu() {
  return (
    <div className="flex w-full">
      <LeftPanel
        title="About Us"
        href="/ourcompany"
        paragraphs={[
          'Instinct Engineering is a fully integrated construction and engineering company delivering projects across residential, commercial, and infrastructure sectors.',
          'Our work is defined not only by what we build, but by how deliberately each project is conceived, structured, and executed.',
        ]}
        linkLabel="Get to know us"
      />
      <LinkColumn
        heading="Who we are"
        items={[
          { label: 'About us', href: '/ourcompany' },
          { label: 'What we do', href: '/whatwedo' },
          { label: 'Our Leadership', href: '/ourleadership' },
          { label: 'Our Values', href: '/ourcompany#our-values' },
          { label: 'Our Clients', href: '/ourcompany#clients' },
          { label: 'Our Journey', href: '/ourjourney' },
        ]}
      />
      <LinkColumn
        heading="Our Culture"
        items={[
          { label: 'Nigerian Content Execution strategy', href: '/ourcompany#nigerian-content' },
          { label: 'Cooperate social Responsibility', href: '/ourcompany#csr' },
          { label: 'QHSE Statement Policy', href: '/ourcompany#qhse' },
        ]}
      />
      <VendorPanel />
    </div>
  )
}

// ─── Menu: Our Services ────────────────────────────────────────────────
function OurServicesMenu() {
  return (
    <div className="flex w-full">
      <LeftPanel
        title="Our Services"
        href="/our-services"
        paragraphs={[
          'We provide comprehensive construction services, managing the full project lifecycle from early-stage planning through to execution and delivery.',
          'Our role is to bring structure to complexity, ensuring that all project components, design, cost, timelines, and execution, remain aligned.',
        ]}
        linkLabel="Get to know us"
      />
      <LinkColumn
        heading="Approach"
        items={[
          { label: 'Preconstruction', href: '/ourapproach' },
          { label: 'Project Management', href: '/our-services#project-management' },
          { label: 'Lean Construction', href: '/our-services#lean-construction' },
          { label: 'Construction Management', href: '/our-services#construction-management' },
        ]}
      />
      <LinkColumn
        heading="Expertise"
        items={[
          { label: 'Construction Management', href: '/our-services#construction-management' },
          { label: 'Road Construction', href: '/our-services#road-construction' },
          { label: 'Project Partnering', href: '/our-services#project-partnering' },
          { label: 'Flooring', href: '/our-services#flooring' },
          { label: 'Roofing', href: '/our-services#roofing' },
          { label: 'Reconstruction Services', href: '/our-services#reconstruction' },
        ]}
      />
      <VendorPanel />
    </div>
  )
}

// ─── Menu: Our Projects ────────────────────────────────────────────────
function OurProjectsMenu() {
  return (
    <div className="flex w-full">
      <LeftPanel
        title="Our Projects"
        href="/our-projects"
        paragraphs={[
          'Building History',
          'Scale. Complexity. Impact. Purpose.',
          'Since 2006, Instinct Engineering has delivered projects across residential, commercial, and infrastructure sectors — each executed to meet industry standards and client expectations.',
        ]}
        linkLabel="Explore Projects"
      />
      <LinkColumn
        heading="Categories"
        items={[
          { label: 'Projects', href: '/our-projects' },
          { label: 'Residential Developments', href: '/our-projects#residential' },
          { label: 'Commercial Projects', href: '/our-projects#commercial' },
          { label: 'Infrastructure', href: '/our-projects#infrastructure' },
          { label: 'Renovation & Reconstruction', href: '/our-projects#renovation' },
        ]}
      />
      <div className="flex-1 px-10 py-10">
        <h3 className="text-gray-900 text-base font-semibold mb-6">Latest Project</h3>
        <div className="grid grid-cols-3 gap-5">
          <ContentCard label="Residential" title="5 Bedroom Duplex, Magodo Phase 2" linkLabel="See details" href="/our-projects/magodo-duplex" />
          <ContentCard label="Residential" title="5 Bedroom Duplex, Magodo Phase 2" linkLabel="See details" href="/our-projects/magodo-duplex" />
          <ContentCard label="Residential" title="5 Bedroom Duplex, Magodo Phase 2" linkLabel="See details" href="/our-projects/magodo-duplex" />
        </div>
      </div>
    </div>
  )
}

// ─── Menu: News & Insights ─────────────────────────────────────────────
function NewsInsightsMenu() {
  return (
    <div className="flex w-full">
      <LeftPanel
        title="News & Insights"
        href="/news"
        paragraphs={[
          'Instinctive is a knowledge-led organisation that constantly creates thought leadership articles, whitepapers and case studies.',
          'Read the pathbreaking insights on topics of today.',
        ]}
        linkLabel="Learn More"
      />
      <LinkColumn
        heading="Approach"
        items={[
          { label: 'News', href: '/news' },
          { label: 'Reports', href: '/news#reports' },
          { label: 'Blogs', href: '/news#blogs' },
          { label: 'White Papers', href: '/news#white-papers' },
        ]}
      />
      <div className="flex-1 px-10 py-10">
        <h3 className="text-gray-900 text-base font-semibold mb-6">Featured Insights</h3>
        <div className="grid grid-cols-3 gap-5">
          <ContentCard title="2026 Construction Outlook: From Caution to Clarity" linkLabel="See More" href="/news/construction-outlook-2026" />
          <ContentCard title="2026 Construction Outlook: From Caution to Clarity" linkLabel="See More" href="/news/construction-outlook-2026" />
          <ContentCard title="2026 Construction Outlook: From Caution to Clarity" linkLabel="See More" href="/news/construction-outlook-2026" />
        </div>
      </div>
    </div>
  )
}

// ─── Menu: Careers ─────────────────────────────────────────────────────
function CareersMenu() {
  return (
    <div className="flex w-full">
      <LeftPanel
        title="Careers"
        href="/careers"
        paragraphs={[
          "Within Instincts, you'll find a world of possibility. As a global company with a reputation for taking on generation-defining projects, we provide unparalleled learning and growth opportunities.",
          'From engineers and project managers to skilled craft professionals and construction experts, we seek colleagues who are eager to make their mark on the world.',
        ]}
        linkLabel="Explore careers at Instinct"
      />
      <LinkColumn
        heading="Join the Team"
        items={[
          { label: 'Life at Instinct', href: '/careers#life-at-instinct' },
          { label: 'Internship', href: '/careers#internship' },
          { label: 'Experienced professionals', href: '/careers#experienced' },
          { label: 'Labor and skilled trade', href: '/careers#skilled-trade' },
        ]}
      />
      <div className="flex-1 px-10 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-900 text-base font-semibold">Careers</h3>
          <Link href="/careers" className="text-gray-900 text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors">
            See all available Positions <span>↗</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <div className="relative w-full h-[150px] rounded overflow-hidden bg-gray-200">
              <Image src={projectImage} alt="Career Opportunities" fill className="object-cover" />
            </div>
            <p className="text-amber-500 text-xs font-semibold mt-1">Career Opportunities</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Are you driven by purpose, thrive on a team, and live for a challenge? Check out our job openings and learn more about joining our team.
            </p>
            <Link href="/careers#opportunities" className="text-amber-500 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Read More <span>↗</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative w-full h-[150px] rounded overflow-hidden bg-gray-200">
              <Image src={projectImage} alt="Hear from our people" fill className="object-cover" />
            </div>
            <p className="text-amber-500 text-xs font-semibold mt-1">Hear From our people</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Our colleagues around the world share why they chose to build their careers with Instinct.
            </p>
            <Link href="/careers#our-people" className="text-amber-500 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Read More <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Menu: Resources ───────────────────────────────────────────────────
function ResourcesMenu() {
  return (
    <div className="flex w-full">
      <LeftPanel
        title="Resources"
        href="/resources"
        paragraphs={[
          'We provide key materials and documents to support project understanding, partnership engagement, and informed decision-making.',
        ]}
        linkLabel="Get to know us"
      />
      <LinkColumn
        heading="Resources"
        items={[
          { label: 'Service Brochures', href: '/resources#brochures' },
          { label: 'Certificates', href: '/resources#certificates' },
          { label: 'Company Profile', href: '/resources#company-profile' },
          { label: 'Technical Document', href: '/resources#technical' },
        ]}
      />
      <LinkColumn
        heading="Categories"
        items={[
          { label: 'For Clients', href: '/resources#for-clients' },
          { label: 'For Partners', href: '/resources#for-partners' },
          { label: 'For Technical Review', href: '/resources#technical-review' },
        ]}
      />
      <VendorPanel />
    </div>
  )
}

// ─── Menu map ──────────────────────────────────────────────────────────
const menuComponents: Record<string, React.ReactNode> = {
  'Our Company': <OurCompanyMenu />,
  'Our Services': <OurServicesMenu />,
  'Our Projects': <OurProjectsMenu />,
  'News & Insights': <NewsInsightsMenu />,
  'Careers': <CareersMenu />,
  'Resources': <ResourcesMenu />,
}

// ─── Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative z-50 w-full mt-10"
    >
      <div className="flex absolute border h-24 w-[3000px] -left-96 border-white/20" />

      {/* Navbar row */}
      <div className="relative flex items-center h-[88px] px-6 sm:px-10 lg:px-14 mx-auto max-w-7xl">

        {/* Logo */}
        <div className="flex-shrink-0 mr-8">
          <Link href="/">
            <Image src={logo} alt="Instinct Logo" width={72} height={72} />
          </Link>
        </div>

        {/* Nav links */}
        <ul className="flex h-full items-stretch font-montserrat font-medium flex-1">
          {navItems.map((item) => {
            const isActive = activeMenu === item
            const isHovered = hoveredItem === item
            return (
              <li
                key={item}
                className="relative flex items-stretch"
                onMouseEnter={() => { setActiveMenu(item); setHoveredItem(item) }}
                onMouseLeave={() => { setActiveMenu(null); setHoveredItem(null) }}
              >
                <span
                  className={`
                    relative flex items-center px-5 cursor-pointer whitespace-nowrap text-[15px] transition-colors duration-150
                    ${isActive ? 'bg-white text-gray-900' : 'text-white'}
                  `}
                >
                  {item}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 transition-opacity duration-150
                      ${isActive || isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                  />
                </span>
              </li>
            )
          })}

          {/* Divider + Contact / Vendor */}
          <li className="flex items-center border-l border-white/20 ml-2">
            <Link
              href="/contact"
              className="px-5 text-[15px] text-white whitespace-nowrap hover:text-amber-400 transition-colors duration-200"
            >
              Contact us
            </Link>
            <Link
              href="/become-a-vendor"
              className="px-5 text-[15px] text-white whitespace-nowrap hover:text-amber-400 transition-colors duration-200"
            >
              Become a vendor
            </Link>
          </li>
        </ul>
      </div>

      {/* Mega dropdown */}
      {activeMenu && menuComponents[activeMenu] && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-2xl z-50 overflow-hidden"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => { setActiveMenu(null); setHoveredItem(null) }}
        >
          {menuComponents[activeMenu]}
        </div>
      )}
    </motion.div>
  )
}