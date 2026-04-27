'use client'

import Image from 'next/image'
import Link from 'next/link'

// ── Replace these with your actual blog images ──────────────────────────────
import blog_1 from '@/images/news&insights/blog_1.jpg'
import blog_2 from '@/images/news&insights/blog_2.jpg'
import blog_3 from '@/images/news&insights/blog_3.jpg'
import blogHero from '@/images/news&insights/blog_1.jpg' // swap for a dedicated hero image
import blogInline from '@/images/news&insights/blog_2.jpg' // mid-article image
// ────────────────────────────────────────────────────────────────────────────

// ── Arrow SVG (same as NewsInsightsSection) ──────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 12L12 2M12 2H5M12 2v7"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Mock blog post data — swap for real fetch via `id` prop ──────────────────
const blogPost = {
  tag: 'Blog Post',
  title: 'WHY PRECONSTRUCTION DEFINES THE SUCCESS OF EVERY PROJECT',
  subtitle:
    'Understanding how early planning, coordination, and clarity influence construction outcomes.',
  intro: [
    'In construction, outcomes are often judged at completion — but the real determinants of success are established long before work begins on site.',
    'Preconstruction is the phase where clarity is defined, risks are identified, and the foundation for execution is set. Without it, even well-funded projects can face delays, inefficiencies, and inconsistent results.',
    'Preconstruction is the structured process of planning a project before physical construction begins. It involves aligning scope, cost, timelines, and execution strategy to ensure that every stage of the project is clearly defined.',
  ],
  firstSection: {
    heading: 'Why It Impacts Every Outcome',
    body: 'Projects that lack structured preconstruction often experience misalignment between expectations and execution. This results in delays, cost overruns, and compromised quality.',
    subheading: 'A Structured Approach to Preconstruction',
    subBody:
      'At Instinct Engineering, preconstruction is approached as a critical phase of project delivery. We ensure that all variables are defined and aligned before execution begins.',
  },
  outro: [
    'In construction, outcomes are often judged at completion — but the real determinants of success are established long before work begins on site.',
    'Preconstruction is the phase where clarity is defined, risks are identified, and the foundation for execution is set. Without it, even well-funded projects can face delays, inefficiencies, and inconsistent results.',
    'Preconstruction is the structured process of planning a project before physical construction begins. It involves aligning scope, cost, timelines, and execution strategy to ensure that every stage of the project is clearly defined.',
  ],
  secondSection: {
    heading: 'Why It Impacts Every Outcome',
    body: 'Projects that lack structured preconstruction often experience misalignment between expectations and execution. This results in delays, cost overruns, and compromised quality.',
    subheading: 'A Structured Approach to Preconstruction',
    subBody:
      'At Instinct Engineering, preconstruction is approached as a critical phase of project delivery. We ensure that all variables are defined and aligned before execution begins.',
  },
}

// ── Related blogs — swap for real filtered data ──────────────────────────────
const relatedBlogs = [
  {
    id: 9,
    title: 'Why Preconstruction Defines the Success of Every Project',
    summary:
      'Understanding how early planning, coordination, and clarity influence construction outcomes.',
    date: 'April 23, 2026',
    image: blog_1,
  },
  {
    id: 10,
    title: 'Why Preconstruction Defines the Success of Every Project',
    summary:
      'Understanding how early planning, coordination, and clarity influence construction outcomes.',
    date: 'April 23, 2026',
    image: blog_2,
  },
  {
    id: 11,
    title: 'Why Preconstruction Defines the Success of Every Project',
    summary:
      'Understanding how early planning, coordination, and clarity influence construction outcomes.',
    date: 'April 23, 2026',
    image: blog_3,
  },
]

// ── Main component ────────────────────────────────────────────────────────────
export default function BlogDetailSection() {
  return (
    <section className="w-full bg-white text-black lg:px-24 px-16">

 

      {/* ══ ARTICLE BODY ═════════════════════════════════════════════════════ */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 py-12 flex flex-col gap-5 relative">
<div className="absolute -top-40 left-0 w-full z-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-10">
            <span className="font-montserrat text-amber-400 text-xs font-semibold tracking-widest uppercase">
              {blogPost.tag}
            </span>
            <div className="mt-3 bg-[#996300] px-6 py-5 w-full">
              <h1 className="font-bebas text-white text-3xl md:text-[64px] leading-tight tracking-wide">
                {blogPost.title}
              </h1>
              <p className="font-montserrat text-white/90 text-sm mt-2 leading-relaxed">
                {blogPost.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="flex p-10 h-20"></div>
        {/* intro paragraphs */}
        {blogPost.intro.map((para, i) => (
          <p key={i} className="font-montserrat text-gray-700 text-sm leading-relaxed ">
            {para}
          </p>
        ))}

        <div className="w-full h-px bg-gray-200 my-2 " />

        {/* first section */}
        <h2 className="font-bebas text-gray-900 text-3xl tracking-wide">
          {blogPost.firstSection.heading}
        </h2>
        <p className="font-montserrat text-gray-700 text-sm leading-relaxed">
          {blogPost.firstSection.body}
        </p>
        <p className="font-montserrat text-gray-900 font-semibold text-sm">
          {blogPost.firstSection.subheading}
        </p>
        <p className="font-montserrat text-gray-700 text-sm leading-relaxed">
          {blogPost.firstSection.subBody}
        </p>

        {/* inline image */}
        <div className="relative w-full h-[260px] md:h-[380px] overflow-hidden rounded-sm my-2">
          <Image
            src={blogInline}
            alt="Construction site"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* outro paragraphs */}
        {blogPost.outro.map((para, i) => (
          <p key={i} className="font-montserrat text-gray-700 text-sm leading-relaxed">
            {para}
          </p>
        ))}

        <div className="w-full h-px bg-gray-200 my-2" />

        {/* second section */}
        <h2 className="font-bebas text-gray-900 text-3xl tracking-wide">
          {blogPost.secondSection.heading}
        </h2>
        <p className="font-montserrat text-gray-700 text-sm leading-relaxed">
          {blogPost.secondSection.body}
        </p>
        <p className="font-montserrat text-gray-900 font-semibold text-sm">
          {blogPost.secondSection.subheading}
        </p>
        <p className="font-montserrat text-gray-700 text-sm leading-relaxed">
          {blogPost.secondSection.subBody}
        </p>

      </div>

      {/* ══ RELATED BLOGS ════════════════════════════════════════════════════ */}
      <div className="w-full border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

          {/* header row — mirrors NewsInsightsSection layout */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-bebas text-gray-900 text-[40px] leading-none tracking-wide">
              RELATED BLOGS
            </h2>
            <Link
              href="/blogs"
              className="font-montserrat text-sm text-gray-500 hover:text-amber-500 transition-colors duration-200"
            >
              See all
            </Link>
          </div>

          {/* cards — identical pattern to Blogs tab in NewsInsightsSection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="flex flex-col gap-3 group"
              >
                <div className="relative w-full h-[220px] overflow-hidden rounded-sm">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="font-montserrat text-gray-900 text-sm font-bold leading-snug">
                  {blog.title}
                </p>

                <p className="font-montserrat text-gray-500 text-sm leading-relaxed">
                  {blog.summary}
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-montserrat text-gray-400 text-xs">{blog.date}</p>
                  <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center group-hover:bg-amber-500 transition-colors flex-shrink-0">
                    <ArrowIcon />
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