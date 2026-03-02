// UniversalFramework.tsx — PM War Room Design System
// 7-step universal answer structure + strategic objectives + common mistakes

import { motion } from "framer-motion";
import { BookOpen, AlertTriangle, CheckCircle2, Target } from "lucide-react";
import { universalFramework } from "@/lib/data";

const objectiveColors: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/25" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/25" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/25" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/25" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/25" },
};

export default function UniversalFramework({ searchQuery }: { searchQuery: string }) {
  const filteredSteps = universalFramework.steps.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
  });

  const filteredMistakes = universalFramework.commonMistakes.filter((m) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return m.mistake.toLowerCase().includes(q) || m.fix.toLowerCase().includes(q);
  });

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen size={18} className="text-primary" />
          <span className="text-[11px] font-mono text-primary uppercase tracking-widest">Section 6</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Universal Answer Framework</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          A 7-step structure that works for any product sense question — adapt the depth of each step
          to the question type. This is your fallback when you're unsure which path to take.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 7-Step Framework */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card/40 overflow-hidden">
            <div className="px-5 py-4 border-b border-border bg-muted/20">
              <div className="flex items-center gap-2">
                <Target size={14} className="text-primary" />
                <span className="text-xs font-bold text-foreground">The 7-Step Universal Structure</span>
              </div>
            </div>
            <div className="p-5 space-y-4">
              {(searchQuery ? filteredSteps : universalFramework.steps).map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 relative"
                >
                  {i < universalFramework.steps.length - 1 && (
                    <div
                      className="absolute left-[13px] top-7 bottom-[-8px] w-[2px]"
                      style={{ background: "linear-gradient(to bottom, oklch(0.60 0.22 270 / 0.35), transparent)" }}
                    />
                  )}
                  <div className="step-circle flex-shrink-0 bg-primary/15 text-primary border border-primary/30 font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="text-sm font-bold text-foreground mb-1">{step.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{step.description}</div>
                  </div>
                </motion.div>
              ))}
              {searchQuery && filteredSteps.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No steps match your search.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Objectives + Mistakes */}
        <div className="space-y-5">
          {/* Strategic Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card/40 overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border bg-muted/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-primary" />
                <span className="text-xs font-bold text-foreground">Strategic Objective Anchor</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                Pick one to anchor your answer
              </p>
            </div>
            <div className="p-4 space-y-2">
              {universalFramework.strategicObjectives.map((obj) => {
                const styles = objectiveColors[obj.color] || objectiveColors.blue;
                return (
                  <div
                    key={obj.label}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 ${styles.bg} ${styles.border}`}
                  >
                    <span className={`text-xs font-semibold ${styles.text}`}>{obj.label}</span>
                    <span className="text-[10px] text-muted-foreground font-mono text-right max-w-[120px] leading-tight">
                      {obj.metric}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Common Mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border bg-card/40 overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border bg-muted/20">
              <div className="flex items-center gap-2">
                <AlertTriangle size={13} className="text-amber-400" />
                <span className="text-xs font-bold text-foreground">Common Mistakes to Avoid</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {(searchQuery ? filteredMistakes : universalFramework.commonMistakes).map((item) => (
                <div key={item.mistake} className="flex items-start justify-between gap-2 py-1.5 border-b border-border/30 last:border-0">
                  <div>
                    <div className="text-xs text-rose-400 font-medium">{item.mistake}</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">→ {item.fix}</div>
                  </div>
                </div>
              ))}
              {searchQuery && filteredMistakes.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-2">No mistakes match your search.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
