// Product Sense Case Study Framework — Data Layer
// Design: "The PM's War Room" — dark dashboard, electric indigo accent, semantic category colors

export type CategoryId = "A" | "B" | "C" | "D" | "E" | "F";
export type CompanyType =
  | "early-startup"
  | "growth-startup"
  | "big-tech"
  | "marketplace"
  | "b2b-saas"
  | "consumer-app"
  | "hardware";

export interface QuestionCategory {
  id: CategoryId;
  label: string;
  tagline: string;
  color: string; // Tailwind color class base
  colorHex: string;
  signalWords: string[];
  examples: string[];
  framework: { step: number; title: string; description: string }[];
  specialLens?: { title: string; points: string[] };
}

export interface CompanySignal {
  type: CompanyType;
  label: string;
  stage: string;
  stageLabel: string;
  description: string;
  examples: string[];
  likelyFocus: string[];
  leastLikely: string[];
  color: string;
}

export interface MatrixRow {
  companyType: CompanyType;
  companyLabel: string;
  stage: string;
  mostLikely: CategoryId[];
  leastLikely: string;
  keyFocus: string;
}

export interface DomainCard {
  id: string;
  domain: string;
  icon: string;
  companies: string[];
  typicalFocus: string[];
  keyMetrics: string[];
  color: string;
}

export interface SolutionPath {
  id: number;
  title: string;
  trigger: string;
  steps: { step: number; title: string; question: string }[];
  proTip: string;
  categories: CategoryId[];
}

// ─── QUESTION CATEGORIES ────────────────────────────────────────────────────

