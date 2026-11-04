// Mock data for AKT PUBLICATIONS - Clean, clear, jargon-free
export const journalMeta = {
  name: "AKT PUBLICATIONS",
  tagline: "International Peer-Reviewed Open Access Journal",
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
    bgColor: "bg-white text-stone-900 border border-stone-200 shadow-sm",
    iconColor: "text-[#C2410C]",
    quote: "Our goal is simple: make high-quality research easy to submit, fairly reviewed, and free for anyone in the world to read.",
    author: "Prof. Dr. Arthur Vance",
    role: "Editor-in-Chief",
    institution: "Max Planck Institute",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    bgColor: "bg-white text-stone-900 border border-stone-200 shadow-sm",
    iconColor: "text-[#C2410C]",
    quote: "Great research should be open and accessible. We judge every submission on clear evidence, strong methods, and real-world value.",
    author: "Dr. Elena Rostova",
    role: "Chair of Editorial Board",
    institution: "ETH Zürich",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    bgColor: "bg-white text-stone-900 border border-stone-200 shadow-sm",
    iconColor: "text-[#C2410C]",
    quote: "Authors deserve clear, helpful feedback without months of waiting. Fast review should always mean thorough, thoughtful review.",
    author: "Prof. Tariq Al-Mansoor",
    role: "Senior Section Editor",
    institution: "Imperial College London",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  }
];

export const editorialBoardMembers = [
  {
    name: "Prof. Dr. Arthur Vance",
    role: "Editor-in-Chief",
    field: "Biology & Health Sciences",
    affil: "Max Planck Institute",
    country: "Germany",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chair, Editorial Advisory Board",
    field: "Materials & Physics",
    affil: "ETH Zürich",
    country: "Switzerland",
  },
  {
    name: "Prof. Tariq Al-Mansoor",
    role: "Section Editor",
    field: "Computer Science & AI",
    affil: "Imperial College London",
    country: "United Kingdom",
  },
  {
    name: "Dr. Maya Chen-Nakamura",
    role: "Associate Editor",
    field: "Public Health & Medicine",
    affil: "Kyoto University",
    country: "Japan",
  },
  {
    name: "Prof. Samuel O. Adeleke",
    role: "Advisory Board Member",
    field: "Renewable Energy & Environment",
    affil: "University of Cape Town",
    country: "South Africa",
  },
  {
    name: "Dr. Sofia Rodriguez",
    role: "Section Editor",
    field: "Digital Policy & Ethics",
    affil: "University of Barcelona",
    country: "Spain",
  }
];

export const currentArticles = [
  {
    id: "art-101",
    title: "New Approaches in Gene Editing for Precision Cancer Treatment",
    category: "Medicine & Health",
    authors: "K. Rahman, L. Zhao, E. Vance, S. Al-Mansoor",
    doi: "10.5824/akt.2026.12.04.101",
    date: "24 Oct 2026",
    pages: "128–142",
    openAccess: true,
    featured: true,
    views: "18,420",
    downloads: "4,290",
    citations: "38",
    abstract: "This study evaluates new gene editing techniques that target specific cancer cells with higher accuracy, helping preserve healthy tissue and improve treatment outcomes.",
    pdfUrl: "#"
  },
  {
    id: "art-102",
    title: "Using Artificial Intelligence to Balance Renewable Energy Grids",
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
    abstract: "A practical study on using machine learning algorithms to manage solar and wind energy fluctuations in modern local power systems.",
    pdfUrl: "#"
  },
  {
    id: "art-103",
    title: "New Catalyst Materials for Clean Hydrogen Production",
    category: "Materials & Chemistry",
    authors: "M. Tanaka, J. H. Park, H. Weber",
    doi: "10.5824/akt.2026.12.04.103",
    date: "14 Oct 2026",
    pages: "159–174",
    openAccess: true,
    featured: false,
    views: "9,640",
    downloads: "1,980",
    citations: "27",
    abstract: "A study introducing durable new electrode materials that can produce clean hydrogen from seawater without rapid degradation.",
    pdfUrl: "#"
  },
  {
    id: "art-104",
    title: "Fairness and Transparency in Automated Legal Decisions",
    category: "Law & Society",
    authors: "C. Sterling, N. O'Connor",
    doi: "10.5824/akt.2026.12.04.104",
    date: "08 Oct 2026",
    pages: "175–191",
    openAccess: true,
    featured: false,
    views: "14,530",
    downloads: "3,110",
    citations: "14",
    abstract: "An analysis of how automated algorithms are used in court systems, exploring fairness, accountability, and the right to clear explanations.",
    pdfUrl: "#"
  }
];

export const reviewStages = [
  {
    step: "01",
    title: "Initial Check",
    timeline: "Within 3 Days",
    desc: "Editors review the paper to ensure it fits the journal, meets basic formatting standards, and is original work.",
    badge: "Format & Originality Check"
  },
  {
    step: "02",
    title: "Expert Peer Review",
    timeline: "Days 4 – 7",
    desc: "The manuscript is shared with independent subject experts who review the research without seeing author names.",
    badge: "Anonymous Peer Review"
  },
  {
    step: "03",
    title: "Feedback & Decision",
    timeline: "Average 49 Days",
    desc: "Authors receive detailed, constructive feedback and an editorial decision (Accept, Revise, or Decline).",
    badge: "Average: 49 Days"
  },
  {
    step: "04",
    title: "Revisions & Final Approval",
    timeline: "Average 158 Days",
    desc: "Authors update their paper based on reviewer comments, and editors verify the final improved version.",
    badge: "Acceptance: 21.4%"
  },
  {
    step: "05",
    title: "Online Publication",
    timeline: "Average 33 Days",
    desc: "The accepted paper is typeset, given a permanent link (DOI), and published online for everyone to read for free.",
    badge: "Free Online Access"
  }
];

export const membershipTiers = [
  {
    type: "Annual Membership",
    period: "12 Months",
    fee: "$180 / Year",
    highlight: "Great for active researchers, university faculty, and postdocs.",
    benefits: [
      "25% discount on publishing charges for accepted papers",
      "Priority customer support and submission status tracking",
      "Full access to the AKT complete research library",
      "Annual Certificate of Membership",
      "Invitations to our annual academic events and webinars"
    ],
    popular: false
  },
  {
    type: "Life Membership",
    period: "Lifetime",
    fee: "$950 One-time",
    highlight: "Long-term partnership for professors, department leaders, and senior scholars.",
    benefits: [
      "50% lifetime discount on publishing charges",
      "Eligible for Editorial Board nomination",
      "Voting rights for our Annual Best Paper Awards",
      "Complimentary printed annual edition",
      "VIP access to international conferences",
      "Dedicated author profile page on the AKT website"
    ],
    popular: true
  }
];

export const awardsList = [
  {
    title: "Best Paper of the Year",
    prize: "$5,000 Research Grant & Award Certificate",
    criteria: "Recognizes the most impactful and insightful research paper published in AKT during the past year.",
    deadline: "Nominations close November 30 each year."
  },
  {
    title: "Young Researcher Award",
    prize: "$3,000 Grant & Free Publishing for 3 Papers",
    criteria: "Celebrates early-career scientists and researchers who publish outstanding, innovative work.",
    deadline: "Selected annually by our Editorial Board."
  },
  {
    title: "Reviewer Excellence Award",
    prize: "Certificate of Appreciation & Free Annual Membership",
    criteria: "Honors peer reviewers who consistently provide constructive, timely, and thorough feedback to authors.",
    deadline: "Awarded twice a year."
  }
];
