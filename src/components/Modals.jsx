import React, { useState } from 'react';
import { 
  X, CheckCircle, Upload, FileText, Download, Building2, User, 
  ShieldCheck, Lock, Mail, ArrowRight, CheckSquare
} from 'lucide-react';
import { editorialBoardMembers, journalMeta } from '../data/journalData';

// 1. Submit Manuscript Modal
export function SubmitModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Biotechnology & Medicine',
    authorName: '',
    email: '',
    affiliation: '',
    orcid: '',
    abstract: '',
    keywords: '',
    file: null,
    ethicsAgreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200">
        
        {/* Header */}
        <div className="bg-black text-white p-6 rounded-t-3xl flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              FAST-TRACK EDITORIAL PORTAL
            </div>
            <h3 className="font-display uppercase text-2xl font-bold tracking-wide">
              Submit Manuscript to AKT Publications
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-neutral-100 text-black rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="bg-neutral-100 text-black px-3 py-1 rounded-full text-xs font-mono font-bold inline-block mb-3 border border-neutral-300">
              MANUSCRIPT REF: AKT-2026-MS-8891
            </div>
            <h4 className="font-display uppercase text-3xl font-black text-neutral-900 mb-2">
              Submission Received Successfully
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
              Your manuscript has entered the automated triage queue. Initial desk screening and similarity audit will be completed within <strong>3 working days</strong>. A confirmation email with live tracking credentials has been dispatched.
            </p>
            <button
              onClick={() => { setSubmitted(false); setStep(1); onClose(); }}
              className="bg-black hover:bg-neutral-800 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              Return to Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 text-xs font-bold">
              <span className={step >= 1 ? 'text-black' : 'text-neutral-400'}>1. Article Scope</span>
              <span className="text-neutral-300">→</span>
              <span className={step >= 2 ? 'text-black' : 'text-neutral-400'}>2. Author Details</span>
              <span className="text-neutral-300">→</span>
              <span className={step >= 3 ? 'text-black' : 'text-neutral-400'}>3. Manuscript File</span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Manuscript Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter complete concise title of the research paper"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Subject Discipline *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none bg-white"
                  >
                    <option>Biotechnology & Medicine</option>
                    <option>Computer Science & AI</option>
                    <option>Materials Science & Chemistry</option>
                    <option>Physics & Quantum Systems</option>
                    <option>Law & Social Policy</option>
                    <option>Environmental & Earth Sciences</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Abstract (200 – 300 words) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    placeholder="State background, methodology, quantitative results, and primary conclusion..."
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.title || !formData.abstract}
                    className="bg-black hover:bg-neutral-800 disabled:opacity-50 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Next: Author Details →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Corresponding Author Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.authorName}
                      onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                      placeholder="e.g. Dr. Arthur Vance"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Institutional Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. author@university.edu"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      University / Institution *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.affiliation}
                      onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                      placeholder="e.g. Department of Genetics, ETH Zürich"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      ORCID iD (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.orcid}
                      onChange={(e) => setFormData({ ...formData, orcid: e.target.value })}
                      placeholder="0000-0002-1825-0097"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-neutral-600 hover:text-black text-xs font-bold uppercase tracking-wider"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.authorName || !formData.email || !formData.affiliation}
                    className="bg-black hover:bg-neutral-800 disabled:opacity-50 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Next: Upload Files →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                {/* File Upload Zone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Upload Anonymized Manuscript (.docx / .pdf / .zip) *
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-6 text-center hover:border-black transition-colors bg-neutral-50 cursor-pointer">
                    <Upload className="w-8 h-8 text-black mx-auto mb-2" />
                    <p className="text-xs font-bold text-neutral-800">
                      Drag & Drop manuscript files here or <span className="text-black underline">browse computer</span>
                    </p>
                    <p className="text-[10px] text-neutral-500 mt-1">
                      Word .docx or PDF format, max 35MB. Ensure author names are redacted for double-blind review.
                    </p>
                  </div>
                </div>

                {/* Declarations */}
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.ethicsAgreed}
                      onChange={(e) => setFormData({ ...formData, ethicsAgreed: e.target.checked })}
                      className="mt-0.5 rounded text-black focus:ring-black"
                    />
                    <span className="text-neutral-700 leading-snug">
                      I confirm that this manuscript represents original work, has not been published elsewhere, and complies with COPE ethical guidelines and AKT Publications conflict-of-interest requirements.
                    </span>
                  </label>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-neutral-600 hover:text-black text-xs font-bold uppercase tracking-wider"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.ethicsAgreed}
                    className="bg-black hover:bg-neutral-800 disabled:opacity-50 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                  >
                    Submit Manuscript Final
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
}

