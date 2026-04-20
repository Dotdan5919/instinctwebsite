import Image from "next/image";
import logo from '@/icons/instinct-logo.png'
import Btn from "./Btn";

export default function FooterSection() {
  return (
    <footer
      className="bg-[#1a1a1a] text-white relative overflow-hidden"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 40px,
          rgba(255,255,255,0.015) 40px,
          rgba(255,255,255,0.015) 41px
        )`,
      }}
    >
      {/* CTA Row */}
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-10 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-5">
            <h2 className="font-bebas text-4xl uppercase text-white sm:text-5xl">
              READY TO START A CONVERSATION ?
            </h2>
            
            <Btn text="Contact Us" />
            </div>
          
            <p className="mt-2 text-sm text-slate-400">
              Let's discuss how we can collaborate
            </p>
            
          </div>
          
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Nav Row */}
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-white/10">
            <Image src={logo} alt="Instinct Engineering" width={48} height={48} className="object-cover" />
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {["Our Company", "Our Services", "Our Projects", "News & Insights", "Careers", "Resources"].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-300 hover:text-yellow-500 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Info Row — 3 columns */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Col 1 — Office */}
          <div>
            <p className="text-sm font-bold text-white">Office</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              6, Abosede Odebowale Close, Nepa B/ Stop, Ifako Gbagada, Lagos State.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-300">Phone:</p>
            <a href="tel:+2348023050847" className="block text-sm text-[#E8950A] hover:underline mt-1">
              +2348023050847,
            </a>
            <a href="tel:+2348032598082" className="block text-sm text-[#E8950A] hover:underline">
              +2348032598082
            </a>
          </div>

          {/* Col 2 — Description */}
          <div className="flex items-start">
            <p className="text-sm leading-7 text-slate-400">
              We operate at the intersection of engineering expertise and construction discipline — ensuring that every project is delivered with clarity, control, and measurable performance.
            </p>
          </div>

          {/* Col 3 — Newsletter */}
          <div>
            <p className="text-sm leading-6 text-slate-400">
              Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">Email</p>
            <div className="mt-2 flex overflow-hidden rounded-lg border border-white/15 bg-white">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-500 placeholder:text-slate-500 outline-none"
              />
              <button className="px-4 text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors">
                Send
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Legal Row */}
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center gap-3 text-center text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Fraud Alert</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
          </div>
          <p>© 2026. Instinct Engineering Constuction company Limited</p>
        </div>
      </div>

    </footer>
  );
}