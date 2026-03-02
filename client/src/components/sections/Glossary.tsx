// Glossary.tsx — PM Glossary Section (Section 8)
// Design: PM War Room — dark navy, indigo accent, Space Grotesk + JetBrains Mono
// Layout: Left alphabetical index + category chips, right scrollable term cards

import { useState, useMemo, useRef, useEffect } from "react";
import { Search, BookOpen, ChevronDown, ChevronUp, Hash, ArrowRight } from "lucide-react";
import { glossary, GLOSSARY_CATEGORIES, CATEGORY_COLORS, type GlossaryCategory, type GlossaryTerm } from "@/lib/glossary";

interface GlossaryProps {
  searchQuery: string;
  highlightTermId?: string;
}

function CategoryBadge({ category }: { category: GlossaryCategory }) {
  const color = CATEGORY_COLORS[category];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider"
      style={{ backgroundColor: `${color}22`, color, border: `1px solid ${color}44` }}
    >
      {category}
    </span>
  );
}

function TermCard({ term }: { term: GlossaryTerm }) {
  const [expanded, setExpanded] = useState(false);
  const color = CATEGORY_COLORS[term.category];

  return (
    <div
      id={`term-${term.id}`}
      className="rounded-lg border border-border bg-card transition-all duration-200 hover:border-primary/30 overflow-hidden"
      style={{ borderLeftWidth: "3px", borderLeftColor: color }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full text-left px-5 py-4 flex items-start gap-4 group"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <span className="font-mono font-bold text-lg text-foreground tracking-tight">{term.term}</span>
            <CategoryBadge category={term.category} />
          </div>
          <p className="text-xs text-muted-foreground font-mono">{term.fullName}</p>
        </div>
        <div className="shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Preview — definition first line always shown */}
      <div className="px-5 pb-3">
        <p className={`text-sm text-muted-foreground leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
          {term.definition}
        </p>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
          {term.formula && (
            <div>
              <p className="text-[11px] font-mono text-primary/70 uppercase tracking-widest mb-1.5">Formula</p>
              <div className="bg-background/60 border border-border rounded px-3 py-2">
                <code className="text-sm font-mono text-amber-400">{term.formula}</code>
              </div>
            </div>
          )}

          {term.example && (
            <div>
              <p className="text-[11px] font-mono text-primary/70 uppercase tracking-widest mb-1.5">Example</p>
              <p className="text-sm text-muted-foreground leading-relaxed bg-background/40 border border-border rounded px-3 py-2 italic">
                {term.example}
              </p>
            </div>
          )}

          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <div>
              <p className="text-[11px] font-mono text-primary/70 uppercase tracking-widest mb-1.5">Related Terms</p>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((rt) => (
                  <button
                    key={rt}
                    onClick={(e) => {
                      e.stopPropagation();
                      const related = glossary.find((t) => t.term === rt || t.fullName.includes(rt));
                      if (related) {
                        const el = document.getElementById(`term-${related.id}`);
                        el?.scrollIntoView({ behavior: "smooth", block: "center" });
                        el?.classList.add("ring-2", "ring-primary");
                        setTimeout(() => el?.classList.remove("ring-2", "ring-primary"), 2000);
                      }
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-primary border border-primary/30 hover:bg-primary/10 transition-colors"
                  >
                    <ArrowRight size={10} />
                    {rt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {term.usedIn && term.usedIn.length > 0 && (
            <div>
              <p className="text-[11px] font-mono text-primary/70 uppercase tracking-widest mb-1.5">Comes Up In</p>
              <div className="flex flex-wrap gap-2">
                {term.usedIn.map((u) => (
                  <span key={u} className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-muted text-muted-foreground border border-border">
                    {u}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Glossary({ searchQuery, highlightTermId }: GlossaryProps) {
  // Scroll to and highlight the term when navigated from another section
  useEffect(() => {
    if (!highlightTermId) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(`term-${highlightTermId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-primary", "ring-offset-1", "ring-offset-background");
        setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-1", "ring-offset-background"), 2500);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [highlightTermId]);
  const [localSearch, setLocalSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory | "All">("All");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const effectiveSearch = searchQuery || localSearch;

  const filtered = useMemo(() => {
    let result = glossary;

    if (selectedCategory !== "All") {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (selectedLetter) {
      result = result.filter((t) => t.term[0].toUpperCase() === selectedLetter);
    }

    if (effectiveSearch.trim()) {
      const q = effectiveSearch.toLowerCase();
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.fullName.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          (t.formula?.toLowerCase().includes(q) ?? false)
      );
    }

    return result.sort((a, b) => a.term.localeCompare(b.term));
  }, [selectedCategory, selectedLetter, effectiveSearch]);

  // All letters present in the full glossary
  const availableLetters = useMemo(() => {
    return Array.from(new Set(glossary.map((t) => t.term[0].toUpperCase()))).sort();
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: glossary.length };
    GLOSSARY_CATEGORIES.forEach((cat) => {
      counts[cat] = glossary.filter((t) => t.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-3">
          <Hash size={12} />
          <span>Section 8</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Product Management Glossary</h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          <span className="text-foreground font-semibold">{glossary.length} essential terms</span> spanning metrics, frameworks, experimentation, and business concepts. Every term includes a definition, formula, real-world example, and related terms.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Terms", value: glossary.length, color: "#6366f1" },
          { label: "Categories", value: GLOSSARY_CATEGORIES.length, color: "#10b981" },
          { label: "With Formulas", value: glossary.filter((t) => t.formula).length, color: "#f59e0b" },
          { label: "Showing", value: filtered.length, color: "#ec4899" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card px-4 py-3 text-center">
            <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={searchRef}
          type="text"
          placeholder="Search terms, definitions, formulas..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 font-mono transition-all"
        />
      </div>

      {/* Alphabetical index */}
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => setSelectedLetter(null)}
          className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-colors ${
            selectedLetter === null
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground border border-border"
          }`}
        >
          ALL
        </button>
        {availableLetters.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
            className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-colors ${
              selectedLetter === letter
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold transition-all border ${
            selectedCategory === "All"
              ? "bg-primary/20 text-primary border-primary/50"
              : "bg-muted text-muted-foreground border-border hover:border-primary/30"
          }`}
        >
          All ({categoryCounts["All"]})
        </button>
        {GLOSSARY_CATEGORIES.map((cat) => {
          const color = CATEGORY_COLORS[cat];
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(isActive ? "All" : cat)}
              className="px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold transition-all border"
              style={
                isActive
                  ? { backgroundColor: `${color}22`, color, borderColor: `${color}66` }
                  : { backgroundColor: "transparent", color: "var(--muted-foreground)", borderColor: "var(--border)" }
              }
            >
              {cat} ({categoryCounts[cat]})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p className="text-[11px] font-mono text-muted-foreground">
        Showing <span className="text-foreground font-semibold">{filtered.length}</span> of {glossary.length} terms
        {selectedCategory !== "All" && ` in "${selectedCategory}"`}
        {selectedLetter && ` starting with "${selectedLetter}"`}
        {effectiveSearch && ` matching "${effectiveSearch}"`}
      </p>

      {/* Term cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm font-mono">No terms match your search.</p>
          <button
            onClick={() => { setLocalSearch(""); setSelectedCategory("All"); setSelectedLetter(null); }}
            className="mt-3 text-xs text-primary hover:underline font-mono"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>
      )}
    </section>
  );
}
