import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { reviewStages } from '../data/journalData';

export default function ReviewPathway({ onOpenSubmit, onOpenGuidelines }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-200">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#C2410C] uppercase mb-1.5 sm:mb-2">
            OUR REVIEW PROCESS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-bold tracking-tight leading-[1.08]">
            How Your Paper Is <span className="text-[#C2410C]">Reviewed & Published</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm lg:text-base mt-2 max-w-3xl font-medium">
            We keep our review process straightforward and transparent. Here is how your manuscript moves from initial submission to final publication.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column (5 cols): Milestones & Turnaround Step-by-Step */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-stone-500 mb-4 pb-2 border-b border-stone-200">
              The 5-Step Process
            </h3>

            {reviewStages.map((stage, idx) => (
              <div 
                key={idx}
                className="bg-stone-50 rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md hover:border-[#C2410C] transition-all flex items-start gap-4"
              >
                <div className="bg-[#C2410C] text-white font-mono text-sm font-black w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  {stage.step}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm text-stone-900 leading-tight">
                      {stage.title}
                    </h4>
                    <span className="bg-white text-stone-800 border border-stone-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                      {stage.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    {stage.desc}
                  </p>
                  <span className="text-[10px] font-mono text-stone-500 font-semibold uppercase tracking-wider">
                    ● {stage.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (7 cols): Narrative Report */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-stone-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase bg-[#C2410C] text-white px-2.5 py-1 rounded-full">
                    OUR PROMISE TO AUTHORS
                  </span>
                  <h3 className="font-display uppercase text-2xl sm:text-3xl text-stone-900 font-bold mt-2">
                    Fair, Blind Review For Every Submission
                  </h3>
                </div>
                <ShieldCheck className="w-8 h-8 text-[#C2410C] shrink-0" />
              </div>

              {/* Documentary narrative text */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                <p>
                  <strong>When you submit your manuscript</strong>, all author names and institutional affiliations are hidden so our reviewers can evaluate your paper solely on its research quality and findings.
                </p>

                <p>
                  Every manuscript is reviewed by <strong>at least two independent subject experts</strong>. They examine whether the methods are sound, the data is properly presented, and the conclusions are supported by the evidence.
                </p>

                <p>
                  Once evaluations are complete, our editors provide clear, constructive feedback. If revisions are requested, you will receive straightforward guidance to help you refine your work for final acceptance and publication.
                </p>
              </div>

              {/* Photo snippet */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-stone-200 relative aspect-video sm:aspect-[16/7] bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80"
                  alt="AKT Academic Peer Review Session"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 right-2 sm:right-4 bg-stone-900/85 backdrop-blur-sm text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-mono flex items-center justify-between">
                  <span className="truncate mr-2">Editorial Peer Review Council</span>
                  <span className="text-[#C2410C] font-bold whitespace-nowrap">Double-Blind</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-xs text-stone-600 font-medium">
                Interested in becoming a reviewer? We welcome active researchers and faculty.
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={onOpenGuidelines}
                  className="text-xs font-bold text-stone-800 hover:text-[#C2410C] underline text-center py-1"
                >
                  Reviewer Guidelines
                </button>
                <button
                  onClick={onOpenSubmit}
                  className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5 min-h-[40px]"
                >
                  <span>Submit Your Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
