import Image from "next/image";
import buildingHero from "@/images/whoweare.jpg";
import React from 'react'

export default function Whoweare() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-[1.2fr_1.1fr] min-h-[527px] ">

        {/* Left — amber panel */}
        <div className="bg-[#e79c00] p-12 xl:py-16 flex flex-col justify-center  ">
          <div className="grid grid-cols-[auto_1fr] gap-8 items-start pl-30 ">
            {/* Title */}
            <h2 className="font-bebas text-4xl uppercase tracking-tight leading-tight text-white sm:text-5xl whitespace-nowrap">
              WHO WE ARE
            </h2>
            {/* Text */}
            <div className="space-y-5">
              <p className="text-sm leading-7 text-white/90">
                We are a multidisciplinary team of engineers, builders, planners, and project specialists — brought together by a shared commitment to disciplined construction delivery.
              </p>
              <p className="text-sm leading-7 text-white/90">
                Our organization is built on technical depth and operational structure, allowing us to execute projects with a high degree of coordination, accuracy, and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Right — image flush */}
        <div className="relative min-h-[420px]">
          <Image
            src={buildingHero}
            alt="Field engineers reviewing plans"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}