import React from 'react';
import { FileText, Download, Sparkles, ArrowUpRight } from 'lucide-react';
import { currentArticles } from '../data/journalData';

export default function DossierSpotlight({ onSelectArticle, onOpenSubmit }) {
  const featuredArticle = currentArticles[0];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-200 relative overflow-hidden">
      
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#C2410C] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#C2410C]" />
            <span>FEATURED ARTICLES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-bold tracking-tight leading-[1.08]">
            Featured Research & <span className="text-[#C2410C]">Recent Highlights</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm lg:text-base mt-3 font-medium">
            Selected by our editors for clear methods, reliable data, and high community interest.
          </p>
        </div>

        {/* 3-Column Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Special Issue Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white text-stone-900 rounded-3xl p-7 shadow-sm border border-stone-200 transition-all hover:-translate-y-1 relative group">
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2">
                <span className="bg-[#C2410C] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  CALL FOR PAPERS
                </span>
              </div>

              <div className="text-[10px] text-stone-500 font-mono uppercase tracking-wider mb-2">
                Special Issue • Vol. 13
              </div>

              <h4 className="font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-[#C2410C] transition-colors">
                AI & Renewable Energy Grids
              </h4>

              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Inviting research papers on smart energy management, clean power distribution, and grid stability.
              </p>

              <div className="space-y-1.5 text-[11px] text-stone-500 border-t border-stone-100 pt-3 mb-5">
                <div>Guest Editor: <strong className="text-stone-800">Prof. A. Kowalski</strong></div>
                <div>Deadline: <strong className="text-stone-800">15 Dec 2026</strong></div>
                <div className="text-[#C2410C] font-semibold">● 49-Day First Decision</div>
              </div>

              <button
                onClick={onOpenSubmit}
                className="w-full bg-stone-900 hover:bg-[#C2410C] text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Submit to Special Issue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Pinned Paper Poster (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl p-5 sm:p-9 shadow-lg relative transition-transform hover:scale-[1.01]">
              
              {/* Pushpin / Tape graphic at top */}
              <div className="absolute -top-3 sm:-top-3.5 left-1/2 transform -translate-x-1/2 bg-[#C2410C] text-white text-[8px] sm:text-[10px] font-mono font-black uppercase tracking-widest px-3 sm:px-5 py-1 sm:py-1.5 rounded-full shadow border border-white whitespace-nowrap">
                ★ FEATURED RESEARCH ARTICLE ★
              </div>

              {/* Header */}
              <div className="text-center pt-3 pb-3 sm:pb-4 border-b border-stone-200">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C2410C] block">
                  {featuredArticle.category}
                </span>
                <h3 className="font-display text-xl sm:text-3xl text-stone-900 font-bold tracking-tight mt-1">
                  {featuredArticle.title}
                </h3>
              </div>

              {/* Authors & Affiliation strip */}
              <div className="py-2.5 sm:py-3 text-center border-b border-stone-100">
                <div className="text-xs font-bold text-stone-800">
                  {featuredArticle.authors}
                </div>
                <div className="text-[10px] sm:text-[11px] text-stone-500 font-mono mt-0.5">
                  DOI: {featuredArticle.doi} • Registered CrossRef
                </div>
              </div>

              {/* Photo & Abstract snippet */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5 my-4 sm:my-5 items-center">
                <div className="sm:col-span-4 rounded-xl sm:rounded-2xl overflow-hidden aspect-video sm:aspect-square border border-stone-200 bg-stone-100 max-w-xs mx-auto sm:max-w-none w-full">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
                    alt="Gene editing research"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
                <div className="sm:col-span-8">
                  <div className="text-xs font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                    <span className="bg-[#C2410C] text-white px-2 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-bold">
                      Abstract
                    </span>
                    <span className="text-stone-500 text-[10px] sm:text-[11px]">Peer-Reviewed Full Text</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "{featuredArticle.abstract}"
                  </p>
                </div>
              </div>

              {/* Live Metric Stats Bar */}
              <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 grid grid-cols-3 gap-1.5 sm:gap-2 text-center border border-stone-200 text-xs">
                <div>
                  <div className="font-mono font-black text-stone-900 text-sm sm:text-base">{featuredArticle.views}</div>
                  <div className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold">Views</div>
                </div>
                <div>
                  <div className="font-mono font-black text-stone-900 text-sm sm:text-base">{featuredArticle.downloads}</div>
                  <div className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold">Downloads</div>
                </div>
                <div>
                  <div className="font-mono font-black text-stone-900 text-sm sm:text-base">{featuredArticle.citations}</div>
                  <div className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold">Citations</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-3 border-t border-stone-200">
                <button
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="bg-[#C2410C] hover:bg-[#9A3412] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 min-h-[42px]"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Read Full Article</span>
                </button>
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Initiating verified PDF download for DOI: ${featuredArticle.doi}`);
                  }}
                  className="text-stone-800 hover:text-black text-xs font-bold flex items-center justify-center gap-1.5 border border-stone-300 px-4 py-2.5 rounded-full hover:bg-stone-50 transition-colors min-h-[42px]"
                >
                  <Download className="w-3.5 h-3.5 text-stone-700" />
                  <span>Download PDF</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Monograph Card (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white text-stone-900 rounded-3xl p-7 shadow-sm border border-stone-200 transition-all hover:-translate-y-1 relative group">
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-2">
                <span className="bg-stone-100 text-stone-800 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-stone-300">
                  SPECIAL REPORT
                </span>
              </div>

              <div className="text-[10px] text-stone-500 font-mono uppercase tracking-wider mb-2">
                Curated Series • No. 08
              </div>

              <h4 className="font-bold text-sm sm:text-base leading-snug mb-3 group-hover:text-[#C2410C] transition-colors">
                Clean Hydrogen From Seawater
              </h4>

              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                A comprehensive review of efficient, low-cost catalysts for generating green hydrogen under ambient conditions.
              </p>

              <div className="space-y-1.5 text-[11px] text-stone-500 border-t border-stone-100 pt-3 mb-5">
                <div>Lead Author: <strong className="text-stone-800">Dr. M. Tanaka</strong></div>
                <div>Status: <strong className="text-stone-700 font-semibold">Indexed in Scopus</strong></div>
                <div>Format: <strong className="text-stone-800">Open Access PDF</strong></div>
              </div>

              <button
                onClick={() => onSelectArticle(currentArticles[2])}
                className="w-full bg-stone-900 hover:bg-[#C2410C] text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Read Full Report</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
