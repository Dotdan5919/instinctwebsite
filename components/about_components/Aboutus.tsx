import React from 'react'
import Btn from '@/components/Btn';

export default function Aboutus() {
  return (
    <section className="bg-white py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-[0.5fr_1fr] items-start">

          {/* Left — title only */}
          <h2 className="font-bebas text-5xl uppercase tracking-tight text-slate-950 sm:text-6xl sticky top-24">
            ABOUT INSTINCT
          </h2>

          {/* Right — all content */}
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-700">
              Instinct Engineering is a fully integrated construction and engineering company delivering projects across residential, commercial, and infrastructure sectors. Our work is defined not only by what we build, but by how deliberately each project is conceived, structured, and executed.
            </p>
            <p className="text-base leading-8 text-slate-700">
              We operate at the intersection of engineering expertise and construction discipline — ensuring that every project is delivered with clarity, control, and measurable performance.
            </p>
            <p className="text-base leading-8 text-slate-700">
              What distinguishes Instinct is a consistent ability to translate complex project requirements into structured execution — eliminating uncertainty and ensuring predictable outcomes.
            </p>

            {/* CTA */}
          <Btn text="Check out our Journey" />
          </div>

        </div>
      </div>
    </section>
  )
}