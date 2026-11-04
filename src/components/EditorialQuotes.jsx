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

  // Sophisticated editorial card styling
  const cardStyles = [
    {
      bg: "bg-white text-stone-900 border border-stone-200 shadow-md hover:border-[#C2410C]/40",
      icon: "text-[#C2410C]",
      border: "border-stone-100",
      roleColor: "text-stone-500",
      instColor: "text-stone-400"
    },
    {
      bg: "bg-stone-900 text-white border border-stone-800 shadow-xl",
      icon: "text-[#C2410C]",
      border: "border-stone-800",
      roleColor: "text-stone-300",
      instColor: "text-stone-400"
    },
    {
      bg: "bg-white text-stone-900 border border-stone-200 shadow-md hover:border-[#C2410C]/40",
      icon: "text-[#C2410C]",
      border: "border-stone-100",
      roleColor: "text-stone-500",
      instColor: "text-stone-400"
    }
  ];

  return (
    <section className="bg-[#EFECE6] py-14 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-300">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-1">
              Editorial Governance & Academic Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 font-display tracking-wide uppercase">
              Voices of the <span className="text-[#C2410C]">Editorial Advisory Board</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous quote"
              className="w-10 h-10 rounded-full bg-white hover:bg-stone-100 text-stone-800 flex items-center justify-center transition-all border border-stone-300 active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next quote"
              className="w-10 h-10 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Cards */}
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
                    className="w-12 h-12 rounded-full object-cover grayscale contrast-125 border-2 border-stone-300"
                  />
                  <div>
                    <h4 className="font-bold text-sm leading-tight tracking-tight">
                      {item.author}
                    </h4>
                    <div className={`text-[11px] leading-tight ${style.roleColor}`}>
                      {item.role}
                    </div>
                    <div className={`text-[10px] truncate max-w-[200px] ${style.instColor}`}>
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
