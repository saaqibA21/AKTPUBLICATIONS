// Mock data for AKT PUBLICATIONS
export const journalMeta = {
  name: "AKT PUBLICATIONS",
  tagline: "International Journal of Advanced Scientific & Academic Research",
  eISSN: "2984-7125",
  pISSN: "2984-7117",
  frequency: "Quarterly (4 Issues / Year)",
  doiPrefix: "10.5824/akt",
  metrics: {
    citeScore: "4.8",
    citeScoreSource: "Scopus 2025",
    impactFactor: "3.65",
    impactFactorSource: "Clarivate JCR",
    citationIndicator: "1.42",
    jciSource: "Clarivate JCI",
    acceptanceRate: "21.4%",
    submissionToFirstDecision: "49 days",
    submissionToAcceptance: "158 days",
    acceptanceToPublication: "33 days",
  }
};

export const editorialQuotes = [
  {
    id: 1,
    bgColor: "bg-akt-red text-white",
    iconColor: "text-red-200",
    quote: "Our mission is to dismantle barriers to scientific discovery while preserving uncompromising double-blind peer review standards.",
    author: "Prof. Dr. Arthur Vance",
    role: "Editor-in-Chief",
    institution: "AKT Institute of Scientific Governance",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    bgColor: "bg-white text-akt-dark border border-stone-200",
    iconColor: "text-akt-red",
    quote: "A publication's true legacy is measured by the replicability of its papers and the ethical courage of its editorial board.",
    author: "Dr. Elena Rostova",
    role: "Chair of Editorial Advisory Board",
    institution: "International Consortium for Open Science",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    bgColor: "bg-akt-dark text-white",
    iconColor: "text-stone-400",
    quote: "We believe rapid dissemination must never compromise rigorous scrutiny. Our 49-day median decision rate reflects editorial efficiency, not haste.",
    author: "Prof. Tariq Al-Mansoor",
    role: "Senior Section Editor, AI & Bio-informatics",
    institution: "Centre for Advanced Computational Biology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  }
];

export const editorialBoardMembers = [
  {
    name: "Prof. Dr. Arthur Vance",
    role: "Editor-in-Chief",
    field: "Molecular Genetics & Cellular Biology",
    affil: "Max Planck Institute / AKT Research Chair",
    country: "Germany",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chair, Editorial Advisory Board",
    field: "Quantum Materials & Nanotechnology",
    affil: "ETH Zürich",
    country: "Switzerland",
  },
  {
    name: "Prof. Tariq Al-Mansoor",
    role: "Section Editor",
    field: "Artificial Intelligence & Computational Models",
    affil: "Imperial College London",
    country: "United Kingdom",
  },
  {
    name: "Dr. Maya Chen-Nakamura",
    role: "Associate Editor",
    field: "Global Health Economics & Epidemiology",
    affil: "Kyoto University",
    country: "Japan",
  },
  {
    name: "Prof. Samuel O. Adeleke",
    role: "Advisory Board Member",
    field: "Renewable Energy & Environmental Policy",
    affil: "University of Cape Town",
    country: "South Africa",
  },
  {
    name: "Dr. Sofia Rodriguez",
    role: "Section Editor",
    field: "Data Privacy & Digital Ethics",
    affil: "University of Barcelona",
    country: "Spain",
  }
];

export const currentArticles = [
  {
    id: "art-101",
    title: "Optimized CRISPR-Cas9 Base Editing for Targeted Oncogenic Suppressor Restoration",
    category: "Biotechnology & Medicine",
    authors: "K. Rahman, L. Zhao, E. Vance, S. Al-Mansoor",
    doi: "10.5824/akt.2026.12.04.101",
    date: "24 Oct 2026",
    pages: "128–142",
    openAccess: true,
    featured: true,
    views: "18,420",
    downloads: "4,290",
    citations: "38",
    abstract: "Targeted genetic restoration represents a cornerstone in precision oncology. In this work, we demonstrate a engineered high-fidelity Cas9 variant demonstrating 99.4% on-target editing efficiency in multi-lineage tumor suppressors with minimal off-target translocations.",
    pdfUrl: "#"
  },
  {
    id: "art-102",
    title: "Autonomous Swarm Optimization in Multi-Agent Neural Architectures for Micro-Grid Balancing",
    category: "Computer Science & AI",
    authors: "A. Kowalski, P. Sharma, D. Miller",
    doi: "10.5824/akt.2026.12.04.102",
    date: "19 Oct 2026",
    pages: "143–158",
    openAccess: true,
    featured: false,
    views: "12,190",
    downloads: "2,840",
    citations: "19",
    abstract: "Distributed renewable energy nodes require decentralized control algorithms. We introduce a bio-inspired multi-agent coordination protocol operating under stochastic intermittency with sub-second convergence.",
    pdfUrl: "#"
  },
  {
    id: "art-103",
    title: "High-Entropy Perovskite Catalysts for Direct Seawater Electrolysis Under Ambient Temperatures",
    category: "Materials Science & Chemistry",
    authors: "M. Tanaka, J. H. Park, H. Weber",
    doi: "10.5824/akt.2026.12.04.103",
    date: "14 Oct 2026",
    pages: "159–174",
    openAccess: true,
    featured: false,
    views: "9,640",
    downloads: "1,980",
    citations: "27",
    abstract: "Corrosion-resistant anode materials are critical for scalable zero-carbon green hydrogen production. This paper synthesizes a five-element quinary perovskite oxide demonstrating over 3,000 hours of continuous seawater stability.",
    pdfUrl: "#"
  },
  {
    id: "art-104",
    title: "Algorithmic Transparency and Constitutional Rights in Automated Judicial Screening Systems",
    category: "Law & Social Policy",
    authors: "C. Sterling, N. O'Connor",
    doi: "10.5824/akt.2026.12.04.104",
    date: "08 Oct 2026",
    pages: "175–191",
    openAccess: true,
    featured: false,
    views: "14,530",
    downloads: "3,110",
    citations: "14",
    abstract: "The integration of predictive machine learning within judicial preliminary assessment poses profound questions of due process, statistical fairness, and right to human explanation.",
    pdfUrl: "#"
  }
];

export const reviewStages = [
  {
    step: "01",
    title: "Initial Editorial Screening",
    timeline: "Within 3 Days",
    desc: "Rigorous desk review by Editor-in-Chief for scope adherence, novelty, and Turnitin/CrossCheck similarity audit (< 12%).",
    badge: "Plagiarism & Scope Audit"
  },
  {
    step: "02",
    title: "Double-Blind Referee Assignment",
    timeline: "Days 4 – 7",
    desc: "Assignment of minimum two independent domain experts under strict conflict-of-interest declarations.",
    badge: "Blind Peer Review"
  },
  {
    step: "03",
    title: "First Editorial Decision",
    timeline: "Median 49 Days",
    desc: "Comprehensive evaluation synthesis: Accept, Minor Revision, Major Revision, or Reject with detailed referee commentary.",
    badge: "Median: 49 Days"
  },
  {
    step: "04",
    title: "Revision & Final Acceptance",
    timeline: "Median 158 Days",
    desc: "Author rebuttals verified by original referees and Section Editor before formal letter of acceptance is issued.",
    badge: "Acceptance: 21.4%"
  },
  {
    step: "05",
    title: "Production & Online Publication",
    timeline: "Median 33 Days",
    desc: "Typesetting, XML tagging, DOI assignment, CrossRef registration, and permanent indexing into open repositories.",
    badge: "e-ISSN & DOI Live"
  }
];

export const membershipTiers = [
  {
    type: "Annual Membership",
    period: "12 Months",
    fee: "$180 / Year",
    highlight: "Ideal for active post-doctoral researchers and faculty.",
    benefits: [
      "25% Article Processing Charge (APC) waiver on all accepted manuscripts",
      "Priority fast-track preliminary editorial review",
      "Free access to full AKT Archive of historical monographs",
      "Annual Certificate of Academic Fellowship",
      "Invitation to AKT Annual Global Research Symposium"
    ],
    popular: false
  },
  {
    type: "Life Membership",
    period: "Lifetime Tenure",
    fee: "$950 One-time",
    highlight: "Prestigious recognition for senior academics, professors, and department heads.",
    benefits: [
      "50% APC waiver for lifetime submissions as corresponding author",
      "Eligibility for Editorial Advisory Board nomination",
      "Direct voting rights for AKT Best Paper & Science Awards",
      "Exclusive hardbound commemorative Annual Proceedings",
      "Institutional delegation pass to all AKT international summits",
      "Personalized Academic Scholar Page on AKT portal"
    ],
    popular: true
  }
];

export const awardsList = [
  {
    title: "AKT Outstanding Paper of the Year Award",
    prize: "$5,000 Research Grant & Commemorative Medallion",
    criteria: "Awarded to the most groundbreaking empirical or theoretical contribution published in AKT within the preceding calendar year.",
    deadline: "Nominations close 30 November annually."
  },
  {
    title: "Young Scientist & Early Career Laureate",
    prize: "$3,000 Grant & Full Open Access Waiver for 3 Papers",
    criteria: "Recognizing researchers under 36 years of age demonstrating exceptional originality and social impact in scientific inquiry.",
    deadline: "Annual review by Editorial Advisory Board."
  },
  {
    title: "Distinguished Referee Excellence Award",
    prize: "Honorary Fellowship & Editorial Recognition Badge",
    criteria: "Honoring reviewers who provide extraordinary thoroughness, constructive feedback, and punctual evaluations throughout the review cycle.",
    deadline: "Conferred bi-annually."
  }
];
