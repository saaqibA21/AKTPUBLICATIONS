import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { reviewStages } from '../data/journalData';

export default function ReviewPathway({ onOpenSubmit, onOpenGuidelines }) {
  return (
    <section className="bg-[#FAF8F5] py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-neutral-300">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-black uppercase mb-1.5 sm:mb-2">
            RIGOROUS & TRANSPARENT WORKFLOW
          </div>
          <h2 className="font-display uppercase text-3xl sm:text-5xl lg:text-6xl text-black font-black tracking-tight leading-[0.95] sm:leading-[0.92]">
            The Chronicle of <span className="text-[#C2410C]">Peer Review & Publication</span>
          </h2>
          <p className="text-neutral-700 text-xs sm:text-sm lg:text-base mt-2 max-w-3xl font-medium">
            Every manuscript submitted to AKT Publications follows an uncompromising, auditable double-blind review trajectory designed for intellectual fairness and rapid dissemination.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column (5 cols): Milestones & Turnaround Step-by-Step */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-neutral-500 mb-4 pb-2 border-b border-neutral-300">
              Publication Pathway (Step 01 — 05)
            </h3>

            {reviewStages.map((stage, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm hover:shadow-md hover:border-black transition-all flex items-start gap-4"
              >
                <div className="bg-black text-white font-mono text-sm font-black w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  {stage.step}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm text-neutral-900 leading-tight">
                      {stage.title}
                    </h4>
                    <span className="bg-neutral-100 text-black border border-neutral-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      {stage.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                    {stage.desc}
                  </p>
                  <span className="text-[10px] font-mono text-neutral-500 font-semibold uppercase tracking-wider">
                    ● {stage.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (7 cols): Narrative Report & Documentary Evidence */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-neutral-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase bg-black text-white px-2.5 py-1 rounded-full">
                    OFFICIAL CHARTER REPORT
                  </span>
                  <h3 className="font-display uppercase text-2xl sm:text-3xl text-neutral-900 font-bold mt-2">
                    Double-Blind Integrity & Reviewer Anonymity Protocol
                  </h3>
                </div>
                <ShieldCheck className="w-8 h-8 text-black shrink-0" />
              </div>

              {/* Documentary narrative text */}
              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                <p>
                  <strong>At approximately 2:00 PM GMT on every working day</strong>, incoming submissions enter the central AKT Editorial Triage Queue. Each paper is automatically scrubbed of author identities, affiliations, and institutional references before assignment to the relevant Section Editor.
                </p>

                <p>
                  To eliminate commercial bias and geographic favoritism, our <strong>Advisory Board mandates a minimum of two independent, blind referee evaluations</strong>. Reviewers evaluate methodological reproducibility, statistical power, dataset availability, and originality against our international benchmark.
                </p>

                <p>
                  Upon receiving referee commentaries, the Editor-in-Chief reviews both evaluations to formulate an objective, actionable synthesis. Authors receive complete, unedited reviewer notes together with explicit guidance on revisions required for final acceptance.
                </p>
              </div>

              {/* Documentary Photo snippet */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-300 relative aspect-video sm:aspect-[16/7] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80"
                  alt="AKT Academic Peer Review Session"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 right-2 sm:right-4 bg-black/85 backdrop-blur-sm text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-mono flex items-center justify-between">
                  <span className="truncate mr-2">Peer Review Council • Working Session</span>
                  <span className="text-white font-bold whitespace-nowrap">100% Blind</span>
                </div>
              </div>
            </div>

            {/* Action Buttons - Stacked on mobile */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-xs text-neutral-600 font-medium">
                Want to join our referee panel? We welcome active PhDs and researchers.
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={onOpenGuidelines}
                  className="text-xs font-bold text-neutral-900 hover:text-black underline text-center py-1"
                >
                  Reviewer Ethics Manual
                </button>
                <button
                  onClick={onOpenSubmit}
                  className="bg-black hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5 min-h-[40px]"
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
