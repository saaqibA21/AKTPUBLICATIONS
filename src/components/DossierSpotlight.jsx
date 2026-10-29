import React from 'react';
import { FileText, Download, Flame, ArrowUpRight } from 'lucide-react';
import { currentArticles } from '../data/journalData';

export default function DossierSpotlight({ onSelectArticle, onOpenSubmit }) {
  const featuredArticle = currentArticles[0];

  return (
    <section className="bg-[#ECE8DE] py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-neutral-300 relative overflow-hidden">
      
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-black uppercase mb-2">
            <Flame className="w-4 h-4 text-black" />
            <span>ARCHIVAL SPOTLIGHT & CASE DOSSIER</span>
          </div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black font-black tracking-tight leading-[0.92]">
            Featured Research <span className="text-[#C2410C]">Dossier & Breakthroughs</span>
          </h2>
          <p className="text-neutral-700 text-xs sm:text-sm lg:text-base mt-3 font-medium">
            Hand-selected by our Editorial Advisory Board for groundbreaking methodology and immediate global citation impact.
          </p>
        </div>

        {/* 3-Column Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Dark Dossier Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-black text-white rounded-3xl p-7 shadow-2xl border border-neutral-800 transition-all hover:-translate-y-1 relative group">
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2">
                <span className="bg-white text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  CALL FOR PAPERS
                </span>
              </div>

              <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider mb-2">
                Special Issue • Vol. 13
              </div>

              <h4 className="font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-neutral-300 transition-colors">
                Autonomous Swarm Intelligence in Decarbonized Micro-Grids
              </h4>

              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Inviting empirical models, stability theorems, and hardware testbed results under stochastic loading.
              </p>

              <div className="space-y-1.5 text-[11px] text-neutral-400 border-t border-neutral-800 pt-3 mb-5">
                <div>Guest Editor: <strong className="text-white">Prof. A. Kowalski</strong></div>
                <div>Deadline: <strong className="text-white">15 Dec 2026</strong></div>
                <div className="text-neutral-300 font-semibold">● Fast-Track Review Guaranteed</div>
              </div>

              <button
                onClick={onOpenSubmit}
                className="w-full bg-neutral-900 hover:bg-white hover:text-black text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-neutral-700"
              >
                <span>Submit to Special Issue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Pinned Dossier Poster (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF8F5] border-2 border-dashed border-neutral-400 rounded-2xl sm:rounded-3xl p-4 sm:p-9 shadow-2xl relative transition-transform hover:scale-[1.01]">
              
              {/* Pushpin / Tape graphic at top */}
              <div className="absolute -top-3 sm:-top-3.5 left-1/2 transform -translate-x-1/2 bg-black text-white text-[8px] sm:text-[10px] font-mono font-black uppercase tracking-widest px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-lg border border-white whitespace-nowrap">
                ★ TOP 1% SCIENTIFIC IMPACT DOSSIER ★
              </div>

              {/* Dossier Header */}
              <div className="text-center pt-3 pb-3 sm:pb-4 border-b border-neutral-300">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-600 block">
                  AKT EDITORIAL SELECTION • BIOTECHNOLOGY & ONCOLOGY
                </span>
                <h3 className="font-display uppercase text-xl sm:text-3xl lg:text-4xl text-black font-black tracking-tight mt-1">
                  {featuredArticle.title}
                </h3>
              </div>

              {/* Authors & Affiliation strip */}
              <div className="py-2.5 sm:py-3 text-center border-b border-neutral-200">
                <div className="text-xs font-bold text-neutral-900">
                  {featuredArticle.authors}
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-500 font-mono mt-0.5">
                  DOI: {featuredArticle.doi} • Registered CrossRef
                </div>
              </div>

              {/* High-Contrast Photo & Abstract snippet */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5 my-4 sm:my-5 items-center">
                <div className="sm:col-span-4 rounded-xl sm:rounded-2xl overflow-hidden aspect-video sm:aspect-square border border-neutral-300 bg-black max-w-xs mx-auto sm:max-w-none w-full">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
                    alt="CRISPR gene editing research"
                    className="w-full h-full object-cover grayscale contrast-150"
                  />
                </div>
                <div className="sm:col-span-8">
                  <div className="text-xs font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
                    <span className="bg-black text-white px-2 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-bold">
                      Abstract
                    </span>
                    <span className="text-neutral-600 text-[10px] sm:text-[11px]">Peer-Reviewed Full Text</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed italic">
                    "{featuredArticle.abstract}"
                  </p>
                </div>
              </div>

              {/* Live Metric Stats Bar */}
              <div className="bg-neutral-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 grid grid-cols-3 gap-1.5 sm:gap-2 text-center border border-neutral-200 text-xs">
                <div>
                  <div className="font-mono font-black text-black text-sm sm:text-base">{featuredArticle.views}</div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-500 uppercase font-semibold">Views</div>
                </div>
                <div>
                  <div className="font-mono font-black text-black text-sm sm:text-base">{featuredArticle.downloads}</div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-500 uppercase font-semibold">Downloads</div>
                </div>
                <div>
                  <div className="font-mono font-black text-black text-sm sm:text-base">{featuredArticle.citations}</div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-500 uppercase font-semibold">Citations</div>
                </div>
              </div>

              {/* Action Buttons - Mobile friendly full width */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-3 border-t border-neutral-200">
                <button
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="bg-black hover:bg-neutral-800 text-white px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 min-h-[42px]"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Read Full Article & Figures</span>
                </button>
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Initiating verified PDF download for DOI: ${featuredArticle.doi}`);
                  }}
                  className="text-black hover:text-neutral-700 text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-400 px-4 py-2.5 rounded-full hover:bg-neutral-100 transition-colors min-h-[42px]"
                >
                  <Download className="w-3.5 h-3.5 text-black" />
                  <span>Download PDF</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Dark Dossier Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-black text-white rounded-3xl p-7 shadow-2xl border border-neutral-800 transition-all hover:-translate-y-1 relative group">
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2">
                <span className="bg-neutral-800 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-neutral-600">
                  MONOGRAPH DOSSIER
                </span>
              </div>

              <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider mb-2">
                Curated Series • No. 08
              </div>

              <h4 className="font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-neutral-300 transition-colors">
                High-Entropy Perovskite Catalysts for Direct Electrolysis
              </h4>

              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Comprehensive 80-page reference monograph on zero-carbon green hydrogen production under ambient seawater conditions.
              </p>

              <div className="space-y-1.5 text-[11px] text-neutral-400 border-t border-neutral-800 pt-3 mb-5">
                <div>Lead Author: <strong className="text-white">Dr. M. Tanaka</strong></div>
                <div>Status: <strong className="text-neutral-200 font-semibold">Indexed in Scopus Q1</strong></div>
                <div>Format: <strong className="text-white">Open Access PDF + Hardcover</strong></div>
              </div>

              <button
                onClick={() => onSelectArticle(currentArticles[2])}
                className="w-full bg-neutral-900 hover:bg-white hover:text-black text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-neutral-700"
              >
                <span>Access Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
