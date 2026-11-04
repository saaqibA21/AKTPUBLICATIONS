import React from 'react';
import { ArrowRight, Share2, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export default function HeroSection({ onOpenSubmit, onOpenGuidelines, onOpenReview }) {
  return (
    <section className="relative bg-[#F5F2EB] text-stone-900 overflow-hidden pt-8 sm:pt-12 pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-300">
      {/* Subtle halftone/grain effect overlay for tactile paper look */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1600px] w-full mx-auto relative z-10">
        
        {/* Main Split Grid (Balanced 7-col Typography / 5-col Metrics Dossier) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Display Headline in PLAYFAIR DISPLAY Editorial Serif */}
            <h1 className="font-playfair font-black tracking-tight leading-[1.04] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 break-words">
              <span className="text-[#C2410C]">AKT Publications,</span> <br />
              <span className="text-stone-900">A Legacy of Rigorous</span> <br />
              <span className="text-[#C2410C]">Scholarship.</span>
            </h1>

            {/* Subtitle paragraph in clean charcoal with burnt orange accent link */}
            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8 font-normal">
              <strong className="text-stone-900 font-semibold">AKT Publications</strong> is a premier international scholarly forum established to advance high-impact peer-reviewed breakthroughs across Medicine, Engineering, Biological Sciences, and the Humanities. Committed to uncompromising scientific integrity, accelerated review cycles, and barrier-free open access.{' '}
              <button 
                onClick={onOpenReview} 
                className="underline underline-offset-4 font-bold text-[#C2410C] hover:text-stone-950 transition-colors inline-flex items-center gap-1 ml-1"
              >
                Explore review charter <ArrowRight className="w-3.5 h-3.5 text-[#C2410C]" />
              </button>
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 lg:mb-0 w-full sm:w-auto">
              <button
                onClick={onOpenSubmit}
                className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] min-h-[46px]"
              >
                <span>Submit Manuscript Now</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={onOpenGuidelines}
                className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm transition-all text-center min-h-[46px] flex items-center justify-center shadow-sm"
              >
                Author Guidelines & Templates
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Turnaround & Accountability Dossier Card (No Image) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="bg-white text-stone-900 rounded-3xl shadow-xl p-5 sm:p-7 border border-stone-200/90 w-full transition-transform hover:-translate-y-0.5">
              
              {/* Card Header */}
              <div className="flex items-start sm:items-center justify-between pb-3.5 border-b border-stone-200 gap-2">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#C2410C] block mb-0.5">
                    EDITORIAL ACCOUNTABILITY BENCHMARKS
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 leading-tight">
                    Verified Turnaround Standards (2025/2026 Cycle)
                  </h3>
                  <div className="text-[10px] sm:text-[11px] text-stone-500 font-medium mt-0.5">
                    Official reporting cycle for multi-disciplinary peer review
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

              {/* 4 Stat Boxes (2x2 on mobile, 4-col on tablet/desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 text-center">
                <div className="bg-[#FAF8F5] rounded-2xl p-2.5 sm:p-3 border border-stone-200">
                  <div className="text-2xl sm:text-3xl font-black text-[#C2410C] font-display tracking-tight">
                    49
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-stone-800 uppercase">
                    Days
                  </div>
                  <div className="text-[9px] text-stone-500 leading-tight mt-0.5">
                    First Decision
                  </div>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl p-2.5 sm:p-3 border border-stone-200">
                  <div className="text-2xl sm:text-3xl font-black text-stone-900 font-display tracking-tight">
                    158
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-stone-800 uppercase">
                    Days
                  </div>
                  <div className="text-[9px] text-stone-500 leading-tight mt-0.5">
                    Acceptance
                  </div>
                </div>

                <div className="bg-[#FAF8F5] rounded-2xl p-2.5 sm:p-3 border border-stone-200">
                  <div className="text-2xl sm:text-3xl font-black text-[#C2410C] font-display tracking-tight">
                    33
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-stone-800 uppercase">
                    Days
                  </div>
                  <div className="text-[9px] text-stone-500 leading-tight mt-0.5">
                    Online DOI
                  </div>
                </div>

                <div className="bg-[#C2410C] text-white rounded-2xl p-2.5 sm:p-3 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                    21.4%
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-white uppercase">
                    Rate
                  </div>
                  <div className="text-[9px] text-white/90 leading-tight mt-0.5 font-medium">
                    Acceptance
                  </div>
                </div>
              </div>

              {/* Journal Accreditations Highlights */}
              <div className="mt-4 pt-3.5 border-t border-stone-200 grid grid-cols-2 gap-2 text-xs text-stone-700">
                <div className="flex items-center gap-2 bg-stone-50 p-2 rounded-xl border border-stone-200/80">
                  <ShieldCheck className="w-4 h-4 text-[#C2410C] shrink-0" />
                  <span className="text-[11px] font-semibold text-stone-800">Double-Blind Scrutiny</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-50 p-2 rounded-xl border border-stone-200/80">
                  <Award className="w-4 h-4 text-[#C2410C] shrink-0" />
                  <span className="text-[11px] font-semibold text-stone-800">Scopus & JCR Indexed</span>
                </div>
              </div>

              {/* DOI / CrossRef footer */}
              <div className="mt-3.5 pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-[11px] text-stone-500 gap-1.5 font-mono">
                <span>DOI: 10.5824/akt.2026 • CrossRef</span>
                <span className="font-sans font-semibold text-stone-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C2410C]" /> COPE Ethical Standard
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
