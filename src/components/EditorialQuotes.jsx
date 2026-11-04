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

  return (
    <section className="bg-white py-14 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-200">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-1">
              FROM OUR EDITORS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 font-display tracking-tight">
              Words From Our <span className="text-[#C2410C]">Editorial Board</span>
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
          {editorialQuotes.map((item) => (
            <div
              key={item.id}
              className="bg-white text-stone-900 border border-stone-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#C2410C]/40 shadow-sm"
            >
              {/* Quote Mark Icon */}
              <div>
                <Quote className="w-8 h-8 mb-4 text-[#C2410C]" />
                <p className="text-sm sm:text-base font-medium leading-relaxed italic mb-6 text-stone-800">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Attribution with Portrait */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover grayscale contrast-125 border-2 border-stone-200"
                />
                <div>
                  <h4 className="font-bold text-sm leading-tight tracking-tight text-stone-900">
                    {item.author}
                  </h4>
                  <div className="text-[11px] leading-tight text-stone-500 mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[10px] truncate max-w-[200px] text-stone-400">
                    {item.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
