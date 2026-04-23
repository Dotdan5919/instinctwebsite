"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/images/project1.png";
import img2 from "@/images/project2.png";
import img3 from "@/images/project3.png";
import img4 from "@/images/project2.png";
import img5 from "@/images/project1.png";
import img6 from "@/images/project2.png";
import img7 from "@/images/project3.png";
import img8 from "@/images/project1.png";
import img9 from "@/images/project2.png";
import img10 from "@/images/project3.png";
import Btn from "./Btn";

type CategoryKey = "residential" | "commercial" | "infrastructure" | "renovation";

const categories: { label: string; key: CategoryKey }[] = [
  { label: "Residential Development", key: "residential" },
  { label: "Commercial Projects", key: "commercial" },
  { label: "Infrastructure", key: "infrastructure" },
  { label: "Renovation & Reconstruction", key: "renovation" },
];

type Project = { location: string; title: string; details: string; image: any };

const projectCollections: Record<CategoryKey, Project[]> = {
  residential: [
    {
      location: "Lagos, Nigeria",
      title: "5 Bedroom Duplex with Penthouse, Magodo Phase 2",
      details: "Delivered through a structured construction process ensuring alignment between architectural intent, structural integrity, and long-term performance.",
      image: img1,
    },
    {
      location: "Abuja, Nigeria",
      title: "Modern Townhouse Cluster, Jabi",
      details: "Compact villas designed for family comfort, daylight, and privacy with premium landscaping.",
      image: img2,
    },
    {
      location: "Port Harcourt, Nigeria",
      title: "Seafront Mansion, Lekki Peninsula",
      details: "High-end waterfront living with panoramic glass facades and resort-grade amenities.",
      image: img3,
    },
  ],
  commercial: [
    {
      location: "Ikeja, Nigeria",
      title: "Retail Arcade & Office Campus",
      details: "Mixed-use workspace with flexible retail galleries and landscaped plazas.",
      image: img4,
    },
    {
      location: "Victoria Island, Nigeria",
      title: "Corporate Headquarters Tower",
      details: "A landmark office building with sustainable energy systems and smart infrastructure.",
      image: img5,
    },
    {
      location: "Yaba, Nigeria",
      title: "Technology Innovation Hub",
      details: "Agile workspace for startups and creative teams with modular floor plans.",
      image: img6,
    },
  ],
  infrastructure: [
    {
      location: "Lagos, Nigeria",
      title: "Bridge Expansion & Access Interchange",
      details: "Improved traffic flow with modern structural design and advanced safety systems.",
      image: img7,
    },
    {
      location: "Port Harcourt, Nigeria",
      title: "Urban Transit Depot Upgrade",
      details: "A resilient transport hub with modern passenger amenities and smart routing.",
      image: img8,
    },
  ],
  renovation: [
    {
      location: "Ibadan, Nigeria",
      title: "Heritage Hotel Restoration",
      details: "Sensitive renovation conserving historic character while delivering modern comfort.",
      image: img9,
    },
    {
      location: "Kaduna, Nigeria",
      title: "Industrial Warehouse Retrofit",
      details: "Adaptive reuse project for updated logistics and storage operations.",
      image: img10,
    },
  ],
};

