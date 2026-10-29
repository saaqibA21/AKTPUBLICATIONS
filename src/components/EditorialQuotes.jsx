import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { editorialQuotes } from '../data/journalData';

export default function EditorialQuotes() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % editorialQuotes.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + editorialQuotes.length) % editorialQuotes.length);
  };

  // Sophisticated monochrome tri-tone styles
  const cardStyles = [
    {
      bg: "bg-black text-white border border-neutral-800 shadow-2xl",
      icon: "text-neutral-500",
      border: "border-neutral-800"
    },
    {
      bg: "bg-white text-neutral-900 border border-neutral-300 shadow-xl",
      icon: "text-neutral-400",
      border: "border-neutral-200"
    },
    {
      bg: "bg-neutral-900 text-white border border-neutral-800 shadow-2xl",
      icon: "text-neutral-600",
      border: "border-neutral-800"
    }
  ];

  return (
    <section className="bg-[#141416] py-14 px-4 sm:px-8 lg:px-12 w-full border-t border-neutral-800">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-neutral-400 text-xs font-bold tracking-widest uppercase mb-1">
              Editorial Governance & Academic Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-wide uppercase">
              Voices of the <span className="text-[#C2410C]">Editorial Advisory Board</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous quote"
              className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all border border-neutral-700 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next quote"
              className="w-10 h-10 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Cards: Sleek Tri-tone Monochrome (Black / White / Charcoal) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {editorialQuotes.map((item, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <div
                key={item.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${style.bg}`}
              >
                {/* Quote Mark Icon */}
                <div>
                  <Quote className={`w-8 h-8 mb-4 ${style.icon}`} />
                  <p className="text-sm sm:text-base font-medium leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Attribution with Portrait */}
                <div className={`flex items-center gap-3.5 pt-4 border-t ${style.border}`}>
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover grayscale contrast-125 border-2 border-neutral-600"
                  />
                  <div>
                    <h4 className="font-bold text-sm leading-tight tracking-tight">
                      {item.author}
                    </h4>
                    <div className="text-[11px] opacity-80 leading-tight">
                      {item.role}
                    </div>
                    <div className="text-[10px] opacity-60 truncate max-w-[200px]">
                      {item.institution}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