export const questionCategories: QuestionCategory[] = [
  {
    id: "A",
    label: "Product Design",
    tagline: "Design a product for X",
    color: "emerald",
    colorHex: "#10b981",
    signalWords: [
      '"Design a product for..."',
      '"Build a feature for..."',
      '"How would you design..."',
    ],
    examples: [
      "Design an ATM for blind users",
      "Design a kids' ride-on feature for Uber",
      "Design a fire alarm for deaf users",
      "Design a product for space travel",
      "Design a parking feature for Google Maps",
      "Design a product for elderly users in healthcare",
    ],
    framework: [
      { step: 1, title: "Clarify Scope & Constraints", description: "Ask 1–2 targeted questions. State your assumptions clearly. Define what's in and out of scope." },
      { step: 2, title: "Define User Segments", description: "Who is the primary user? Who is most underserved? Pick ONE segment to focus on and explain why." },
      { step: 3, title: "Map User Journey & Pain Points", description: "Walk through the user's experience step-by-step. Identify the top 2–3 friction points." },
      { step: 4, title: "Brainstorm Solutions", description: "Generate at least 3 distinct solutions with different tradeoffs. Avoid anchoring on the first idea." },
      { step: 5, title: "Prioritize by Impact × Feasibility", description: "Rank solutions. Pick one primary recommendation. Explain the tradeoff vs. alternatives." },
      { step: 6, title: "Define Success Metrics", description: "North star metric + 2–3 guardrail metrics. Tie metrics back to the user goal." },
      { step: 7, title: "Tradeoffs & Edge Cases", description: "What are you giving up? What could go wrong? What would you do with more time/resources?" },
    ],
    specialLens: {
      title: "Accessibility / Inclusive Design Lens",
      points: [
        "Identify the constraint (sensory, motor, cognitive)",
        "Map existing workarounds users currently rely on",
        "Design for the constraint as the primary use case, not an afterthought",
        "Test with target users — not just proxies",
      ],
    },
  },
  {
    id: "B",
    label: "Product Improvement",
    tagline: "How would you improve X?",
    color: "blue",
    colorHex: "#3b82f6",
    signalWords: [
      '"How would you improve..."',
      '"What would you change about..."',
      '"What\'s next for..."',
    ],
    examples: [
      "How would you improve Instagram Stories?",
      "How would you improve Spotify?",
      "How would you improve LinkedIn's job search?",
      "How would you improve Airbnb's host experience?",
      "How would you improve Google Maps?",
    ],
    framework: [
      { step: 1, title: "Clarify the Improvement Goal", description: "What does 'improve' mean here? Engagement? Revenue? NPS? Retention? Align on the objective first." },
      { step: 2, title: "Identify Affected User Segments", description: "Who is most impacted by the current problem? Which segment has the highest pain?" },
      { step: 3, title: "Audit the Current User Journey", description: "Walk through the current experience step-by-step. Where do users drop off or struggle?" },
      { step: 4, title: "Identify Top Friction Points", description: "Rank pain points by frequency × severity × addressability." },
      { step: 5, title: "Propose Ranked Solutions", description: "3–5 ideas, prioritized. Explain the tradeoff for each. Don't just list features." },
      { step: 6, title: "A/B Test & Rollout Plan", description: "How would you validate? What's the phased rollout strategy? What's the success threshold?" },
    ],
  },
  {
    id: "C",
    label: "Product Strategy",
    tagline: "Should we build / enter X?",
    color: "violet",
    colorHex: "#8b5cf6",
    signalWords: [
      '"Should we enter..."',
      '"Should we build..."',
      '"Is this a good idea?"',
      '"What would you prioritize?"',
    ],
    examples: [
      "Should Uber enter grocery delivery?",
      "Should Spotify build a social network?",
      "Should Meta build a dating app?",
      "Should Google build a healthcare product?",
      "Should we build vs. buy vs. partner?",
    ],
    framework: [
      { step: 1, title: "Clarify the Strategic Goal", description: "Is this about growth, diversification, defense, or monetization? Align on the 'why' first." },
      { step: 2, title: "Assess Market Opportunity", description: "TAM/SAM/SOM. Who are the incumbents? What's the competitive moat?" },
      { step: 3, title: "Evaluate Company Fit", description: "Does this leverage existing strengths, data, distribution? What's the unfair advantage?" },
      { step: 4, title: "Identify Risks", description: "Regulatory, cannibalization, brand dilution, execution risk. Be honest about the downside." },
      { step: 5, title: "Recommend with Conditions", description: "Give a clear recommendation. State the conditions under which you'd change your mind." },
      { step: 6, title: "Define Success Metrics & Milestones", description: "What does success look like at 6 months? 2 years? What are the go/no-go criteria?" },
    ],
  },
  {
    id: "D",
    label: "Metrics & Diagnosis",
    tagline: "How would you measure X? / Metric dropped — why?",
    color: "amber",
    colorHex: "#f59e0b",
    signalWords: [
      '"How would you measure..."',
      '"DAU dropped 20%..."',
      '"Engagement is up but revenue is down..."',
      '"Investigate why..."',
    ],
    examples: [
      "How would you measure the success of Facebook Groups?",
      "YouTube search volume spiked — investigate why",
      "Instagram Stories engagement dropped 30%",
      "DAU is up but revenue is flat — what's happening?",
    ],
    framework: [
      { step: 1, title: "Clarify the Metric & Timeframe", description: "Which exact metric? Over what time period? Is the data reliable? Any known data issues?" },
      { step: 2, title: "Segment the Data", description: "Break down by platform, geography, user type, acquisition channel. Where is the change concentrated?" },
      { step: 3, title: "Diagnose Root Cause", description: "Technical bug? External event? Product change? Seasonality? Build a hypothesis tree." },
      { step: 4, title: "Propose Hypothesis Tree", description: "List 3–5 hypotheses ranked by likelihood. What data would confirm or reject each?" },
      { step: 5, title: "Recommend Action", description: "Based on the most likely root cause, what's the immediate action? Short-term fix vs. long-term solution?" },
      { step: 6, title: "Define Monitoring Plan", description: "What alerts would you set up? How would you prevent this from happening again?" },
    ],
  },
  {
    id: "E",
    label: "Growth",
    tagline: "How would you grow X?",
    color: "rose",
    colorHex: "#f43f5e",
    signalWords: [
      '"How would you grow..."',
      '"How do you acquire more users?"',
      '"How do you increase DAU?"',
      '"Increase retention by X%"',
    ],
    examples: [
      "How would you grow WhatsApp in India?",
      "How would you increase Duolingo's DAU?",
      "How would you grow Airbnb's supply side?",
      "How would you increase TikTok's creator base?",
    ],
    framework: [
      { step: 1, title: "Identify Growth Bottleneck", description: "Is the problem Acquisition, Activation, Retention, or Referral? (AARRR). Don't assume — diagnose first." },
      { step: 2, title: "Map Current Growth Engine", description: "Viral loop? Paid acquisition? Content? Product-led growth? What's working and what's plateauing?" },
      { step: 3, title: "Pick the Highest Leverage Point", description: "Where does 1% improvement have the biggest downstream impact on the growth loop?" },
      { step: 4, title: "Design 3 Growth Experiments", description: "Each experiment should be testable in 2–4 weeks with clear success criteria." },
      { step: 5, title: "Prioritize by ICE Score", description: "Impact × Confidence × Ease. Pick the top experiment to run first and explain why." },
      { step: 6, title: "Define Leading + Lagging Metrics", description: "What leading indicator tells you the experiment is working before the lagging metric moves?" },
    ],
  },
  {
    id: "F",
    label: "Monetization",
    tagline: "How would you monetize X?",
    color: "cyan",
    colorHex: "#06b6d4",
    signalWords: [
      '"How would you monetize..."',
      '"How would you increase revenue?"',
      '"Design a business model for..."',
    ],
    examples: [
      "How would you monetize WhatsApp?",
      "How would you monetize a free product?",
      "How would you increase Spotify's revenue?",
      "Design a monetization model for a new social app",
    ],
    framework: [
      { step: 1, title: "Understand Current Revenue Model", description: "What's the existing model (if any)? What's the user's willingness to pay? What value are they getting?" },
      { step: 2, title: "Identify the Value Exchange", description: "Who gets what? What is the core value that users would pay for?" },
      { step: 3, title: "Map Monetization Options", description: "Ads, subscription, freemium, marketplace fee, data licensing, API access. Evaluate each against user trust." },
      { step: 4, title: "Evaluate Fit with User Experience", description: "Does this model align with how users experience the product? What's the trust/revenue tradeoff?" },
      { step: 5, title: "Recommend Primary + Secondary Stream", description: "Pick a primary model. Identify a secondary stream. Explain the sequencing." },
      { step: 6, title: "Define Revenue Metrics & Guardrails", description: "ARPU, conversion rate, LTV. What guardrails protect user experience from being degraded?" },
    ],
  },
];

