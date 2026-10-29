import React, { useState } from 'react';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EditorialQuotes from './components/EditorialQuotes';
import EditorialStory from './components/EditorialStory';
import DossierSpotlight from './components/DossierSpotlight';
import ReviewPathway from './components/ReviewPathway';
import ArchiveGrid from './components/ArchiveGrid';
import MembershipAndAwards from './components/MembershipAndAwards';
import Footer from './components/Footer';
import { 
  SubmitModal, 
  AuthModal, 
  GuidelinesModal, 
  EditorialModal, 
  ContactModal, 
  ArticleModal 
} from './components/Modals';

export default function App() {
  // Modal states
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ open: false, mode: 'login', type: 'individual' });
  const [guidelinesModal, setGuidelinesModal] = useState({ open: false, tab: 'guidelines' });
  const [isEditorialOpen, setIsEditorialOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation handler
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'current-issue' || sectionId === 'past-issues' || sectionId === 'special-issues') {
      const el = document.getElementById('archive');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAuth = (mode = 'login', type = 'individual') => {
    setAuthModal({ open: true, mode, type });
  };

  const handleOpenGuidelines = (tab = 'guidelines') => {
    setGuidelinesModal({ open: true, tab });
  };

  const handleOpenReview = (sub = 'process') => {
    const el = document.getElementById('review-pathway');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenMembership = () => {
    const el = document.getElementById('membership');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#121212] flex flex-col font-sans selection:bg-black selection:text-white w-full">
      
      {/* 1. Top Header with e-ISSN, Institutional Access, Login, Register (Full Width) */}
      <TopHeader 
        onOpenAuth={handleOpenAuth}
        onOpenInstitutional={() => handleOpenAuth('login', 'institutional')}
      />

      {/* Note: JournalMetricsBar removed per user request */}

      {/* 2. Floating Pill Navigation with 10 Dropdowns matching Excel wireframe */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onOpenGuidelines={handleOpenGuidelines}
        onOpenEditorial={() => setIsEditorialOpen(true)}
        onOpenReview={handleOpenReview}
        onOpenMembership={handleOpenMembership}
        onOpenAwards={handleOpenMembership}
        onOpenDonation={() => handleOpenMembership()}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Sleek Black Hero Section (Wide, no excessive margins, deep black theme) */}
      <main className="flex-1 w-full">
        <HeroSection
          onOpenSubmit={() => setIsSubmitOpen(true)}
          onOpenGuidelines={() => handleOpenGuidelines('guidelines')}
          onOpenReview={handleOpenReview}
        />

        {/* 4. Editorial Quotes Carousel (Sophisticated Monochrome Tri-tone) */}
        <EditorialQuotes />

        {/* 5. Editorial Story Section ("The Standard of Academic Rigor") */}
        <EditorialStory
          onOpenEditorial={() => setIsEditorialOpen(true)}
          onOpenGuidelines={handleOpenGuidelines}
        />

        {/* 6. Research Dossier / Case File Spotlight (Monochrome archival style) */}
        <DossierSpotlight
          onSelectArticle={(art) => setSelectedArticle(art)}
          onOpenSubmit={() => setIsSubmitOpen(true)}
        />

        {/* 7. Peer Review Pathway Chronicle & Timeline */}
        <div id="review-pathway">
          <ReviewPathway
            onOpenSubmit={() => setIsSubmitOpen(true)}
            onOpenGuidelines={() => handleOpenGuidelines('ethics')}
          />
        </div>

        {/* 8. Current Issue & Archive Grid */}
        <ArchiveGrid
          onSelectArticle={(art) => setSelectedArticle(art)}
          onOpenSubmit={() => setIsSubmitOpen(true)}
        />

        {/* 9. Membership, Awards & Open Access Fund */}
        <MembershipAndAwards
          onOpenDonation={() => handleOpenMembership()}
        />
      </main>

      {/* 10. Academic Publisher Comprehensive Footer */}
      <Footer
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onOpenGuidelines={() => handleOpenGuidelines('guidelines')}
        onOpenEditorial={() => setIsEditorialOpen(true)}
        onOpenReview={handleOpenReview}
        onOpenMembership={handleOpenMembership}
        onOpenAwards={handleOpenMembership}
        onOpenDonation={handleOpenMembership}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <SubmitModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
      />

      <AuthModal
        isOpen={authModal.open}
        initialMode={authModal.mode}
        initialType={authModal.type}
        onClose={() => setAuthModal({ ...authModal, open: false })}
      />

      <GuidelinesModal
        isOpen={guidelinesModal.open}
        initialTab={guidelinesModal.tab}
        onClose={() => setGuidelinesModal({ ...guidelinesModal, open: false })}
      />

      <EditorialModal
        isOpen={isEditorialOpen}
        onClose={() => setIsEditorialOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenSubmit={() => { setSelectedArticle(null); setIsSubmitOpen(true); }}
      />

    </div>
  );
}
