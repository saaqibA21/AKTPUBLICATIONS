import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { currentArticles } from '../data/journalData';

export default function ArchiveGrid({ onSelectArticle, onOpenSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Biotechnology & Medicine',
    'Computer Science & AI',
    'Materials Science & Chemistry',
    'Law & Social Policy'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? currentArticles
    : currentArticles.filter(a => a.category === selectedCategory);

  return (
    <section id="archive" className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-200">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3 sm:gap-4">
          <div>
            <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#C2410C] uppercase mb-1">
              VOLUME 12 • ISSUE 4 (CURRENT ISSUE)
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-bold tracking-tight leading-[1.08]">
              Recent Publications in <span className="text-[#C2410C]">AKT Archives</span>
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-stone-600 max-w-lg font-medium">
            Browse newly published research papers across all disciplines. Completely free and open access for everyone to read and download.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-1" />
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wider mr-2 shrink-0">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C2410C] text-white shadow-sm'
                  : 'bg-stone-50 text-stone-800 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((art, idx) => {
            const images = [
              "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            ];

            return (
              <div
                key={art.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#C2410C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={images[idx % images.length]}
                      alt={art.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase">
                      {art.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#C2410C] text-white px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow">
                      Open Access
                    </div>
                  </div>

                  {/* Content Strip */}
                  <div className="p-6">
                    {/* Date and Citation Metrics */}
                    <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono mb-2.5">
                      <span>{art.date}</span>
                      <span className="font-semibold text-stone-700">Pages: {art.pages}</span>
                    </div>

                    {/* Headline */}
                    <h3 
                      onClick={() => onSelectArticle(art)}
                      className="font-bold text-base sm:text-lg text-stone-900 leading-snug group-hover:text-[#C2410C] transition-colors cursor-pointer line-clamp-2 mb-2"
                    >
                      {art.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-xs text-stone-600 font-medium mb-3">
                      By {art.authors}
                    </p>

                    {/* Abstract teaser */}
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {art.abstract}
                    </p>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-stone-500 truncate max-w-[160px]">
                    DOI: {art.doi}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectArticle(art)}
                      className="text-[#C2410C] hover:underline font-bold text-xs flex items-center gap-1"
                    >
                      <span>Read Full</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View More Archives Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => alert("Loading Volume 11, 10, 09... Full archive index of 1,480 peer-reviewed papers!")}
            className="bg-stone-900 hover:bg-[#C2410C] text-white px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>View More Issues & Archives</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
