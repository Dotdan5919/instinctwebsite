import Image from "next/image";
import { motion } from "framer-motion";
import TrustedImage from "@/images/Trusted.png";
import Btn from "./Btn";

export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden py-16 z-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="relative flex items-center">

          {/* Image — taller, no border, overlaps the cream box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative z-0 w-[45%] flex-shrink-0"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl" style={{ height: '620px' }}>
              <Image
                src={TrustedImage}
                alt="Trusted partnership"
                className="h-full w-full object-cover object-center"
                placeholder="blur"
                fill
                style={{ position: 'absolute' }}
              />
            </div>
          </motion.div>

          {/* Cream box — overlaps the image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-0 flex-1 rounded-3xl bg-[#fff8ed] py-14 pr-12 shadow-xl"
            style={{ marginLeft: '-80px', paddingLeft: 'calc(80px + 48px)' }}
          >
            <h2 className="mb-6 font-bebas text-4xl  uppercase leading-tight text-slate-950 sm:text-5xl">
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