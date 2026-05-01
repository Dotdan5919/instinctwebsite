'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/icons/instinct-logo.png'
const projectImage = "/images/building.jpg"

const navItems = ['Our Company', 'Our Services', 'Our Projects', 'News & Insights', 'Careers', 'Resources']

// Map nav labels to their base routes for active detection
const navRoutes: Record<string, string[]> = {
  'Our Company':    ['/ourcompany', '/ourleadership', '/ourjourney', '/whatwedo'],
  'Our Services':   ['/our-services', '/ourapproach'],
  'Our Projects':   ['/ourproject'],
  'News & Insights':['/newsandinsights', '/report', '/blog', '/whitepaper', '/news'],
  'Careers':        ['/career'],
  'Resources':      ['/resources'],
}

function useActiveNav() {
  const pathname = usePathname()
  return (item: string) => {
    const routes = navRoutes[item] ?? []
    return routes.some(route => pathname === route || pathname.startsWith(route + '/') || pathname.startsWith(route + '#'))
  }
}

// ─── Left amber panel ──────────────────────────────────────────────────
function LeftPanel({ title, paragraphs, linkLabel, href = '#' }: {
  title: string; paragraphs: string[]; linkLabel: string; href?: string
}) {
  return (
    <div className="w-full lg:w-[460px] lg:flex-shrink-0 bg-amber-500 px-6 lg:px-10 py-8 lg:py-12 flex flex-col justify-between min-h-[200px] lg:min-h-[420px]">
      <div>
        <h2 className="text-white text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-white/90 text-sm leading-relaxed mb-3 lg:mb-4">{p}</p>
        ))}
      </div>
      <Link href={href} className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-4">
        {linkLabel} <span>↗</span>
      </Link>
    </div>
  )
}

