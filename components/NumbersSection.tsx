"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Btn from "./Btn";

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatItem({
  label,
  value,
  started,
  baseDelay,
}: {
  label: string;
  value: number;
  started: boolean;
  baseDelay: number;
}) {
  const [delayedStart, setDelayedStart] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setDelayedStart(true), baseDelay);
    return () => clearTimeout(t);
  }, [started, baseDelay]);

  const count = useCountUp(value, 2000, delayedStart);

  return (
    <div className="flex flex-col gap-3 ">
      <p className="text-xs uppercase tracking-widest text-white/60 font-medium ">
        {label}
      </p>
      <div className="flex items-center">
        <span
          className="font-bebas sm:text-6xl text-4xl text-white tabular-nums"
          style={{ lineHeight: "72px" }}
        >
          {count.toLocaleString()}
        </span>
        <span
          className="font-bebas sm:text-5xl text-4xl  text-amber-400 ml-1"
          style={{ lineHeight: "72px" }}
        >
          +
        </span>
      </div>
    </div>
  );
}

const stats = [
  { label: "Projects Delivered", value: 3562 },
  { label: "Client Retention", value: 1054 },
  { label: "Active Workforce", value: 400 },
  { label: "Industry Milestones", value: 67 },
];

export default function NumbersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-0 pb-10 sm:py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 rounded-[2rem] border border-white/10 bg-[#5b3900] px-5 py-6 sm:p-10 lg:p-12">

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-8 xl:grid-cols-[auto_1fr] xl:items-center"
          >
            <div className="flex items-center pr-8 xl:border-r xl:border-white/20">
              <h2 className="font-bebas   text-[36px] uppercase leading-none text-amber-400 sm:text-6xl lg:text-7xl">
                Our
                <br />
                Numbers
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {stats.map((item, i) => (
                <StatItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  started={started}
                  baseDelay={i * 200}
                />
              ))}
            </div>
          </motion.div>

          {/* White card */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[1.5rem] bg-white p-5 text-black sm:p-10"
          >
            <h2 className="font-bebas text-3xl uppercase tracking-tight text-black sm:text-5xl">
              We Build History
            </h2>
            <p className="mt-5 font-montserrat max-w-3xl leading-8 text-slate-600 sm:text-md">
              The 21st century and beyond will be shaped by the world's ability
              to work at speed and at scale to meet fast-evolving needs for
              infrastructure, energy, advanced manufacturing, critical resources,
              environmental protection, and national security.
            </p>
            <p className="mt-4 font-montserrat mb-16 max-w-3xl leading-8 text-slate-600 sm:text-md">
              For more than 15 years, we have risen to the occasion. With our
              unique expertise and experience, Instinct is purpose-built to
              tackle these challenges.
            </p>
            <div className="mt-8 sm:scale-100 scale-90 sm:ml-0 -ml-5 ">
              <Btn text="Learn more about our journey"  href="/ourjourney"/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
