'use client'
import Image from 'next/image'
import Link from 'next/link'
import Btn from '../Btn'

const building = "/images/career/career_work.jpg"

const reasons = [
  {
    title: 'Purposeful Work',
    description:
      'Contribute to projects that improve living environments and infrastructure across Nigeria.',
  },
  {
    title: 'Professional Structure',
    description:
      'Work within clearly defined systems that guide planning, coordination, and execution.',
  },
  {
    title: 'Growth & Development',
    description:
      'Build technical expertise through hands-on project experience and continuous learning.',
  },
  {
    title: 'Strong Team Culture',
    description:
      'Collaborate with professionals who value discipline, accountability, and delivery excellence.',
  },
]

export default function WhyJoinInstinct() {
  return (
    <section className="w-full py-0 pt-10 sm:py-24 lg:py-20 bg-white">
      <div className="w-full px-4 sm:px-8 lg:px-24">

        {/* ── MOBILE LAYOUT ─────────────────────────────────────────────── */}
        <div className="lg:hidden bg-[#FFF2D9] rounded-2xl px-5 pt-7 pb-8">

          {/* Heading */}
          <h2 className="font-bebas text-gray-900 text-[30px] leading-none tracking-wide mb-3">
            WHY JOIN INSTINCT
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-[13px] font-montserrat leading-relaxed mb-5">
            Every project follows a structured methodology —{' '}
            ensuring clarity before execution and control throughout delivery.
          </p>

          {/* Amber circle-arrow CTA link */}
          <Link href="/ourcompany" className="inline-flex items-center gap-3 mb-6 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8950A] text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-montserrat text-[13.5px] font-semibold text-[#E8950A]">
              See More About Us
            </span>
          </Link>

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-6">
            <Image
              src={building}
              alt="Why join Instinct"
              fill
              className="object-cover"
            />
          </div>

          {/* Reasons — divider separated, no boxes */}
          <div className="flex flex-col">
            {reasons.map((reason, i) => (
              <div key={i}>
                <div className="h-px bg-[#E2C98A] w-full" />
                <div className="py-4">
                  <p className="font-montserrat font-bold text-gray-900 text-[14px] mb-1">
                    {reason.title}
                  </p>
                  <p className="font-montserrat text-gray-500 text-[13px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="h-px bg-[#E2C98A] w-full" />
          </div>

        </div>

        {/* ── DESKTOP LAYOUT ────────────────────────────────────────────── */}
        <div className="hidden lg:block">
          <div className="relative bg-[#FFF2D9] rounded-2xl w-11/12 py-15">

            {/* Cream card — left ~55% */}
            <div className="bg-[#FFF2D9] rounded-2xl p-8 py-14 lg:p-10 w-full lg:w-[55%]">

              <h2 className="font-bebas text-gray-900 text-[32px] sm:text-[40px] leading-none tracking-wide mb-3">
                WHY JOIN INSTINCT
              </h2>

              <p className="text-gray-500 text-sm font-montserrat leading-relaxed mb-6">
                Every project follows a structured methodology —<br />
                ensuring clarity before execution and control throughout delivery.
              </p>

              <div className="mb-6">
                <Btn text="See More About Us" href="/ourcompany" />
              </div>

              <div className="flex flex-col gap-3">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="bg-[#FFE3B04D] rounded-lg px-4 py-3 flex flex-col gap-1"
                  >
                    <p className="text-gray-900 text-sm font-bold font-montserrat">
                      {reason.title}
                    </p>
                    <p className="text-gray-500 text-sm font-montserrat leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — absolutely positioned, right side */}
            <div className="absolute top-20 -right-50 w-[58%] h-[682px] rounded-2xl overflow-hidden">
              <Image
                src={building}
                alt="Why join Instinct"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}