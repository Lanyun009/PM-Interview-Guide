// Sidebar.tsx — PM War Room Design System
// Persistent left sidebar with icon + label navigation, search, and active state

import { useState } from "react";
import { Search, X, Zap, LayoutGrid, GitBranch, BarChart3, Globe, BookOpen, ChevronRight } from "lucide-react";

export type SectionId = "signal" | "categories" | "matrix" | "paths" | "domains" | "universal";

interface SidebarProps {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const navItems: { id: SectionId; label: string; icon: React.ReactNode; shortcut: string }[] = [
  { id: "signal", label: "Signal Detector", icon: <Zap size={16} />, shortcut: "1" },
  { id: "categories", label: "Question Categories", icon: <LayoutGrid size={16} />, shortcut: "2" },
  { id: "matrix", label: "Company × Question Matrix", icon: <BarChart3 size={16} />, shortcut: "3" },
  { id: "paths", label: "Solution Paths", icon: <GitBranch size={16} />, shortcut: "4" },
  { id: "domains", label: "Domain Reference", icon: <Globe size={16} />, shortcut: "5" },
  { id: "universal", label: "Universal Framework", icon: <BookOpen size={16} />, shortcut: "6" },
];

export default function Sidebar({ activeSection, onSectionChange, searchQuery, onSearchChange }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          w-64 bg-sidebar border-r border-sidebar-border
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo / Brand */}
        <div className="px-5 py-5 border-b border-sidebar-border">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary-foreground font-mono">PS</span>
            </div>
            <div>
              <div className="text-sm font-bold text-sidebar-foreground leading-tight">Product Sense</div>
              <div className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Case Study Reference</div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-sidebar-border">
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search framework..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-input/50 border border-border rounded-md pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-3 mb-2">Sections</div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setMobileOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium
                  transition-all duration-150 group relative mb-0.5
                  ${isActive
                    ? "bg-accent text-accent-foreground border-l-2 border-primary"
                    : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  }
                `}
              >
                <span className={isActive ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground"}>
                  {item.icon}
                </span>
                <span className="flex-1 text-left text-xs leading-tight">{item.label}</span>
                <span className="text-[10px] font-mono text-muted-foreground/50 bg-muted/30 px-1.5 py-0.5 rounded">
                  {item.shortcut}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-sidebar-border">
          <div className="text-[10px] text-muted-foreground font-mono text-center leading-relaxed">
            PM Interview Reference<br />
            <span className="text-primary/70">Signal → Category → Path</span>
          </div>
        </div>
      </aside>
    </>
  );
}
