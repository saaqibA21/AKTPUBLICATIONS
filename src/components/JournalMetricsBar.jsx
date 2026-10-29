import React from 'react';
import { journalMeta } from '../data/journalData';
import { TrendingUp, Award, Clock, FileCheck, CheckCircle2, BarChart2 } from 'lucide-react';

export default function JournalMetricsBar() {
  const { metrics } = journalMeta;

  const items = [
    {
      label: "CiteScore",
      source: "Scopus",
      value: metrics.citeScore,
      icon: TrendingUp,
      color: "text-akt-red",
      desc: "Top 10% in Multi-disciplinary",
    },
    {
      label: "Journal Impact Factor",
      source: "Clarivate (JCR)",
      value: metrics.impactFactor,
      icon: Award,
      color: "text-amber-600",
      desc: "Q1 Ranking Category",
    },
    {
      label: "Journal Citation Indicator",
      source: "Clarivate (JCI)",
      value: metrics.citationIndicator,
      icon: BarChart2,
      color: "text-blue-600",
      desc: "High Citation Field Weight",
    },
    {
      label: "Acceptance Rate",
      source: "Rigorous Peer Review",
      value: metrics.acceptanceRate,
      icon: CheckCircle2,
      color: "text-emerald-600",
      desc: "High Scrutiny Standard",
    },
    {
      label: "Submission to First Decision",
      source: "Median Turnaround",
      value: metrics.submissionToFirstDecision,
      icon: Clock,
      color: "text-akt-red",
      highlight: true,
      desc: "Rapid Initial Screening",
    },
    {
      label: "Submission to Acceptance",
      source: "Median Duration",
      value: metrics.submissionToAcceptance,
      icon: FileCheck,
      color: "text-stone-800",
      desc: "Comprehensive Double-Blind",
    },
    {
      label: "Acceptance to Publication",
      source: "Median Time",
      value: metrics.acceptanceToPublication,
      icon: Clock,
      color: "text-akt-red",
      desc: "Fast DOI & XML Tagging",
    },
  ];

  return (
    <div className="bg-[#EFECE6] border-y border-stone-300 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-akt-red animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-stone-700">
              Verified Journal Indexing & Editorial Turnaround Metrics
            </span>
          </div>
          <span className="text-[11px] text-stone-500 hidden md:inline">
            Official Data Updated for 2025/2026 Reporting Cycle
          </span>
        </div>

        {/* The 7 Metrics Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-lg p-2.5 border transition-all hover:shadow-md hover:border-akt-red/50 ${
                  item.highlight ? 'border-akt-red/40 bg-red-50/30' : 'border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-tight truncate">
                    {item.source}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                </div>
                <div className="text-lg font-black tracking-tight text-stone-900 font-sans">
                  {item.value}
                </div>
                <div className="text-[11px] font-bold text-stone-800 leading-tight mt-0.5">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
