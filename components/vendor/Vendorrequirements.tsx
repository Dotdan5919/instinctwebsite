'use client';

import Image from "next/image";
import { motion } from "framer-motion";
const requirementsImg = "/images/vendor/4.jpg"; // replace with your actual image

const requirements = [
  "Registered business (CAC documentation)",
  "Relevant experience in construction-related services",
  "Ability to meet timelines and specifications",
  "Proven delivery capability",
  "Valid contact and operational details",
];

export default function VendorRequirements() {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden rounded-2xl lg:w-[38%] flex-shrink-0"
            style={{ height: "clamp(220px, 35vw, 360px)" }}
          >
            <Image
              src={requirementsImg}
              alt="Team meeting for vendor requirements"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right: requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-bebas text-[36px] sm:text-[46px] lg:text-[52px] uppercase leading-none tracking-wide text-slate-900">
              Requirements
            </h2>

            <p className="mt-4 font-montserrat text-sm leading-6 text-slate-600 max-w-md">
              To maintain consistency across projects, all vendors are required to
              meet defined standards before engagement.
            </p>

            <ul className="mt-7 space-y-3">
              {requirements.map((req) => (
                <li
                  key={req}
                  className="rounded-lg bg-[#FFF8ED] px-5 py-3.5 font-montserrat text-sm text-slate-700"
                >
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
