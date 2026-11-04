import React from 'react';
import { ArrowRight, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function EditorialStory({ onOpenEditorial, onOpenGuidelines }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-200">
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7">
            
            {/* Category Subtitle */}
            <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#C2410C] uppercase mb-2 sm:mb-3 flex items-center gap-1.5">
              <span>✦</span>
              <span>ABOUT AKT PUBLICATIONS</span>
            </div>

            {/* Headline with Burnt Orange accent font */}
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-bold tracking-tight leading-[1.08] mb-4 sm:mb-6">
              Clear, High-Quality <span className="text-[#C2410C]">Research for Everyone.</span>
            </h2>

            {/* Editorial Body Text */}
            <div className="space-y-3 sm:space-y-4 text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="text-stone-900 font-medium text-base sm:text-lg lg:text-xl">
                Every paper submitted to AKT Publications goes through a careful, independent review by subject experts. We believe scientific research should be clear, reliable, and accessible to everyone.
              </p>
              
              <p>
                We keep publication fees fair and editorial timelines transparent. Our journal covers more than <strong>40 academic fields</strong> across medicine, engineering, biological sciences, and the humanities. Every submission is checked for originality and evaluated on its true merits.
              </p>

              <p>
                After acceptance, our editorial team works with authors to format equations, polish figures, and register permanent digital links (DOIs) so your research can be easily discovered, cited, and read worldwide.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 my-6 sm:my-8">
              <div className="bg-stone-50 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span className="text-xs font-bold text-stone-900">Double-Blind Review</span>
              </div>
              <div className="bg-stone-50 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span className="text-xs font-bold text-stone-900">Zero Plagiarism Policy</span>
              </div>
              <div className="bg-stone-50 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span className="text-xs font-bold text-stone-900">Scopus & JCR Indexed</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenEditorial('advisory')}
                className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Editorial Board Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenGuidelines('ethics')}
                className="text-stone-700 hover:text-stone-950 text-xs font-bold uppercase tracking-wider transition-colors underline underline-offset-4 text-center py-2"
              >
                Publication Ethics & Guidelines
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Documentary Photo */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-stone-100 bg-stone-900 group max-w-sm sm:max-w-md lg:max-w-none mx-auto">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="AKT International Editorial Advisory Council"
                className="w-full aspect-[4/5] object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white text-stone-900 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-2 shadow">
                  GLOBAL EDITORIAL BOARD
                </div>
                <h3 className="font-display uppercase text-xl sm:text-2xl lg:text-3xl text-white font-black tracking-wide">
                  International Advisory Board
                </h3>
                <p className="text-[10px] sm:text-xs text-neutral-300 font-mono mt-1">
                  Over 120 Senior Professors & Researchers Worldwide
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
