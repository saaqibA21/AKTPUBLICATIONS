import React from 'react';
import { Building2, User, LogIn } from 'lucide-react';
import { journalMeta } from '../data/journalData';

export default function TopHeader({ onOpenAuth, onOpenInstitutional }) {
  return (
    <header className="bg-white text-stone-700 border-b border-stone-200 text-xs py-2 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: ISSN details & DOI */}
        <div className="flex items-center flex-wrap gap-3 text-stone-600">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-[#C2410C] font-bold">e-ISSN:</span>
            <span className="text-stone-900 tracking-wider font-semibold">{journalMeta.eISSN}</span>
            <span className="text-stone-300">|</span>
            <span className="text-[#C2410C] font-bold">p-ISSN:</span>
            <span className="text-stone-900 tracking-wider font-semibold">{journalMeta.pISSN}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-stone-200 text-stone-500">
            <span>DOI Prefix: <strong className="text-stone-900 font-mono">{journalMeta.doiPrefix}</strong></span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-800 font-medium">COPE Member</span>
          </div>
        </div>

        {/* Right: Institutional Access, Register, Login */}
        <div className="flex items-center gap-3">
          {/* Institutional Access */}
          <button
            onClick={onOpenInstitutional}
            className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 transition-colors bg-stone-50 hover:bg-stone-100 px-3 py-1 rounded-full border border-stone-200 text-[11px]"
            title="Access via your University or Research Institution"
          >
            <Building2 className="w-3.5 h-3.5 text-[#C2410C]" />
            <span className="font-medium">Institutional Access</span>
          </button>

          <div className="h-4 w-px bg-stone-200" />

          {/* Register dropdown */}
          <div className="relative group">
            <button
              onClick={() => onOpenAuth('register', 'individual')}
              className="flex items-center gap-1 text-stone-700 hover:text-stone-900 font-medium py-1 text-[11px]"
            >
              <User className="w-3.5 h-3.5 text-stone-500" />
              <span>Register</span>
              <span className="text-[10px] text-stone-400">▾</span>
            </button>
            <div className="absolute right-0 top-full mt-1 hidden group-hover:block bg-white border border-stone-200 rounded-xl shadow-xl py-1 w-44 z-50">
              <button
                onClick={() => onOpenAuth('register', 'individual')}
                className="w-full text-left px-3 py-1.5 text-[11px] text-stone-700 hover:bg-stone-100 hover:text-stone-900 flex items-center justify-between"
              >
                <span>Individual Researcher</span>
                <span className="text-[9px] bg-stone-100 text-stone-600 px-1 rounded">Author</span>
              </button>
              <button
                onClick={() => onOpenAuth('register', 'institutional')}
                className="w-full text-left px-3 py-1.5 text-[11px] text-stone-700 hover:bg-stone-100 hover:text-stone-900 flex items-center justify-between"
              >
                <span>Institutional Affiliate</span>
                <span className="text-[9px] bg-stone-100 text-stone-600 px-1 rounded">Library</span>
              </button>
            </div>
          </div>

          <div className="h-4 w-px bg-stone-200" />

          {/* Login button - Burnt Orange & White */}
          <button
            onClick={() => onOpenAuth('login', 'individual')}
            className="flex items-center gap-1 text-white bg-[#C2410C] hover:bg-[#9A3412] px-3.5 py-1 rounded-full font-bold text-[11px] transition-colors shadow-sm"
          >
            <LogIn className="w-3.5 h-3.5 text-white" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}
