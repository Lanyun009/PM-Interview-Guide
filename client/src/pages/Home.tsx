// Home.tsx — PM War Room Design System
// Main page: sidebar + hero + section content with search and keyboard shortcuts
// Supports deep-linking from Question Bank → Solution Paths via highlightPathId

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Sidebar, { type SectionId } from "@/components/Sidebar";
import SignalDetector from "@/components/sections/SignalDetector";
import QuestionCategories from "@/components/sections/QuestionCategories";
import CompanyMatrix from "@/components/sections/CompanyMatrix";
import SolutionPaths, { FRAMEWORK_HINT_TO_PATH_ID } from "@/components/sections/SolutionPaths";
import DomainReference from "@/components/sections/DomainReference";
import UniversalFramework from "@/components/sections/UniversalFramework";
import QuestionBank from "@/components/sections/QuestionBank";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663351598461/6wyqUKbV9QdyQXzBURssR3/hero-bg-7C8xskdCPo2j9ELra32P2r.webp";

const sectionMeta: Record<SectionId, { title: string; subtitle: string }> = {
  signal: { title: "Signal Detector", subtitle: "Read company context → predict question focus" },
  categories: { title: "Question Categories", subtitle: "6 types with signal words, examples & frameworks" },
  matrix: { title: "Company × Question Matrix", subtitle: "Map company type to most likely questions" },
  paths: { title: "Solution Paths", subtitle: "6 ready-to-use structured answer paths" },
  domains: { title: "Domain Reference", subtitle: "9 domains with metrics & typical focus areas" },
  universal: { title: "Universal Framework", subtitle: "7-step structure for any question type" },
  "question-bank": { title: "Sample Questions", subtitle: "200 most recent real interview questions" },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("signal");
  const [searchQuery, setSearchQuery] = useState("");
  const [showHero, setShowHero] = useState(true);
  // highlightPathId: when set, SolutionPaths will scroll to and highlight that card
  const [highlightPathId, setHighlightPathId] = useState<number | undefined>(undefined);

  // Navigate to Solution Paths and highlight a specific path card
  const navigateToPath = useCallback((frameworkHint: string) => {
    const pathId = FRAMEWORK_HINT_TO_PATH_ID[frameworkHint];
    if (!pathId) return;
    setHighlightPathId(pathId);
    setActiveSection("paths");
    setShowHero(false);
    setSearchQuery("");
  }, []);

  // Clear highlight when user manually switches away from paths
  useEffect(() => {
    if (activeSection !== "paths") {
      setHighlightPathId(undefined);
    }
  }, [activeSection]);

  // Keyboard shortcuts: 1–7 for sections
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    const sectionMap: Record<string, SectionId> = {
      "1": "signal",
      "2": "categories",
      "3": "matrix",
      "4": "paths",
      "5": "domains",
      "6": "universal",
      "7": "question-bank",
    };
    if (sectionMap[e.key]) {
      setActiveSection(sectionMap[e.key]);
      setShowHero(false);
    }
    if (e.key === "Escape") setSearchQuery("");
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSectionChange = (section: SectionId) => {
    setActiveSection(section);
    setShowHero(false);
    setSearchQuery("");
    if (section !== "paths") setHighlightPathId(undefined);
  };

  const meta = sectionMeta[activeSection];

  // Render the active section with the right props
  const renderActiveSection = () => {
    const commonProps = { searchQuery };
    switch (activeSection) {
      case "signal":       return <SignalDetector {...commonProps} />;
      case "categories":   return <QuestionCategories {...commonProps} />;
      case "matrix":       return <CompanyMatrix {...commonProps} />;
      case "paths":        return <SolutionPaths {...commonProps} highlightPathId={highlightPathId} />;
      case "domains":      return <DomainReference {...commonProps} />;
      case "universal":    return <UniversalFramework {...commonProps} />;
      case "question-bank": return <QuestionBank {...commonProps} onNavigateToPath={navigateToPath} />;
      default:             return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 min-h-screen flex flex-col">
        {/* Hero Section */}
        <AnimatePresence>
          {showHero && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden"
              style={{
                backgroundImage: `url(${HERO_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/75" />
              <div className="hero-glow absolute inset-0" />

              <div className="relative z-10 px-8 py-16 lg:py-20 max-w-3xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-3 py-1 mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-mono text-primary uppercase tracking-widest">PM Interview Reference</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
                >
                  Product Interview<br />
                  <span className="text-primary">Case Study Framework</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed"
                >
                  In a product interview, the instinct is to jump straight into an answer. Resist it.
                  The first 30 seconds should be spent detecting the question type, reading the company
                  context, and selecting the right framework path. A product sense question at a Series A
                  startup calls for a completely different structure than the same question at Google.
                  This reference maps that signal-to-solution logic — so you walk in knowing exactly
                  which path to take before the interviewer finishes the sentence.
                </motion.p>

                {/* Flow diagram */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 flex-wrap mb-8"
                >
                  {["Company Signal", "Question Type", "Solution Path", "Win the Interview"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                        i === 0 ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" :
                        i === 1 ? "bg-blue-500/15 text-blue-400 border-blue-500/30" :
                        i === 2 ? "bg-violet-500/15 text-violet-400 border-violet-500/30" :
                        "bg-primary/15 text-primary border-primary/30"
                      }`}>
                        {step}
                      </span>
                      {i < 3 && <ArrowRight size={12} className="text-muted-foreground flex-shrink-0" />}
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  <button
                    onClick={() => handleSectionChange("signal")}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Start with Signal Detector
                    <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={() => handleSectionChange("categories")}
                    className="flex items-center gap-2 bg-card border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted/50 transition-colors"
                  >
                    Browse Question Types
                  </button>
                </motion.div>

                {/* Keyboard hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 flex items-center gap-2 text-[11px] text-muted-foreground"
                >
                  <Search size={11} />
                  <span>Use the search bar or press</span>
                  {["1", "2", "3", "4", "5", "6"].map((k) => (
                    <kbd key={k} className="px-1.5 py-0.5 bg-muted/50 border border-border rounded text-[10px] font-mono">{k}</kbd>
                  ))}
                  <span>to jump to sections</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Content */}
        <div className="flex-1 px-6 lg:px-8 py-8">
          {/* Section breadcrumb (when not on hero) */}
          {!showHero && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <button
                onClick={() => setShowHero(true)}
                className="hover:text-foreground transition-colors"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-foreground font-medium">{meta.title}</span>
              {searchQuery && (
                <>
                  <span>/</span>
                  <span className="text-primary">Search: "{searchQuery}"</span>
                </>
              )}
              {activeSection === "paths" && highlightPathId && (
                <>
                  <span>/</span>
                  <span className="text-emerald-400 font-mono text-[11px]">↳ Path {highlightPathId} highlighted</span>
                </>
              )}
            </motion.div>
          )}

          {/* If hero is showing, show section overview cards */}
          {showHero ? (
            <div className="mt-2">
              <h2 className="text-sm font-bold text-foreground mb-4 font-mono uppercase tracking-wider text-muted-foreground">
                All Sections
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(Object.entries(sectionMeta) as [SectionId, typeof sectionMeta[SectionId]][]).map(([id, meta], i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.07 }}
                    onClick={() => handleSectionChange(id)}
                    className="text-left rounded-xl border border-border bg-card/40 hover:bg-card/80 hover:border-primary/30 p-4 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="font-bold text-foreground text-sm mb-1">{meta.title}</div>
                    <div className="text-xs text-muted-foreground">{meta.subtitle}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-border px-8 py-4 mt-auto">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono">
            <span>Product Interview Case Study Reference</span>
            <span className="text-primary/60">Signal → Category → Path</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
