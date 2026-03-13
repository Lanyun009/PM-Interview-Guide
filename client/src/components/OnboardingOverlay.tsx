// OnboardingOverlay.tsx — PM War Room Design System
// Animated 10-slide onboarding tour that introduces all 8 sections
// Plays on first visit (localStorage), can be replayed from sidebar

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Zap, LayoutGrid, BarChart3, GitBranch, Globe, BookOpen, Library, BookMarked, Play, SkipForward, MapPin } from "lucide-react";
import type { SectionId } from "@/components/Sidebar";

interface OnboardingOverlayProps {
  onClose: () => void;
  onNavigateToSection?: (section: SectionId) => void;
}

const ONBOARDING_KEY = "pm-ref-onboarding-seen-v2";

const slides = [
  {
    id: 0,
    icon: null,
    emoji: "👋",
    title: "Welcome to your PM Interview War Room",
    subtitle: "A 60-second tour of 8 sections",
    body: "This site is built for one thing: helping you walk into any product sense, analytical, or strategy interview and know exactly what to do — before the interviewer finishes the sentence. Here's how the 8 sections connect.",
    section: null as SectionId | null,
    color: "primary",
    tip: null as string | null,
  },
  {
    id: 1,
    icon: <MapPin size={18} />,
    emoji: "📍",
    title: "Start Here",
    subtitle: "Section 0 · Context page",
    body: "New to the site? Start Here maps the 8 most common interview struggles to the section that solves each one. It also explains the 3-step workflow that connects all sections.",
    section: "start" as SectionId,
    color: "primary",
    tip: "Struggling with: \"I don't know where to begin\"",
  },
  {
    id: 2,
    icon: <Zap size={18} />,
    emoji: "⚡",
    title: "Signal Detector",
    subtitle: "Section 1 · Start here every time",
    body: "The first thing you do with any interview question is not answer it — it's orient yourself. The Signal Detector reads the company stage and question wording to tell you exactly which question type you're facing.",
    section: "signal" as SectionId,
    color: "emerald",
    tip: "Struggling with: \"I don't know what type of question this is\"",
  },
  {
    id: 3,
    icon: <LayoutGrid size={18} />,
    emoji: "🗂️",
    title: "Question Category Playbook",
    subtitle: "Section 2 · 6 types, each with a framework",
    body: "Six core question types — Product Design, Improvement, Strategy, Metrics, Growth, Monetization. Each card shows signal words that identify it, real interview examples, and a step-by-step answer structure.",
    section: "categories" as SectionId,
    color: "blue",
    tip: "Struggling with: \"I get stuck in transitions between sections\"",
  },
  {
    id: 4,
    icon: <BarChart3 size={18} />,
    emoji: "🏢",
    title: "Company × Question Matrix",
    subtitle: "Section 3 · Know what they'll ask before you walk in",
    body: "Meta, Google, Uber, Stripe, Airbnb — each company has a predictable question focus based on their stage and business model. This matrix tells you what to prepare for and what to deprioritize.",
    section: "matrix" as SectionId,
    color: "violet",
    tip: "Struggling with: \"I don't know what this company cares about\"",
  },
  {
    id: 5,
    icon: <GitBranch size={18} />,
    emoji: "🛤️",
    title: "Solution Paths",
    subtitle: "Section 4 · 6 ready-to-use answer structures",
    body: "Six detailed paths: 0→1 New Product, Improve Existing, Growth, Metric Diagnosis, Accessibility Design, and Strategic Decision. Each path has numbered steps with transition language so your answer flows naturally.",
    section: "paths" as SectionId,
    color: "rose",
    tip: "Struggling with: \"I know the answer but can't structure it\"",
  },
  {
    id: 6,
    icon: <Globe size={18} />,
    emoji: "🌐",
    title: "Domain Reference",
    subtitle: "Section 5 · Speak the domain's language",
    body: "9 domains — Social, Marketplace, Fintech, EdTech, B2B, Transport, Streaming, Health, Accessibility. Each domain shows typical question focus, key metrics, and example companies.",
    section: "domains" as SectionId,
    color: "cyan",
    tip: "Struggling with: \"I don't understand the domain well enough\"",
  },
  {
    id: 7,
    icon: <BookOpen size={18} />,
    emoji: "📐",
    title: "Universal Framework",
    subtitle: "Section 6 · Your fallback for any question",
    body: "A 7-step structure that works when you're unsure which path to take. Anchor to one strategic objective, walk the steps in order, and you'll always sound structured — even when you're improvising.",
    section: "universal" as SectionId,
    color: "indigo",
    tip: "Struggling with: \"I don't know which framework to use\"",
  },
  {
    id: 8,
    icon: <Library size={18} />,
    emoji: "📋",
    title: "Product Sense & Analytical Questions",
    subtitle: "Section 7 · 200 real questions, Sep 2024–Aug 2025",
    body: "The 200 most recent real interview questions from Lewis Lin's community-sourced question bank. Filter by company or type, bookmark your target questions, and use the 20-minute Practice Timer to simulate real interview pressure.",
    section: "question-bank" as SectionId,
    color: "amber",
    tip: "Struggling with: \"I can't perform under real interview pressure\"",
  },
  {
    id: 9,
    icon: <BookMarked size={18} />,
    emoji: "📖",
    title: "PM Glossary",
    subtitle: "Section 8 · 48 terms with formulas and examples",
    body: "DAU, MAU, GMV, NPS, LTV, CAC, AARRR, A/B Test, North Star Metric — every term includes a definition, formula, real-world example, and related terms. Clickable from every section of the site.",
    section: "glossary" as SectionId,
    color: "orange",
    tip: "Struggling with: \"I don't know which metrics to mention\"",
  },
  {
    id: 10,
    icon: null,
    emoji: "🚀",
    title: "You're ready.",
    subtitle: "The workflow in 3 steps",
    body: null,
    section: "signal" as SectionId,
    color: "primary",
    tip: null,
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  primary: { bg: "from-primary/10 to-primary/5",     border: "border-primary/25",     icon: "text-primary",     badge: "bg-primary/15 text-primary border-primary/30" },
  emerald: { bg: "from-emerald-500/10 to-emerald-500/5", border: "border-emerald-500/25", icon: "text-emerald-400", badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
  blue:    { bg: "from-blue-500/10 to-blue-500/5",   border: "border-blue-500/25",   icon: "text-blue-400",   badge: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
  violet:  { bg: "from-violet-500/10 to-violet-500/5", border: "border-violet-500/25", icon: "text-violet-400", badge: "bg-violet-500/15 text-violet-400 border-violet-500/30" },
  rose:    { bg: "from-rose-500/10 to-rose-500/5",   border: "border-rose-500/25",   icon: "text-rose-400",   badge: "bg-rose-500/15 text-rose-400 border-rose-500/30" },
  cyan:    { bg: "from-cyan-500/10 to-cyan-500/5",   border: "border-cyan-500/25",   icon: "text-cyan-400",   badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30" },
  indigo:  { bg: "from-indigo-500/10 to-indigo-500/5", border: "border-indigo-500/25", icon: "text-indigo-400", badge: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30" },
  amber:   { bg: "from-amber-500/10 to-amber-500/5", border: "border-amber-500/25",  icon: "text-amber-400",  badge: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  orange:  { bg: "from-orange-500/10 to-orange-500/5", border: "border-orange-500/25", icon: "text-orange-400", badge: "bg-orange-500/15 text-orange-400 border-orange-500/30" },
};

const finalWorkflow = [
  { step: 1, label: "Read the signal", section: "signal" as SectionId },
  { step: 2, label: "Pick your path", section: "paths" as SectionId },
  { step: 3, label: "Anchor with specifics", section: "glossary" as SectionId },
];

export function useOnboarding() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(ONBOARDING_KEY);
    if (!seen) {
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const open = () => setShow(true);
  const close = () => {
    localStorage.setItem(ONBOARDING_KEY, "true");
    setShow(false);
  };

  return { show, open, close };
}

export default function OnboardingOverlay({ onClose, onNavigateToSection }: OnboardingOverlayProps) {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const styles = colorMap[slide.color] || colorMap.primary;
  const isLast = current === slides.length - 1;
  const isFirst = current === 0;

  const next = useCallback(() => {
    if (!isLast) setCurrent((c) => c + 1);
  }, [isLast]);

  const prev = () => {
    if (!isFirst) setCurrent((c) => c - 1);
  };

  const handleFinish = () => {
    if (onNavigateToSection) onNavigateToSection("signal");
    onClose();
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "oklch(0 0 0 / 0.75)", backdropFilter: "blur(6px)" }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -8 }}
          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg rounded-2xl border bg-card p-7 shadow-2xl"
          style={{ borderColor: "var(--border)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>

          {/* Progress dots */}
          <div className="flex gap-1.5 mb-6 flex-wrap">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : i < current ? "w-3 bg-primary/40" : "w-3 bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Slide content */}
          {slide.id === 10 ? (
            // Final slide — workflow summary
            <div>
              <div className="text-3xl mb-3">{slide.emoji}</div>
              <h2 className="text-xl font-bold text-foreground mb-1">{slide.title}</h2>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-5">{slide.subtitle}</p>
              <div className="space-y-3 mb-6">
                {finalWorkflow.map((w) => (
                  <div key={w.step} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[11px] font-bold text-primary font-mono">{w.step}</span>
                    </div>
                    <span className="text-sm text-foreground font-medium">{w.label}</span>
                    {onNavigateToSection && (
                      <button
                        onClick={() => { onNavigateToSection(w.section); onClose(); }}
                        className="ml-auto text-[10px] font-mono text-primary hover:underline"
                      >
                        Go →
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={handleFinish}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Zap size={14} />
                Start with Signal Detector
              </button>
            </div>
          ) : (
            // Regular slide
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{slide.emoji}</span>
                {slide.icon && (
                  <div className={`p-2 rounded-lg border bg-gradient-to-br ${styles.bg} ${styles.border}`}>
                    <span className={styles.icon}>{slide.icon}</span>
                  </div>
                )}
              </div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
                {slide.subtitle}
              </div>
              <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">{slide.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{slide.body}</p>
              {slide.tip && (
                <div className={`text-[11px] font-mono px-3 py-2 rounded-lg border ${styles.badge} mb-4`}>
                  💡 {slide.tip}
                </div>
              )}
              {slide.section && onNavigateToSection && (
                <button
                  onClick={() => { onNavigateToSection(slide.section!); onClose(); }}
                  className={`text-[11px] font-mono px-3 py-1.5 rounded border ${styles.badge} hover:opacity-80 transition-opacity flex items-center gap-1.5`}
                >
                  Jump to this section <ArrowRight size={10} />
                </button>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <button
              onClick={prev}
              disabled={isFirst}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft size={13} /> Back
            </button>
            <span className="text-[10px] font-mono text-muted-foreground/50">
              {current + 1} / {slides.length}
            </span>
            {isLast ? (
              <button
                onClick={handleFinish}
                className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                <Play size={12} /> Let's go
              </button>
            ) : (
              <button
                onClick={next}
                className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
              >
                Next <ArrowRight size={13} />
              </button>
            )}
          </div>

          {/* Skip hint */}
          {!isLast && (
            <div className="text-center mt-3">
              <button
                onClick={onClose}
                className="text-[10px] text-muted-foreground/40 hover:text-muted-foreground transition-colors flex items-center gap-1 mx-auto"
              >
                <SkipForward size={10} /> Skip tour
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
