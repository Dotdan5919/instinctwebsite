import Navbar from '@/components/Navbar'
import Preheader from '@/components/Preheader'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      
    <div className="flex flex-col items-center justify-center min-h-screen bg-black  ">
      <Preheader/>
      <Navbar/>
         {/* Vertical border lines — hidden on mobile, visible from lg up */}
     <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none ">
  <div className="mx-auto max-w-7xl h-full px-14 xl:px-24 relative">
    <div className="absolute inset-y-0 left-5 right-5 
                    border-l border-r border-white/20" />
  </div>
</div>
      
      <div className="text-center max-w-2xl">
        {/* 404 Code */}
        <div className="mb-6 pt-4">
          <h1 className="font-bebas pt-7 text-9xl sm:text-[140px] md:text-[160px] text-amber-500 leading-none tracking-tighter">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-4 leading-tight">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="font-montserrat text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          It seems you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bebas text-lg uppercase tracking-wide hover:bg-amber-600 transition-colors duration-300 rounded-lg"
          >
            Return to Home
            <span className="text-base">↗</span>
          </Link>
          <Link
            href="/ourproject"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500 text-amber-500 font-bebas text-lg uppercase tracking-wide hover:bg-amber-500 hover:text-black transition-colors duration-300 rounded-lg"
          >
            View Projects
            <span className="text-base">↗</span>
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <p className="font-montserrat text-gray-600 text-sm">
            Need help? <Link href="/contact" className="text-amber-500 hover:text-amber-400 transition-colors">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
