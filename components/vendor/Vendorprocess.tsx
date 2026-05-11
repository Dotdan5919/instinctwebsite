'use client';

import Image from "next/image";
import { motion } from "framer-motion";
const processImg = "/images/vendor/3.jpg"; // replace with your actual image

export default function VendorProcess() {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 lg:px-14 pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: "340px" }}
        >
          {/* Background image */}
          <Image
            src={processImg}
            alt="Vendor process — construction workers"
            fill
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-12 min-h-[340px]">

            {/* Title */}
            <h2 className="font-bebas text-[36px] sm:text-[46px] lg:text-[52px] uppercase leading-none tracking-wide text-white">
              Vendor Process
            </h2>

            {/* Amber content box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 rounded-xl bg-[#C47F00]/85 backdrop-blur-sm px-7 py-6 max-w-2xl space-y-3 "
            >
              <p className="font-montserrat text-sm leading-6 text-white">
                Vendor engagement is based on capability and alignment with project requirements.
              </p>
              <p className="font-montserrat text-sm leading-6 text-white">
                Interested partners are required to submit a detailed proposal outlining their
                services, experience, and delivery capacity.
              </p>
              <p className="font-montserrat text-sm leading-6 text-white">
                Send a mail to{" "}
                <a
                  href="mailto:mooladokun@instinctengineering.com"
                  className="underline underline-offset-2 text-white/90 hover:text-white transition-colors break-all"
                >
                  mooladokun@instinctengineering.com
                </a>
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
