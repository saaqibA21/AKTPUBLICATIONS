import React from 'react';
import { ArrowRight, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function EditorialStory({ onOpenEditorial, onOpenGuidelines }) {
  return (
    <section className="bg-[#F5F2EB] py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-neutral-300">
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7">
            
            {/* Category Subtitle */}
            <div className="text-xs font-mono font-bold tracking-widest text-black uppercase mb-3 flex items-center gap-1.5">
              <span>✦</span>
              <span>INSTITUTIONAL CHARTER & GOVERNANCE</span>
            </div>

            {/* Headline with Burnt Orange accent font */}
            <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black font-black tracking-tight leading-[0.92] mb-6">
              The Standard of <span className="text-[#C2410C]">Academic Rigor.</span>
            </h2>

            {/* Editorial Body Text with Bold Emphasis */}
            <div className="space-y-4 text-neutral-800 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="text-black font-medium text-base sm:text-lg lg:text-xl">
                From <strong>rigorous initial screening</strong> to exhaustive double-blind referee scrutiny — AKT Publications is defined by <strong>methodological transparency and unyielding integrity</strong>.
              </p>
              
              <p>
                Established to challenge monopolistic paywalls and opaque editorial timelines, our journals champion peer-reviewed excellence across <strong>40+ scientific and humanities disciplines</strong>. Every manuscript is audited against strict similarity protocols, data availability mandates, and ethical standards set forth by COPE.
              </p>

              <p>
                Even after final acceptance, our dedicated technical editors partner directly with authors to optimize LaTeX formatting, high-resolution figures, and permanent XML metadata preservation across <strong>Portico, PubMed Central, and CrossRef</strong>.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-8">
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-300 shadow-sm flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-black shrink-0" />
                <span className="text-xs font-bold text-neutral-900">Double-Blind Review</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-300 shadow-sm flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span className="text-xs font-bold text-neutral-900">Zero Plagiarism Policy</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-neutral-300 shadow-sm flex items-center gap-2.5">
                <Award className="w-4 h-4 text-black shrink-0" />
                <span className="text-xs font-bold text-neutral-900">Scopus & JCR Indexed</span>
              </div>
            </div>

            {/* Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEditorial('advisory')}
                className="bg-black hover:bg-neutral-800 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>Read Full Charter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenGuidelines('ethics')}
                className="text-neutral-700 hover:text-black text-xs font-bold uppercase tracking-wider transition-colors underline underline-offset-4"
              >
                Publication Ethics & Malpractice Statement
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Monochrome Documentary Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="AKT International Editorial Advisory Council"
                className="w-full aspect-[4/5] object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-2 shadow">
                  GLOBAL EDITORIAL GOVERNANCE
                </div>
                <h3 className="font-display uppercase text-2xl sm:text-3xl text-white font-black tracking-wide">
                  International Advisory Board
                </h3>
                <p className="text-xs text-neutral-300 font-mono mt-1">
                  Over 120 Senior Professors & Department Chairs Worldwide
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