// ─── Link column ──────────────────────────────────────────────────────
function LinkColumn({ heading, items }: { heading: string; items: { label: string; href: string }[] }) {
  return (
    <div className="px-6 lg:px-10 py-6 lg:py-10 border-r border-gray-100 min-w-0 lg:min-w-[220px]">
      <h3 className="text-gray-900 text-sm lg:text-base font-semibold mb-4 lg:mb-6">{heading}</h3>
      <ul className="space-y-3 lg:space-y-4">
        {items.map((item, i) => (
          <li key={i} className="group flex items-center gap-2">
            <svg
              className="max-w-0 opacity-0 group-hover:max-w-[12px] group-hover:opacity-100 transition-all duration-200 text-amber-500 flex-shrink-0 overflow-hidden"
              viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
            <Link href={item.href} className="text-gray-500 text-sm hover:text-amber-500 transition-colors duration-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Content card ──────────────────────────────────────────────────────
function ContentCard({ label, title, linkLabel = 'See details', href = '#' }: {
  label?: string; title: string; linkLabel?: string; href?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-[90px] lg:h-[110px] rounded overflow-hidden bg-gray-200">
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
    <div className="hidden lg:block w-[220px] flex-shrink-0 px-8 py-10">
      <h3 className="text-gray-900 text-base font-semibold mb-5">Become a Vendor</h3>
      <div className="relative w-full h-[140px] rounded overflow-hidden bg-gray-200 mb-4">
        <Image src={projectImage} alt="Become a vendor" fill className="object-cover" />
      </div>
      <Link href="/vendor" className="text-amber-500 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
        Learn How <span>↗</span>
      </Link>
    </div>
  )
}

// ─── Menu: Our Company ─────────────────────────────────────────────────
function OurCompanyMenu() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftPanel
        title="About Us" href="/ourcompany"
        paragraphs={[
          'Instinct Engineering is a fully integrated construction and engineering company delivering projects across residential, commercial, and infrastructure sectors.',
          'Our work is defined not only by what we build, but by how deliberately each project is conceived, structured, and executed.',
        ]}
        linkLabel="Get to know us"
      />
      <div className="flex flex-col sm:flex-row lg:flex-row flex-1">
        <LinkColumn heading="Who we are" items={[
          { label: 'About us', href: '/ourcompany' },
          { label: 'What we do', href: '/whatwedo' },
          { label: 'Our Leadership', href: '/ourleadership' },
          { label: 'Our Values', href: '/ourcompany#our-values' },
          { label: 'Our Clients', href: '/ourcompany#clients' },
          { label: 'Our Journey', href: '/ourjourney' },
        ]} />
        <LinkColumn heading="Our Culture" items={[
          { label: 'Nigerian Content Execution strategy', href: '/ourcompany#nigerian-content' },
          { label: 'Cooperate social Responsibility', href: '/ourcompany#csr' },
          { label: 'QHSE Statement Policy', href: '/ourcompany#qhse' },
        ]} />
        <VendorPanel />
      </div>
    </div>
  )
}

// ─── Menu: Our Services ────────────────────────────────────────────────
function OurServicesMenu() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftPanel
        title="Our Services" href="/whatwedo"
        paragraphs={[
          'We provide comprehensive construction services, managing the full project lifecycle from early-stage planning through to execution and delivery.',
          'Our role is to bring structure to complexity, ensuring that all project components, design, cost, timelines, and execution, remain aligned.',
        ]}
        linkLabel="Get to know us"
      />
      <div className="flex flex-col sm:flex-row lg:flex-row flex-1">
        <LinkColumn heading="Approach" items={[
          { label: 'Preconstruction', href: '/ourapproach#preconstruction' },
          { label: 'Project Management', href: '/ourapproach#project-management' },
          { label: 'Lean Construction', href: '/ourapproach#lean-construction' },
          { label: 'Construction Management', href: '/ourapproach#construction-management' },
        ]} />
        <LinkColumn heading="Expertise" items={[
          { label: 'Construction Management', href: '/our-services#construction-management' },
          { label: 'Road Construction', href: '/our-services#road-construction' },
          { label: 'Project Partnering', href: '/our-services#project-partnering' },
          { label: 'Flooring', href: '/our-services#flooring' },
          { label: 'Roofing', href: '/our-services#roofing' },
          { label: 'Reconstruction Services', href: '/our-services#reconstruction' },
        ]} />
        <VendorPanel />
      </div>
    </div>
  )
}

// ─── Menu: Our Projects ────────────────────────────────────────────────
function OurProjectsMenu() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftPanel
        title="Our Projects" href="/ourproject"
        paragraphs={[
          'Building History',
          'Scale. Complexity. Impact. Purpose.',
          'Since 2006, Instinct Engineering has delivered projects across residential, commercial, and infrastructure sectors — each executed to meet industry standards and client expectations.',
        ]}
        linkLabel="Explore Projects"
      />
      <div className="flex flex-col lg:flex-row flex-1">
        <LinkColumn heading="Categories" items={[
          { label: 'Projects', href: '/ourproject' },
          { label: 'Residential Developments', href: '/ourproject#residential' },
          { label: 'Commercial Projects', href: '/ourproject#commercial' },
          { label: 'Infrastructure', href: '/ourproject#infrastructure' },
          { label: 'Renovation & Reconstruction', href: '/ourproject#renovation' },
        ]} />
        <div className="flex-1 px-6 lg:px-10 py-6 lg:py-10">
          <h3 className="text-gray-900 text-sm lg:text-base font-semibold mb-4 lg:mb-6">Latest Project</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <ContentCard label="Residential" title="5 Bedroom Duplex, Magodo Phase 2" linkLabel="See details" href="/ourproject/magodo-duplex" />
            <ContentCard label="Residential" title="5 Bedroom Duplex, Magodo Phase 2" linkLabel="See details" href="/ourproject/magodo-duplex" />
            <div className="hidden lg:block">
              <ContentCard label="Residential" title="5 Bedroom Duplex, Magodo Phase 2" linkLabel="See details" href="/ourproject/magodo-duplex" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Menu: News & Insights ─────────────────────────────────────────────
function NewsInsightsMenu() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftPanel
        title="News & Insights" href="/newsandinsights"
        paragraphs={[
          'Instinctive is a knowledge-led organisation that constantly creates thought leadership articles, whitepapers and case studies.',
          'Read the pathbreaking insights on topics of today.',
        ]}
        linkLabel="Learn More"
      />
      <div className="flex flex-col lg:flex-row flex-1">
        <LinkColumn heading="Approach" items={[
          { label: 'News', href: '/newsandinsights' },
          { label: 'Reports', href: '/report' },
          { label: 'Blogs', href: '/blog' },
          { label: 'White Papers', href: '/whitepaper' },
        ]} />
        <div className="flex-1 px-6 lg:px-10 py-6 lg:py-10">
          <h3 className="text-gray-900 text-sm lg:text-base font-semibold mb-4 lg:mb-6">Featured Insights</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <ContentCard title="2026 Construction Outlook: From Caution to Clarity" linkLabel="See More" href="/news/construction-outlook-2026" />
            <ContentCard title="2026 Construction Outlook: From Caution to Clarity" linkLabel="See More" href="/news/construction-outlook-2026" />
            <div className="hidden lg:block">
              <ContentCard title="2026 Construction Outlook: From Caution to Clarity" linkLabel="See More" href="/news/construction-outlook-2026" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Menu: Careers ─────────────────────────────────────────────────────
function CareersMenu() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftPanel
        title="Careers" href="/career"
        paragraphs={[
          "Within Instincts, you'll find a world of possibility. As a global company with a reputation for taking on generation-defining projects, we provide unparalleled learning and growth opportunities.",
          'From engineers and project managers to skilled craft professionals and construction experts, we seek colleagues who are eager to make their mark on the world.',
        ]}
        linkLabel="Explore careers at Instinct"
      />
      <div className="flex flex-col lg:flex-row flex-1">
        <LinkColumn heading="Join the Team" items={[
          { label: 'Life at Instinct', href: '/career#life-at-instinct' },
          { label: 'Internship', href: '/career#internship' },
          { label: 'Experienced professionals', href: '/career#experienced' },
          { label: 'Labor and skilled trade', href: '/career#skilled-trade' },
        ]} />
        <div className="flex-1 px-6 lg:px-10 py-6 lg:py-10">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h3 className="text-gray-900 text-sm lg:text-base font-semibold">Careers</h3>
            <Link href="/career" className="text-gray-900 text-xs lg:text-sm font-semibold flex items-center gap-1 hover:text-amber-500 transition-colors">
              See all positions <span>↗</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="flex flex-col gap-2">
              <div className="relative w-full h-[100px] lg:h-[150px] rounded overflow-hidden bg-gray-200">
                <Image src={projectImage} alt="Career Opportunities" fill className="object-cover" />
              </div>
              <p className="text-amber-500 text-xs font-semibold mt-1">Career Opportunities</p>
              <p className="text-gray-600 text-xs leading-relaxed hidden lg:block">
                Are you driven by purpose, thrive on a team, and live for a challenge? Check out our job openings and learn more about joining our team.
              </p>
              <Link href="/career#opportunities" className="text-amber-500 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Read More <span>↗</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full h-[100px] lg:h-[150px] rounded overflow-hidden bg-gray-200">
                <Image src={projectImage} alt="Hear from our people" fill className="object-cover" />
              </div>
              <p className="text-amber-500 text-xs font-semibold mt-1">Hear From our people</p>
              <p className="text-gray-600 text-xs leading-relaxed hidden lg:block">
                Our colleagues around the world share why they chose to build their careers with Instinct.
              </p>
              <Link href="/careers#our-people" className="text-amber-500 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Read More <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Menu: Resources ───────────────────────────────────────────────────
function ResourcesMenu() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <LeftPanel
        title="Resources" href="/resources"
        paragraphs={[
          'We provide key materials and documents to support project understanding, partnership engagement, and informed decision-making.',
        ]}
        linkLabel="Get to know us"
      />
      <div className="flex flex-col sm:flex-row lg:flex-row flex-1">
        <LinkColumn heading="Resources" items={[
          { label: 'Service Brochures', href: '/resources#brochures' },
          { label: 'Certificates', href: '/resources#certificates' },
          { label: 'Company Profile', href: '/resources#company-profile' },
          { label: 'Technical Document', href: '/resources#technical' },
        ]} />
        <LinkColumn heading="Categories" items={[
          { label: 'For Clients', href: '/resources#for-clients' },
          { label: 'For Partners', href: '/resources#for-partners' },
          { label: 'For Technical Review', href: '/resources#technical-review' },
        ]} />
        <VendorPanel />
      </div>
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

// ─── Hamburger icon ────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <span className={`block h-0.5 bg-white transition-all duration-300 origin-top-left ${open ? 'rotate-45 translate-y-px' : ''}`} />
      <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0 translate-x-2' : ''}`} />
      <span className={`block h-0.5 bg-white transition-all duration-300 origin-bottom-left ${open ? '-rotate-45 -translate-y-px' : ''}`} />
    </div>
  )
}