// ─── COMPANY SIGNALS ─────────────────────────────────────────────────────────

export const companySignals: CompanySignal[] = [
  {
    type: "early-startup",
    label: "Early-Stage Startup",
    stage: "0→1",
    stageLabel: "Seed / Series A",
    description: "New product, no established user base. Burn rate pressure, need PMF fast. Small team, generalist PM role.",
    examples: ["Pre-launch apps", "New verticals", "Stealth-mode products"],
    likelyFocus: ["Product Design (0→1)", "Acquisition", "Go-to-Market", "PMF Validation"],
    leastLikely: ["Monetization depth", "Metrics diagnosis"],
    color: "emerald",
  },
  {
    type: "growth-startup",
    label: "Growth-Stage Startup",
    stage: "1→N",
    stageLabel: "Series B–C",
    description: "Product exists, scaling aggressively. Churn and retention become critical. Expanding to new markets or segments.",
    examples: ["Airbnb 2012", "Uber 2015", "Notion 2021"],
    likelyFocus: ["Retention", "Engagement", "Growth Loops", "Monetization"],
    leastLikely: ["Accessibility design", "0→1 product design"],
    color: "blue",
  },
  {
    type: "big-tech",
    label: "Big Tech / Public Company",
    stage: "Mature",
    stageLabel: "Mature Product",
    description: "Hundreds of millions of users. Incremental improvement focus. Ecosystem & platform thinking.",
    examples: ["Google", "Meta", "Amazon", "Apple"],
    likelyFocus: ["Product Improvement", "Metrics", "Monetization", "Ecosystem"],
    leastLikely: ["0→1 design from scratch"],
    color: "violet",
  },
  {
    type: "marketplace",
    label: "Marketplace / Platform",
    stage: "Two-Sided",
    stageLabel: "Two-Sided Market",
    description: "Supply-demand balance is core. Trust and safety are table stakes. Network effects drive growth.",
    examples: ["Uber", "Airbnb", "Amazon", "DoorDash"],
    likelyFocus: ["Supply/Demand Growth", "Trust & Safety", "Pricing", "Liquidity"],
    leastLikely: ["Single-user product design"],
    color: "amber",
  },
  {
    type: "b2b-saas",
    label: "B2B / Enterprise SaaS",
    stage: "Enterprise",
    stageLabel: "Business-Focused",
    description: "Long sales cycles, enterprise contracts. NPS and retention are revenue-critical. Multi-stakeholder decision making.",
    examples: ["Salesforce", "Slack", "Notion", "Stripe"],
    likelyFocus: ["Retention", "NPS", "Enterprise Features", "Activation"],
    leastLikely: ["Consumer viral growth"],
    color: "rose",
  },
  {
    type: "consumer-app",
    label: "Consumer App",
    stage: "Consumer",
    stageLabel: "Consumer-Focused",
    description: "Habit formation and virality are core. Daily active use is the north star. Notifications and engagement loops matter.",
    examples: ["TikTok", "Duolingo", "Snapchat", "BeReal"],
    likelyFocus: ["Engagement", "Viral Growth", "Notifications / Habits", "Retention"],
    leastLikely: ["B2B monetization", "Enterprise features"],
    color: "cyan",
  },
  {
    type: "hardware",
    label: "Hardware / Accessibility / Niche",
    stage: "Specialized",
    stageLabel: "Specialized",
    description: "Physical constraints shape design. Inclusive design is a primary lens. Regulatory and safety considerations.",
    examples: ["ATM", "Medical devices", "Kids' products", "IoT"],
    likelyFocus: ["Inclusive Product Design", "Physical UX", "Safety", "Accessibility"],
    leastLikely: ["Pure metrics questions", "Viral growth"],
    color: "emerald",
  },
];

