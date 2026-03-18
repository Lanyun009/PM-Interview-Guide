// StartHere.tsx — PM War Room Design System
// Context page that connects all 8 sections by mapping common interview struggles
// to the right section, and explains the 3-step workflow

import { motion } from "framer-motion";
import { Zap, LayoutGrid, BarChart3, GitBranch, Globe, BookOpen, Library, BookMarked, ArrowRight, PlayCircle, AlertCircle } from "lucide-react";
import type { SectionId } from "@/components/Sidebar";

interface StartHereProps {
  onNavigateToSection: (section: SectionId) => void;
  onOpenTour?: () => void;
}

const struggles = [
  {
    id: 1,
    problem: "I don't know what type of question this is",
    context: "The interviewer says \"How would you improve Spotify?\" and you freeze — is this a metrics question? A product design question? A strategy question?",
    solution: "Problem Decoder",
    section: "signal" as SectionId,
    icon: <Zap size={16} />,
    color: "emerald",
    why: "The Problem Decoder reads the company stage and question wording and tells you exactly which category you're dealing with in seconds.",
  },
  {
    id: 2,
    problem: "I know the answer but I can't structure it",
    context: "You have ideas, but your answer jumps around. You lose the thread. The interviewer looks confused. You know more than you're showing.",
    solution: "Solution Paths",
    section: "paths" as SectionId,
    icon: <GitBranch size={16} />,
    color: "rose",
    why: "Six pre-built answer paths with numbered steps and transition language. Follow the path and your answer flows naturally — even when you're improvising.",
  },
  {
    id: 3,
    problem: "I get stuck in transitions between sections",
    context: "You finish talking about users, then pause. You don't know how to bridge to solutions. Silence. The interviewer jumps in. You lose momentum.",
    solution: "Question Categories",
    section: "categories" as SectionId,
    icon: <LayoutGrid size={16} />,
    color: "blue",
    why: "Each category card includes signal words AND the exact transition phrases that connect each step — so you always know what comes next.",
  },
  {
    id: 4,
    problem: "I don't know what this company cares about",
    context: "You prepared a generic answer. But Meta cares about engagement depth, not acquisition. Stripe cares about developer experience, not consumer UX. You missed the context.",
    solution: "Company × Question Matrix",
    section: "matrix" as SectionId,
    icon: <BarChart3 size={16} />,
    color: "violet",
    why: "The matrix maps each company to their most likely question type based on their business model and stage — so you can tailor your prep before you walk in.",
  },
  {
    id: 5,
    problem: "I don't understand the domain well enough",
    context: "\"Design a feature for a B2B SaaS product.\" You don't know the typical metrics, the buyer vs. user distinction, or what success looks like in that space.",
    solution: "Domain Reference",
    section: "domains" as SectionId,
    icon: <Globe size={16} />,
    color: "cyan",
    why: "9 domains with typical question focus, key metrics, and example companies. Spend 5 minutes here before any domain-specific interview.",
  },
  {
    id: 6,
    problem: "I don't know which metrics to mention",
    context: "You say \"I'd look at engagement metrics\" and the interviewer asks \"which ones?\" You blank. Or you say DAU when you mean MAU. You lose credibility.",
    solution: "PM Glossary",
    section: "glossary" as SectionId,
    icon: <BookMarked size={16} />,
    color: "orange",
    why: "48 terms with definitions, formulas, and real-world examples. Clickable from every section. Know the vocabulary cold before the interview.",
  },
  {
    id: 7,
    problem: "I can't perform under real interview pressure",
    context: "You practice at home and it sounds great. In the actual interview, the clock ticks, you rush, you skip steps, and you run out of time before landing the answer.",
    solution: "Practice Timer",
    section: "question-bank" as SectionId,
    icon: <Library size={16} />,
    color: "amber",
    why: "The Question Bank has a 20-minute practice timer built into every question card. Real pressure, self-rating, and a coaching prompt when time runs out.",
  },
  {
    id: 8,
    problem: "I don't know which framework to use when I'm unsure",
    context: "You've identified the question type, but you're still not sure which path to take. You need a reliable fallback that works for any question.",
    solution: "Universal Framework",
    section: "universal" as SectionId,
    icon: <BookOpen size={16} />,
    color: "indigo",
    why: "A 7-step structure that works for any question type. Anchor to one strategic objective and walk the steps — you'll always sound structured.",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string; num: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/25", icon: "text-emerald-400", badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", num: "text-emerald-400" },
  rose:    { bg: "bg-rose-500/10",    border: "border-rose-500/25",    icon: "text-rose-400",    badge: "bg-rose-500/15 text-rose-400 border-rose-500/30",       num: "text-rose-400" },
  blue:    { bg: "bg-blue-500/10",    border: "border-blue-500/25",    icon: "text-blue-400",    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",       num: "text-blue-400" },
  violet:  { bg: "bg-violet-500/10",  border: "border-violet-500/25",  icon: "text-violet-400",  badge: "bg-violet-500/15 text-violet-400 border-violet-500/30", num: "text-violet-400" },
  cyan:    { bg: "bg-cyan-500/10",    border: "border-cyan-500/25",    icon: "text-cyan-400",    badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",       num: "text-cyan-400" },
  orange:  { bg: "bg-orange-500/10",  border: "border-orange-500/25",  icon: "text-orange-400",  badge: "bg-orange-500/15 text-orange-400 border-orange-500/30", num: "text-orange-400" },
  amber:   { bg: "bg-amber-500/10",   border: "border-amber-500/25",   icon: "text-amber-400",   badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",    num: "text-amber-400" },
  indigo:  { bg: "bg-indigo-500/10",  border: "border-indigo-500/25",  icon: "text-indigo-400",  badge: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30", num: "text-indigo-400" },
};

const workflow = [
  { step: 1, title: "Read the signal", desc: "Use the Problem Decoder to identify the question type and company context in the first 30 seconds.", section: "signal" as SectionId, color: "emerald" },
  { step: 2, title: "Pick your path", desc: "Match the question type to one of the 6 Solution Paths. Follow the numbered steps to structure your answer.", section: "paths" as SectionId, color: "rose" },
  { step: 3, title: "Anchor with specifics", desc: "Use the Glossary, Domain Reference, and Company Matrix to add precise metrics, domain vocabulary, and company-specific context.", section: "glossary" as SectionId, color: "orange" },
];

export default function StartHere({ onNavigateToSection, onOpenTour }: StartHereProps) {
  return (
    <div className="max-w-4xl">
      {/* Section header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">
          <span>Section 0</span>
          <span className="text-primary">★ Start Here</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">How to Use This Site</h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          This site is built around one insight: <span className="text-foreground font-semibold">every product interview question has a signal</span>.
          Read the signal, pick the right path, and your answer will always be structured — even when you're improvising.
          Below are the 8 most common struggles candidates face, and which section solves each one.
        </p>
        {onOpenTour && (
          <button
            onClick={onOpenTour}
            className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-mono px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <PlayCircle size={13} />
            Take the 60-second guided tour instead
          </button>
        )}
      </div>

      {/* 3-step workflow */}
      <div className="mb-10 p-5 rounded-xl border border-border bg-card/40">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4">The 3-Step Workflow</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workflow.map((w, i) => {
            const c = colorMap[w.color];
            return (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-4 rounded-lg border ${c.border} ${c.bg}`}
              >
                <div className={`text-2xl font-bold font-mono mb-2 ${c.num}`}>{String(w.step).padStart(2, "0")}</div>
                <div className="font-semibold text-foreground text-sm mb-1">{w.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed mb-3">{w.desc}</div>
                <button
                  onClick={() => onNavigateToSection(w.section)}
                  className={`text-[10px] font-mono px-2.5 py-1 rounded border ${c.badge} hover:opacity-80 transition-opacity flex items-center gap-1`}
                >
                  Go to section <ArrowRight size={9} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Struggles → Solutions map */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle size={14} className="text-muted-foreground" />
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Common Struggles → Which Section Solves It</span>
        </div>
        <div className="space-y-3">
          {struggles.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="group flex gap-4 p-4 rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-border/80 transition-all"
              >
                {/* Number */}
                <div className={`flex-shrink-0 w-7 h-7 rounded-full border ${c.border} ${c.bg} flex items-center justify-center`}>
                  <span className={`text-[11px] font-bold font-mono ${c.num}`}>{s.id}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="font-semibold text-foreground text-sm leading-snug">"{s.problem}"</div>
                    <button
                      onClick={() => onNavigateToSection(s.section)}
                      className={`flex-shrink-0 flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded border ${c.badge} hover:opacity-80 transition-opacity whitespace-nowrap`}
                    >
                      <span className={c.icon}>{s.icon}</span>
                      {s.solution} →
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-1.5 italic">"{s.context}"</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    <span className={`font-semibold ${c.num}`}>Why it helps: </span>
                    {s.why}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick nav to all sections */}
      <div className="mt-8 p-5 rounded-xl border border-border bg-card/20">
        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4">Jump to Any Section</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: "signal" as SectionId, label: "Problem Decoder", key: "1" },
            { id: "categories" as SectionId, label: "Question Categories", key: "2" },
            { id: "matrix" as SectionId, label: "Company Matrix", key: "3" },
            { id: "paths" as SectionId, label: "Solution Paths", key: "4" },
            { id: "domains" as SectionId, label: "Domain Reference", key: "5" },
            { id: "universal" as SectionId, label: "Universal Framework", key: "6" },
            { id: "question-bank" as SectionId, label: "Practice Questions", key: "7" },
            { id: "glossary" as SectionId, label: "PM Glossary", key: "8" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateToSection(item.id)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/40 hover:bg-card/80 hover:border-primary/30 transition-all text-left group"
            >
              <kbd className="text-[9px] font-mono bg-muted/50 border border-border px-1.5 py-0.5 rounded text-muted-foreground">{item.key}</kbd>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
