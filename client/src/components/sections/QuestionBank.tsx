// QuestionBank: Lewis Lin's PM Question Bank — Most Recent 200 Questions (Sep 2024–Aug 2025)
// Design: PM War Room — dark navy, indigo accent, semantic type colors, no interview format badges

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Search,
  Filter,
  Building2,
  Tag,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Shuffle,
  X,
  Calendar,
} from "lucide-react";
import {
  questionBank,
  QUESTION_TYPES,
  ALL_COMPANIES,
  TYPE_COLORS,
  type BankQuestion,
  type QuestionType,
} from "@/lib/questionBank";

const SOURCE_URL = "https://docs.google.com/spreadsheets/d/1rz10oEeLx-eGnilahKczYPhGfCUzIEKL-xRnjoQ-SX4";

function QuestionCard({ q, searchQuery }: { q: BankQuestion; searchQuery: string }) {
  const [expanded, setExpanded] = useState(false);
  const color = TYPE_COLORS[q.type] || "#6b7280";

  const highlight = (text: string) => {
    if (!searchQuery.trim()) return <>{text}</>;
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-primary/30 text-foreground rounded px-0.5">{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="framework-card rounded-lg border border-white/8 bg-card p-4 cursor-pointer hover:border-white/15 transition-colors"
      style={{ borderLeftWidth: "3px", borderLeftColor: color }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="cat-badge"
              style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
            >
              {q.type}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
              <Building2 size={10} />
              {q.company}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono ml-auto">
              <Calendar size={10} />
              {q.date}
            </span>
          </div>

          {/* Question text */}
          <p className="text-sm text-foreground leading-relaxed">
            {highlight(q.question)}
          </p>

          {/* Expanded: tags + framework hint */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-3 pt-3 border-t border-white/8"
              >
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {q.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-white/5 text-muted-foreground border border-white/8"
                    >
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>
                {q.frameworkHint && (
                  <p className="text-xs text-muted-foreground">
                    Suggested path:{" "}
                    <span style={{ color }} className="font-semibold">
                      {q.frameworkHint}
                    </span>
                    {" "}— see Solution Paths section.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand toggle */}
        <button className="text-muted-foreground hover:text-foreground transition-colors mt-0.5 flex-shrink-0">
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </motion.div>
  );
}

interface QuestionBankProps {
  searchQuery?: string;
  globalSearch?: string;
}

export default function QuestionBank({ searchQuery: propSearch = "", globalSearch = "" }: QuestionBankProps) {
  const [localSearch, setLocalSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState<BankQuestion | null>(null);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;

  const searchQuery = propSearch || globalSearch || localSearch;

  const filtered = useMemo(() => {
    return questionBank.filter((q) => {
      const matchesSearch =
        !searchQuery.trim() ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(q.type);

      const matchesCompany =
        selectedCompany === "All" || q.company === selectedCompany;

      return matchesSearch && matchesType && matchesCompany;
    });
  }, [searchQuery, selectedTypes, selectedCompany]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  const toggleType = (type: QuestionType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setPage(1);
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedCompany("All");
    setLocalSearch("");
    setPage(1);
  };

  const pickRandom = () => {
    const pool = filtered.length > 0 ? filtered : questionBank;
    setRandomQuestion(pool[Math.floor(Math.random() * pool.length)]);
  };

  const typeBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    filtered.forEach((q) => {
      counts[q.type] = (counts[q.type] || 0) + 1;
    });
    return counts;
  }, [filtered]);

  return (
    <section id="question-bank" className="py-8 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
          <BookOpen size={12} />
          <span>Section 7</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Lewis Lin's PM Question Bank
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          The <span className="text-foreground font-semibold">200 most recent real interview questions</span>{" "}
          from the community-sourced{" "}
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Decode and Conquer question bank
            <ExternalLink size={11} />
          </a>
          {" "}(Sep 2024–Aug 2025), spanning {ALL_COMPANIES.length} companies and {QUESTION_TYPES.length} question types.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Questions", value: "200" },
          { label: "Companies", value: String(ALL_COMPANIES.length) },
          { label: "Question Types", value: String(QUESTION_TYPES.length) },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/8 bg-card p-3 text-center"
          >
            <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter bar */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search questions, companies, or tags..."
              value={localSearch}
              onChange={(e) => { setLocalSearch(e.target.value); setPage(1); }}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary border border-white/8 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
              showFilters || selectedTypes.length > 0 || selectedCompany !== "All"
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-white/8 bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            <Filter size={13} />
            Filter
            {(selectedTypes.length > 0 || selectedCompany !== "All") && (
              <span className="bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center font-mono">
                {selectedTypes.length + (selectedCompany !== "All" ? 1 : 0)}
              </span>
            )}
          </button>
          <button
            onClick={pickRandom}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/8 bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"
            title="Random question"
          >
            <Shuffle size={13} />
            Random
          </button>
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg border border-white/8 bg-card p-4 space-y-4 overflow-hidden"
            >
              {/* Type filters */}
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                  Question Type
                </div>
                <div className="flex flex-wrap gap-2">
                  {QUESTION_TYPES.map((type) => {
                    const color = TYPE_COLORS[type];
                    const active = selectedTypes.includes(type);
                    const count = typeBreakdown[type] || 0;
                    return (
                      <button
                        key={type}
                        onClick={() => toggleType(type)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                        style={{
                          background: active ? `${color}22` : "rgba(255,255,255,0.04)",
                          color: active ? color : "#94a3b8",
                          border: `1px solid ${active ? color + "55" : "rgba(255,255,255,0.08)"}`,
                        }}
                      >
                        {type}
                        <span className="font-mono opacity-70">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Company filter */}
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                  Company
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", ...ALL_COMPANIES].map((company) => (
                    <button
                      key={company}
                      onClick={() => { setSelectedCompany(company); setPage(1); }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                        selectedCompany === company
                          ? "bg-primary/15 text-primary border-primary/40"
                          : "bg-white/4 text-muted-foreground border-white/8 hover:text-foreground"
                      }`}
                    >
                      {company}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {(selectedTypes.length > 0 || selectedCompany !== "All" || localSearch) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={11} />
                  Clear all filters
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Random question spotlight */}
      <AnimatePresence>
        {randomQuestion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="mb-6 rounded-xl border-2 p-5 relative"
            style={{
              borderColor: TYPE_COLORS[randomQuestion.type] + "66",
              background: `${TYPE_COLORS[randomQuestion.type]}0d`,
            }}
          >
            <button
              onClick={() => setRandomQuestion(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X size={14} />
            </button>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2">
              <Shuffle size={11} />
              Random Practice Question
            </div>
            <p className="text-base font-medium text-foreground mb-3">
              {randomQuestion.question}
            </p>
            <div className="flex flex-wrap gap-2">
              <span
                className="cat-badge"
                style={{
                  background: `${TYPE_COLORS[randomQuestion.type]}22`,
                  color: TYPE_COLORS[randomQuestion.type],
                  border: `1px solid ${TYPE_COLORS[randomQuestion.type]}44`,
                }}
              >
                {randomQuestion.type}
              </span>
              <span className="cat-badge bg-white/5 text-muted-foreground border border-white/8">
                <Building2 size={10} className="inline mr-1" />
                {randomQuestion.company}
              </span>
              <span className="cat-badge bg-white/5 text-muted-foreground border border-white/8">
                <Calendar size={10} className="inline mr-1" />
                {randomQuestion.date}
              </span>
              {randomQuestion.frameworkHint && (
                <span className="cat-badge bg-white/5 text-muted-foreground border border-white/8">
                  → {randomQuestion.frameworkHint}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-muted-foreground font-mono">
          Showing{" "}
          <span className="text-foreground">{Math.min(paginated.length, filtered.length)}</span>{" "}
          of{" "}
          <span className="text-foreground">{filtered.length}</span>{" "}
          questions
          {searchQuery && (
            <span>
              {" "}for{" "}
              <span className="text-primary">"{searchQuery}"</span>
            </span>
          )}
        </p>
      </div>

      {/* Question list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">No questions match your filters.</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-xs text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {paginated.map((q) => (
              <QuestionCard key={q.id} q={q} searchQuery={searchQuery} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-2.5 rounded-lg border border-white/8 bg-secondary text-sm text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors font-medium"
          >
            Load more ({filtered.length - paginated.length} remaining)
          </button>
        </div>
      )}

      {/* Source attribution */}
      <div className="mt-10 pt-6 border-t border-white/8 text-center">
        <p className="text-xs text-muted-foreground">
          Questions sourced from{" "}
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Lewis Lin's PM Question Bank
            <ExternalLink size={10} />
          </a>
          {" "}— community-submitted real interview questions from the Decode and Conquer ecosystem.
          Showing the 200 most recent entries (Sep 2024–Aug 2025).
        </p>
      </div>
    </section>
  );
}
