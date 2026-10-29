import React from 'react';
import { ArrowRight, Share2, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenSubmit, onOpenGuidelines, onOpenReview }) {
  return (
    <section className="relative bg-[#0A0A0A] text-white overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-24 px-3 sm:px-8 lg:px-12 w-full border-b border-neutral-900">
      {/* Subtle halftone/grain effect overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1600px] w-full mx-auto relative z-10">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Display Headline - Fluid mobile scaling */}
            <h1 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.92] sm:leading-[0.88] font-black drop-shadow-sm mb-4 sm:mb-6 break-words">
              <span className="text-[#C2410C]">AKT PUBLICATIONS,</span> <br className="hidden sm:inline" />
              <span className="text-white">A Legacy of Rigorous</span> <br className="hidden sm:inline" />
              <span className="text-[#C2410C]">Scholarship.</span>
            </h1>

            {/* Subtitle paragraph in clean white with burnt orange accent link */}
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8 font-normal">
              <strong className="text-white font-semibold">AKT Publications</strong> is a premier international scholarly forum established to advance high-impact peer-reviewed breakthroughs across Medicine, Engineering, Biological Sciences, and the Humanities. Committed to uncompromising scientific integrity, accelerated review cycles, and barrier-free open access.{' '}
              <button 
                onClick={onOpenReview} 
                className="underline underline-offset-4 font-bold text-[#C2410C] hover:text-white transition-colors inline-flex items-center gap-1 ml-1"
              >
                Explore review charter <ArrowRight className="w-3.5 h-3.5 text-[#C2410C]" />
              </button>
            </p>

            {/* CTA action buttons - Full width on small mobile screens */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenSubmit}
                className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] min-h-[46px]"
              >
                <span>Submit Manuscript Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={onOpenGuidelines}
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all text-center min-h-[46px] flex items-center justify-center"
              >
                Author Guidelines & Templates
              </button>
            </div>

            {/* Turnaround & Metrics Card - Mobile 2x2 grid */}
            <div className="bg-white text-neutral-900 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-neutral-200 max-w-2xl transition-transform hover:-translate-y-0.5">
              
              <div className="flex items-start sm:items-center justify-between pb-3 border-b border-neutral-200 gap-2">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                    The standard of academic accountability for authors worldwide.
                  </h4>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium mt-0.5">
                    Verified median review benchmarks (2025/2026 reporting cycle)
                  </div>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Journal citation & DOI copied to clipboard!");
                  }}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#C2410C] hover:underline shrink-0 p-1"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Stat Boxes (2 cols on mobile, 4 cols on tablet/desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-3.5 text-center">
                <div className="bg-neutral-50 rounded-xl sm:rounded-2xl p-2.5 border border-neutral-200">
                  <div className="text-2xl sm:text-3xl font-black text-[#C2410C] font-display tracking-tight">
                    49
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-neutral-800 uppercase">
                    Days
                  </div>
                  <div className="text-[9px] text-neutral-500 leading-tight">
                    First Decision
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl sm:rounded-2xl p-2.5 border border-neutral-200">
                  <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-display tracking-tight">
                    158
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-neutral-800 uppercase">
                    Days
                  </div>
                  <div className="text-[9px] text-neutral-500 leading-tight">
                    Acceptance
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl sm:rounded-2xl p-2.5 border border-neutral-200">
                  <div className="text-2xl sm:text-3xl font-black text-[#C2410C] font-display tracking-tight">
                    33
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-neutral-800 uppercase">
                    Days
                  </div>
                  <div className="text-[9px] text-neutral-500 leading-tight">
                    Online DOI
                  </div>
                </div>

                <div className="bg-[#C2410C] text-white rounded-xl sm:rounded-2xl p-2.5 shadow">
                  <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                    21.4%
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white uppercase">
                    Rate
                  </div>
                  <div className="text-[9px] text-white/80 leading-tight font-medium">
                    Acceptance
                  </div>
                </div>
              </div>

              {/* DOI / CrossRef footer */}
              <div className="mt-3.5 pt-2.5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 gap-1.5">
                <span className="font-mono">DOI: 10.5824/akt.2026 • CrossRef</span>
                <span className="font-semibold text-neutral-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C]" /> Double-Blind Verified
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): High-Contrast B&W Editorial Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end relative mt-6 lg:mt-0">
            
            {/* Clean Art Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-800 bg-neutral-950 group">
              
              {/* High-contrast Real Scholar Portrait */}
              <img
                src="/real-scholar.jpg"
                alt="Distinguished Scholar & Academic Visionary"
                className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 transition-all duration-700 group-hover:scale-105"
              />

              {/* Gradient shadow for text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95" />

              {/* Bottom Caption in BURNT ORANGE and WHITE */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-left">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#C2410C] tracking-widest uppercase mb-0.5">
                  Visionary Academic Fellowship
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-display">
                  PROF. ARTHUR VANCE
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-300 font-mono mt-0.5">
                  Editor-in-Chief • Methodological Integrity Standard
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
