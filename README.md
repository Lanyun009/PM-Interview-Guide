# PM Interview: The Playbook

**A searchable, interactive reference site for product sense, analytical, and strategy interviews.**

> In a product interview, the instinct is to jump straight into an answer. Resist it. The first 30 seconds should be spent detecting the question type, reading the company context, and selecting the right framework path. A product sense question at a Series A startup calls for a completely different structure than the same question at Google. This reference maps that signal-to-solution logic — so you walk in knowing exactly which path to take before the interviewer finishes the sentence.

![PM Interview: The Playbook — Site Preview](https://d2xsxph8kpxj0f.cloudfront.net/310519663351598461/6wyqUKbV9QdyQXzBURssR3/readme_hero_11d28966.webp)

🔗 **Live site:** [productsense-6wyqukbv.manus.space](https://productsense-6wyqukbv.manus.space)

---

## What's Inside

The site is organized into 9 sections, each solving a specific interview challenge:

| # | Section | The Problem It Solves |
|---|---|---|
| 0 | **Start Here** | Don't know where to begin? This page maps 8 common interview struggles to the exact section that fixes them. |
| 1 | **Signal Detector** | Can't tell what type of question you're being asked? Read the company signal → predict the question focus. |
| 2 | **Question Categories** | Know the type but not the structure? 6 categories with signal words, real examples, and step-by-step frameworks. |
| 3 | **Company × Question Matrix** | Interviewing at Meta, Uber, or Spotify? See the most and least likely question types per company. |
| 4 | **Solution Paths** | 6 ready-to-use structured answer paths: 0→1 Design, Improve, Growth, Metric Diagnosis, Accessibility, Strategy. |
| 5 | **Domain Reference** | 9 product domains (Social, Marketplace, B2B, Fintech, etc.) with typical focus areas and key metrics. |
| 6 | **Universal Framework** | A 7-step structure that works for any question, plus strategic objectives and common mistakes to avoid. |
| 7 | **Product Sense & Analytical Questions** | 200 most recent real interview questions (Sep 2024–Aug 2025) from Lewis Lin's PM question bank, with company and type filters, a 20-minute practice timer, and bookmark support. |
| 8 | **Product Management Glossary** | 48 essential PM terms (DAU, MAU, GMV, NPS, LTV, CAC, A/B Test, etc.) with formulas, examples, and cross-section links. |

---

## Key Features

**Signal → Category → Path workflow.** The entire site is built around one insight: the company type and product maturity are the strongest predictors of what question you'll get. The Signal Detector reads those signals and routes you to the right framework.

**Global search.** A persistent search bar filters all 9 sections simultaneously. Press `0`–`8` to jump directly to any section.

**Practice Timer.** Expand any question card in Section 7 to reveal a 20-minute countdown with a circular progress ring, contextual coaching prompts that shift at key time thresholds, and a self-rating prompt (1–5) when time expires.

**Bookmark deck.** Star questions to build a targeted pre-interview review deck, persisted in `localStorage` across sessions.

**Clickable Glossary links.** Key metrics and framework terms (DAU, NPS, North Star Metric, A/B Test, etc.) are linked throughout all sections — clicking any term chip navigates to the Glossary definition with a highlight ring.

**Onboarding tour.** A 10-slide animated overlay plays on first visit and introduces each section with coaching context. Replay anytime from the sidebar.

**Light / Dark theme.** Toggle between the dark "The Playbook" mode and a bright light theme from the sidebar. Preference persists in `localStorage`.

---

## Stack

Built with **React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui + Framer Motion**, deployed on [Manus](https://manus.im).

| Layer | Technology |
|---|---|
| Framework | React 19 + Wouter (routing) |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animation | Framer Motion |
| Typography | Space Grotesk (display) + JetBrains Mono (metadata) |
| State | React hooks + localStorage |
| Build | Vite 7 |

---

## Data Sources

The framework taxonomy and signal-to-solution map were synthesized from:

- Lewis Lin's *Decode and Conquer* PM question bank (community-submitted real interview questions, 2019–2025)
- Published PM interview frameworks from Exponent, Medium / Design Bootcamp, and Mandy Liu's Substack
- Pattern recognition across 2,500+ real interview questions categorized by company, type, and interview stage

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The site runs at `http://localhost:3000`.

---

## License

MIT — feel free to fork, adapt, and share.