// ─── MATRIX DATA ──────────────────────────────────────────────────────────────

export const matrixRows: MatrixRow[] = [
  {
    companyType: "early-startup",
    companyLabel: "Early Startup",
    stage: "0→1",
    mostLikely: ["A", "E", "C"],
    leastLikely: "Monetization depth, Metrics diagnosis",
    keyFocus: "Finding the right user, defining PMF, go-to-market",
  },
  {
    companyType: "growth-startup",
    companyLabel: "Growth Startup",
    stage: "1→N",
    mostLikely: ["B", "D", "E"],
    leastLikely: "Accessibility design, 0→1 product design",
    keyFocus: "Reducing churn, deepening engagement, scaling loops",
  },
  {
    companyType: "big-tech",
    companyLabel: "Big Tech",
    stage: "Mature",
    mostLikely: ["B", "D", "F"],
    leastLikely: "0→1 design from scratch",
    keyFocus: "Incremental depth, platform thinking, revenue optimization",
  },
  {
    companyType: "marketplace",
    companyLabel: "Marketplace / Platform",
    stage: "Two-Sided",
    mostLikely: ["E", "C", "F"],
    leastLikely: "Single-user product design",
    keyFocus: "Liquidity, network effects, ecosystem balance",
  },
  {
    companyType: "b2b-saas",
    companyLabel: "B2B / Enterprise SaaS",
    stage: "Enterprise",
    mostLikely: ["B", "D", "E"],
    leastLikely: "Consumer viral growth, accessibility design",
    keyFocus: "Reducing churn, improving onboarding, enterprise features",
  },
  {
    companyType: "consumer-app",
    companyLabel: "Consumer App",
    stage: "Consumer",
    mostLikely: ["E", "B", "D"],
    leastLikely: "B2B monetization, enterprise features",
    keyFocus: "Habit formation, virality, daily active use",
  },
  {
    companyType: "hardware",
    companyLabel: "Hardware / Accessibility",
    stage: "Specialized",
    mostLikely: ["A"],
    leastLikely: "Pure metrics questions, viral growth",
    keyFocus: "Designing for constraints, universal usability, safety",
  },
];

