# Product Sense Reference Site — Design Ideas

## Response 1
<response>
<text>
**Design Movement:** Technical Documentation meets Editorial Design — "The PM's Field Manual"

**Core Principles:**
- Monospaced accents paired with a sharp serif display font — feels like a printed reference book that got digitized
- Information density is a feature, not a bug — every pixel earns its place
- Navigation is structural, not decorative — left sidebar acts as a permanent table of contents
- Color is used only for semantic meaning (category tagging), never decoration

**Color Philosophy:**
- Near-black background (#0D0F14) with warm off-white text (#E8E4DC) — like reading a printed technical manual under a desk lamp
- Accent: a single muted amber (#C8963E) used only for highlights, active states, and search matches
- Category colors: 6 distinct muted tones (sage, slate, rust, teal, sand, plum) — each maps to a question category

**Layout Paradigm:**
- Persistent left sidebar (240px) with collapsible section groups — acts as the permanent index
- Main content area is a scrollable feed of "cards" that look like torn-out reference sheets
- Search bar is fixed at the top of the sidebar, always visible
- No hero section — content starts immediately, like opening a reference book to the index

**Signature Elements:**
- Thin horizontal rules between sections (1px, 20% opacity) — like printed page dividers
- Monospaced step numbers in circles — like footnote markers in academic texts
- "Tag rail" at the top of each card showing category + company type badges

**Interaction Philosophy:**
- Search filters the entire content tree in real-time — matching text is highlighted in amber
- Clicking a sidebar item smoothly scrolls to and highlights the corresponding card
- Hover states are subtle — a 1px left border appears in the category color

**Animation:**
- Page load: content fades in staggered from top (50ms delay per card)
- Search: cards that don't match slide out to the left and fade; matching cards stay
- Sidebar active item: smooth amber underline slides to the new position

**Typography System:**
- Display: "Playfair Display" — used only for section headings
- Body: "IBM Plex Mono" for labels/tags, "IBM Plex Sans" for body text
- Hierarchy: 32px display / 18px section title / 14px body / 11px label
</text>
<probability>0.08</probability>
</response>

## Response 2
<response>
<text>
**Design Movement:** Dark Dashboard / Command Palette — "The PM's War Room"

**Core Principles:**
- Everything is a data point — the UI treats PM knowledge like a structured database
- Search is the primary interaction — the site is built around a CMD+K style command palette
- Asymmetric grid — left sidebar for navigation, right panel for detail, center for browsing
- Micro-interactions everywhere — the UI responds to every hover and click with precision

**Color Philosophy:**
- Deep navy-slate background (oklch 0.12 0.02 260) — professional, focused, not harsh
- Electric indigo (#6366F1) as the primary accent — modern, energetic, PM-coded
- Semantic category colors: green (growth), amber (design), blue (metrics), orange (strategy), red (accessibility), cyan (monetization)
- Text: pure white for headings, 70% opacity for body, 45% for labels

**Layout Paradigm:**
- Fixed left sidebar with icon + label navigation (collapsed on mobile)
- Top search bar with instant filtering — always visible, keyboard-first
- Main content: masonry-style card grid that reflows based on filter state
- Detail drawer slides in from the right when a card is clicked — no page navigation

**Signature Elements:**
- Glowing category badges (subtle box-shadow in category color)
- Step-by-step solution paths rendered as vertical timelines
- "Likelihood meter" bars on the matrix — visual bars showing probability of question type

**Interaction Philosophy:**
- CMD+K opens a global search command palette
- Filter chips at the top of the grid — click to filter by company type, question category, domain
- Cards expand in-place on click to show full solution path

**Animation:**
- Card grid: spring physics on filter transitions (framer-motion layout animations)
- Sidebar: smooth slide with backdrop blur on mobile
- Search: results appear with a stagger fade-in

**Typography System:**
- Display: "Space Grotesk" — geometric, modern, slightly quirky
- Body: "Inter" for readability
- Code/labels: "JetBrains Mono"
</text>
<probability>0.09</probability>
</response>

## Response 3
<response>
<text>
**Design Movement:** Brutalist Reference Card — "The PM Cheat Sheet, Elevated"

**Core Principles:**
- Bold typographic hierarchy — section titles are massive, almost aggressive
- Horizontal scrolling category lanes — like Kanban columns for question types
- Raw grid structure — no rounded corners on containers, just clean lines and borders
- Color blocks as navigation — each section has a full-width color band header

**Color Philosophy:**
- White background with black text — maximum contrast, zero ambiguity
- Six bold accent colors (one per question category): cobalt, forest, crimson, amber, teal, violet
- Headers use full-width color blocks in the category color — unmistakable visual anchors
- No gradients, no shadows — flat and decisive

**Layout Paradigm:**
- Top navigation bar with category tabs (each tab has its category color)
- Content below is a single scrollable page — no sidebar
- Each category section has a full-width colored header band, then a 3-column card grid below
- Search bar is sticky at the top, filters all sections simultaneously

**Signature Elements:**
- Large bold category letters (A, B, C...) as section markers — like a physical index divider
- "Signal words" displayed in a monospaced highlight box at the top of each card
- Company type badges are solid color blocks, not pills

**Interaction Philosophy:**
- Tab navigation jumps to sections with smooth scroll
- Search highlights matching text in yellow (like a physical highlighter)
- Cards flip on hover to reveal the solution path steps

**Animation:**
- Section transitions: bold color wipe from left
- Card hover: 2px border appears in category color
- Search: non-matching cards collapse with height animation

**Typography System:**
- Display: "Syne" — geometric, bold, editorial
- Body: "DM Sans" — clean and readable
- Labels: "Syne Mono"
</text>
<probability>0.07</probability>
</response>

---

## Chosen Design: Response 2 — "The PM's War Room"

Dark dashboard aesthetic with electric indigo accent, semantic category colors, persistent sidebar navigation, CMD+K search, and spring-physics card grid animations. This feels like a professional tool a PM would actually keep open during interview prep — not a marketing page.
