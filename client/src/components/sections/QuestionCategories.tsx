// QuestionCategories.tsx — PM War Room Design System
// 6 question categories with signal words, examples, and step-by-step frameworks

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ChevronDown, ChevronUp, Lightbulb } from "lucide-react";
import { questionCategories, type QuestionCategory } from "@/lib/data";
import GlossaryLink from "@/components/GlossaryLink";

const colorMap: Record<string, {
  bg: string; border: string; badge: string; text: string;
  stepBg: string; stepText: string; headerBg: string;
}> = {
  emerald: {
    bg: "bg-emerald-500/6",
    border: "border-emerald-500/20 hover:border-emerald-500/45",
    badge: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    text: "text-emerald-400",
    stepBg: "bg-emerald-500/15 border-emerald-500/30",
    stepText: "text-emerald-300",
    headerBg: "bg-emerald-500/10",
  },
  blue: {
    bg: "bg-blue-500/6",
    border: "border-blue-500/20 hover:border-blue-500/45",
    badge: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    text: "text-blue-400",
    stepBg: "bg-blue-500/15 border-blue-500/30",
    stepText: "text-blue-300",
    headerBg: "bg-blue-500/10",
  },
  violet: {
    bg: "bg-violet-500/6",
    border: "border-violet-500/20 hover:border-violet-500/45",
    badge: "bg-violet-500/15 text-violet-400 border border-violet-500/30",
    text: "text-violet-400",
    stepBg: "bg-violet-500/15 border-violet-500/30",
    stepText: "text-violet-300",
    headerBg: "bg-violet-500/10",
  },
  amber: {
    bg: "bg-amber-500/6",
    border: "border-amber-500/20 hover:border-amber-500/45",
    badge: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    text: "text-amber-400",
    stepBg: "bg-amber-500/15 border-amber-500/30",
    stepText: "text-amber-300",
    headerBg: "bg-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/6",
    border: "border-rose-500/20 hover:border-rose-500/45",
    badge: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
    text: "text-rose-400",
    stepBg: "bg-rose-500/15 border-rose-500/30",
    stepText: "text-rose-300",
    headerBg: "bg-rose-500/10",
  },
  cyan: {
    bg: "bg-cyan-500/6",
    border: "border-cyan-500/20 hover:border-cyan-500/45",
    badge: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
    text: "text-cyan-400",
    stepBg: "bg-cyan-500/15 border-cyan-500/30",
    stepText: "text-cyan-300",
    headerBg: "bg-cyan-500/10",
  },
};

function CategoryCard({ cat, index, searchQuery }: { cat: QuestionCategory; index: number; searchQuery: string }) {
  const [expanded, setExpanded] = useState(false);
  const styles = colorMap[cat.color] || colorMap.blue;

  const highlight = (text: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
      className={`framework-card rounded-xl border ${styles.bg} ${styles.border} overflow-hidden`}
    >
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className={`px-5 py-4 ${styles.headerBg} border-b border-border/40`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`step-circle ${styles.stepBg} border ${styles.stepText} text-sm font-bold`}>
                {cat.id}
              </div>
              <div>
                <div className={`text-[10px] font-mono uppercase tracking-widest ${styles.text} mb-0.5`}>
                  Category {cat.id}
                </div>
                <h3 className="font-bold text-foreground text-base leading-tight">{cat.label}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`hidden sm:block text-xs italic text-muted-foreground`}>{cat.tagline}</span>
              {expanded ? (
                <ChevronUp size={16} className={styles.text} />
              ) : (
                <ChevronDown size={16} className="text-muted-foreground" />
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Always-visible content */}
      <div className="px-5 py-4">
        {/* Signal Words */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Signal Words</div>
          <div className="flex flex-wrap gap-1.5">
            {cat.signalWords.map((sw) => (
              <span key={sw} className={`cat-badge ${styles.badge}`}>
                {highlight(sw)}
              </span>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">Real Examples</div>
          <div className="flex flex-wrap gap-1.5">
            {cat.examples.map((ex) => (
              <span key={ex} className="text-[11px] bg-muted/30 text-muted-foreground px-2 py-1 rounded border border-border/50">
                {highlight(ex)}
              </span>
            ))}
          </div>
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`text-xs font-medium ${styles.text} hover:opacity-80 flex items-center gap-1 transition-opacity`}
        >
          {expanded ? "Hide" : "Show"} solution framework
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
      </div>

      {/* Expandable Framework */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-border/40 pt-4">
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-3">
                Solution Framework
              </div>

              {/* Steps Timeline */}
              <div className="space-y-3">
                {cat.framework.map((step, i) => (
                  <div key={step.step} className="flex gap-3 relative">
                    {i < cat.framework.length - 1 && (
                      <div className="timeline-connector" style={{ borderLeft: `2px solid ${cat.colorHex}25` }} />
                    )}
                    <div
                      className={`step-circle flex-shrink-0 border ${styles.stepBg} ${styles.stepText}`}
                      style={{ borderColor: `${cat.colorHex}40` }}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1 min-w-0 pb-1">
                      <div className="text-xs font-semibold text-foreground mb-0.5">{step.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Lens */}
              {cat.specialLens && (
                <div className={`mt-4 rounded-lg border p-3 ${styles.stepBg}`} style={{ borderColor: `${cat.colorHex}30` }}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Lightbulb size={12} className={styles.text} />
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${styles.text}`}>
                      {cat.specialLens.title}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {cat.specialLens.points.map((pt) => (
                      <li key={pt} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 inline-block`} style={{ background: cat.colorHex }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function QuestionCategories({ searchQuery, onNavigateToGlossary }: { searchQuery: string; onNavigateToGlossary?: (termId: string) => void }) {
  const filtered = questionCategories.filter((cat) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      cat.label.toLowerCase().includes(q) ||
      cat.tagline.toLowerCase().includes(q) ||
      cat.signalWords.some((sw) => sw.toLowerCase().includes(q)) ||
      cat.examples.some((ex) => ex.toLowerCase().includes(q)) ||
      cat.framework.some((f) => f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <LayoutGrid size={18} className="text-primary" />
          <span className="text-[11px] font-mono text-primary uppercase tracking-widest">Section 2</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Question Category Playbook</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Six core question types — each with signal words to detect them, real interview examples,
          and a structured step-by-step framework to answer them. Click any card to expand the full solution path.
        </p>
        {onNavigateToGlossary && (
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Key metrics by type:</span>
            {["DAU","MAU","Retention Rate","Churn Rate","CAC","LTV","NPS","GMV","AARRR","A/B Test","North Star Metric"].map((t) => (
              <GlossaryLink key={t} term={t} onNavigate={onNavigateToGlossary} />
            ))}
          </div>
        )}
      </div>

      {/* Category Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {questionCategories.map((cat) => {
          const styles = colorMap[cat.color];
          return (
            <span key={cat.id} className={`cat-badge ${styles.badge}`}>
              {cat.id}: {cat.label}
            </span>
          );
        })}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <LayoutGrid size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No categories match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} searchQuery={searchQuery} />
          ))}
        </div>
      )}
    </div>
  );
}