// ─── Mobile: stacked card carousel ───────────────────────────────────────────
function MobileProjects({
  activeCategoryIndex,
  setActiveCategoryIndex,
}: {
  activeCategoryIndex: number;
  setActiveCategoryIndex: (i: number) => void;
}) {
  const activeCategoryKey = categories[activeCategoryIndex].key;
  const projects = projectCollections[activeCategoryKey];
  const [activeCard, setActiveCard] = useState(0);

  // Reset card index when category changes
  useEffect(() => setActiveCard(0), [activeCategoryIndex]);

  return (
    <div className="mt-8 lg:hidden">
      {/* Category tabs — horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto px-6 sm:px-10 pb-1" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat, i) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategoryIndex(i)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              i === activeCategoryIndex
                ? "bg-[#5b3900] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-5 px-6 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategoryKey}-${activeCard}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ height: "340px" }}
          >
            <Image
              src={projects[activeCard].image}
              alt={projects[activeCard].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <p className="text-base font-bold text-amber-400">{projects[activeCard].location}</p>
              <p className="mt-1 text-sm font-medium leading-snug text-white/90">
                {projects[activeCard].title}
              </p>
              <p className="mt-2 text-xs leading-5 text-white/70">
                {projects[activeCard].details}
              </p>
              <div className="mt-4">
                <Btn text="View Details" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots + prev/next */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeCard ? "w-6 bg-[#5b3900]" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveCard((p) => Math.max(0, p - 1))}
              disabled={activeCard === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 disabled:opacity-30 transition-colors hover:border-slate-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setActiveCard((p) => Math.min(projects.length - 1, p + 1))}
              disabled={activeCard === projects.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 disabled:opacity-30 transition-colors hover:border-slate-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Desktop: sidebar + horizontal scroll ────────────────────────────────────
function DesktopProjects({
  activeCategoryIndex,
  setActiveCategoryIndex,
}: {
  activeCategoryIndex: number;
  setActiveCategoryIndex: (i: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeCategoryKey = categories[activeCategoryIndex].key;
  const projects = projectCollections[activeCategoryKey];

  const updateScrollVisibility = () => {
    const s = scrollRef.current;
    if (!s) return;
    setCanScrollLeft(s.scrollLeft > 20);
    setCanScrollRight(s.scrollLeft + s.clientWidth < s.scrollWidth - 20);
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    updateScrollVisibility();
  }, [activeCategoryIndex]);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", updateScrollVisibility);
    window.addEventListener("resize", updateScrollVisibility);
    return () => {
      scroller.removeEventListener("scroll", updateScrollVisibility);
      window.removeEventListener("resize", updateScrollVisibility);
    };
  }, []);

  const scrollLeft = () => scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  const scrollRight = () => {
    const s = scrollRef.current;
    if (s) s.scrollTo({ left: s.scrollWidth, behavior: "smooth" });
  };

  return (
    <div className="hidden lg:block">
      {/* Sidebar + Cards row */}
      <div className="mt-12 flex items-stretch h-[480px] lg:h-[500px]">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-shrink-0 rounded-tr-3xl bg-[#5b3900] flex flex-col justify-center"
          style={{
            width: "max(calc((100vw - 80rem) / 2 + 3.5rem + 300px), 390px)",
            paddingLeft: "max(calc((100vw - 80rem) / 2 + 2.9rem), 2.5rem)",
          }}
        >
          <div className="space-y-7 font-montserrat">
            {categories.map((item, index) => {
              const isActive = index === activeCategoryIndex;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveCategoryIndex(index)}
                  className={`flex w-full items-center gap-4 text-left transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <div
                    className={`w-[2px] h-5 flex-shrink-0 rounded-full transition-all ${
                      isActive ? "bg-white" : "bg-white/10"
                    }`}
                  />
                  <span className="text-xs font-semibold tracking-[0.2em] shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm leading-snug ${isActive ? "font-semibold" : ""}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth flex-1 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={`${activeCategoryKey}-${i}`}
              className="group relative flex-shrink-0 overflow-hidden rounded-t-3xl h-full cursor-pointer"
              style={{ width: "clamp(320px, 45vw, 740px)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-7 bottom-8 text-white">
                <p className="text-xl font-bold text-amber-400 sm:text-2xl">{project.location}</p>
                <p className="mt-2 text-base font-medium text-white/90 sm:text-lg leading-snug">
                  {project.title}
                </p>
                <div className="mt-3 overflow-hidden">
                  <p className="text-sm leading-6 text-white/75 max-w-sm translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.details}
                  </p>
                </div>
                <Btn text="View Details" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll controls */}
      <div className="relative py-5 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <button
          type="button"
          onClick={canScrollLeft ? scrollLeft : scrollRight}
          className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-slate-950 transition-all duration-500 ease-in-out"
          style={{
            transform: canScrollRight ? "translateX(calc(100vw - 280px))" : "translateX(0)",
            paddingLeft: canScrollRight
              ? "0"
              : "max(calc((100vw - 80rem) / 2 + 3.5rem + 300px + 1rem), 407px)",
          }}
        >
          {!canScrollRight ? (
            <>
              Scroll Right
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Scroll Left
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function FeaturedProjectsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section className="bg-white text-slate-950 pt-24 pb-0 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14"
      >
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.2fr_0.8fr] xl:items-start">
          <div>
            <h2 className="font-bebas text-5xl uppercase leading-tight text-slate-950 sm:text-6xl">
              Our Featured
              <br />
              Projects
            </h2>
          </div>
          <div>
            <p className="font-montserrat text-base font-semibold text-slate-600 sm:text-lg">
              Scale. Complexity. Performance. Impact.
            </p>
            <p className="mt-5 font-montserrat text-base leading-7 text-slate-700">
              We deliver projects that go beyond construction — creating structures that meet
              functional demands, uphold quality standards, and support long-term use across
              diverse environments.
            </p>
          </div>
          <div className="flex items-center xl:justify-end">
            <Btn text="See all Projects" />
          </div>
        </div>
      </motion.div>

      {/* Mobile layout */}
      <MobileProjects
        activeCategoryIndex={activeCategoryIndex}
        setActiveCategoryIndex={setActiveCategoryIndex}
      />

      {/* Desktop layout */}
      <DesktopProjects
        activeCategoryIndex={activeCategoryIndex}
        setActiveCategoryIndex={setActiveCategoryIndex}
      />
    </section>
  );
}