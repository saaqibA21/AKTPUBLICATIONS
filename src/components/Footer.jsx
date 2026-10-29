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
    <footer className="bg-black text-neutral-300 border-t border-neutral-900 pt-16 pb-12 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1600px] w-full mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-white text-black font-black px-4 py-1.5 rounded-full text-base tracking-tighter flex items-center justify-center font-display text-xl">
                AKT
              </div>
              <span className="text-base font-black tracking-widest uppercase text-white font-display">
                PUBLICATIONS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              International peer-reviewed open access scholarly publisher dedicated to high-impact discoveries across medicine, engineering, computational sciences, and social policy.
            </p>

            <div className="p-3.5 bg-neutral-950 rounded-2xl border border-neutral-800 text-[11px] font-mono space-y-1">
              <div><strong className="text-white">e-ISSN:</strong> {journalMeta.eISSN}</div>
              <div><strong className="text-neutral-400">p-ISSN:</strong> {journalMeta.pISSN}</div>
              <div><strong className="text-neutral-400">DOI Prefix:</strong> {journalMeta.doiPrefix}</div>
              <div><strong className="text-neutral-400">Frequency:</strong> {journalMeta.frequency}</div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-display uppercase text-sm font-bold text-white tracking-wider mb-3">
              Editorial & Governance
            </h4>
            <ul className="text-xs sm:text-sm space-y-2 text-neutral-400">
              <li>
                <button onClick={onOpenEditorial} className="hover:text-white transition-colors">
                  Editorial Advisory Board
                </button>
              </li>
              <li>
                <button onClick={onOpenReview} className="hover:text-white transition-colors">
                  Double-Blind Review Process
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-white transition-colors">
                  COPE Ethical Guidelines
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-white transition-colors">
                  Plagiarism & Retraction Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenAwards} className="hover:text-white transition-colors">
                  Annual Scientific Awards
                </button>
              </li>
            </ul>
          </div>

          {/* Author Services (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-display uppercase text-sm font-bold text-white tracking-wider mb-3">
              Author & Reviewer Hub
            </h4>
            <ul className="text-xs sm:text-sm space-y-2 text-neutral-400">
              <li>
                <button onClick={onOpenSubmit} className="text-white font-bold hover:underline">
                  Submit Manuscript Online
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-white transition-colors">
                  Authors Guidelines & Formats
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-white transition-colors">
                  Download Manuscript Template (.docx)
                </button>
              </li>
              <li>
                <button onClick={onOpenGuidelines} className="hover:text-white transition-colors">
                  Copyright Transfer (CC-BY 4.0)
                </button>
              </li>
              <li>
                <button onClick={onOpenMembership} className="hover:text-white transition-colors">
                  Annual & Life Membership
                </button>
              </li>
              <li>
                <button onClick={onOpenDonation} className="hover:text-white transition-colors">
                  Open Access Support Fund
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Headquarters (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-display uppercase text-sm font-bold text-white tracking-wider mb-3">
              Editorial Office
            </h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>14 Science Park Crescent, London, WC1E 6BT, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="font-mono text-[11px]">editorial@akt.org</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="bg-neutral-900 hover:bg-white hover:text-black text-neutral-200 px-4 py-2 rounded-full text-xs font-bold transition-all w-full text-center border border-neutral-700"
                >
                  Contact Desk
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Indexing Badges Row */}
        <div className="py-6 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="font-bold uppercase tracking-wider text-[11px] text-neutral-300">
            Permanently Indexed & Archived in:
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-semibold text-neutral-300">
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Scopus</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Clarivate Web of Science</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">PubMed Central (PMC)</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">DOAJ</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">CrossRef</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">Portico</span>
            <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800 text-white font-bold">COPE Member</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2012–2026 <strong>AKT PUBLICATIONS</strong>. All articles published under Creative Commons CC-BY 4.0 Open Access License.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white text-neutral-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
}
