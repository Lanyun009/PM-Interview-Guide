// CompanyMatrix.tsx — PM War Room Design System
// Lookup table: company type → most/least likely question categories

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { matrixRows, questionCategories, categoryColorMap, type CategoryId } from "@/lib/data";

const stageColors: Record<string, string> = {
  "0→1": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "1→N": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Mature": "bg-violet-500/15 text-violet-400 border-violet-500/30",
  "Two-Sided": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Enterprise": "bg-rose-500/15 text-rose-400 border-rose-500/30",
  "Consumer": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "Specialized": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

const catColorStyles: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30" },
  blue: { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500/15", text: "text-violet-400", border: "border-violet-500/30" },
  amber: { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/30" },
  rose: { bg: "bg-rose-500/15", text: "text-rose-400", border: "border-rose-500/30" },
  cyan: { bg: "bg-cyan-500/15", text: "text-cyan-400", border: "border-cyan-500/30" },
};

// Real company quick reference
const companyQuickRef = [
  { company: "Meta / Facebook", type: "Big Tech", expect: ["B", "D", "F"], note: "Feed ranking, engagement metrics, ads monetization" },
  { company: "Google", type: "Big Tech", expect: ["B", "D", "C"], note: "Product improvement, metrics diagnosis, ecosystem strategy" },
  { company: "Uber / Lyft", type: "Marketplace", expect: ["E", "C", "A"], note: "Supply/demand growth, pricing strategy, driver experience" },
  { company: "Airbnb", type: "Marketplace", expect: ["B", "E", "C"], note: "Host/guest experience, trust, supply growth" },
  { company: "Spotify", type: "Consumer App", expect: ["B", "F", "E"], note: "Product improvement, monetization, engagement" },
  { company: "Duolingo", type: "Consumer App", expect: ["E", "B", "D"], note: "DAU growth, habit formation, streak mechanics" },
  { company: "Slack / Notion", type: "B2B SaaS", expect: ["B", "D", "E"], note: "Activation, retention, enterprise features" },
  { company: "Stripe / Robinhood", type: "Fintech", expect: ["A", "C", "F"], note: "Trust, activation, monetization without friction" },
  { company: "Early-stage startup", type: "Early Startup", expect: ["A", "E", "C"], note: "0→1 design, go-to-market, PMF validation" },
];

export default function CompanyMatrix({ searchQuery }: { searchQuery: string }) {
  const filteredRows = matrixRows.filter((row) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      row.companyLabel.toLowerCase().includes(q) ||
      row.stage.toLowerCase().includes(q) ||
      row.keyFocus.toLowerCase().includes(q) ||
      row.leastLikely.toLowerCase().includes(q)
    );
  });

  const filteredRef = companyQuickRef.filter((ref) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      ref.company.toLowerCase().includes(q) ||
      ref.type.toLowerCase().includes(q) ||
      ref.note.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 size={18} className="text-primary" />
          <span className="text-[11px] font-mono text-primary uppercase tracking-widest">Section 3</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Company × Question Likelihood Matrix</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Map the company type to the most likely question categories you'll face — and what to prepare most.
          Use this as your pre-interview checklist.
        </p>
      </div>

      {/* Category Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {questionCategories.map((cat) => {
          const color = categoryColorMap[cat.id];
          const styles = catColorStyles[color];
          return (
            <span key={cat.id} className={`cat-badge border ${styles.bg} ${styles.text} ${styles.border}`}>
              {cat.id}: {cat.label}
            </span>
          );
        })}
      </div>

      {/* Main Matrix Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl border border-border overflow-hidden mb-8"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-4 py-3 font-mono text-muted-foreground uppercase tracking-wider text-[10px] w-36">Company Type</th>
                <th className="text-left px-4 py-3 font-mono text-muted-foreground uppercase tracking-wider text-[10px] w-24">Stage</th>
                <th className="text-left px-4 py-3 font-mono text-muted-foreground uppercase tracking-wider text-[10px]">Most Likely Questions</th>
                <th className="text-left px-4 py-3 font-mono text-muted-foreground uppercase tracking-wider text-[10px] hidden md:table-cell">Key Focus</th>
                <th className="text-left px-4 py-3 font-mono text-muted-foreground uppercase tracking-wider text-[10px] hidden lg:table-cell">Least Likely</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, i) => {
                const stageStyle = stageColors[row.stage] || stageColors["Mature"];
                return (
                  <motion.tr
                    key={row.companyType}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-4 py-3 font-semibold text-foreground">{row.companyLabel}</td>
                    <td className="px-4 py-3">
                      <span className={`cat-badge border ${stageStyle}`}>{row.stage}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        {row.mostLikely.map((catId) => {
                          const cat = questionCategories.find((c) => c.id === catId);
                          if (!cat) return null;
                          const color = categoryColorMap[catId as CategoryId];
                          const styles = catColorStyles[color];
                          return (
                            <span
                              key={catId}
                              className={`cat-badge border ${styles.bg} ${styles.text} ${styles.border}`}
                              title={cat.label}
                            >
                              {catId}: {cat.label}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell leading-relaxed">{row.keyFocus}</td>
                    <td className="px-4 py-3 text-muted-foreground/60 hidden lg:table-cell italic">{row.leastLikely}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Real Company Quick Reference */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-foreground mb-1">Real Company Quick Reference</h3>
        <p className="text-xs text-muted-foreground mb-4">
          What to expect when you see a specific company name in the question.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {filteredRef.map((ref, i) => (
            <motion.div
              key={ref.company}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border bg-card/50 p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="font-semibold text-foreground text-sm">{ref.company}</div>
                <span className="text-[10px] font-mono text-muted-foreground bg-muted/40 px-1.5 py-0.5 rounded flex-shrink-0">
                  {ref.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {ref.expect.map((catId) => {
                  const cat = questionCategories.find((c) => c.id === catId);
                  if (!cat) return null;
                  const color = categoryColorMap[catId as CategoryId];
                  const styles = catColorStyles[color];
                  return (
                    <span key={catId} className={`cat-badge border ${styles.bg} ${styles.text} ${styles.border}`}>
                      {catId}
                    </span>
                  );
                })}
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{ref.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
