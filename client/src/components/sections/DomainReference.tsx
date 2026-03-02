// DomainReference.tsx — PM War Room Design System
// 9 domains with typical focus, key metrics, and company examples

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { domainCards } from "@/lib/data";

const colorStyles: Record<string, {
  bg: string; border: string; badge: string; text: string; metricBg: string;
}> = {
  blue: {
    bg: "bg-blue-500/6",
    border: "border-blue-500/20 hover:border-blue-500/45",
    badge: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    text: "text-blue-400",
    metricBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  amber: {
    bg: "bg-amber-500/6",
    border: "border-amber-500/20 hover:border-amber-500/45",
    badge: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
    text: "text-amber-400",
    metricBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
  rose: {
    bg: "bg-rose-500/6",
    border: "border-rose-500/20 hover:border-rose-500/45",
    badge: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
    text: "text-rose-400",
    metricBg: "bg-rose-500/10 text-rose-300 border-rose-500/20",
  },
  violet: {
    bg: "bg-violet-500/6",
    border: "border-violet-500/20 hover:border-violet-500/45",
    badge: "bg-violet-500/15 text-violet-400 border border-violet-500/30",
    text: "text-violet-400",
    metricBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/6",
    border: "border-cyan-500/20 hover:border-cyan-500/45",
    badge: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
    text: "text-cyan-400",
    metricBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/6",
    border: "border-emerald-500/20 hover:border-emerald-500/45",
    badge: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    text: "text-emerald-400",
    metricBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
};

export default function DomainReference({ searchQuery }: { searchQuery: string }) {
  const filtered = domainCards.filter((d) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      d.domain.toLowerCase().includes(q) ||
      d.companies.some((c) => c.toLowerCase().includes(q)) ||
      d.typicalFocus.some((f) => f.toLowerCase().includes(q)) ||
      d.keyMetrics.some((m) => m.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Globe size={18} className="text-primary" />
          <span className="text-[11px] font-mono text-primary uppercase tracking-widest">Section 5</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Domain Reference Guide</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Know the domain-specific context, key metrics, and typical question focus before you walk in.
          Each domain has its own vocabulary — speak it fluently.
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <Globe size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No domains match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((domain, i) => {
            const styles = colorStyles[domain.color] || colorStyles.blue;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`framework-card rounded-xl border ${styles.bg} ${styles.border} p-5`}
              >
                {/* Domain Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-2xl">{domain.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground text-sm leading-tight">{domain.domain}</h3>
                    <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                      {domain.companies.join(" · ")}
                    </div>
                  </div>
                </div>

                {/* Typical Focus */}
                <div className="mb-4">
                  <div className={`text-[10px] font-mono uppercase tracking-wider mb-2 ${styles.text}`}>
                    Typical Focus
                  </div>
                  <div className="space-y-1">
                    {domain.typicalFocus.map((focus) => (
                      <div key={focus} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "currentColor" }} />
                        <span className="text-xs text-muted-foreground leading-relaxed">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div>
                  <div className={`text-[10px] font-mono uppercase tracking-wider mb-2 ${styles.text}`}>
                    Key Metrics
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.keyMetrics.map((metric) => (
                      <span
                        key={metric}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${styles.metricBg}`}
                      >
                        {metric}
                      </span>
                    ))}
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
