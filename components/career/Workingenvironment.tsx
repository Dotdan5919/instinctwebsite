'use client'

export default function WorkingEnvironment() {
  return (
    <section className="w-full bg-white py-0 pt-10 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left */}
          <h2 className="font-bebas text-gray-900 text-3xl sm:text-[52px] lg:text-[58px] leading-none tracking-wide">
            OUR WORKING<br />ENVIRONMENT
          </h2>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-montserrat">
              Our projects are delivered through structured processes that prioritize safety, quality,
              and coordination. We operate in environments where expectations are clear,
              responsibilities are defined, and performance is measurable.
            </p>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-montserrat">
              Every team member plays a role in maintaining standards and ensuring that projects
              are delivered as intended.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
