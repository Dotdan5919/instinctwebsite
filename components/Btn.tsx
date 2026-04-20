import React from 'react'

export default function Btn({text}: {text: string}) {
  return (
    <button className="vision-btn mt-3 inline-flex items-center gap-4 rounded-full pl-2 py-2 pr-5 font-montserrat text-sm uppercase transition-colors duration-300">
      <style>{`
        .vision-btn {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        
          transition: color 0.4s ease;
        }
        .vision-btn::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 50%;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgb(245 158 11);
          transform: translateY(-50%) scale(1);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        .vision-btn:hover::before {
          transform: translateY(-50%) scale(20);
        }

        .vision-btn .arrow-left {
          position: relative;
          z-index: 1;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgb(245 158 11);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          opacity: 1;
          transform: translateX(0px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .vision-btn:hover .arrow-left {
          opacity: 0;
          transform: translateX(200px);
        }

        .vision-btn .btn-text {
          position: relative;
          z-index: 1;
          color: rgb(245 158 11);
          transition: color 0.4s ease;
        }
        .vision-btn:hover .btn-text {
          color: white;
        }

        .vision-btn .arrow-right {
          position: relative;
          z-index: 1;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgb(245 158 11);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(-200px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .vision-btn:hover .arrow-right {
          opacity: 1;
          transform: translateX(0px);
        }
      `}</style>

      <span className="arrow-left">→</span>
      <span className="btn-text font-montserrat">{text}</span>
      <span className="arrow-right">→</span>
    </button>
  )
}