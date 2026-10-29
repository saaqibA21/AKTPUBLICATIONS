import React, { useState } from 'react';
import { Award, Check, Heart, Shield, ArrowRight } from 'lucide-react';
import { membershipTiers, awardsList } from '../data/journalData';

export default function MembershipAndAwards({ onOpenDonation }) {
  const [activeTab, setActiveTab] = useState('membership');

  return (
    <section id="membership" className="bg-[#EFECE6] py-16 lg:py-24 px-4 sm:px-8 lg:px-12 w-full border-b border-neutral-300">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Section Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-black uppercase mb-1">
              FELLOWSHIP & ACADEMIC RECOGNITION
            </div>
            <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black font-black tracking-tight">
              Membership, <span className="text-[#C2410C]">Awards & Philanthropy</span>
            </h2>
          </div>

          <div className="flex bg-white p-1 rounded-full border border-neutral-300 shadow-sm">
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'membership'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Academic Membership
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'awards'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Excellence Awards
            </button>
            <button
              onClick={() => setActiveTab('donation')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'donation'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Open Access Donation
            </button>
          </div>
        </div>

        {/* Tab 1: Membership (Annual vs Life Membership) */}
        {activeTab === 'membership' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 relative flex flex-col justify-between ${
                  tier.popular
                    ? 'bg-black text-white shadow-2xl border-2 border-neutral-700'
                    : 'bg-white text-neutral-900 shadow-lg border border-neutral-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 right-8 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    RECOMMENDED BY ADVISORY BOARD
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                      {tier.period}
                    </span>
                    <Shield className="w-5 h-5 text-neutral-400" />
                  </div>

                  <h3 className="font-display uppercase text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    {tier.type}
                  </h3>

                  <div className="text-2xl sm:text-3xl font-black mb-3 font-display">
                    {tier.fee}
                  </div>

                  <p className={`text-xs sm:text-sm mb-6 ${tier.popular ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {tier.highlight}
                  </p>

                  <div className="space-y-3 mb-8">
                    {tier.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                        <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                        <span className={tier.popular ? 'text-neutral-200' : 'text-neutral-700'}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => alert(`Enrolling in ${tier.type}. Our Membership Secretariat will contact your academic email.`)}
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-white hover:bg-neutral-200 text-black'
                      : 'bg-black hover:bg-neutral-800 text-white'
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
                className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-md flex flex-col justify-between hover:border-black transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <h3 className="font-display uppercase text-xl sm:text-2xl font-bold text-black mb-2 leading-tight">
                    {award.title}
                  </h3>

                  <div className="bg-neutral-100 text-neutral-900 border border-neutral-300 px-3.5 py-1.5 rounded-xl text-xs font-bold mb-4 font-mono">
                    {award.prize}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {award.criteria}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>{award.deadline}</span>
                  <button 
                    onClick={() => alert(`Opening nomination portal for: ${award.title}`)}
                    className="text-black font-bold hover:underline"
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
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-neutral-300 shadow-xl max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>

            <h3 className="font-display uppercase text-3xl sm:text-4xl font-black text-black mb-2">
              AKT Open Access Support & Scholarship Fund
            </h3>

            <p className="text-xs sm:text-sm lg:text-base text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              100% of voluntary philanthropic contributions fund Article Processing Charge (APC) waivers for promising early-career researchers and scholars from developing nations (HINARI Band A & B).
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-6">
              {['$50', '$150', '$500', '$1,000'].map((amt) => (
                <button
                  key={amt}
                  onClick={() => alert(`Thank you! Processing tax-deductible pledge for ${amt}. A formal receipt with Charity Ref AKT-EDU-88 will be issued.`)}
                  className="py-3.5 bg-neutral-50 hover:bg-black hover:text-white border border-neutral-300 rounded-2xl font-black text-base text-black transition-all font-mono"
                >
                  {amt}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-neutral-500 font-mono">
              Registered 501(c)(3) Academic Endowment • Audited Annually by Grant Thornton
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
