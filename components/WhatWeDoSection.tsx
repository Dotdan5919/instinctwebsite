"use client";
import { useState } from "react";
import Image from "next/image";
import Btn from "./Btn";
import extraordinary from "@/images/extraordinary.png";

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
      "From foundations to finishes, we execute full-scale building projects with rigorous quality control, skilled labour, and on-site precision at every phase.",
    link: "Learn about Building Construction with Instinct",
  },
  {
    num: "03",
    name: "Road & Infrastructure",
    description:
      "We design and build durable road networks and civil infrastructure — delivering safe, long-lasting solutions that connect communities and support development.",
    link: "Learn about Road & Infrastructure with Instinct",
  },
  {
    num: "04",
    name: "Project Partnering",
    description:
      "We collaborate closely with clients, consultants, and contractors to align goals, share risk, and drive outcomes through structured partnership frameworks.",
    link: "Learn about Project Partnering with Instinct",
  },
  {
    num: "05",
    name: "Roofing Systems",
    description:
      "We install and maintain high-performance roofing systems tailored to each structure — combining durability, weatherproofing, and aesthetic integrity.",
    link: "Learn about Roofing Systems with Instinct",
  },
  {
    num: "06",
    name: "Flooring & Finishes",
    description:
      "Our finishing teams deliver precision floor installations and interior finishes that meet exacting standards for both commercial and residential environments.",
    link: "Learn about Flooring & Finishes with Instinct",
  },
  {
    num: "07",
    name: "Reconstruction & Upgrades",
    description:
      "We restore and modernise existing structures — assessing, planning, and executing upgrades that extend building life and enhance performance.",
    link: "Learn about Reconstruction & Upgrades with Instinct",
  },
];

export default function WhatWeDoSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        {/* Header - 3 columns */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr_1.2fr] lg:items-center mb-12">
          <h2 className="font-bebas text-5xl uppercase leading-tight text-slate-950 sm:text-6xl">
            WHAT WE DO.
          </h2>
          <p className="text-lg leading-8 text-slate-700">
            We operate across key construction disciplines, applying structured
            processes that align planning, execution, and outcomes at every stage.
          </p>
          <div className="flex lg:justify-end">
            <Btn text="Our Vision, Values & Commitment" />
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
                src={extraordinary}
                alt={services[active].name}
                fill
                className="object-cover transition-opacity duration-500"
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
                  <Btn text={services[active].link} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}