// 2. Auth Modal (Login / Register / Institutional Access)
export function AuthModal({ isOpen, onClose, initialMode = 'login', initialType = 'individual' }) {
  const [mode, setMode] = useState(initialMode);
  const [userType, setUserType] = useState(initialType);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed in successfully as ${userType === 'institutional' ? 'Institutional Member' : 'Individual Researcher'}!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-black text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black px-2.5 py-1 rounded text-xs font-black tracking-widest font-display">
              AKT
            </div>
            <h3 className="font-display uppercase text-xl font-bold">
              {mode === 'login' ? 'Editorial Portal Login' : 'Create Academic Account'}
            </h3>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Type Switcher */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-2 bg-neutral-100 p-1 rounded-2xl mb-6">
            <button
              onClick={() => setUserType('individual')}
              className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                userType === 'individual' ? 'bg-white shadow text-black' : 'text-neutral-600'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Individual</span>
            </button>
            <button
              onClick={() => setUserType('institutional')}
              className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                userType === 'institutional' ? 'bg-white shadow text-black' : 'text-neutral-600'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional</span>
            </button>
          </div>

          {userType === 'institutional' ? (
            <div className="space-y-4">
              <div className="bg-neutral-100 border border-neutral-300 rounded-xl p-3 text-xs text-neutral-800">
                <strong className="text-black block mb-0.5">Single Sign-On (SSO) Enabled</strong>
                Access via your university library credentials (Shibboleth, OpenAthens, or Campus IP subnet).
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Search Your University / Institution
                </label>
                <input
                  type="text"
                  placeholder="e.g. Oxford, Harvard, MIT, Tokyo, Cape Town..."
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <button
                onClick={() => alert("Redirecting to your University SSO Identity Provider...")}
                className="w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Connect via Institution SSO</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="author@university.edu"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                {mode === 'login' ? 'Sign In to Portal' : 'Register Academic Account'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                  className="text-xs font-bold text-neutral-600 hover:text-black underline"
                >
                  {mode === 'login'
                    ? "Don't have an account? Register here"
                    : 'Already registered? Sign in here'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

// 3. Guidelines & Author Resources Modal
export function GuidelinesModal({ isOpen, onClose, initialTab = 'guidelines' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-neutral-200">
        
        {/* Header */}
        <div className="bg-black text-white p-6 sticky top-0 z-10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              EDITORIAL STANDARDS & TEMPLATES
            </div>
            <h3 className="font-display uppercase text-2xl font-bold">
              Author Guidelines & Ethical Protocols
            </h3>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex border-b border-neutral-200 px-6 pt-4 gap-4 text-xs font-bold overflow-x-auto">
          {[
            { id: 'guidelines', label: 'Authors Guidelines' },
            { id: 'ethics', label: 'Ethical Guidelines (COPE)' },
            { id: 'template', label: 'Manuscript Template' },
            { id: 'copyright', label: 'Copyright & License' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-black text-black'
                  : 'border-transparent text-neutral-500 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-xs sm:text-sm text-neutral-700 space-y-4">
          {activeTab === 'guidelines' && (
            <div>
              <h4 className="font-bold text-base text-neutral-900 mb-2">Manuscript Preparation Criteria</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                <li><strong>Title & Abstract:</strong> Title under 20 words; structured abstract 200–300 words without undefined abbreviations.</li>
                <li><strong>Structure:</strong> Standard IMRAD structure: Introduction, Materials & Methods, Results, Discussion, Conclusion.</li>
                <li><strong>Figure Resolution:</strong> High-resolution TIFF or vector EPS at minimum 300 DPI for photographs and 600 DPI for charts.</li>
                <li><strong>References:</strong> Vancouver or APA 7th format with active DOIs for all cited literature.</li>
              </ul>
            </div>
          )}

          {activeTab === 'ethics' && (
            <div>
              <h4 className="font-bold text-base text-neutral-900 mb-2">Publication Ethics & Similarity Standards</h4>
              <p className="mb-3">
                AKT Publications is an active member of COPE (Committee on Publication Ethics). All manuscripts undergo automated CrossCheck / Turnitin similarity audits. Manuscripts exceeding a 12% similarity threshold (or 2% from a single source) are automatically returned to authors.
              </p>
              <div className="bg-neutral-100 p-4 rounded-xl border border-neutral-200">
                <strong className="block text-neutral-900 mb-1">Conflict of Interest Declaration:</strong>
                All sources of funding, commercial relationships, or advisory affiliations must be explicitly declared in the acknowledgements section.
              </div>
            </div>
          )}

          {activeTab === 'template' && (
            <div>
              <h4 className="font-bold text-base text-neutral-900 mb-3">Download Official Formatting Templates</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-neutral-300 p-4 rounded-2xl bg-neutral-50 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">Microsoft Word Template</div>
                    <div className="text-[10px] text-neutral-500 font-mono">AKT_Template_v2026.docx (1.2 MB)</div>
                  </div>
                  <button 
                    onClick={() => alert("Downloading Word Template (.docx)...")}
                    className="p-2.5 bg-black text-white rounded-xl hover:bg-neutral-800"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
                <div className="border border-neutral-300 p-4 rounded-2xl bg-neutral-50 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">LaTeX Overleaf Package</div>
                    <div className="text-[10px] text-neutral-500 font-mono">AKT_LaTeX_Zip_Archive.zip (3.4 MB)</div>
                  </div>
                  <button 
                    onClick={() => alert("Downloading LaTeX Package (.zip)...")}
                    className="p-2.5 bg-neutral-800 text-white rounded-xl hover:bg-black"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'copyright' && (
            <div>
              <h4 className="font-bold text-base text-neutral-900 mb-2">Open Access License (Creative Commons CC-BY 4.0)</h4>
              <p className="mb-3">
                Authors publishing with AKT Publications retain complete copyright over their scholarly work. Articles are distributed under the Creative Commons Attribution 4.0 International License (CC-BY 4.0), permitting unrestricted use, distribution, and reproduction in any medium provided the original work is properly cited.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// 4. Editorial Board Directory Modal
export function EditorialModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-neutral-200">
        <div className="bg-black text-white p-6 sticky top-0 z-10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              GOVERNANCE DIRECTORY
            </div>
            <h3 className="font-display uppercase text-2xl font-bold">
              AKT International Editorial Advisory Board
            </h3>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {editorialBoardMembers.map((member, idx) => (
            <div key={idx} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
              <div className="text-[10px] font-mono font-bold text-black uppercase">
                {member.role}
              </div>
              <h4 className="font-bold text-sm text-neutral-950 mt-0.5">
                {member.name}
              </h4>
              <div className="text-xs text-neutral-700 mt-1 font-medium">
                {member.field}
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                {member.affil} • {member.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. Contact Modal
export function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-neutral-200 overflow-hidden">
        <div className="bg-black text-white p-6 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              EDITORIAL HEADQUARTERS
            </div>
            <h3 className="font-display uppercase text-2xl font-bold">
              Contact AKT Publications
            </h3>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 space-y-2">
            <div>
              <strong className="text-neutral-900 block">Principal Editorial Office:</strong>
              AKT Academic Press & Publishing Group<br />
              14 Science Park Crescent, London, WC1E 6BT, United Kingdom
            </div>
            <div>
              <strong className="text-neutral-900 block">General Editorial Inquiries:</strong>
              <span className="font-mono text-black font-semibold">editorial@aktpublications.org</span>
            </div>
            <div>
              <strong className="text-neutral-900 block">Manuscript Tracking Desk:</strong>
              <span className="font-mono text-neutral-800">submissions@aktpublications.org</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Direct In-Portal Message
            </label>
            <textarea
              rows={3}
              placeholder="Your inquiry or manuscript reference number..."
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <button
            onClick={() => { alert("Inquiry dispatched to Editorial Secretariat. Ticket #AKT-REQ-4029 opened."); onClose(); }}
            className="w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all"
          >
            Send Inquiry to Editors
          </button>
        </div>
      </div>
    </div>
  );
}

// 6. Article Preview Modal
export function ArticleModal({ article, onClose, onOpenSubmit }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-neutral-200">
        <div className="bg-black text-white p-6 sticky top-0 z-10 flex items-center justify-between">
          <span className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            {article.category}
          </span>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <h3 className="font-display uppercase text-2xl sm:text-3xl text-neutral-950 font-black leading-tight">
            {article.title}
          </h3>

          <div className="text-xs font-bold text-neutral-800">
            Authors: {article.authors}
          </div>

          <div className="text-[11px] font-mono text-neutral-500">
            Published: {article.date} • DOI: {article.doi} • Vol. 12, Issue 4
          </div>

          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
            <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
              Abstract
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed italic">
              {article.abstract}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
            <div className="bg-neutral-100 p-2.5 rounded-xl">
              <div className="font-mono font-bold text-neutral-900">{article.views}</div>
              <div className="text-[10px] text-neutral-500 font-semibold">Views</div>
            </div>
            <div className="bg-neutral-100 p-2.5 rounded-xl">
              <div className="font-mono font-bold text-neutral-900">{article.downloads}</div>
              <div className="text-[10px] text-neutral-500 font-semibold">Downloads</div>
            </div>
            <div className="bg-neutral-100 p-2.5 rounded-xl">
              <div className="font-mono font-bold text-black">{article.citations}</div>
              <div className="text-[10px] text-neutral-500 font-semibold">Citations</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
            <button
              onClick={() => alert(`Downloading verified PDF for DOI: ${article.doi}`)}
              className="bg-black hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Full PDF (Open Access)</span>
            </button>
            <button
              onClick={onClose}
              className="text-xs font-bold text-neutral-600 hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
