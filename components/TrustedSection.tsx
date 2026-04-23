import Image from "next/image";
import { motion } from "framer-motion";
import TrustedImage from "@/images/Trusted.png";
import Btn from "./Btn";

export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden py-16 z-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* ── Mobile / Tablet (< lg): stacked ── */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
            style={{ height: "300px" }}
          >
            <Image
              src={TrustedImage}
              alt="Trusted partnership"
              className="object-cover object-center"
              placeholder="blur"
              fill
            />
          </motion.div>

          {/* Cream box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#fff8ed] px-8 py-10 shadow-xl sm:px-10"
          >
            <h2 className="mb-6 font-bebas text-4xl uppercase leading-tight text-slate-950 sm:text-5xl">
              A trusted,
              <br />
              collaborative partner
              <br />
              focused on your goals.
            </h2>
            <p className="mb-8 max-w-md text-base leading-7 font-montserrat text-slate-600">
              Every project follows a structured methodology —
              ensuring clarity before execution and control throughout delivery.
            </p>
            <Btn text="Explore Our Approach" />
          </motion.div>
        </div>

        {/* ── Desktop (lg+): overlapping layout ── */}
        <div className="relative hidden lg:flex lg:items-center">

          {/* Image — taller, overlaps cream box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative z-10 w-[45%] flex-shrink-0"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ height: "620px" }}>
              <Image
                src={TrustedImage}
                alt="Trusted partnership"
                className="object-cover object-center"
                placeholder="blur"
                fill
              />
            </div>
          </motion.div>

          {/* Cream box — overlaps image on the right side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-0 flex-1 rounded-3xl bg-[#fff8ed] py-14 pr-12 shadow-xl"
            style={{ marginLeft: "-80px", paddingLeft: "calc(80px + 48px)" }}
          >
            <h2 className="mb-6 font-bebas text-4xl uppercase leading-tight text-slate-950 sm:text-5xl">
              A trusted,
              <br />
              collaborative partner
              <br />
              focused on your goals.
            </h2>
            <p className="mb-8 max-w-md text-base leading-7 font-montserrat text-slate-600">
              Every project follows a structured methodology —
              ensuring clarity before execution and control throughout delivery.
            </p>
            <Btn text="Explore Our Approach" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}