// ─── Mobile drawer ─────────────────────────────────────────────────────
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const isActive = useActiveNav()

  const toggle = (item: string) => setExpandedItem(prev => prev === item ? null : item)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-white z-50 overflow-y-auto shadow-2xl"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white">
              <Image src={logo} alt="Instinct Logo" width={48} height={48} />
              <button onClick={onClose} className="text-gray-800 text-2xl font-light leading-none">✕</button>
            </div>

            {/* Nav items accordion */}
            <nav className="divide-y divide-gray-100">
              {navItems.map((item) => {
                const active = isActive(item)
                return (
                  <div key={item}>
                    <button
                      onClick={() => toggle(item)}
                      className={`w-full flex items-center justify-between px-6 py-4 font-semibold text-sm transition-colors
                        ${active
                          ? 'text-amber-500 border-l-2 border-amber-500 bg-amber-50'
                          : 'text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                      {item}
                      <span className={`transition-transform duration-200 text-amber-500 ${expandedItem === item ? 'rotate-180' : ''}`}>
                        ▾
                      </span>
                    </button>
                    <AnimatePresence>
                      {expandedItem === item && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
                            {menuComponents[item]}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}

              {/* Contact / Vendor */}
              <div className="px-6 py-4 space-y-3">
                <Link href="/contact" onClick={onClose} className="block text-gray-700 text-sm font-medium hover:text-amber-500 transition-colors">
                  Contact us
                </Link>
                <Link href="/vendor" onClick={onClose} className="block text-gray-700 text-sm font-medium hover:text-amber-500 transition-colors">
                  Become a vendor
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isActive = useActiveNav()

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative z-50 w-full mt-10"
    >
      <div className="flex absolute border h-24 w-[3000px] -left-96 border-white/20" />

      {/* Navbar row */}
      <div className="relative flex items-center h-[72px] lg:h-[88px] px-4 sm:px-6 lg:px-14 mx-auto max-w-7xl">

        {/* Logo */}
        <div className="flex-shrink-0 mr-4 lg:mr-8">
          <Link href="/">
            <Image src={logo} alt="Instinct Logo" width={56} height={56} className="lg:w-[72px] lg:h-[72px]" />
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex h-full items-stretch font-montserrat font-medium flex-1">
          {navItems.map((item) => {
            const isMenuOpen = activeMenu === item
            const isHovered = hoveredItem === item
            const isCurrentPage = isActive(item)

            return (
              <li
                key={item}
                className="relative flex items-stretch"
                onMouseEnter={() => { setActiveMenu(item); setHoveredItem(item) }}
                onMouseLeave={() => { setActiveMenu(null); setHoveredItem(null) }}
              >
                <span
                  className={`
                    relative flex items-center px-4 xl:px-5 cursor-pointer whitespace-nowrap text-[14px] xl:text-[15px] transition-colors duration-150
                    ${isMenuOpen
                      ? 'bg-white text-gray-900'
                      : isCurrentPage
                        ? 'text-amber-400'
                        : 'text-white'
                    }
                  `}
                >
                  {item}

                  {/* Hover indicator: amber bar (shown on hover or when dropdown is open) */}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 transition-opacity duration-150
                      ${isMenuOpen || isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                  />
                </span>
              </li>
            )
          })}

          {/* Divider + Contact / Vendor */}
          <li className="flex items-center border-l border-white/20 ml-2">
            <Link href="/contact" className="px-4 xl:px-5 text-[14px] xl:text-[15px] text-white whitespace-nowrap hover:text-amber-400 transition-colors duration-200">
              Contact us
            </Link>
            <Link href="/vendor" className="px-4 xl:px-5 text-[14px] xl:text-[15px] text-white whitespace-nowrap hover:text-amber-400 transition-colors duration-200">
              Become a vendor
            </Link>
          </li>
        </ul>

        {/* Mobile right: contact link + hamburger */}
        <div className="flex lg:hidden items-center gap-4 ml-auto">
          <Link href="/contact" className="text-white text-sm font-medium hidden sm:block hover:text-amber-400 transition-colors">
            Contact us
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center p-2"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Desktop mega dropdown */}
      {activeMenu && menuComponents[activeMenu] && (
        <div
          className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl z-50 overflow-hidden"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => { setActiveMenu(null); setHoveredItem(null) }}
        >
          {menuComponents[activeMenu]}
        </div>
      )}

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </motion.div>
  )
}