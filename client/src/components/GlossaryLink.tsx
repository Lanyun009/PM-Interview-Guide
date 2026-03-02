// GlossaryLink.tsx — PM War Room Design System
// Renders a clickable inline term that navigates to its definition in Section 8 (PM Glossary)
// Usage: <GlossaryLink term="DAU" onNavigate={fn} /> or wrap text with highlightGlossaryTerms()

import { ExternalLink } from "lucide-react";
import { CATEGORY_COLORS, glossary } from "@/lib/glossary";

// Map every known term string → its glossary ID
export const TERM_TO_ID: Record<string, string> = {
  "DAU":                    "dau",
  "MAU":                    "mau",
  "WAU":                    "wau",
  "DAU/MAU":                "dau-mau",
  "Stickiness":             "dau-mau",
  "Retention Rate":         "retention",
  "Retention":              "retention",
  "D7 Retention":           "retention",
  "D30 Retention":          "retention",
  "Churn Rate":             "churn",
  "Churn":                  "churn",
  "Session Length":         "session-length",
  "Engagement Rate":        "engagement-rate",
  "CTR":                    "ctr",
  "Click-Through Rate":     "ctr",
  "CAC":                    "cac",
  "Customer Acquisition Cost": "cac",
  "LTV":                    "ltv",
  "Lifetime Value":         "ltv",
  "LTV:CAC":                "ltv-cac",
  "K-Factor":               "viral-coefficient",
  "Viral Coefficient":      "viral-coefficient",
  "Conversion Rate":        "conversion-rate",
  "Activation Rate":        "activation-rate",
  "Payback Period":         "payback-period",
  "ARPU":                   "arpu",
  "ARPPU":                  "arppu",
  "MRR":                    "mrr",
  "ARR":                    "arr",
  "NRR":                    "nrr",
  "GMV":                    "gmv",
  "Gross Merchandise Value":"gmv",
  "Take Rate":              "take-rate",
  "Gross Margin":           "gross-margin",
  "Burn Rate":              "burn-rate",
  "NPS":                    "nps",
  "Net Promoter Score":     "nps",
  "CSAT":                   "csat",
  "CES":                    "ces",
  "Bug Rate":               "bug-rate",
  "Crash Rate":             "bug-rate",
  "P99 Latency":            "p99-latency",
  "PMF":                    "pmf",
  "Product-Market Fit":     "pmf",
  "JTBD":                   "jtbd",
  "Jobs To Be Done":        "jtbd",
  "North Star Metric":      "north-star",
  "North Star":             "north-star",
  "AARRR":                  "pirate-metrics",
  "Pirate Metrics":         "pirate-metrics",
  "ICE Score":              "ice",
  "RICE Score":             "rice",
  "MoSCoW":                 "moscow",
  "ICP":                    "icp",
  "Ideal Customer Profile": "icp",
  "MVP":                    "mvp",
  "A/B Test":               "ab-test",
  "A/B Testing":            "ab-test",
  "Statistical Significance": "statistical-significance",
  "Holdout Group":          "holdout",
  "Novelty Effect":         "novelty-effect",
  "Guardrail Metric":       "guardrail-metric",
  "SLA":                    "sla",
  "API":                    "api",
  "Technical Debt":         "technical-debt",
  "Latency":                "latency",
};

interface GlossaryLinkProps {
  term: string;
  onNavigate: (termId: string) => void;
  className?: string;
}

export function GlossaryLink({ term, onNavigate, className = "" }: GlossaryLinkProps) {
  const id = TERM_TO_ID[term];
  if (!id) return <span className={className}>{term}</span>;

  const glossaryTerm = glossary.find((t) => t.id === id);
  const color = glossaryTerm ? CATEGORY_COLORS[glossaryTerm.category] : "#6366f1";

  return (
    <button
      onClick={() => onNavigate(id)}
      title={`View definition: ${glossaryTerm?.fullName ?? term}`}
      className={`inline-flex items-center gap-0.5 font-mono font-semibold text-[0.85em] px-1 py-0.5 rounded transition-all hover:opacity-80 active:scale-95 ${className}`}
      style={{
        color,
        backgroundColor: `${color}18`,
        border: `1px solid ${color}33`,
      }}
    >
      {term}
      <ExternalLink size={9} className="opacity-60" />
    </button>
  );
}

export default GlossaryLink;
