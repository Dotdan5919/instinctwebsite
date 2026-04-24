'use client'

export default function MoreThanWorkplace() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-10 items-start">
          {/* Left */}
          <div className=" col-start-1 lg:col-end-2 ">
            <h2 className="font-bebas text-gray-900 text-[40px] sm:text-[52px] lg:text-[58px] leading-none tracking-wide">
              MORE THAN A<br />WORKPLACE
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 font-montserrat lg:col-span-3">
            <p className="text-black text-lg   font-montserrat">
              A career at Instinct Engineering offers the opportunity to work on real projects that
              demand technical skill, discipline, and accountability.
            </p>
            <p className="text-black text-lg  leading-relaxed font-montserrat">
              From residential developments to infrastructure works, our teams operate in structured
              environments where every role contributes to successful delivery.
            </p>
            <p className="text-black text-lg  leading-relaxed font-montserrat">
              We value individuals who are committed to growth, take ownership of their work, and
              understand the importance of precision in execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}