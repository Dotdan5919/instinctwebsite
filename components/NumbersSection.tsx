"use client";

import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";

function RollingDigit({
  digit,
  delay,
  started,
}: {
  digit: string;
  delay: number;
  started: boolean;
}) {
  const [offset, setOffset] = useState(0);
  const isNum = !isNaN(Number(digit)) && digit !== ",";

  useEffect(() => {
    if (!isNum || !started) return;
    const t = setTimeout(() => setOffset(Number(digit)), delay);
    return () => clearTimeout(t);
  }, [digit, delay, isNum, started]);

  if (!isNum) {
    return (
      <span className="text-6xl font-bebas leading-none text-white">
        {digit}
      </span>
    );
  }

  return (
    <span
      className="inline-block overflow-hidden"
      style={{ height: "72px" }} // fixed px height matching font size
    >
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${offset * 72}px)`,
          transition: started
            ? `transform 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
            : "none",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className="font-bebas text-6xl text-white tabular-nums"
            style={{ display: "block", height: "72px", lineHeight: "72px" }}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
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
  const digits = value.toLocaleString().split("");

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-widest text-white/60 font-light">
        {label}
      </p>
      <div className="flex items-center">
        {digits.map((digit, i) => (
          <RollingDigit
            key={i}
            digit={digit}
            started={started}
            delay={baseDelay + (digits.length - 1 - i) * 90}
          />
        ))}
        <span
          className="font-bebas text-5xl text-amber-400 ml-1"
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
    <section className="bg-white py-24" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-10 rounded-[2rem] border border-white/10 bg-[#5b3900] p-8 sm:p-10 lg:p-12">

          {/* Stats row */}
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
          </div>

          {/* White card */}
          <div className="rounded-[1.5rem] bg-white p-8 text-slate-950 sm:p-10">
            <h2 className="font-bebas text-4xl uppercase tracking-tight text-slate-950 sm:text-5xl">
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
            <div className="mt-8">
              <Btn text="Learn more about our journey" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}