import React, { useState } from 'react';
import { Award, Check, Heart, Shield, ArrowRight } from 'lucide-react';
import { membershipTiers, awardsList } from '../data/journalData';

export default function MembershipAndAwards({ onOpenDonation }) {
  const [activeTab, setActiveTab] = useState('membership');

  return (
    <section id="membership" className="bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-stone-200">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#C2410C] uppercase mb-1">
              COMMUNITY & SUPPORT
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-bold tracking-tight leading-[1.08]">
              Membership, <span className="text-[#C2410C]">Awards & Grants</span>
            </h2>
          </div>

          <div className="w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex bg-stone-50 p-1 rounded-full border border-stone-200 shadow-sm max-w-full">
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-1 sm:flex-initial text-center ${
                activeTab === 'membership'
                  ? 'bg-[#C2410C] text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Researcher Membership
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-1 sm:flex-initial text-center ${
                activeTab === 'awards'
                  ? 'bg-[#C2410C] text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Annual Awards
            </button>
            <button
              onClick={() => setActiveTab('donation')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-1 sm:flex-initial text-center ${
                activeTab === 'donation'
                  ? 'bg-[#C2410C] text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Open Access Fund
            </button>
          </div>
        </div>

        {/* Tab 1: Membership (Annual vs Life Membership) */}
        {activeTab === 'membership' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 relative flex flex-col justify-between bg-white ${
                  tier.popular
                    ? 'border-2 border-[#C2410C] shadow-lg ring-1 ring-[#C2410C]/20'
                    : 'border border-stone-200 shadow-sm hover:border-stone-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 right-8 bg-[#C2410C] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C2410C]">
                      {tier.period}
                    </span>
                    <Shield className="w-5 h-5 text-stone-400" />
                  </div>

                  <h3 className="font-display uppercase text-3xl sm:text-4xl font-black tracking-tight mb-2 text-stone-900">
                    {tier.type}
                  </h3>

                  <div className="text-2xl sm:text-3xl font-black mb-3 font-display text-stone-900">
                    {tier.fee}
                  </div>

                  <p className="text-xs sm:text-sm mb-6 text-stone-600">
                    {tier.highlight}
                  </p>

                  <div className="space-y-3 mb-8">
                    {tier.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                        <Check className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                        <span className="text-stone-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => alert(`Enrolling in ${tier.type}. Our membership team will contact your email with details.`)}
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-[#C2410C] hover:bg-[#9A3412] text-white shadow-md'
                      : 'bg-stone-900 hover:bg-[#C2410C] text-white'
                  }`}
                >
                  <span>Apply for {tier.type}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Awards */}
        {activeTab === 'awards' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {awardsList.map((award, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-[#C2410C] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#C2410C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <h3 className="font-display uppercase text-xl sm:text-2xl font-bold text-stone-900 mb-2 leading-tight">
                    {award.title}
                  </h3>

                  <div className="bg-stone-50 text-stone-800 border border-stone-200 px-3.5 py-1.5 rounded-xl text-xs font-bold mb-4 font-mono">
                    {award.prize}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {award.criteria}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span>{award.deadline}</span>
                  <button 
                    onClick={() => alert(`Opening nomination form for: ${award.title}`)}
                    className="text-[#C2410C] font-bold hover:underline"
                  >
                    Nominate →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Donation (Open Access Academic Fund) */}
        {activeTab === 'donation' && (
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200 shadow-md max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-orange-50 text-[#C2410C] rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-200">
              <Heart className="w-8 h-8" />
            </div>

            <h3 className="font-display uppercase text-3xl sm:text-4xl font-black text-stone-900 mb-2">
              AKT Open Access Support Fund
            </h3>

            <p className="text-xs sm:text-sm lg:text-base text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              100% of donations directly fund publishing fee waivers for early-career researchers and scholars from developing nations and underfunded universities.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-6">
              {['$50', '$150', '$500', '$1,000'].map((amt) => (
                <button
                  key={amt}
                  onClick={() => alert(`Thank you! Processing pledge for ${amt}. A formal donation receipt will be emailed.`)}
                  className="py-3.5 bg-stone-50 hover:bg-[#C2410C] hover:text-white border border-stone-200 rounded-2xl font-black text-base text-stone-800 transition-all font-mono shadow-xs"
                >
                  {amt}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-stone-500 font-mono">
              Academic Support Fund • Dedicated to Open Scientific Knowledge
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
