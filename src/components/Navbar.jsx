import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Send, BookOpen, Users, Shield, 
  FileText, Award, Heart, Archive, Sparkles, CheckSquare
} from 'lucide-react';

export default function Navbar({ 
  onNavigate, 
  onOpenSubmit, 
  onOpenGuidelines, 
  onOpenEditorial, 
  onOpenReview,
  onOpenMembership,
  onOpenAwards,
  onOpenDonation,
  onOpenContact,
  activeSection 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = () => setActiveDropdown(null);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleDropdownClick = (e, menuName) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <div className="sticky top-2 z-40 px-3 sm:px-8 lg:px-12 my-2 w-full">
      <nav className="max-w-[1600px] w-full mx-auto bg-white/95 backdrop-blur-md border border-neutral-300 rounded-full shadow-pill px-4 sm:px-8 py-2.5 flex items-center justify-between transition-all">
        
        {/* Brand Logo - Burnt Orange & White Capsule */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2.5 group text-left shrink-0"
        >
          <div className="bg-[#C2410C] text-white font-black px-4 py-1.5 rounded-full text-base tracking-tighter flex items-center justify-center shadow-md group-hover:bg-[#9A3412] transition-colors">
            <span className="font-display tracking-widest text-lg">AKT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-wider uppercase text-black group-hover:text-[#C2410C] transition-colors">
              PUBLICATIONS
            </span>
            <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-widest hidden sm:inline">
              Open Academic Press
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-neutral-700">
          
          {/* 1. Home */}
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#C2410C] hover:bg-neutral-100 ${
              activeSection === 'home' ? 'text-[#C2410C] bg-orange-50 font-bold' : ''
            }`}
          >
            Home
          </button>

          {/* 2. Editorial Board */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownClick(e, 'editorial')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
            >
              <span>Editorial Board</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>
            {activeDropdown === 'editorial' && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <button
                  onClick={() => { onOpenEditorial('advisory'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <Users className="w-4 h-4 text-[#C2410C]" />
                  <div>
                    <div className="font-semibold text-neutral-900">Editorial Advisory Board</div>
                    <div className="text-[10px] text-neutral-500">International scholars & domain heads</div>
                  </div>
                </button>
                <button
                  onClick={() => { onOpenEditorial('chief'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-neutral-500" />
                  <div>
                    <div className="font-semibold text-neutral-900">Editors-in-Chief & Section Leads</div>
                    <div className="text-[10px] text-neutral-500">Subject discipline oversight</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* 3. Review Process */}
          <button
            onClick={() => onOpenReview()}
            className="px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
          >
            Review Process
          </button>

          {/* 4. Author */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownClick(e, 'author')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
            >
              <span>Author</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>
            {activeDropdown === 'author' && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <button
                  onClick={() => { onOpenGuidelines('guidelines'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#C2410C]" />
                  <div>
                    <div className="font-semibold text-neutral-900">Authors Guidelines</div>
                    <div className="text-[10px] text-neutral-500">Formatting, citation & structure</div>
                  </div>
                </button>
                <button
                  onClick={() => { onOpenGuidelines('ethics'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-neutral-500" />
                  <div>
                    <div className="font-semibold text-neutral-900">Ethical Guidelines</div>
                    <div className="text-[10px] text-neutral-500">COPE standards & originality</div>
                  </div>
                </button>
                <button
                  onClick={() => { onOpenGuidelines('template'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <CheckSquare className="w-4 h-4 text-neutral-500" />
                  <div>
                    <div className="font-semibold text-neutral-900">Manuscript Template</div>
                    <div className="text-[10px] text-neutral-500">Download Word (.docx) & LaTeX</div>
                  </div>
                </button>
                <button
                  onClick={() => { onOpenGuidelines('copyright'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-neutral-500" />
                  <div>
                    <div className="font-semibold text-neutral-900">Copyright Transfer Form</div>
                    <div className="text-[10px] text-neutral-500">CC-BY 4.0 Open License</div>
                  </div>
                </button>
                <div className="border-t border-neutral-100 my-1" />
                <button
                  onClick={() => { onOpenSubmit(); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2.5 bg-orange-50 text-[#C2410C] hover:bg-orange-100 text-xs font-bold flex items-center gap-2 rounded-xl mx-auto my-1 w-[95%]"
                >
                  <Send className="w-4 h-4 text-[#C2410C]" />
                  <div>
                    <div>Submit Manuscript</div>
                    <div className="text-[10px] text-orange-800 font-normal">Fast-track submission portal</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* 5. Referees / Reviewer */}
          <button
            onClick={() => onOpenReview('reviewer')}
            className="px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
          >
            Referees / Reviewer
          </button>

          {/* 6. Archive */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownClick(e, 'archive')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
            >
              <span>Archive</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>
            {activeDropdown === 'archive' && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute top-full left-0 mt-2 w-60 bg-white border border-neutral-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <button
                  onClick={() => { onNavigate('current-issue'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-900 text-xs font-semibold flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                  <span>Current Issue (Vol. 12, Issue 4)</span>
                </button>
                <button
                  onClick={() => { onNavigate('past-issues'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <Archive className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Past / Previous Issues</span>
                </button>
                <button
                  onClick={() => { onNavigate('special-issues'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 hover:text-[#C2410C] text-neutral-800 text-xs font-medium flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
                  <span>Special Issues & Monograph</span>
                </button>
              </div>
            )}
          </div>

          {/* 7. Membership */}
          <div className="relative">
            <button
              onClick={(e) => handleDropdownClick(e, 'membership')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
            >
              <span>Membership</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>
            {activeDropdown === 'membership' && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute top-full left-0 mt-2 w-52 bg-white border border-neutral-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <button
                  onClick={() => { onOpenMembership('annual'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 text-neutral-800 text-xs font-medium"
                >
                  <div className="font-semibold text-neutral-900">Annual Membership</div>
                  <div className="text-[10px] text-neutral-500">12 months APC discounts</div>
                </button>
                <button
                  onClick={() => { onOpenMembership('life'); setActiveDropdown(null); }}
                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 text-neutral-800 text-xs font-medium"
                >
                  <div className="font-semibold text-[#C2410C]">Life Membership</div>
                  <div className="text-[10px] text-neutral-500">Lifetime tenure & fellow title</div>
                </button>
              </div>
            )}
          </div>

          {/* 8. Awards */}
          <button
            onClick={() => onOpenAwards()}
            className="px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors flex items-center gap-1"
          >
            <Award className="w-3.5 h-3.5 text-neutral-600" />
            <span>Awards</span>
          </button>

          {/* 9. Donation */}
          <button
            onClick={() => onOpenDonation()}
            className="px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors flex items-center gap-1"
          >
            <Heart className="w-3.5 h-3.5 text-neutral-600" />
            <span>Donation</span>
          </button>

          {/* 10. Contact Us */}
          <button
            onClick={() => onOpenContact()}
            className="px-3 py-1.5 rounded-full hover:text-[#C2410C] hover:bg-neutral-100 transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Right CTA Button - Burnt Orange & White */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSubmit}
            className="bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full shadow-md transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5 text-white" />
            <span className="tracking-wide">Submit Manuscript</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-800 hover:text-[#C2410C] rounded-full hover:bg-neutral-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 bg-white rounded-3xl border border-neutral-200 shadow-2xl p-5 animate-in slide-in-from-top duration-200 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100 text-[#C2410C] font-bold"
            >
              Home
            </button>
            <button
              onClick={() => { onOpenEditorial(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Editorial Board
            </button>
            <button
              onClick={() => { onOpenReview(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Review Process
            </button>
            <button
              onClick={() => { onOpenGuidelines(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Author Guidelines
            </button>
            <button
              onClick={() => { onOpenReview('reviewer'); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Referees / Reviewer
            </button>
            <button
              onClick={() => { onNavigate('current-issue'); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Archive & Issues
            </button>
            <button
              onClick={() => { onOpenMembership(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Membership
            </button>
            <button
              onClick={() => { onOpenAwards(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Awards
            </button>
            <button
              onClick={() => { onOpenDonation(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Donation
            </button>
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="text-left p-2.5 rounded-xl hover:bg-neutral-100"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-200">
            <button
              onClick={() => { onOpenSubmit(); setMobileMenuOpen(false); }}
              className="w-full bg-[#C2410C] text-white py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:bg-[#9A3412] transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Submit Manuscript Online</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
