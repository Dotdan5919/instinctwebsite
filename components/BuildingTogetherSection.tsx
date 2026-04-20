import Image from "next/image";
import heroBg from "@/images/building.jpg";
import Btn from "./Btn";

export default function BuildingTogetherSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="relative">

          {/* Image — right side, bleeds top, taller than card */}
          <div className="absolute right-0 top-[-48px] w-[60%] h-[120%] overflow-hidden rounded-[28px]">
            <Image
              src={heroBg}
              alt="Construction team reviewing plans"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Cream card — overlaps image on the left */}
          <div className="relative z-10 w-[55%] rounded-[28px] bg-[#FDF3DC] p-12 my-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <h2 className="font-bebas text-5xl uppercase leading-[1.05] text-slate-950 sm:text-6xl">
              BUILDING TOMORROW,
              <br />
              TOGETHER
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-700">
              Our projects demand more than technical ability, they require discipline,
              coordination, and a commitment to excellence.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              At Instinct Engineering, we deliver complex construction work through
              structured processes that ensure consistency and performance.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              We are looking for professionals, from engineers and project managers to
              skilled trades — who are ready to take on meaningful challenges, work
              within coordinated teams, and contribute to projects that demand
              precision and accountability.
            </p>

            <div className="mt-8">
              <Btn text="Join the Instinct Team" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}