// ─── DOMAIN CARDS ─────────────────────────────────────────────────────────────

export const domainCards: DomainCard[] = [
  {
    id: "social",
    domain: "Social Media",
    icon: "📱",
    companies: ["Meta", "Twitter/X", "TikTok", "Snapchat"],
    typicalFocus: ["Feed ranking", "Community health", "Engagement depth", "Content moderation", "Ads monetization"],
    keyMetrics: ["DAU/MAU", "Time-on-app", "Shares/Comments", "Ad revenue per user", "Content creation rate"],
    color: "blue",
  },
  {
    id: "marketplace",
    domain: "Marketplace",
    icon: "🏪",
    companies: ["Airbnb", "Uber", "Amazon", "DoorDash", "Etsy"],
    typicalFocus: ["Supply/demand balance", "Trust & safety", "Pricing optimization", "Network effects", "Liquidity"],
    keyMetrics: ["GMV", "Take rate", "Liquidity score", "Booking rate", "Seller/Driver NPS"],
    color: "amber",
  },
  {
    id: "streaming",
    domain: "Streaming / Media",
    icon: "🎵",
    companies: ["Spotify", "Netflix", "YouTube", "Apple Music"],
    typicalFocus: ["Content discovery", "Retention", "Churn reduction", "Subscription monetization", "Creator ecosystem"],
    keyMetrics: ["Monthly active listeners", "Churn rate", "Completion rate", "Premium conversion", "Content diversity score"],
    color: "rose",
  },
  {
    id: "productivity",
    domain: "Productivity / B2B SaaS",
    icon: "💼",
    companies: ["Slack", "Notion", "Zoom", "Salesforce", "Stripe"],
    typicalFocus: ["Activation & onboarding", "Collaboration depth", "Enterprise retention", "NPS", "Feature adoption"],
    keyMetrics: ["Seats/Licenses", "DAU", "NPS", "Workspace retention", "Feature adoption rate"],
    color: "violet",
  },
  {
    id: "transportation",
    domain: "Transportation",
    icon: "🚗",
    companies: ["Uber", "Lyft", "Waymo", "Bird", "Lime"],
    typicalFocus: ["Supply/demand matching", "Driver retention", "Safety", "Dynamic pricing", "Expansion to new markets"],
    keyMetrics: ["Rides/day", "Driver utilization", "ETA accuracy", "Surge pricing rate", "Safety incidents"],
    color: "cyan",
  },
  {
    id: "edtech",
    domain: "EdTech",
    icon: "📚",
    companies: ["Duolingo", "Coursera", "Khan Academy", "Chegg"],
    typicalFocus: ["Habit formation", "Engagement loops", "Streak mechanics", "Course completion", "Monetization of free users"],
    keyMetrics: ["DAU", "Streak retention", "Lesson completion", "Paid conversion", "Learning outcomes"],
    color: "emerald",
  },
  {
    id: "fintech",
    domain: "Fintech",
    icon: "💳",
    companies: ["Stripe", "Robinhood", "Venmo", "Coinbase", "Chime"],
    typicalFocus: ["Trust & security", "Activation", "Transaction volume", "Regulatory compliance", "Monetization without friction"],
    keyMetrics: ["Transaction volume", "Fraud rate", "Activation rate", "Revenue per user", "Regulatory compliance"],
    color: "amber",
  },
  {
    id: "accessibility",
    domain: "Accessibility / Inclusive Design",
    icon: "♿",
    companies: ["ATMs", "Medical devices", "Kids' products", "Public tech"],
    typicalFocus: ["Universal design principles", "Constraint-first thinking", "Multi-modal interaction", "Regulatory compliance (ADA, WCAG)"],
    keyMetrics: ["Task success rate", "Error rate", "Time-on-task", "User confidence score", "ADA compliance"],
    color: "emerald",
  },
  {
    id: "health",
    domain: "Health & Wellness",
    icon: "❤️",
    companies: ["Apple Health", "Fitbit", "Teladoc", "Headspace", "Noom"],
    typicalFocus: ["Behavior change", "Adherence", "Safety", "Privacy (HIPAA)", "Long-term outcomes", "Trust"],
    keyMetrics: ["Adherence rate", "Health outcomes", "30-day retention", "Safety incidents", "NPS"],
    color: "rose",
  },
];

