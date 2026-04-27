import Image from "next/image"
import { motion } from "framer-motion"

import extraordinary from "@/images/extraordinary.png"
import Btn from "./Btn"

export default function ExtraordinarySection() {
  return (
    <section className="bg-white text-black py-24 z-10">
      <div className="mx-auto max-w-7xl px-14 md:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl "
          >
            <h2 className="font-bebas text-4xl md:text-5xl tracking-tight uppercase leading-tight">
              EXTRAORDINARY TEAMS
              <br />
              BUILDING INSPIRING PROJECTS
            </h2>
            <p className="mt-8 font-montserrat text-gray-600 text-md leading-8">
              Instinct Engineering is a fully integrated construction and engineering
              company delivering projects across residential, commercial, and
              infrastructure sectors.
            </p>
            <p className="mt-6 font-montserrat text-gray-600 text-md leading-8">
              Our strength lies not just in what we build — but in how we structure,
              coordinate, and execute each project.
            </p>
     

     <Btn text="Our Vision, Values & Commitment" href="/ourcompany"/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-black/5 shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
          >
            <Image
              src={extraordinary}
              alt="Construction team on site"
              width={960}
              height={640}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
