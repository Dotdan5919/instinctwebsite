"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

export default function FeaturedProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
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
    // Reset scroll on category change
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
  const scroller = scrollRef.current;
  if (!scroller) return;
  scroller.scrollTo({ left: scroller.scrollWidth, behavior: "smooth" });
};

  return (
    <section className="bg-white text-slate-950 pt-24 pb-0 overflow-hidden">

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
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
      </div>

      {/* Sidebar + Cards */}
      <div className="mt-12 flex items-stretch h-[480px] lg:h-[500px]">

        {/* Sidebar */}
        <div
          className="hidden lg:flex flex-shrink-0 rounded-tr-3xl bg-[#5b3900] flex-col justify-center"
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
        </div>

        {/* Cards */}
        <div
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
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay — always present */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content — always visible */}
              <div className="absolute inset-x-7 bottom-8 text-white">
                <p className="text-xl font-bold text-amber-400 sm:text-2xl">
                  {project.location}
                </p>
                <p className="mt-2 text-base font-medium text-white/90 sm:text-lg leading-snug">
                  {project.title}
                </p>

                {/* Extra detail — slides up on hover */}
                <div className="mt-3 overflow-hidden">
                  <p className="text-sm leading-6 text-white/75 max-w-sm translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.details}
                  </p>
                </div>

                {/* View Details button — always visible */}
               
               <Btn text="View Details" />


              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll control — bottom right, matches screenshot */}
    <div className="relative py-5 px-6 sm:px-10 lg:px-14 overflow-hidden">
      <button
        type="button"
        onClick={canScrollLeft ? scrollLeft : scrollRight}
        className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-slate-950 transition-all duration-500 ease-in-out"
        style={{
          transform: canScrollLeft ? "translateX(calc(100vw - 280px))" : "translateX(0)",
          paddingLeft: canScrollLeft
            ? "0"
            : "max(calc((100vw - 80rem) / 2 + 3.5rem + 300px + 1rem), 407px)",
        }}
      >
        {canScrollLeft ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Scroll Left
          </>
        ) : (
          <>
            Scroll Right
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </>
        )}
      </button>
    </div>
    </section>
  );
}