// ─── SOLUTION PATHS ───────────────────────────────────────────────────────────

export const solutionPaths: SolutionPath[] = [
  {
    id: 1,
    title: "New Product / 0→1",
    trigger: 'Use for: Product Design questions, startup context, blank-slate products',
    categories: ["A", "C"],
    steps: [
      { step: 1, title: "Define the Problem Space", question: "What problem exists in the world? Why does it matter now?" },
      { step: 2, title: "Identify the Underserved User", question: "Who is most frustrated by this problem? Who has no good solution today?" },
      { step: 3, title: "Design the MVP", question: "What is the minimum product that solves the core pain? Avoid feature creep." },
      { step: 4, title: "Define PMF Signal", question: "What metric tells you users love this? (Retention, NPS, repeat usage)" },
      { step: 5, title: "Acquisition Strategy", question: "How do you get your first 1,000 users? (Viral, paid, partnerships, community)" },
    ],
    proTip: "Always state why THIS company is uniquely positioned to solve this — mission fit + unfair advantage.",
  },
  {
    id: 2,
    title: "Improve Existing Product",
    trigger: 'Use for: "How would you improve X?" questions',
    categories: ["B"],
    steps: [
      { step: 1, title: "Clarify 'Improve' Goal", question: "Engagement? Revenue? NPS? Retention? Align on the objective first." },
      { step: 2, title: "Audit the User Journey", question: "Walk through the current experience step-by-step. Where do users drop off or struggle?" },
      { step: 3, title: "Identify Top Friction Points", question: "Rank pain points by frequency × severity × addressability." },
      { step: 4, title: "Propose Ranked Solutions", question: "3–5 ideas, prioritized. Explain the tradeoff for each." },
      { step: 5, title: "A/B Test & Rollout Plan", question: "How would you validate? What's the phased rollout strategy?" },
    ],
    proTip: "Don't just list features — tie each improvement back to a specific user pain and a measurable metric.",
  },
  {
    id: 3,
    title: "Growth Path",
    trigger: 'Use for: "How would you grow X?" or "Increase DAU" questions',
    categories: ["E"],
    steps: [
      { step: 1, title: "Identify Growth Bottleneck", question: "Is the problem Acquisition, Activation, Retention, or Referral? (AARRR)" },
      { step: 2, title: "Map Current Growth Engine", question: "Viral loop? Paid acquisition? Content? Product-led growth?" },
      { step: 3, title: "Pick the Highest Leverage Point", question: "Where does 1% improvement have the biggest downstream impact?" },
      { step: 4, title: "Design 3 Growth Experiments", question: "Each experiment should be testable in 2–4 weeks with clear success criteria." },
      { step: 5, title: "Prioritize by ICE Score", question: "Impact × Confidence × Ease. Pick the top experiment to run first." },
    ],
    proTip: "Always distinguish between top-of-funnel (new users) and bottom-of-funnel (retention) growth — they require completely different strategies.",
  },
  {
    id: 4,
    title: "Metric Diagnosis",
    trigger: 'Use for: "Metric dropped — why?" or "How would you measure X?" questions',
    categories: ["D"],
    steps: [
      { step: 1, title: "Confirm the Data", question: "Is the data reliable? Is this a tracking bug or a real change?" },
      { step: 2, title: "Segment the Drop", question: "Break down by platform, geography, user type, acquisition channel." },
      { step: 3, title: "Hypothesize Root Causes", question: "Technical bug? External event? Product change? Seasonality? Build a hypothesis tree." },
      { step: 4, title: "Validate Each Hypothesis", question: "What data would confirm or reject each hypothesis? What's your testing order?" },
      { step: 5, title: "Recommend Action", question: "Based on the most likely root cause, what's the immediate action?" },
    ],
    proTip: "Always start with 'is the data correct?' before jumping to product conclusions. Data bugs are more common than you think.",
  },
  {
    id: 5,
    title: "Accessibility / Inclusive Design",
    trigger: 'Use for: "Design for [blind/deaf/elderly/kids]" questions',
    categories: ["A"],
    steps: [
      { step: 1, title: "Understand the Constraint", question: "Sensory (vision/hearing), motor, cognitive? What's the primary limitation?" },
      { step: 2, title: "Map Current Workarounds", question: "How do users currently cope? What existing tools do they rely on?" },
      { step: 3, title: "Design for Constraint as Primary", question: "Don't add accessibility as an afterthought. Build the constraint into the core design." },
      { step: 4, title: "Multi-Modal Interaction", question: "How does the product work across different modalities (touch, voice, visual, haptic)?" },
      { step: 5, title: "Define Success with Target Users", question: "Task success rate, error rate, time-on-task. Test with actual users, not proxies." },
    ],
    proTip: "The best accessible designs often improve the experience for ALL users — curb cuts help wheelchair users AND cyclists.",
  },
  {
    id: 6,
    title: "Strategic Decision",
    trigger: 'Use for: "Should we build/enter X?" questions',
    categories: ["C", "F"],
    steps: [
      { step: 1, title: "Clarify the Strategic Goal", question: "Growth? Defense? Diversification? Monetization? Align on the 'why' first." },
      { step: 2, title: "Assess Market Opportunity", question: "TAM/SAM/SOM. Who are the incumbents? What's the competitive moat?" },
      { step: 3, title: "Evaluate Company Fit", question: "Does this leverage existing strengths, data, distribution? What's the unfair advantage?" },
      { step: 4, title: "Risk Analysis", question: "Regulatory, cannibalization, brand dilution, execution risk. Be honest about the downside." },
      { step: 5, title: "Recommend with Conditions", question: "Give a clear recommendation. State the conditions under which you'd change your mind." },
    ],
    proTip: "A strong strategic answer always includes: (1) a clear recommendation, (2) the conditions that would change it, and (3) the first milestone to validate the bet.",
  },
];

