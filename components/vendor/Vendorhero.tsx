'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import vendorHero from "@/images/vendor/2.jpg"; // replace with your actual image
import Btn from "@/components/Btn";

export default function VendorHero() {
  return (
    <section className="bg-white pt-16 pb-12 px-6 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-[40px] sm:text-[52px] lg:text-[62px] leading-none tracking-wide text-slate-900 uppercase"
        >
          Vendor Partnerships
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-2xl space-y-2"
        >
          <p className="font-montserrat text-sm leading-6 text-slate-600">
            Our projects require dependable partners across materials supply, technical services, and site execution.
          </p>
          <p className="font-montserrat text-sm leading-6 text-slate-600">
            We engage vendors who demonstrate capability, consistency, and the ability to align with project requirements and timelines.
          </p>
        </motion.div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
         <Btn text="Our Mission, Vision & Values" href="/about#mission" />
        </motion.div>

        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-10 w-full overflow-hidden rounded-2xl"
          style={{ height: "clamp(220px, 38vw, 420px)" }}
        >
          <Image
            src={vendorHero}
            alt="Construction workers on site"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}