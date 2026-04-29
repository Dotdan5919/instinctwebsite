"use client";
import { useState } from "react";
import Image from "next/image";
import Btn from "./Btn";
const extraordinary = "/images/extraordinary.png";
const whatwedo1 = "/images/whatwedo1.jpg";
const whatwedo2 = "/images/whatwedo2.jpg";
const whatwedo3 = "/images/whatwedo3.jpg";
const whatwedo4 = "/images/whatwedo4.jpg";
const whatwedo5 = "/images/whatwedo5.jpg";
const whatwedo6 = "/images/whatwedo6.jpg";
const whatwedo7 = "/images/whatwedo7.jpg";

const services = [
  {
    num: "01",
    name: "Construction Management",
    description:
      "We provide coordinated oversight across all phases of construction — aligning design, resources, and site execution to deliver projects with precision and control.",
    link: "Learn about Construction Management with Instinct",
  },
  {
    num: "02",
    name: "Building Construction",
    description:
      "From residential developments to commercial buildings, we execute projects to defined specifications — ensuring structural integrity, quality, and long-term performance.",
    link: "View Building Projects",
  },
  {
    num: "03",
    name: "Road & Infrastructure",
    description:
      "We deliver civil and infrastructure works designed for durability, efficiency, and long-term usability — supporting movement, access, and development.",
    link: "Explore Infrastructure",
  },
  {
    num: "04",
    name: "Project Partnering",
    description:
      "Our collaborative approach integrates clients, consultants, and stakeholders — ensuring alignment, transparency, and coordinated delivery from start to finish.",
    link: "Learn about partnering",
  },
  {
    num: "05",
    name: "Roofing Systems",
    description:
      "Engineered roofing solutions installed with precision — designed to provide protection, resilience, and long-term performance under varying conditions.",
    link: "View roofing solutions",
  },
  {
    num: "06",
    name: "Flooring & Finishes",
    description:
      "We deliver high-performance flooring and finishing systems — combining durability, functionality, and refined detailing across all project types.",
    link: "Explore flooring and finishes",
  },
  {
    num: "07",
    name: "Reconstruction & Upgrades",
    description:
      "We upgrade and redevelop existing structures — improving integrity, functionality, and lifespan through structured and carefully managed execution.",
    link: "See more on reconstruction",
  },
];

export default function WhatWeDoSection() {
  const [active, setActive] = useState(0);

  const serviceImages = [
    whatwedo7,
    whatwedo6,
    whatwedo5,
    whatwedo4,
    whatwedo3,
    whatwedo1,
    whatwedo2,
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Header - 3 columns */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr_1.2fr] lg:items-center mb-12">
          <h2 className="font-bebas text-5xl uppercase leading-tight text-black sm:text-6xl">
            WHAT WE DO.
          </h2>
          <p className="text-lg leading-8 text-black font-montserrat">
            We operate across key construction disciplines, applying structured
            processes that align planning, execution, and outcomes at every stage.
          </p>
          <div className="flex lg:justify-end">
            <Btn text="Our Vision, Values & Commitment"  href="/ourcompany"/>
          </div>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[400px_1fr]">

            {/* Left – service list */}
            <div className="bg-[#E8950A] py-8 px-8">
              {services.map((service, i) => (
                <button
                  key={service.num}
                  onClick={() => setActive(i)}
                  className="w-full flex items-center gap-0 py-[11px] group relative text-left"
                >
                  {/* Active left border */}
                  <span
                    className={`absolute left-[-32px] top-0 bottom-0 w-[3px] rounded-r transition-colors duration-200 ${
                      active === i ? "bg-amber-600" : "bg-white/20"
                    }`}
                  />

                   {/* Vertical divider */}
                  <span className="w-px h-[14px] bg-[#734A00]/30 mx-3 flex-shrink-0" />
                  {/* Number */}
                  <span
                    className={`text-sm font-medium w-7 flex-shrink-0 transition-colors duration-200 ${
                      active === i ? "text-white" : "text-[#734A00]/50"
                    }`}
                  >
                    {service.num}
                  </span>
                 
                  {/* Name */}
                  <span
                    className={`text-[13.5px] font-medium transition-colors duration-200 ${
                      active === i ? "text-white font-semibold" : "text-[#734A00]/55"
                    }`}
                  >
                    {service.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Right – image + text panel */}
            <div className="relative min-h-[420px] bg-slate-950 overflow-hidden">
              <Image
                src={serviceImages[active] ?? extraordinary}
                alt={services[active].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />
              <div className="absolute inset-0 flex flex-col justify-center px-12 py-10">
                <p
                  key={active}
                  className="text-[18px] font-montserrat leading-8 text-white/85  max-w-lg animate-fadeIn"
                >
                  {services[active].description}
                </p>
                <div className="mt-8">
                  <Btn text={services[active].link}  href="/whatwedo" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
