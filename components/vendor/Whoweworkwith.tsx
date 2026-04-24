'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import partnersImg from "@/images/vendor/5.jpg"; // replace with your actual image

const partnerTypes = [
  { label: "Material Suppliers", detail: "Cement, steel, aggregates, finishing materials" },
  { label: "Subcontractors", detail: "Masonry, carpentry, roofing, tiling, electrical, plumbing" },
  { label: "Equipment Providers", detail: "Construction equipment, tools, machinery" },
  { label: "Technical Services", detail: "Engineering consultants, surveyors, specialists" },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 lg:px-14">
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
            <div className="flex-1">
              <h2 className="font-bebas text-[36px] sm:text-[46px] lg:text-[52px] uppercase leading-none tracking-wide text-slate-900">
                Who We Work With
              </h2>

              <p className="mt-4 font-montserrat text-sm leading-6 text-slate-600 max-w-sm">
                Every project follows a structured methodology —
                ensuring clarity before execution and control throughout delivery.
              </p>

              {/* Link */}
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-[#7a4f00] hover:text-[#5b3900] transition-colors"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                See More About Us
              </Link>

              {/* Partner type list */}
              <div className="mt-8 space-y-0 divide-y divide-amber-100">
                {partnerTypes.map((type) => (
                  <div key={type.label} className="py-4">
                    <p className="font-montserrat text-sm font-bold text-slate-800">{type.label}</p>
                    <p className="mt-0.5 font-montserrat text-sm text-slate-500">{type.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full overflow-hidden rounded-2xl lg:w-[42%] flex-shrink-0"
              style={{ height: "clamp(260px, 40vw, 440px)" }}
            >
              <Image
                src={partnersImg}
                alt="Partner reviewing construction plans"
                fill
                className="object-cover object-center"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}