import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, Send, BookOpen, Users, Shield, 
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
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

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

  const toggleMobileSection = (section) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <div className="sticky top-2 z-40 px-2.5 sm:px-8 lg:px-12 my-2 w-full">
      <nav className="max-w-[1600px] w-full mx-auto bg-white/95 backdrop-blur-md border border-neutral-300 rounded-full shadow-pill px-3.5 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between transition-all">
        
        {/* Brand Logo - Responsive sizing */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 sm:gap-2.5 group text-left shrink-0"
        >
          <div className="bg-[#C2410C] text-white font-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-sm sm:text-base tracking-tighter flex items-center justify-center shadow-md group-hover:bg-[#9A3412] transition-colors">
            <span className="font-display tracking-widest text-base sm:text-lg">AKT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-black group-hover:text-[#C2410C] transition-colors leading-tight">
              PUBLICATIONS
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold text-neutral-500 uppercase tracking-widest hidden md:inline">
              Open Academic Press
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (>= xl) */}
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

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSubmit}
            className="bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-xs px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md transition-all flex items-center gap-1.5 sm:gap-2 hover:scale-[1.02] active:scale-[0.98] min-h-[36px] sm:min-h-[40px]"
          >
            <Send className="w-3.5 h-3.5 text-white shrink-0" />
            <span className="tracking-wide">
              Submit <span className="hidden sm:inline">Manuscript</span>
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-800 hover:text-[#C2410C] rounded-full hover:bg-neutral-100 min-h-[38px] min-w-[38px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Polished Accordions & Fast-Touch Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 bg-white rounded-3xl border border-neutral-200 shadow-2xl p-4 sm:p-5 animate-in slide-in-from-top duration-200 max-w-[1600px] mx-auto max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-1.5 text-sm font-semibold text-neutral-800">
            
            {/* Home */}
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 text-[#C2410C] font-bold flex items-center justify-between"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Editorial Board Accordion */}
            <div className="rounded-xl border border-neutral-100 overflow-hidden">
              <button
                onClick={() => toggleMobileSection('editorial')}
                className="w-full text-left px-3.5 py-2.5 hover:bg-neutral-50 flex items-center justify-between"
              >
                <span>Editorial Board</span>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileExpandedSection === 'editorial' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'editorial' && (
                <div className="bg-neutral-50 px-3.5 py-2 space-y-2 text-xs border-t border-neutral-100">
                  <button
                    onClick={() => { onOpenEditorial('advisory'); setMobileMenuOpen(false); }}
                    className="w-full text-left py-1.5 text-neutral-700 hover:text-[#C2410C] font-medium"
                  >
                    ● Editorial Advisory Board
                  </button>
                  <button
                    onClick={() => { onOpenEditorial('chief'); setMobileMenuOpen(false); }}
                    className="w-full text-left py-1.5 text-neutral-700 hover:text-[#C2410C] font-medium"
                  >
                    ● Editors-in-Chief & Section Leads
                  </button>
                </div>
              )}
            </div>

            {/* Review Process */}
            <button
              onClick={() => { onOpenReview(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Review Process</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Author Resources Accordion */}
            <div className="rounded-xl border border-neutral-100 overflow-hidden">
              <button
                onClick={() => toggleMobileSection('author')}
                className="w-full text-left px-3.5 py-2.5 hover:bg-neutral-50 flex items-center justify-between"
              >
                <span>Author Services</span>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${mobileExpandedSection === 'author' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'author' && (
                <div className="bg-neutral-50 px-3.5 py-2 space-y-2 text-xs border-t border-neutral-100">
                  <button
                    onClick={() => { onOpenGuidelines('guidelines'); setMobileMenuOpen(false); }}
                    className="w-full text-left py-1.5 text-neutral-700 hover:text-[#C2410C] font-medium"
                  >
                    ● Authors Guidelines & Structure
                  </button>
                  <button
                    onClick={() => { onOpenGuidelines('ethics'); setMobileMenuOpen(false); }}
                    className="w-full text-left py-1.5 text-neutral-700 hover:text-[#C2410C] font-medium"
                  >
                    ● Ethical Guidelines (COPE)
                  </button>
                  <button
                    onClick={() => { onOpenGuidelines('template'); setMobileMenuOpen(false); }}
                    className="w-full text-left py-1.5 text-neutral-700 hover:text-[#C2410C] font-medium"
                  >
                    ● Download Word & LaTeX Templates
                  </button>
                  <button
                    onClick={() => { onOpenGuidelines('copyright'); setMobileMenuOpen(false); }}
                    className="w-full text-left py-1.5 text-neutral-700 hover:text-[#C2410C] font-medium"
                  >
                    ● Copyright Transfer (CC-BY 4.0)
                  </button>
                </div>
              )}
            </div>

            {/* Referees */}
            <button
              onClick={() => { onOpenReview('reviewer'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Referees / Reviewer</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Archive */}
            <button
              onClick={() => { onNavigate('current-issue'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Archive & Issues</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Membership */}
            <button
              onClick={() => { onOpenMembership(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Membership</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Awards */}
            <button
              onClick={() => { onOpenAwards(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Awards</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Donation */}
            <button
              onClick={() => { onOpenDonation(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Donation (Open Access Fund)</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>

            {/* Contact */}
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-200">
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
