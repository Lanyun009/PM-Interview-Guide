// SignalDetector.tsx — PM War Room Design System
// Maps company type/stage to likely question focus

import { motion } from "framer-motion";
import { Zap, ArrowRight, TrendingUp, Building2, ShoppingBag, Briefcase, Smartphone, Cpu } from "lucide-react";
import { companySignals, questionCategories, type CompanySignal } from "@/lib/data";
import GlossaryLink from "@/components/GlossaryLink";

const companyIcons: Record<string, React.ReactNode> = {
  "early-startup": <TrendingUp size={18} />,
  "growth-startup": <TrendingUp size={18} />,
  "big-tech": <Building2 size={18} />,
  "marketplace": <ShoppingBag size={18} />,
  "b2b-saas": <Briefcase size={18} />,
  "consumer-app": <Smartphone size={18} />,
  "hardware": <Cpu size={18} />,
};

const colorStyles: Record<string, { bg: string; border: string; badge: string; text: string; glow: string }> = {
  emerald: {
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/25 hover:border-emerald-500/50",
    badge: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/10",
  },
  blue: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/25 hover:border-blue-500/50",
    badge: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/10",
  },
  violet: {
    bg: "bg-violet-500/8",
    border: "border-violet-500/25 hover:border-violet-500/50",
    badge: "bg-violet-500/15 text-violet-400 border border-violet-500/30",
    text: "text-violet-400",
    glow: "shadow-violet-500/10",
  },
  amber: {
    bg: "bg-amber-500/8",
    border: "border-amber-500/25 hover:border-amber-500/50",
    badge: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    text: "text-amber-400",
    glow: "shadow-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/8",
    border: "border-rose-500/25 hover:border-rose-500/50",
    badge: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
    text: "text-rose-400",
    glow: "shadow-rose-500/10",
  },
  cyan: {
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/25 hover:border-cyan-500/50",
    badge: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/10",
  },
};

function SignalCard({ signal, index }: { signal: CompanySignal; index: number }) {
  const styles = colorStyles[signal.color] || colorStyles.blue;
  const likelyCats = questionCategories.filter((c) =>
    signal.likelyFocus.some((f) => f.toLowerCase().includes(c.label.toLowerCase().split(" ")[0]))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
      className={`
        framework-card rounded-xl border p-5
        ${styles.bg} ${styles.border}
        shadow-lg ${styles.glow}
      `}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${styles.badge}`}>
          {companyIcons[signal.type]}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground text-sm leading-tight">{signal.label}</h3>
          <span className={`text-[10px] font-mono uppercase tracking-wider ${styles.text}`}>
            {signal.stage} · {signal.stageLabel}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{signal.description}</p>

      {/* Examples */}
      <div className="mb-4">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5">Examples</div>
        <div className="flex flex-wrap gap-1.5">
          {signal.examples.map((ex) => (
            <span key={ex} className="text-[10px] bg-muted/40 text-muted-foreground px-2 py-0.5 rounded font-mono">
              {ex}
            </span>
          ))}
        </div>
      </div>

      {/* Likely Focus */}
      <div className="mb-3">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5">Likely Question Focus</div>
        <div className="flex flex-wrap gap-1.5">
          {signal.likelyFocus.map((focus) => (
            <span key={focus} className={`cat-badge ${styles.badge}`}>
              {focus}
            </span>
          ))}
        </div>
      </div>

      {/* Least Likely */}
      <div className="pt-3 border-t border-border/50">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">Least Likely</div>
        <div className="text-xs text-muted-foreground/70">{signal.leastLikely.join(", ")}</div>
      </div>
    </motion.div>
  );
}

export default function SignalDetector({ searchQuery, onNavigateToGlossary }: { searchQuery: string; onNavigateToGlossary?: (termId: string) => void }) {
  const gl = onNavigateToGlossary ?? (() => {});
  const filtered = companySignals.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.label.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.likelyFocus.some((f) => f.toLowerCase().includes(q)) ||
      s.examples.some((e) => e.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={18} className="text-primary" />
          <span className="text-[11px] font-mono text-primary uppercase tracking-widest">Section 1</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Company Problem Decoder</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Read the company context — predict the question focus before the interview even starts.
          Match the company type to the most likely question category you'll face.
        </p>
      </div>

      {/* Quick Signal Decode Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5"
      >
        <div className="text-[11px] font-mono text-primary uppercase tracking-widest mb-3">⚡ Quick Signal → Question Decode</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { signal: "New / Small Company", decode: "Product Design or Growth/Acquisition — think 0→1", color: "text-emerald-400" },
            { signal: "Existing Product, Scaling", decode: "Retention, Engagement, or Metrics — think what's breaking at scale", color: "text-blue-400" },
            { signal: "Big Tech, Mature Product", decode: "Improvement, Monetization, or Ecosystem — think depth, not breadth", color: "text-violet-400" },
            { signal: '"Design for [group]"', decode: "Inclusive/Accessibility Design — lead with the constraint", color: "text-amber-400" },
          ].map((item) => (
            <div key={item.signal} className="flex items-start gap-2">
              <ArrowRight size={12} className={`mt-0.5 flex-shrink-0 ${item.color}`} />
              <div>
                <span className="text-xs font-semibold text-foreground">{item.signal}</span>
                <span className="text-xs text-muted-foreground"> → {item.decode}</span>
              </div>
            </div>
          ))}
          {/* Glossary term quick links */}
          <div className="col-span-full pt-2 border-t border-border/30 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Key metrics:</span>
            {["DAU","MAU","Retention Rate","Churn Rate","LTV","CAC","GMV","NPS","MRR","ARR"].map((t) => (
              <GlossaryLink key={t} term={t} onNavigate={gl} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Company Cards Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <Zap size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No signals match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((signal, i) => (
            <SignalCard key={signal.type} signal={signal} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
