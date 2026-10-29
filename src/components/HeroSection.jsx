import React from 'react';
import { ArrowRight, Share2, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenSubmit, onOpenGuidelines, onOpenReview }) {
  return (
    <section className="relative bg-[#0A0A0A] text-white overflow-hidden pt-10 pb-16 lg:pb-24 px-4 sm:px-8 lg:px-12 w-full border-b border-neutral-900">
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
          
          {/* Left Column (7 cols): Red & White Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Giant Display Headline in BURNT ORANGE and WHITE */}
            <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.88] font-black drop-shadow-sm mb-6">
              <span className="text-[#C2410C]">AKT PUBLICATIONS,</span> <br />
              <span className="text-white">A Legacy of Rigorous</span> <br />
              <span className="text-[#C2410C]">Scholarship.</span>
            </h1>

            {/* Subtitle paragraph in clean white with burnt orange accent link */}
            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8 font-normal">
              <strong className="text-white font-semibold">AKT Publications</strong> is a premier international scholarly forum established to advance high-impact peer-reviewed breakthroughs across Medicine, Engineering, Biological Sciences, and the Humanities. Committed to uncompromising scientific integrity, accelerated review cycles, and barrier-free open access.{' '}
              <button 
                onClick={onOpenReview} 
                className="underline underline-offset-4 font-bold text-[#C2410C] hover:text-white transition-colors inline-flex items-center gap-1 ml-1"
              >
                Explore review charter <ArrowRight className="w-3.5 h-3.5 text-[#C2410C]" />
              </button>
            </p>

            {/* CTA action buttons in BURNT ORANGE and WHITE */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenSubmit}
                className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-2xl transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Submit Manuscript Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={onOpenGuidelines}
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
              >
                Author Guidelines & Templates
              </button>
            </div>

            {/* Turnaround & Metrics Card */}
            <div className="bg-white text-neutral-900 rounded-3xl shadow-2xl p-6 border border-neutral-200 max-w-2xl transition-transform hover:-translate-y-0.5">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                    The standard of academic accountability for authors worldwide.
                  </h4>
                  <div className="text-[11px] text-neutral-500 font-medium">
                    Verified median review benchmarks (2025/2026 reporting cycle)
                  </div>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Journal citation & DOI copied to clipboard!");
                  }}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#C2410C] hover:underline shrink-0 ml-2"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* 4 Stat Boxes (Burnt Orange & White styling) */}
              <div className="grid grid-cols-4 gap-2.5 pt-3.5 text-center">
                <div className="bg-neutral-50 rounded-2xl p-2.5 border border-neutral-200">
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

                <div className="bg-neutral-50 rounded-2xl p-2.5 border border-neutral-200">
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

                <div className="bg-neutral-50 rounded-2xl p-2.5 border border-neutral-200">
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

                <div className="bg-[#C2410C] text-white rounded-2xl p-2.5 shadow">
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
              <div className="mt-3.5 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-mono">DOI: 10.5824/akt.2026 • CrossRef</span>
                <span className="font-semibold text-neutral-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C]" /> Double-Blind Verified
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): High-Contrast B&W Anime Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end relative mt-8 lg:mt-0">
            
            {/* Clean Art Frame */}
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-800 bg-neutral-950 group">
              
              {/* High-contrast Real Person Editorial Portrait */}
              <img
                src="/real-scholar.jpg"
                alt="Distinguished Scholar & Academic Visionary"
                className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 transition-all duration-700 group-hover:scale-105"
              />

              {/* Gradient shadow for text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-95" />

              {/* Bottom Caption in BURNT ORANGE and WHITE */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <div className="text-[11px] font-bold text-[#C2410C] tracking-widest uppercase mb-0.5">
                  Visionary Academic Fellowship
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                  PROF. ARTHUR VANCE
                </div>
                <div className="text-xs text-neutral-300 font-mono mt-0.5">
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
