import React from 'react';
import { journalMeta } from '../data/journalData';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

export default function Footer({ 
  onOpenSubmit, 
  onOpenGuidelines, 
  onOpenEditorial, 
  onOpenReview, 
  onOpenMembership, 
  onOpenAwards, 
  onOpenDonation, 
  onOpenContact 
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-stone-600 border-t border-stone-200 pt-16 pb-12 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-200">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#C2410C] text-white font-black px-4 py-1.5 rounded-full text-base tracking-tighter flex items-center justify-center font-display text-xl shadow-sm">
                AKT
              </div>
              <span className="text-base font-black tracking-widest uppercase text-stone-900 font-display">
                PUBLICATIONS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
              An international peer-reviewed open access publisher dedicated to making high-quality scientific research free and accessible worldwide across medicine, science, and the humanities.
            </p>

            <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-[11px] font-mono space-y-1 text-stone-600">
              <div><strong className="text-stone-900">e-ISSN:</strong> {journalMeta.eISSN}</div>
              <div><strong className="text-stone-700">p-ISSN:</strong> {journalMeta.pISSN}</div>
              <div><strong className="text-stone-700">DOI Prefix:</strong> {journalMeta.doiPrefix}</div>
              <div><strong className="text-stone-700">Frequency:</strong> {journalMeta.frequency}</div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-display uppercase text-sm font-bold text-stone-900 tracking-wider mb-3">
              About the Journal
            </h4>
            <ul className="text-xs sm:text-sm space-y-2 text-stone-600">
              <li>
                <button onClick={onOpenEditorial} className="hover:text-[#C2410C] transition-colors">
                  Editorial Board Directory
                </button>
              </li>
              <li>
                <button onClick={onOpenReview} className="hover:text-[#C2410C] transition-colors">
                  Peer Review Process
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-[#C2410C] transition-colors">
                  Publication Ethics
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-[#C2410C] transition-colors">
                  Originality & Plagiarism Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenAwards} className="hover:text-[#C2410C] transition-colors">
                  Annual Research Awards
                </button>
              </li>
            </ul>
          </div>

          {/* Author Services (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-display uppercase text-sm font-bold text-stone-900 tracking-wider mb-3">
              Authors & Reviewers
            </h4>
            <ul className="text-xs sm:text-sm space-y-2 text-stone-600">
              <li>
                <button onClick={onOpenSubmit} className="text-[#C2410C] font-bold hover:underline">
                  Submit Manuscript Online
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-[#C2410C] transition-colors">
                  Author Guidelines & Formatting
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-[#C2410C] transition-colors">
                  Download Word & LaTeX Templates
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-[#C2410C] transition-colors">
                  Open Access Copyright (CC-BY 4.0)
                </button>
              </li>
              <li>
                <button onClick={onOpenMembership} className="hover:text-[#C2410C] transition-colors">
                  Researcher Membership Plans
                </button>
              </li>
              <li>
                <button onClick={onOpenDonation} className="hover:text-[#C2410C] transition-colors">
                  Open Access Support Fund
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Headquarters (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-display uppercase text-sm font-bold text-stone-900 tracking-wider mb-3">
              Editorial Office
            </h4>
            <div className="text-xs space-y-2 text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C2410C] shrink-0 mt-0.5" />
                <span>14 Science Park Crescent, London, WC1E 6BT, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2410C] shrink-0" />
                <span className="font-mono text-[11px] text-stone-800">editorial@akt.org</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="bg-stone-100 hover:bg-[#C2410C] hover:text-white text-stone-800 px-4 py-2 rounded-full text-xs font-bold transition-all w-full text-center border border-stone-200 shadow-xs"
                >
                  Contact Desk
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Indexing Badges Row */}
        <div className="py-6 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <div className="font-bold uppercase tracking-wider text-[11px] text-stone-800">
            Indexed & Archived in:
          </div>
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono font-semibold text-stone-700">
            <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-200">Scopus</span>
            <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-200">Clarivate Web of Science</span>
            <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-200">PubMed Central (PMC)</span>
            <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-200">DOAJ</span>
            <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-200">CrossRef</span>
            <span className="bg-stone-50 px-3 py-1 rounded-full border border-stone-200">Portico</span>
            <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-200 text-[#C2410C] font-bold">COPE Member</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2012–2026 <strong>AKT PUBLICATIONS</strong>. All articles published under Creative Commons CC-BY 4.0 Open Access License.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#C2410C] text-stone-700 transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C2410C]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
