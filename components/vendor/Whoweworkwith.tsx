'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import partnersImg from "@/images/vendor/3.jpg";
import Btn from "@/components/Btn";

const partnerTypes = [
  { label: "Material Suppliers", detail: "Cement, steel, aggregates, finishing materials" },
  { label: "Subcontractors", detail: "Masonry, carpentry, roofing, tiling, electrical, plumbing" },
  { label: "Equipment Providers", detail: "Construction equipment, tools, machinery" },
  { label: "Technical Services", detail: "Engineering consultants, surveyors, specialists" },
];

export default function WhoWeWorkWith() {
  return (
    /* Outer section is the positioning context for the breakout image */
    <section className="relative bg-white py-12 px-6 sm:px-10 lg:px-14 overflow-hidden mb-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#FFF8ED] px-8 py-12 sm:px-10 lg:px-14"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

            {/* Left: text + list */}
            <div className="flex-1 min-w-0">
              <h2 className="font-bebas text-[36px] sm:text-[46px] lg:text-[52px] uppercase leading-none tracking-wide text-slate-900">
                Who We Work With
              </h2>

              <p className="mt-4 font-montserrat text-sm leading-6 text-slate-600 max-w-sm">
                Every project follows a structured methodology —
                ensuring clarity before execution and control throughout delivery.
              </p>

              <Btn text="See More About us" href="/about" />

              {/* Partner type list */}
              <div className="mt-8 divide-y divide-amber-100">
                {partnerTypes.map((type) => (
                  <div key={type.label} className="py-4">
                    <p className="font-montserrat text-sm font-bold text-slate-800">{type.label}</p>
                    <p className="mt-0.5 font-montserrat text-sm text-slate-500">{type.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/*
              Invisible spacer that reserves the right column width on desktop,
              preventing the text from stretching full-width into the image area.
              Collapses completely on mobile.
            */}
            <div className="hidden lg:block lg:w-[42%] flex-shrink-0" aria-hidden="true" />

          </div>
        </motion.div>
      </div>

      {/*
        Breakout image.
        - Mobile/tablet: normal stacked block below the card.
        - Desktop (lg+): absolutely positioned relative to <section>,
          covering the full right edge and height — bleeding outside the card.
      */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative mt-6 w-full rounded-3xl overflow-hidden
          lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[40%]
          lg:rounded-l-3xl lg:rounded-r-none
        "
        style={{ height: "clamp(260px, 50vw, 9999px)" }}
      >
        <Image
          src={partnersImg}
          alt="Partner reviewing construction plans"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}