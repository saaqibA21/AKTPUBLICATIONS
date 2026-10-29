import React from 'react';
import { Building2, User, LogIn } from 'lucide-react';
import { journalMeta } from '../data/journalData';

export default function TopHeader({ onOpenAuth, onOpenInstitutional }) {
  return (
    <header className="bg-black text-white border-b border-neutral-800 text-xs py-2 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: ISSN details & DOI */}
        <div className="flex items-center flex-wrap gap-3 text-neutral-300">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-[#C2410C] font-bold">e-ISSN:</span>
            <span className="text-white tracking-wider font-semibold">{journalMeta.eISSN}</span>
            <span className="text-neutral-600">|</span>
            <span className="text-[#C2410C] font-bold">p-ISSN:</span>
            <span className="text-white tracking-wider font-semibold">{journalMeta.pISSN}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-neutral-800 text-neutral-400">
            <span>DOI Prefix: <strong className="text-white font-mono">{journalMeta.doiPrefix}</strong></span>
            <span className="text-neutral-600">•</span>
            <span className="text-white font-medium">COPE Member</span>
          </div>
        </div>

        {/* Right: Institutional Access, Register, Login */}
        <div className="flex items-center gap-3">
          {/* Institutional Access */}
          <button
            onClick={onOpenInstitutional}
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors bg-neutral-900 hover:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700 text-[11px]"
            title="Access via your University or Research Institution"
          >
            <Building2 className="w-3.5 h-3.5 text-[#C2410C]" />
            <span className="font-medium">Institutional Access</span>
          </button>

          <div className="h-4 w-px bg-neutral-800" />

          {/* Register dropdown */}
          <div className="relative group">
            <button
              onClick={() => onOpenAuth('register', 'individual')}
              className="flex items-center gap-1 text-neutral-300 hover:text-white font-medium py-1 text-[11px]"
            >
              <User className="w-3.5 h-3.5 text-neutral-400" />
              <span>Register</span>
              <span className="text-[10px] text-neutral-500">▾</span>
            </button>
            <div className="absolute right-0 top-full mt-1 hidden group-hover:block bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl py-1 w-44 z-50">
              <button
                onClick={() => onOpenAuth('register', 'individual')}
                className="w-full text-left px-3 py-1.5 text-[11px] text-neutral-200 hover:bg-neutral-800 hover:text-white flex items-center justify-between"
              >
                <span>Individual Researcher</span>
                <span className="text-[9px] bg-neutral-800 text-neutral-400 px-1 rounded">Author</span>
              </button>
              <button
                onClick={() => onOpenAuth('register', 'institutional')}
                className="w-full text-left px-3 py-1.5 text-[11px] text-neutral-200 hover:bg-neutral-800 hover:text-white flex items-center justify-between"
              >
                <span>Institutional Affiliate</span>
                <span className="text-[9px] bg-neutral-800 text-neutral-300 px-1 rounded">Library</span>
              </button>
            </div>
          </div>

          <div className="h-4 w-px bg-neutral-800" />

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