// ─── UNIVERSAL FRAMEWORK ──────────────────────────────────────────────────────

export const universalFramework = {
  steps: [
    { step: 1, title: "Clarify", description: "Scope, constraints, assumptions. Ask 1–2 targeted questions. State your assumptions clearly." },
    { step: 2, title: "Set the Goal", description: "Define the strategic objective: Growth / Engagement / Experience / Monetization. This anchors your whole answer." },
    { step: 3, title: "Define Users", description: "Segment the user base. Pick ONE segment to focus on. Explain why this segment is most valuable to address." },
    { step: 4, title: "Identify Pain Points", description: "Map the user journey. Find the top 2–3 friction points. Rank by frequency × severity." },
    { step: 5, title: "Propose Solutions", description: "Brainstorm 3+ ideas. Prioritize 1 primary solution. Explain the tradeoff vs. alternatives." },
    { step: 6, title: "Define Metrics", description: "North star metric + 2–3 guardrail metrics. Tie metrics back to the goal set in Step 2." },
    { step: 7, title: "Tradeoffs & Edge Cases", description: "What are you giving up? What could go wrong? What would you do with more time/resources?" },
  ],
  strategicObjectives: [
    { label: "Growth / Acquisition", metric: "New users, market share", color: "emerald" },
    { label: "Engagement", metric: "DAU, session depth, features used", color: "blue" },
    { label: "Retention", metric: "Churn rate, D7/D30 retention", color: "violet" },
    { label: "Monetization", metric: "ARPU, conversion rate, LTV", color: "amber" },
    { label: "Experience / NPS", metric: "CSAT, NPS, task success rate", color: "rose" },
  ],
  commonMistakes: [
    { mistake: "Jumping to solutions", fix: "Always clarify first" },
    { mistake: "No user segmentation", fix: "Always pick a specific user" },
    { mistake: "Feature laundry list", fix: "Prioritize and explain tradeoffs" },
    { mistake: "No success metrics", fix: "Always define how you'd measure" },
    { mistake: "Ignoring business impact", fix: "Connect to revenue or retention" },
    { mistake: "Sounding like a memorized script", fix: "Adapt framework to the question" },
  ],
};

