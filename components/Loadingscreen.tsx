'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '@/icons/instinct-logo.png';

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col items-center justify-center"
        >
          {/* Animated background texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  #f59e0b 0px,
                  #f59e0b 1px,
                  transparent 1px,
                  transparent 60px
                )`
              }}
            />
          </div>

          {/* Amber side accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute left-0 top-0 h-full w-1 bg-amber-500 origin-top"
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image src={logo} alt="Instinct Logo" width={72} height={72} />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-center"
            >
              <p className="font-bebas text-white text-[32px] sm:text-[40px] tracking-[0.2em] uppercase leading-none">
                Instinct Engineering
              </p>
              <p className="font-montserrat text-white/40 text-xs tracking-[0.3em] uppercase mt-2">
                Building with purpose
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-48 sm:w-64 flex flex-col items-center gap-3"
            >
              <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
                  className="h-full bg-amber-500 origin-left"
                />
              </div>
              <p className="font-montserrat text-white/30 text-[10px] tracking-widest uppercase">
                Loading
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}