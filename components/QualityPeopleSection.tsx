import Image from "next/image";
import { motion } from "framer-motion";
const extraordinary = "/images/define.jpg";
import Btn from "./Btn";

export default function QualityPeopleSection() {
  return (
    <section className="bg-white py-0 pb-10 sm:py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="relative overflow-hidden rounded-[28px] min-h-[500px]">
          
          {/* Background image */}
          <Image
            src={extraordinary}
            alt="Construction workers on site"
            fill
            className="object-cover object-center"
          />

          {/* Overlay — lighter so people show through */}
          <div className="absolute inset-0 bg-slate-950/55" />

          {/* Content — pinned to bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-end h-full min-h-[500px] px-10 py-12 sm:px-14 sm:py-14"
          >
            <div className="max-w-lg space-y-6">
              <h2 className="font-bebas text-3xl uppercase leading-[1.05] text-white sm:text-6xl">
                DEFINED BY THE
                <br />
                QUALITY OF OUR PEOPLE
              </h2>
              <p className="text-md leading-7 text-white/85 sm:text-base">
                Our people bring technical excellence, ingenuity, drive, creativity, and experience to help our customers achieve their bold visions. We succeed through partnership and a shared desire to make a difference. Motivated by tomorrow's challenges, we push the limits of what's possible.
              </p>
              <Btn text="The people behind the projects"  href="/ourleadership" className=" sm:scale-100 scale-90 sm:right-0 right-6 "/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
