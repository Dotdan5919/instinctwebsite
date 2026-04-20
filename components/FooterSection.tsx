import Btn from "./Btn";

export default function FooterSection() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-10 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <h2 className="font-bebas text-4xl uppercase tracking-tight text-white sm:text-5xl">
                READY TO START A CONVERSATION ?
              </h2>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                Let’s discuss how we can collaborate.
              </p>
            </div>
            <div>
              <Btn text="Contact Us" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-white/10" />
            <p className="text-sm leading-7 text-slate-400">
              We operate at the intersection of engineering, experience and construction delivery — enabling clients to meet fast-changing demands with certainty, control and a people-led approach.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Menu</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Our Company</li>
                <li>Our Services</li>
                <li>Our Projects</li>
                <li>News & Insights</li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Office</li>
                <li>136, Alexander Circle, Lagos, Nigeria</li>
                <li>hello@instinctengineering.com</li>
                <li>+234 900 000 0000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Instinct Engineering Consultants. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="h-9 w-9 rounded-full bg-white/10" />
            <span className="h-9 w-9 rounded-full bg-white/10" />
            <span className="h-9 w-9 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </footer>
  );
}
