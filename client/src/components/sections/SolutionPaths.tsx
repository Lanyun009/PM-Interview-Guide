// SolutionPaths.tsx — PM War Room Design System
// 6 ready-to-use answer paths with step-by-step guidance and pro tips
// Each card has a stable anchor ID: solution-path-{id} for deep-linking from Question Bank

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GitBranch, Lightbulb } from "lucide-react";
import { solutionPaths, questionCategories, categoryColorMap, categoryHexMap, type CategoryId } from "@/lib/data";
import GlossaryLink from "@/components/GlossaryLink";

const pathColors = [
  { bg: "bg-emerald-500/8", border: "border-emerald-500/25 hover:border-emerald-500/50", accent: "#10b981", stepBg: "bg-emerald-500/15", stepText: "text-emerald-300", tipBg: "bg-emerald-500/10 border-emerald-500/25" },
  { bg: "bg-blue-500/8", border: "border-blue-500/25 hover:border-blue-500/50", accent: "#3b82f6", stepBg: "bg-blue-500/15", stepText: "text-blue-300", tipBg: "bg-blue-500/10 border-blue-500/25" },
  { bg: "bg-rose-500/8", border: "border-rose-500/25 hover:border-rose-500/50", accent: "#f43f5e", stepBg: "bg-rose-500/15", stepText: "text-rose-300", tipBg: "bg-rose-500/10 border-rose-500/25" },
  { bg: "bg-amber-500/8", border: "border-amber-500/25 hover:border-amber-500/50", accent: "#f59e0b", stepBg: "bg-amber-500/15", stepText: "text-amber-300", tipBg: "bg-amber-500/10 border-amber-500/25" },
  { bg: "bg-violet-500/8", border: "border-violet-500/25 hover:border-violet-500/50", accent: "#8b5cf6", stepBg: "bg-violet-500/15", stepText: "text-violet-300", tipBg: "bg-violet-500/10 border-violet-500/25" },
  { bg: "bg-cyan-500/8", border: "border-cyan-500/25 hover:border-cyan-500/50", accent: "#06b6d4", stepBg: "bg-cyan-500/15", stepText: "text-cyan-300", tipBg: "bg-cyan-500/10 border-cyan-500/25" },
];

const catColorStyles: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30" },
  blue: { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/30" },
  violet: { bg: "bg-violet-500/15", text: "text-violet-400", border: "border-violet-500/30" },
  amber: { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/30" },
  rose: { bg: "bg-rose-500/15", text: "text-rose-400", border: "border-rose-500/30" },
  cyan: { bg: "bg-cyan-500/15", text: "text-cyan-400", border: "border-cyan-500/30" },
};

// Slug map: frameworkHint string → path id
export const FRAMEWORK_HINT_TO_PATH_ID: Record<string, number> = {
  "0→1 Design Path": 1,
  "Improve Existing Product Path": 2,
  "Growth Path": 3,
  "Metric Diagnosis Path": 4,
  "Accessibility Design Path": 5,
  "Strategy Path": 6,
};

export default function SolutionPaths({ searchQuery, highlightPathId, onNavigateToGlossary }: { searchQuery: string; highlightPathId?: number; onNavigateToGlossary?: (termId: string) => void }) {
  const highlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (highlightPathId && highlightRef.current) {
      // Small delay to let the section render before scrolling
      const timer = setTimeout(() => {
        highlightRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [highlightPathId]);
  const filtered = solutionPaths.filter((path) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      path.title.toLowerCase().includes(q) ||
      path.trigger.toLowerCase().includes(q) ||
      path.steps.some((s) => s.title.toLowerCase().includes(q) || s.question.toLowerCase().includes(q)) ||
      path.proTip.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <GitBranch size={18} className="text-primary" />
          <span className="text-[11px] font-mono text-primary uppercase tracking-widest">Section 4</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Structured Solution Paths</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Six ready-to-use answer paths — each mapped to a question type with step-by-step guidance,
          the key question to answer at each step, and a pro tip to elevate your response.
        </p>
        {onNavigateToGlossary && (
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Key metrics in paths:</span>
            {["DAU","MAU","Retention Rate","Churn Rate","LTV","CAC","NPS","A/B Test","North Star Metric","PMF","AARRR"].map((t) => (
              <GlossaryLink key={t} term={t} onNavigate={onNavigateToGlossary} />
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <GitBranch size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No solution paths match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filtered.map((path, i) => {
            const colors = pathColors[(path.id - 1) % pathColors.length];
            return (
              <motion.div
                key={path.id}
                id={`solution-path-${path.id}`}
                ref={highlightPathId === path.id ? highlightRef : null}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`framework-card rounded-xl border ${colors.bg} ${colors.border} overflow-hidden transition-all duration-500 ${
                  highlightPathId === path.id ? "ring-2 ring-offset-1 ring-offset-background" : ""
                }`}
                style={highlightPathId === path.id ? { boxShadow: `0 0 0 2px ${colors.accent}` } : {}}
              >
                {/* Header */}
                <div className="px-5 py-4 border-b border-border/40">
                  <div className="flex items-start gap-3">
                    <div
                      className={`step-circle flex-shrink-0 ${colors.stepBg} ${colors.stepText} border`}
                      style={{ borderColor: `${colors.accent}40`, fontSize: "0.9rem" }}
                    >
                      {path.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-base mb-1">{path.title}</h3>
                      <p className="text-[11px] text-muted-foreground italic">{path.trigger}</p>
                    </div>
                  </div>

                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {path.categories.map((catId) => {
                      const cat = questionCategories.find((c) => c.id === catId);
                      if (!cat) return null;
                      const color = categoryColorMap[catId as CategoryId];
                      const styles = catColorStyles[color];
                      return (
                        <span key={catId} className={`cat-badge border ${styles.bg} ${styles.text} ${styles.border}`}>
                          {catId}: {cat.label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Steps */}
                <div className="px-5 py-4">
                  <div className="space-y-4">
                    {path.steps.map((step, si) => (
                      <div key={step.step} className="flex gap-3 relative">
                        {si < path.steps.length - 1 && (
                          <div
                            className="absolute left-[13px] top-7 bottom-[-8px] w-[2px]"
                            style={{ background: `linear-gradient(to bottom, ${colors.accent}35, transparent)` }}
                          />
                        )}
                        <div
                          className={`step-circle flex-shrink-0 ${colors.stepBg} ${colors.stepText} border`}
                          style={{ borderColor: `${colors.accent}35` }}
                        >
                          {step.step}
                        </div>
                        <div className="flex-1 min-w-0 pb-1">
                          <div className="text-xs font-semibold text-foreground mb-0.5">{step.title}</div>
                          <div className="text-xs text-muted-foreground leading-relaxed italic">{step.question}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pro Tip */}
                  <div className={`mt-4 rounded-lg border p-3 ${colors.tipBg}`}>
                    <div className="flex items-start gap-2">
                      <Lightbulb size={12} className="mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: colors.accent }}>
                          Pro Tip
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{path.proTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
