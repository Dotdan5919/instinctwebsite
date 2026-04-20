"use client";

import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatItem({
  label,
  value,
  animate,
  delay,
}: {
  label: string;
  value: number;
  animate: boolean;
  delay: number;
}) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(t);
    }
  }, [animate, delay]);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm uppercase  text-white/60 font-light">
        {label}
      </p>
      <div className="flex items-end gap-1">
        <span className="text-6xl font-bebas leading-none text-white sm:text-6xl lg:text-6xl tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="mb-1 text-4xl font-bold text-amber-400 sm:text-5xl">
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 text-white" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 rounded-[2rem] border border-white/10 bg-[#5b3900] p-8 sm:p-10 lg:p-12">

          {/* Top stats row */}
          <div className="grid gap-8 xl:grid-cols-[auto_1fr] xl:items-center">

            {/* Title */}
            <div className="flex items-center pr-8 xl:border-r xl:border-white/20">
              <h2 className="font-bebas text-5xl uppercase leading-none text-amber-400 sm:text-6xl lg:text-7xl">
                Our
                <br />
                Numbers
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {stats.map((item, i) => (
                <StatItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  animate={animate}
                  delay={i * 120}
                />
              ))}
            </div>
          </div>

          {/* White card */}
          <div className="rounded-[1.5rem] bg-white p-8 text-slate-950 sm:p-10">
            <h2 className="font-bebas text-4xl uppercase tracking-tight text-slate-950 sm:text-5xl">
              We Build History
            </h2>
            <p className="mt-5 font-montserrat max-w-3xl  leading-8 text-slate-600 sm:text-md">
              The 21st century and beyond will be shaped by the world's ability
              to work at speed and at scale to meet fast-evolving needs for
              infrastructure, energy, advanced manufacturing, critical resources,
              environmental protection, and national security.
            </p>
            <p className="mt-4 font-montserrat mb-16 max-w-3xl  leading-8 text-slate-600 sm:text-md">
              For more than 15 years, we have risen to the occasion. With our
              unique expertise and experience, Instinct is purpose-built to
              tackle these challenges.
            </p>
            <div className="mt-8">
              <Btn text="Learn more about our journey" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}