// ─── SEARCH INDEX ─────────────────────────────────────────────────────────────

export interface SearchableItem {
  id: string;
  title: string;
  subtitle: string;
  section: string;
  tags: string[];
  content: string;
}

export function buildSearchIndex(): SearchableItem[] {
  const items: SearchableItem[] = [];

  // Question categories
  questionCategories.forEach((cat) => {
    items.push({
      id: `cat-${cat.id}`,
      title: `Category ${cat.id}: ${cat.label}`,
      subtitle: cat.tagline,
      section: "Question Categories",
      tags: [cat.label, ...cat.signalWords],
      content: `${cat.label} ${cat.tagline} ${cat.signalWords.join(" ")} ${cat.examples.join(" ")} ${cat.framework.map((f) => f.title).join(" ")}`,
    });
  });

  // Company signals
  companySignals.forEach((sig) => {
    items.push({
      id: `sig-${sig.type}`,
      title: sig.label,
      subtitle: sig.stageLabel,
      section: "Signal Detector",
      tags: [sig.label, sig.stage, ...sig.likelyFocus],
      content: `${sig.label} ${sig.stageLabel} ${sig.description} ${sig.examples.join(" ")} ${sig.likelyFocus.join(" ")}`,
    });
  });

  // Domain cards
  domainCards.forEach((domain) => {
    items.push({
      id: `domain-${domain.id}`,
      title: domain.domain,
      subtitle: domain.companies.join(", "),
      section: "Domain Reference",
      tags: [domain.domain, ...domain.companies],
      content: `${domain.domain} ${domain.companies.join(" ")} ${domain.typicalFocus.join(" ")} ${domain.keyMetrics.join(" ")}`,
    });
  });

  // Solution paths
  solutionPaths.forEach((path) => {
    items.push({
      id: `path-${path.id}`,
      title: path.title,
      subtitle: path.trigger,
      section: "Solution Paths",
      tags: [path.title, ...path.categories.map((c) => `Category ${c}`)],
      content: `${path.title} ${path.trigger} ${path.steps.map((s) => s.title).join(" ")} ${path.proTip}`,
    });
  });

  return items;
}

export function searchItems(query: string, items: SearchableItem[]): SearchableItem[] {
  if (!query.trim()) return items;
  const q = query.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export const categoryColorMap: Record<CategoryId, string> = {
  A: "emerald",
  B: "blue",
  C: "violet",
  D: "amber",
  E: "rose",
  F: "cyan",
};

export const categoryHexMap: Record<CategoryId, string> = {
  A: "#10b981",
  B: "#3b82f6",
  C: "#8b5cf6",
  D: "#f59e0b",
  E: "#f43f5e",
  F: "#06b6d4",
};
