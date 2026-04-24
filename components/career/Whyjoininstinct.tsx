'use client'
import Image from 'next/image'
import Btn from '../Btn'
import building from '@/images/building.jpg'

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
    <section className="w-full py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">

        {/* Outer wrapper — relative so image can break out */}
        <div className="relative bg-[#FAF6EE] rounded-2xl w-11/12">

          {/* Cream card — only takes left ~55% of width */}
          <div className="bg-[#FAF6EE] rounded-2xl p-8 lg:p-10 w-full lg:w-[55%]">

            {/* Heading */}
            <h2 className="font-bebas text-gray-900 text-[32px] sm:text-[40px] leading-none tracking-wide mb-3">
              WHY JOIN INSTINCT
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm font-montserrat leading-relaxed mb-6">
              Every project follows a structured methodology —<br />
              ensuring clarity before execution and control throughout delivery.
            </p>

            {/* Button */}
            <div className="mb-6">
              <Btn text="See More About Us" />
            </div>

            {/* Reasons list — each item in its own subtle box */}
            <div className="flex flex-col gap-3">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="bg-[#FFF2D9] rounded-lg px-4 py-3 flex flex-col gap-1"
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

          {/* Image — absolutely positioned, right side, overlapping */}
          <div
            className="
              hidden lg:block
              absolute top-8 -right-14
              w-[48%] h-full
              rounded-2xl overflow-hidden
            "
          >
            <Image
              src={building}
              alt="Why join Instinct"
              fill
              className="object-cover"
            />
          </div>

          {/* Mobile image — shows below on small screens */}
          <div className="lg:hidden  h-[280px] rounded-2xl overflow-hidden mt-6">
            <Image
              src={building}
              alt="Why join Instinct"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}