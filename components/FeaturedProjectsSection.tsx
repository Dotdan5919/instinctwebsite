"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import projectImage from "@/images/featured_image.png";
import Btn from "./Btn";

type CategoryKey = "residential" | "commercial" | "infrastructure" | "renovation";

const categories: { label: string; key: CategoryKey }[] = [
  { label: "Residential Development", key: "residential" },
  { label: "Commercial Projects", key: "commercial" },
  { label: "Infrastructure", key: "infrastructure" },
  { label: "Renovation & Reconstruction", key: "renovation" },
];

const projectCollections: Record<CategoryKey, { location: string; title: string; details: string }[]> = {
  residential: [
    {
      location: "Lagos, Nigeria",
      title: "5 Bedroom Duplex with Penthouse, Magodo Phase 2",
      details: "Luxury residential architecture with expansive terraces and premium finishes.",
    },
    {
      location: "Abuja, Nigeria",
      title: "Modern Townhouse Cluster, Jabi",
      details: "Compact villas designed for family comfort, daylight, and privacy.",
    },
    {
      location: "Port Harcourt, Nigeria",
      title: "Seafront Mansion, Lekki Peninsula",
      details: "High-end waterfront living with panoramic glass facades.",
    },
  ],
  commercial: [
    {
      location: "Ikeja, Nigeria",
      title: "Retail Arcade & Office Campus",
      details: "Mixed-use workspace with flexible retail galleries and landscaped plazas.",
    },
    {
      location: "Victoria Island, Nigeria",
      title: "Corporate Headquarters Tower",
      details: "A landmark office building with sustainable energy systems.",
    },
    {
      location: "Yaba, Nigeria",
      title: "Technology Innovation Hub",
      details: "Agile workspace for startups and creative teams.",
    },
  ],
  infrastructure: [
    {
      location: "Lagos, Nigeria",
      title: "Bridge Expansion & Access Interchange",
      details: "Improved traffic flow with modern structural design and safety systems.",
    },
    {
      location: "Port Harcourt, Nigeria",
      title: "Urban Transit Depot Upgrade",
      details: "A resilient transport hub with modern passenger amenities.",
    },
  ],
  renovation: [
    {
      location: "Ibadan, Nigeria",
      title: "Heritage Hotel Restoration",
      details: "Sensitive renovation conserving historic character and modern comfort.",
    },
    {
      location: "Kaduna, Nigeria",
      title: "Industrial Warehouse Retrofit",
      details: "Adaptive reuse project for updated logistics and storage operations.",
    },
    {
      location: "Enugu, Nigeria",
      title: "Executive Clubhouse Transformation",
      details: "Premium interior overhaul with refined material palettes.",
    },
  ],
};

export default function FeaturedProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeCategoryKey = categories[activeCategoryIndex].key;
  const projects = projectCollections[activeCategoryKey] ?? projectCollections.residential;

  const updateScrollVisibility = () => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    setCanScrollLeft(scroller.scrollLeft > 20);
    setCanScrollRight(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 20);
  };

  useEffect(() => {
    updateScrollVisibility();
    const scroller = scrollRef.current;
    if (!scroller) return;

    scroller.addEventListener("scroll", updateScrollVisibility);
    window.addEventListener("resize", updateScrollVisibility);

    return () => {
      scroller.removeEventListener("scroll", updateScrollVisibility);
      window.removeEventListener("resize", updateScrollVisibility);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section className="bg-white text-slate-950 pt-24 pb-0 overflow-hidden">

      {/* ── Header ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.2fr_0.8fr] xl:items-start">
          <div>
            <h2 className="font-bebas text-5xl uppercase tracking-tight leading-tight text-slate-950 sm:text-6xl">
              Our Featured
              <br />
              Projects
            </h2>
          </div>

          <div className="max-w-2xl ">
            <p className="font-montserrat text-base text-slate-600 sm:text-lg ">
              Scale. Complexity. Performance. Impact.
            </p>
            <p className="mt-5 max-w-xl font-montserrat text-lg leading-6 text-slate-700">
              We deliver projects that go beyond construction — creating
              structures that meet functional demands, uphold quality standards,
              and support long-term use across diverse environments.
            </p>
          </div>

          <div className="flex items-center justify-end">
           
            <Btn text="See all Projects" />
          </div>
        </div>
      </div>

      {/* ── Sidebar + Cards (full-bleed, no bottom padding) ── */}
      <div className="mt-12 flex items-stretch h-[480px] lg:h-[500px]">

        {/* Sidebar — rounded top corners only, bleeds to bottom */}
        <div
          className="hidden lg:flex flex-shrink-0 rounded-tr-3xl bg-[#5b3900] flex-col justify-center"
         style={{
  marginLeft: "0",
  width: "max(calc((100vw - 80rem) / 2 + 3.5rem + 300px), 390px)",
  paddingLeft: "max(calc((100vw - 80rem) / 2 + 2.9rem ), 2.5rem)",
  
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
                    isActive ? "text-white" : "text-white/60 hover:text-white"
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
        </div>

        {/* Scrollable cards — also bleed to bottom, rounded top only */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth flex-1 px-4 pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 overflow-hidden rounded-t-3xl bg-slate-200 h-full"
              style={{ width: "clamp(320px, 50vw, 760px)" }}
            >
              <Image
                src={projectImage}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-x-7 bottom-8 text-white">
                <p className="text-xl font-bold text-amber-400 sm:text-2xl">
                  {project.location}
                </p>
                <p className="mt-2 text-base tracking-tight text-white/90 sm:text-lg">
                  {project.title}
                </p>
                <div className="mt-4 max-w-[32rem] space-y-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm leading-6 text-white/80">{project.details}</p>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Premium design</span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Built for the future</span>
                  </div>
                </div>
                <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-opacity duration-300 group-hover:opacity-100 opacity-90">
                  View Project
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-6 sm:px-10 lg:px-14 py-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
              canScrollLeft
                ? "animate-pulse border-amber-400 bg-amber-50 text-amber-600 shadow-[0_12px_30px_-18px_rgba(251,191,36,0.9)]"
                : "border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
              canScrollRight
                ? "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-amber-500"
                : "border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="text-sm font-medium text-slate-500 tracking-wide">
          {canScrollLeft
            ? "Scroll left to see previous projects"
            : canScrollRight
            ? "Scroll right to browse the full gallery"
            : "You are viewing all featured projects"}
        </div>
      </div>

    </section>
  );
}