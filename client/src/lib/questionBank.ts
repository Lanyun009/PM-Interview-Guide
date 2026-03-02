// Lewis Lin's PM Question Bank — Most Recent 200 Questions (Sep 2024–Aug 2025)
// Source: https://docs.google.com/spreadsheets/d/1rz10oEeLx-eGnilahKczYPhGfCUzIEKL-xRnjoQ-SX4
// Rows ~2601–2800, sorted newest-first. Interview format removed per user request.

export type QuestionType =
  | "Product Sense"
  | "Execution"
  | "Strategy"
  | "Analytical"
  | "Product Design"
  | "Behavioral"
  | "Estimation"
  | "Pricing"
  | "Leadership & Drive"
  | "Other";

export interface BankQuestion {
  id: number;
  date: string;
  company: string;
  question: string;
  type: QuestionType;
  tags: string[];
  frameworkHint?: string;
}

export const QUESTION_TYPES: QuestionType[] = [
  "Product Sense",
  "Execution",
  "Strategy",
  "Analytical",
  "Product Design",
  "Behavioral",
  "Estimation",
  "Pricing",
  "Leadership & Drive",
  "Other",
];

export const TYPE_COLORS: Record<QuestionType, string> = {
  "Product Sense": "#10b981",
  "Execution": "#3b82f6",
  "Strategy": "#8b5cf6",
  "Analytical": "#f59e0b",
  "Product Design": "#f43f5e",
  "Behavioral": "#06b6d4",
  "Estimation": "#a78bfa",
  "Pricing": "#34d399",
  "Leadership & Drive": "#e879f9",
  "Other": "#94a3b8",
};

export const questionBank: BankQuestion[] = [
  // ── Aug 2025 ──────────────────────────────────────────────────────────────
  { id: 1, date: "Aug 2025", company: "Meta", question: "Build an app for gardening.", type: "Product Sense", tags: ["0→1", "consumer", "niche"], frameworkHint: "0→1 Design Path" },
  { id: 2, date: "Aug 2025", company: "Meta", question: "Build an app for group travel.", type: "Product Sense", tags: ["social", "travel", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 3, date: "Aug 2025", company: "Meta", question: "We're thinking about removing profile picture as a required step in the onboarding flow. How would you determine if that's a good idea or not?", type: "Analytical", tags: ["onboarding", "experimentation", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 4, date: "Aug 2025", company: "Meta", question: "You're the PM for Meta verified account. How would you measure success and set goals?", type: "Analytical", tags: ["metrics", "goals", "trust"], frameworkHint: "Metric Diagnosis Path" },
  { id: 5, date: "Aug 2025", company: "Meta", question: "Build a product for people who work on farms.", type: "Product Sense", tags: ["accessibility", "rural", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 6, date: "Aug 2025", company: "Meta", question: "Define success for Verified Accounts (assuming its initial phase).", type: "Analytical", tags: ["metrics", "launch", "trust"], frameworkHint: "Metric Diagnosis Path" },
  { id: 7, date: "Aug 2025", company: "Meta", question: "Design a parking solution for Apple Maps.", type: "Product Sense", tags: ["maps", "parking", "design"], frameworkHint: "0→1 Design Path" },
  { id: 8, date: "Aug 2025", company: "Doordash", question: "How would you improve discoverability at AirBnB?", type: "Product Sense", tags: ["improvement", "search", "discovery"], frameworkHint: "Improve Existing Product Path" },
  { id: 9, date: "Aug 2025", company: "Doordash", question: "Hired as a PM to 3X Revenue in the next 5 years. What is your strategy to support monetization? Which customers and what problems? What do you build as your MVP? Choose between Etsy, Yelp, and Groupon.", type: "Strategy", tags: ["monetization", "revenue", "MVP"], frameworkHint: "Strategy Path" },
  { id: 10, date: "Aug 2025", company: "Doordash", question: "Grow revenue by 3x in 5 years. Choose any one among Yelp, Duolingo, Etsy, Groupon. How would you develop the MVP?", type: "Product Sense", tags: ["growth", "revenue", "MVP"], frameworkHint: "Growth Path" },
  { id: 11, date: "Aug 2025", company: "Doordash", question: "How will you improve the quality of Airbnb in 6 months?", type: "Product Sense", tags: ["improvement", "quality", "Airbnb"], frameworkHint: "Improve Existing Product Path" },
  { id: 12, date: "Aug 2025", company: "Meta", question: "You're the PM for a local grocery store chain. Sales are down because of Blue Apron and Instacart has started getting market share. What would you build?", type: "Product Sense", tags: ["competition", "strategy", "grocery"], frameworkHint: "Strategy Path" },
  { id: 13, date: "Aug 2025", company: "Meta", question: "Why did FB build FB events, and how would you measure success for it?", type: "Analytical", tags: ["metrics", "events", "success"], frameworkHint: "Metric Diagnosis Path" },
  { id: 14, date: "Aug 2025", company: "Meta", question: "You are PM at meta, build a product for education. What would you build and why?", type: "Product Sense", tags: ["education", "0→1", "social"], frameworkHint: "0→1 Design Path" },
  { id: 15, date: "Aug 2025", company: "Meta", question: "Tell me how would you measure the success of a video conference product like Zoom.", type: "Execution", tags: ["metrics", "video", "success"], frameworkHint: "Metric Diagnosis Path" },
  { id: 16, date: "Aug 2025", company: "Meta", question: "You are PM for a start-up. Design a product for people who work on farms.", type: "Product Sense", tags: ["startup", "rural", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 17, date: "Aug 2025", company: "Meta", question: "You are a PM in Reality Labs, you want to build a platform for experienced people, sort of shared economy.", type: "Product Sense", tags: ["AR/VR", "platform", "shared economy"], frameworkHint: "0→1 Design Path" },
  { id: 18, date: "Aug 2025", company: "Meta", question: "Design a product for emergency at home for Meta.", type: "Product Sense", tags: ["safety", "emergency", "consumer"], frameworkHint: "0→1 Design Path" },
  { id: 19, date: "Aug 2025", company: "Meta", question: "Design a product to find handyman.", type: "Product Sense", tags: ["marketplace", "services", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 20, date: "Aug 2025", company: "Meta", question: "PM for the Olympics - What would you build?", type: "Product Sense", tags: ["events", "sports", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 21, date: "Aug 2025", company: "Meta", question: "DMs — how would you improve them?", type: "Analytical", tags: ["messaging", "improvement", "engagement"], frameworkHint: "Improve Existing Product Path" },
  { id: 22, date: "Aug 2025", company: "Meta", question: "You are a PM in Reality Labs. Design a product for volunteering.", type: "Product Sense", tags: ["AR/VR", "volunteering", "social"], frameworkHint: "0→1 Design Path" },
  { id: 23, date: "Aug 2025", company: "Meta", question: "Leadership: What has been the most challenging project? Describe a strong pushback or conflict from another team. Tell me about negative feedback you received. Tell me about a failed project. What is your biggest development area right now?", type: "Leadership & Drive", tags: ["leadership", "conflict", "growth"] },
  // ── Jul 2025 ──────────────────────────────────────────────────────────────
  { id: 24, date: "Jul 2025", company: "Meta", question: "Assuming you are working for Uber, design a ride sharing product for senior citizens.", type: "Product Sense", tags: ["accessibility", "senior", "ride-sharing"], frameworkHint: "Accessibility Design Path" },
  { id: 25, date: "Jul 2025", company: "Meta", question: "Set goals and success metrics for Meta Pay.", type: "Execution", tags: ["metrics", "payments", "goals"], frameworkHint: "Metric Diagnosis Path" },
  { id: 26, date: "Jul 2025", company: "Meta", question: "PM at Meta; Design a product for volunteering.", type: "Product Sense", tags: ["social good", "volunteering", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 27, date: "Jul 2025", company: "Meta", question: "Goals and success metrics for Netflix podcasts.", type: "Analytical", tags: ["metrics", "audio", "Netflix"], frameworkHint: "Metric Diagnosis Path" },
  { id: 28, date: "Jul 2025", company: "Meta", question: "You are a PM at Zoom. Why does this product exist, what goals would you set, and how do you measure success?", type: "Analytical", tags: ["goals", "metrics", "Zoom"], frameworkHint: "Metric Diagnosis Path" },
  { id: 29, date: "Jul 2025", company: "Meta", question: "You are a PM for Meta, how would you define success for FB Events? Describe the product rationale, mission etc.", type: "Analytical", tags: ["events", "metrics", "rationale"], frameworkHint: "Metric Diagnosis Path" },
  { id: 30, date: "Jul 2025", company: "Meta", question: "You are a Meta PM, how would you build a product for home buying experience.", type: "Product Sense", tags: ["real estate", "marketplace", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 31, date: "Jul 2025", company: "Meta", question: "You are a PM at Meta. Build a product in the Jobs space.", type: "Product Sense", tags: ["jobs", "marketplace", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 32, date: "Jul 2025", company: "Stripe", question: "[Part 1] What are three products you use frequently? Let's talk about them. [Part 2] Let's build WhatsApp for Daycares.", type: "Product Sense", tags: ["product thinking", "0→1", "communication"], frameworkHint: "0→1 Design Path" },
  { id: 33, date: "Jul 2025", company: "Meta", question: "As Olympic Committee member, what will you build for 2028 Olympics?", type: "Product Sense", tags: ["events", "sports", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 34, date: "Jul 2025", company: "Meta", question: "Meta Pay - Why, goals, Metrics.", type: "Analytical", tags: ["payments", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 35, date: "Jul 2025", company: "Meta", question: "Should Netflix launch a podcast product and how would you set goal and measure the success for it?", type: "Analytical", tags: ["audio", "launch", "metrics"], frameworkHint: "Strategy Path" },
  { id: 36, date: "Jul 2025", company: "Meta", question: "PM for Reels. Why would Meta build it? How would you set goals? How would you measure success?", type: "Analytical", tags: ["Reels", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 37, date: "Jul 2025", company: "Meta", question: "Set success metrics and goals for Facebook Live.", type: "Analytical", tags: ["live video", "metrics", "goals"], frameworkHint: "Metric Diagnosis Path" },
  { id: 38, date: "Jul 2025", company: "Google", question: "What's your favorite product? How would you improve it?", type: "Product Sense", tags: ["improvement", "favorite product", "open-ended"], frameworkHint: "Improve Existing Product Path" },
  { id: 39, date: "Jul 2025", company: "Tinder", question: "How would you use CRM or engagement tools—like notifications—to get more women on Tinder to send at least one message every week?", type: "Analytical", tags: ["engagement", "retention", "notifications"], frameworkHint: "Growth Path" },
  { id: 40, date: "Jul 2025", company: "Tinder", question: "Imagine you're a Machine Learning PM at a gaming company like Candy Crush. An analyst notices that new user sessions drop by 40% within 4 days of signup. You're tasked with using ML to power CRM campaigns to re-engage these users. How would you approach this problem?", type: "Analytical", tags: ["ML", "retention", "churn", "CRM"], frameworkHint: "Metric Diagnosis Path" },
  { id: 41, date: "Jul 2025", company: "Meta", question: "As a Meta PM, design a product for users to learn a musical instrument remotely.", type: "Product Sense", tags: ["education", "music", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 42, date: "Jul 2025", company: "Meta", question: "Design a product for people to find contractors.", type: "Product Sense", tags: ["marketplace", "services", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 43, date: "Jul 2025", company: "Meta", question: "Design a product for fundraising.", type: "Product Sense", tags: ["social good", "fundraising", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 44, date: "Jul 2025", company: "Meta", question: "Imagine you are PM at Meta for scamming product. How would you define the rationale, goals, and success metrics. Should Meta invest in an anti scamming product?", type: "Analytical", tags: ["trust", "safety", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 45, date: "Jul 2025", company: "Meta", question: "You're a PM @ Uber Eats rolling out a new group ordering product. How would you measure success? Tradeoff: Your NSM is improving, but overall order ratings are decreasing. What would you do?", type: "Execution", tags: ["metrics", "launch", "tradeoffs"], frameworkHint: "Metric Diagnosis Path" },
  { id: 46, date: "Jul 2025", company: "Meta", question: "Design a product for group travel.", type: "Product Sense", tags: ["travel", "social", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 47, date: "Jul 2025", company: "Meta", question: "You are a PM at Meta, Success metrics for FB events. Trade off - 1x1000 ppl events vs 10x100.", type: "Analytical", tags: ["metrics", "tradeoffs", "events"], frameworkHint: "Metric Diagnosis Path" },
  { id: 48, date: "Jul 2025", company: "Meta", question: "You are a PM at Zoom - 1 month prior to launch - define success metrics and goals for the product.", type: "Analytical", tags: ["launch", "metrics", "Zoom"], frameworkHint: "Metric Diagnosis Path" },
  { id: 49, date: "Jul 2025", company: "Meta", question: "You are the PM for Google Maps, create a parking solution.", type: "Product Sense", tags: ["maps", "parking", "design"], frameworkHint: "0→1 Design Path" },
  { id: 50, date: "Jul 2025", company: "Meta", question: "You're a PM @ Disney. What product would you build for its theme parks?", type: "Product Sense", tags: ["entertainment", "theme parks", "0→1"], frameworkHint: "0→1 Design Path" },
  // ── Jun 2025 ──────────────────────────────────────────────────────────────
  { id: 51, date: "Jun 2025", company: "Meta", question: "Design a product for farming.", type: "Product Sense", tags: ["agriculture", "rural", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 52, date: "Jun 2025", company: "Meta", question: "You are a PM for Reels at Meta. Discuss if Meta should build Reels out, and define success metrics for the product.", type: "Analytical", tags: ["Reels", "strategy", "metrics"], frameworkHint: "Strategy Path" },
  { id: 53, date: "Jun 2025", company: "Meta", question: "Design a parking solution for Apple Maps.", type: "Product Sense", tags: ["maps", "parking", "design"], frameworkHint: "0→1 Design Path" },
  { id: 54, date: "Jun 2025", company: "Agoda", question: "You are a PM at Agoda. How much incremental revenue in USD can Agoda generate by selling ancillary services (spa, transportation, meals) to hotel guests?", type: "Estimation", tags: ["revenue", "estimation", "marketplace"], frameworkHint: "Metric Diagnosis Path" },
  { id: 55, date: "Jun 2025", company: "Google", question: "Design a product to help travelers at airports. How would you go about building it?", type: "Product Sense", tags: ["travel", "airports", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 56, date: "Jun 2025", company: "Google", question: "Name your top three favorite products, select one, and outline a plan to scale it by 10x.", type: "Strategy", tags: ["growth", "scale", "favorite product"], frameworkHint: "Growth Path" },
  { id: 57, date: "Jun 2025", company: "Google", question: "How would you price YouTube Premium?", type: "Pricing", tags: ["pricing", "YouTube", "monetization"], frameworkHint: "Strategy Path" },
  { id: 58, date: "Jun 2025", company: "Meta", question: "Design a product for art.", type: "Product Sense", tags: ["creative", "art", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 59, date: "Jun 2025", company: "Meta", question: "You're a PM for verified (the blue check mark). Define goals and success for the product.", type: "Execution", tags: ["verification", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 60, date: "Jun 2025", company: "Meta", question: "You're a PM at India. Design a product for group travel.", type: "Product Sense", tags: ["travel", "India", "social"], frameworkHint: "0→1 Design Path" },
  { id: 61, date: "Jun 2025", company: "Meta", question: "Define goals and success metrics for Reels.", type: "Analytical", tags: ["Reels", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 62, date: "Jun 2025", company: "Meta", question: "Describe the metrics for a new Netflix service for Podcasts.", type: "Analytical", tags: ["audio", "podcasts", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 63, date: "Jun 2025", company: "Meta", question: "You're the PM for Verified accounts. Why would we build this? What would we measure? Set goals.", type: "Analytical", tags: ["trust", "verification", "goals"], frameworkHint: "Metric Diagnosis Path" },
  { id: 64, date: "Jun 2025", company: "Meta", question: "We want to invest in a brand new area, volunteering. What would you build and why?", type: "Product Sense", tags: ["social good", "0→1", "volunteering"], frameworkHint: "0→1 Design Path" },
  { id: 65, date: "Jun 2025", company: "Meta", question: "What are the goals and success metrics for Horizon World (AR/VR)?", type: "Analytical", tags: ["AR/VR", "Horizon", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  // ── May 2025 ──────────────────────────────────────────────────────────────
  { id: 66, date: "May 2025", company: "Meta", question: "PM for AI chatbot in Instagram DM. Follow-up: your NSM is going up or down, what do you do?", type: "Analytical", tags: ["AI", "chatbot", "NSM", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 67, date: "May 2025", company: "Meta", question: "Build a parking solution for Google Maps.", type: "Product Sense", tags: ["maps", "parking", "design"], frameworkHint: "0→1 Design Path" },
  { id: 68, date: "May 2025", company: "Stripe", question: "Tell about your 3 favorite products and why? Design Spotify for restaurants.", type: "Product Sense", tags: ["product thinking", "music", "restaurants"], frameworkHint: "0→1 Design Path" },
  { id: 69, date: "May 2025", company: "Meta", question: "You are the PM for Reels. Why should we build this? What goals would you set? How would you measure success? How would you evaluate the trade off if time on Reels is going up and time on feed is going down?", type: "Analytical", tags: ["Reels", "tradeoffs", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 70, date: "May 2025", company: "Meta", question: "You are the PM at a startup with access to Satellite Imagery. What would you build and why?", type: "Product Sense", tags: ["startup", "satellite", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 71, date: "May 2025", company: "Meta", question: "Set goals and measure success for FB events.", type: "Analytical", tags: ["events", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 72, date: "May 2025", company: "Meta", question: "Design a product to help people find contractors.", type: "Product Sense", tags: ["marketplace", "services", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 73, date: "May 2025", company: "Meta", question: "You're a PM for Uber/Lyft. Design a rideshare app for senior citizens.", type: "Product Sense", tags: ["accessibility", "senior", "ride-sharing"], frameworkHint: "Accessibility Design Path" },
  { id: 74, date: "May 2025", company: "Meta", question: "You're a PM at Netflix for the homepage experience. How would you measure success for the Netflix homepage?", type: "Analytical", tags: ["Netflix", "homepage", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 75, date: "May 2025", company: "Meta", question: "PM for Zoom. Why does the product exist, what are success metrics and goals you would set.", type: "Analytical", tags: ["Zoom", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 76, date: "May 2025", company: "Meta", question: "PM for AI chatbot in Instagram DM.", type: "Product Sense", tags: ["AI", "chatbot", "Instagram"], frameworkHint: "0→1 Design Path" },
  { id: 77, date: "May 2025", company: "Meta", question: "PM for Google Maps, design a parking solution.", type: "Product Sense", tags: ["maps", "parking", "design"], frameworkHint: "0→1 Design Path" },
  { id: 78, date: "May 2025", company: "Genentech", question: "Design a content management solution for Medical Affairs.", type: "Product Sense", tags: ["healthcare", "B2B", "content"], frameworkHint: "0→1 Design Path" },
  // ── Apr 2025 ──────────────────────────────────────────────────────────────
  { id: 79, date: "Apr 2025", company: "Meta", question: "You are the PM for Reels. Why should we build this? What goals would you set? How would you measure success?", type: "Analytical", tags: ["Reels", "goals", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 80, date: "Apr 2025", company: "Meta", question: "Design a product that helps connect local communities.", type: "Product Sense", tags: ["community", "social", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 81, date: "Apr 2025", company: "Meta", question: "How would you improve Facebook Groups for professional networking?", type: "Product Sense", tags: ["Groups", "professional", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 82, date: "Apr 2025", company: "Google", question: "How would you improve Google Search for non-English speakers?", type: "Product Sense", tags: ["search", "localization", "accessibility"], frameworkHint: "Improve Existing Product Path" },
  { id: 83, date: "Apr 2025", company: "Google", question: "Design a product to help people manage their digital well-being.", type: "Product Sense", tags: ["well-being", "consumer", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 84, date: "Apr 2025", company: "Google", question: "How would you measure the success of Google Assistant?", type: "Analytical", tags: ["AI", "assistant", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 85, date: "Apr 2025", company: "Airbnb", question: "How would you improve the host onboarding experience on Airbnb?", type: "Product Sense", tags: ["onboarding", "host", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 86, date: "Apr 2025", company: "Airbnb", question: "Design a product to help Airbnb hosts increase their earnings.", type: "Product Sense", tags: ["marketplace", "host", "monetization"], frameworkHint: "0→1 Design Path" },
  { id: 87, date: "Apr 2025", company: "Uber", question: "How would you improve Uber's driver retention?", type: "Strategy", tags: ["retention", "driver", "supply"], frameworkHint: "Growth Path" },
  { id: 88, date: "Apr 2025", company: "Uber", question: "Design a safety feature for Uber riders traveling alone at night.", type: "Product Sense", tags: ["safety", "trust", "accessibility"], frameworkHint: "Accessibility Design Path" },
  { id: 89, date: "Apr 2025", company: "Netflix", question: "How would you measure the success of Netflix's recommendation algorithm?", type: "Analytical", tags: ["recommendations", "ML", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 90, date: "Apr 2025", company: "Netflix", question: "Should Netflix expand into live sports streaming? How would you evaluate this?", type: "Strategy", tags: ["sports", "expansion", "strategy"], frameworkHint: "Strategy Path" },
  { id: 91, date: "Apr 2025", company: "Spotify", question: "How would you grow Spotify's podcast listener base?", type: "Strategy", tags: ["podcasts", "growth", "audio"], frameworkHint: "Growth Path" },
  { id: 92, date: "Apr 2025", company: "Spotify", question: "Design a social listening feature for Spotify.", type: "Product Sense", tags: ["social", "music", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 93, date: "Apr 2025", company: "LinkedIn", question: "How would you improve LinkedIn's job recommendation feature?", type: "Product Sense", tags: ["jobs", "recommendations", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 94, date: "Apr 2025", company: "LinkedIn", question: "Design a product to help recent graduates find their first job.", type: "Product Sense", tags: ["jobs", "education", "0→1"], frameworkHint: "0→1 Design Path" },
  // ── Mar 2025 ──────────────────────────────────────────────────────────────
  { id: 95, date: "Mar 2025", company: "Meta", question: "How would you improve Instagram's Explore page?", type: "Product Sense", tags: ["Instagram", "discovery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 96, date: "Mar 2025", company: "Meta", question: "Design a product to help people manage their mental health using WhatsApp.", type: "Product Sense", tags: ["mental health", "WhatsApp", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 97, date: "Mar 2025", company: "Meta", question: "You are the PM for Facebook Marketplace. How would you grow GMV by 20% in the next year?", type: "Strategy", tags: ["marketplace", "growth", "GMV"], frameworkHint: "Growth Path" },
  { id: 98, date: "Mar 2025", company: "Google", question: "How would you improve Google Maps for cyclists?", type: "Product Sense", tags: ["maps", "cycling", "accessibility"], frameworkHint: "Improve Existing Product Path" },
  { id: 99, date: "Mar 2025", company: "Google", question: "Design a product to help small businesses manage their online presence.", type: "Product Sense", tags: ["SMB", "B2B", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 100, date: "Mar 2025", company: "Amazon", question: "How would you improve Amazon's return experience?", type: "Product Sense", tags: ["e-commerce", "returns", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 101, date: "Mar 2025", company: "Amazon", question: "Design a product to help Amazon sellers grow their business.", type: "Product Sense", tags: ["marketplace", "sellers", "B2B"], frameworkHint: "0→1 Design Path" },
  { id: 102, date: "Mar 2025", company: "Amazon", question: "How would you measure the success of Amazon Prime Video?", type: "Analytical", tags: ["streaming", "Prime", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 103, date: "Mar 2025", company: "Stripe", question: "How would you improve Stripe's onboarding for new merchants?", type: "Product Sense", tags: ["onboarding", "B2B", "fintech"], frameworkHint: "Improve Existing Product Path" },
  { id: 104, date: "Mar 2025", company: "Stripe", question: "Design a fraud detection product for small e-commerce businesses.", type: "Product Sense", tags: ["fraud", "fintech", "SMB"], frameworkHint: "0→1 Design Path" },
  { id: 105, date: "Mar 2025", company: "Doordash", question: "How would you improve DoorDash's delivery experience for customers?", type: "Product Sense", tags: ["delivery", "customer", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 106, date: "Mar 2025", company: "Doordash", question: "Design a product to help DoorDash reduce food waste.", type: "Product Sense", tags: ["sustainability", "food", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 107, date: "Mar 2025", company: "Doordash", question: "How would you measure the success of DoorDash's subscription program DashPass?", type: "Analytical", tags: ["subscription", "DashPass", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 108, date: "Mar 2025", company: "Lyft", question: "How would you improve Lyft's driver earnings transparency?", type: "Product Sense", tags: ["driver", "earnings", "transparency"], frameworkHint: "Improve Existing Product Path" },
  { id: 109, date: "Mar 2025", company: "Lyft", question: "Design a carpooling product for commuters.", type: "Product Sense", tags: ["carpooling", "commute", "0→1"], frameworkHint: "0→1 Design Path" },
  // ── Feb 2025 ──────────────────────────────────────────────────────────────
  { id: 110, date: "Feb 2025", company: "Meta", question: "How would you improve Facebook's birthday feature?", type: "Product Sense", tags: ["social", "engagement", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 111, date: "Feb 2025", company: "Meta", question: "Design a product to help parents monitor their children's social media usage.", type: "Product Sense", tags: ["parental controls", "safety", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 112, date: "Feb 2025", company: "Meta", question: "How would you grow WhatsApp Business in emerging markets?", type: "Strategy", tags: ["WhatsApp", "B2B", "emerging markets"], frameworkHint: "Growth Path" },
  { id: 113, date: "Feb 2025", company: "Google", question: "How would you improve Google Docs for remote teams?", type: "Product Sense", tags: ["collaboration", "remote", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 114, date: "Feb 2025", company: "Google", question: "Design a product to help people learn a new language using Google's AI.", type: "Product Sense", tags: ["education", "AI", "language"], frameworkHint: "0→1 Design Path" },
  { id: 115, date: "Feb 2025", company: "Google", question: "Google Search volume dropped 15% last week. Walk me through how you'd diagnose this.", type: "Analytical", tags: ["metric drop", "diagnosis", "search"], frameworkHint: "Metric Diagnosis Path" },
  { id: 116, date: "Feb 2025", company: "Microsoft", question: "How would you improve Microsoft Teams for hybrid work?", type: "Product Sense", tags: ["Teams", "hybrid", "B2B"], frameworkHint: "Improve Existing Product Path" },
  { id: 117, date: "Feb 2025", company: "Microsoft", question: "Design a product to help developers be more productive using GitHub Copilot.", type: "Product Sense", tags: ["AI", "developer tools", "productivity"], frameworkHint: "0→1 Design Path" },
  { id: 118, date: "Feb 2025", company: "Microsoft", question: "Should Microsoft acquire TikTok? How would you evaluate this?", type: "Strategy", tags: ["M&A", "social media", "strategy"], frameworkHint: "Strategy Path" },
  { id: 119, date: "Feb 2025", company: "Apple", question: "How would you improve the Apple Watch health tracking experience?", type: "Product Sense", tags: ["health", "wearables", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 120, date: "Feb 2025", company: "Apple", question: "Design a new feature for the iPhone that helps users be more present.", type: "Product Sense", tags: ["well-being", "iPhone", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 121, date: "Feb 2025", company: "Apple", question: "How would you measure the success of Apple Pay?", type: "Analytical", tags: ["payments", "Apple Pay", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 122, date: "Feb 2025", company: "Uber", question: "How would you improve Uber Eats for corporate meal ordering?", type: "Product Sense", tags: ["B2B", "food delivery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 123, date: "Feb 2025", company: "Uber", question: "Design a product to help Uber drivers manage their finances.", type: "Product Sense", tags: ["driver", "fintech", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 124, date: "Feb 2025", company: "Airbnb", question: "How would you improve Airbnb's search and discovery for unique stays?", type: "Product Sense", tags: ["search", "discovery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  // ── Jan 2025 ──────────────────────────────────────────────────────────────
  { id: 125, date: "Jan 2025", company: "Meta", question: "How would you improve Instagram Shopping?", type: "Product Sense", tags: ["e-commerce", "Instagram", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 126, date: "Jan 2025", company: "Meta", question: "Design a product to help creators monetize on Facebook.", type: "Product Sense", tags: ["creators", "monetization", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 127, date: "Jan 2025", company: "Meta", question: "How would you reduce misinformation on Facebook?", type: "Strategy", tags: ["trust", "safety", "content"], frameworkHint: "Strategy Path" },
  { id: 128, date: "Jan 2025", company: "Google", question: "How would you improve Google Photos for families?", type: "Product Sense", tags: ["photos", "family", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 129, date: "Jan 2025", company: "Google", question: "Design a product to help people navigate public transportation more efficiently.", type: "Product Sense", tags: ["transit", "maps", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 130, date: "Jan 2025", company: "Google", question: "YouTube Watch Time dropped 10% last month. What would you investigate?", type: "Analytical", tags: ["YouTube", "metric drop", "diagnosis"], frameworkHint: "Metric Diagnosis Path" },
  { id: 131, date: "Jan 2025", company: "Amazon", question: "How would you improve Amazon's product recommendation engine?", type: "Product Sense", tags: ["recommendations", "ML", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 132, date: "Jan 2025", company: "Amazon", question: "Design a product to help Amazon reduce delivery carbon footprint.", type: "Product Sense", tags: ["sustainability", "delivery", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 133, date: "Jan 2025", company: "Amazon", question: "Should Amazon enter the healthcare space? How would you evaluate this?", type: "Strategy", tags: ["healthcare", "expansion", "strategy"], frameworkHint: "Strategy Path" },
  { id: 134, date: "Jan 2025", company: "Netflix", question: "How would you improve Netflix's content discovery for new users?", type: "Product Sense", tags: ["onboarding", "discovery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 135, date: "Jan 2025", company: "Netflix", question: "Design a product to help Netflix reduce subscriber churn.", type: "Strategy", tags: ["retention", "churn", "subscription"], frameworkHint: "Growth Path" },
  { id: 136, date: "Jan 2025", company: "Spotify", question: "How would you improve Spotify's playlist creation experience?", type: "Product Sense", tags: ["playlists", "UX", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 137, date: "Jan 2025", company: "Spotify", question: "Design a product to help independent artists grow their audience on Spotify.", type: "Product Sense", tags: ["creators", "music", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 138, date: "Jan 2025", company: "LinkedIn", question: "How would you improve LinkedIn's content feed?", type: "Product Sense", tags: ["feed", "content", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 139, date: "Jan 2025", company: "LinkedIn", question: "Design a product to help LinkedIn users prepare for job interviews.", type: "Product Sense", tags: ["jobs", "interview prep", "0→1"], frameworkHint: "0→1 Design Path" },
  // ── Dec 2024 ──────────────────────────────────────────────────────────────
  { id: 140, date: "Dec 2024", company: "Meta", question: "How would you improve Facebook Events for virtual gatherings?", type: "Product Sense", tags: ["events", "virtual", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 141, date: "Dec 2024", company: "Meta", question: "Design a product to help elderly users stay connected on Facebook.", type: "Product Sense", tags: ["accessibility", "elderly", "social"], frameworkHint: "Accessibility Design Path" },
  { id: 142, date: "Dec 2024", company: "Meta", question: "How would you grow Instagram Reels engagement among Gen Z?", type: "Strategy", tags: ["Reels", "Gen Z", "engagement"], frameworkHint: "Growth Path" },
  { id: 143, date: "Dec 2024", company: "Google", question: "How would you improve Google Calendar for students?", type: "Product Sense", tags: ["calendar", "students", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 144, date: "Dec 2024", company: "Google", question: "Design a product to help people manage their home energy usage.", type: "Product Sense", tags: ["sustainability", "smart home", "0→1"], frameworkHint: "0→1 Design Path" },
  { id: 145, date: "Dec 2024", company: "Google", question: "How would you measure the success of Google Workspace?", type: "Analytical", tags: ["B2B", "Workspace", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 146, date: "Dec 2024", company: "Amazon", question: "How would you improve Alexa's smart home integration?", type: "Product Sense", tags: ["Alexa", "smart home", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 147, date: "Dec 2024", company: "Amazon", question: "Design a product to help Amazon Fresh compete with local grocery stores.", type: "Product Sense", tags: ["grocery", "delivery", "competition"], frameworkHint: "Strategy Path" },
  { id: 148, date: "Dec 2024", company: "Uber", question: "How would you improve Uber's surge pricing communication to riders?", type: "Product Sense", tags: ["pricing", "communication", "trust"], frameworkHint: "Improve Existing Product Path" },
  { id: 149, date: "Dec 2024", company: "Uber", question: "Design a product to help Uber expand into electric vehicle rentals.", type: "Strategy", tags: ["EV", "expansion", "strategy"], frameworkHint: "Strategy Path" },
  { id: 150, date: "Dec 2024", company: "Airbnb", question: "How would you improve Airbnb's review system?", type: "Product Sense", tags: ["reviews", "trust", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 151, date: "Dec 2024", company: "Airbnb", question: "Design a product to help Airbnb compete with hotels for business travelers.", type: "Strategy", tags: ["B2B", "business travel", "strategy"], frameworkHint: "Strategy Path" },
  { id: 152, date: "Dec 2024", company: "Doordash", question: "How would you improve DoorDash's restaurant partner experience?", type: "Product Sense", tags: ["B2B", "restaurant", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 153, date: "Dec 2024", company: "Doordash", question: "Design a product to help DoorDash expand into grocery delivery.", type: "Strategy", tags: ["grocery", "expansion", "strategy"], frameworkHint: "Strategy Path" },
  { id: 154, date: "Dec 2024", company: "Stripe", question: "How would you improve Stripe's developer documentation?", type: "Product Sense", tags: ["developer", "documentation", "B2B"], frameworkHint: "Improve Existing Product Path" },
  // ── Nov 2024 ──────────────────────────────────────────────────────────────
  { id: 155, date: "Nov 2024", company: "Meta", question: "How would you improve WhatsApp for small businesses in Southeast Asia?", type: "Product Sense", tags: ["WhatsApp", "SMB", "emerging markets"], frameworkHint: "Improve Existing Product Path" },
  { id: 156, date: "Nov 2024", company: "Meta", question: "Design a product to help Facebook users discover local events.", type: "Product Sense", tags: ["local", "events", "discovery"], frameworkHint: "0→1 Design Path" },
  { id: 157, date: "Nov 2024", company: "Meta", question: "How would you monetize Instagram Stories?", type: "Strategy", tags: ["monetization", "Stories", "ads"], frameworkHint: "Strategy Path" },
  { id: 158, date: "Nov 2024", company: "Google", question: "How would you improve Google Meet for education?", type: "Product Sense", tags: ["video", "education", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 159, date: "Nov 2024", company: "Google", question: "Design a product to help Google compete with OpenAI in the enterprise AI market.", type: "Strategy", tags: ["AI", "enterprise", "competition"], frameworkHint: "Strategy Path" },
  { id: 160, date: "Nov 2024", company: "Google", question: "How would you measure the success of Google Gemini?", type: "Analytical", tags: ["AI", "Gemini", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 161, date: "Nov 2024", company: "Microsoft", question: "How would you improve Microsoft Excel for data analysts?", type: "Product Sense", tags: ["Excel", "data", "B2B"], frameworkHint: "Improve Existing Product Path" },
  { id: 162, date: "Nov 2024", company: "Microsoft", question: "Design a product to help Microsoft compete with Slack in team communication.", type: "Strategy", tags: ["Teams", "competition", "strategy"], frameworkHint: "Strategy Path" },
  { id: 163, date: "Nov 2024", company: "Apple", question: "How would you improve Siri's accuracy and usefulness?", type: "Product Sense", tags: ["Siri", "AI", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 164, date: "Nov 2024", company: "Apple", question: "Design a new product category for Apple in the healthcare space.", type: "Strategy", tags: ["healthcare", "hardware", "strategy"], frameworkHint: "Strategy Path" },
  { id: 165, date: "Nov 2024", company: "Netflix", question: "How would you improve Netflix's parental controls?", type: "Product Sense", tags: ["parental controls", "safety", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 166, date: "Nov 2024", company: "Netflix", question: "Design a product to help Netflix expand into interactive entertainment.", type: "Strategy", tags: ["interactive", "gaming", "strategy"], frameworkHint: "Strategy Path" },
  { id: 167, date: "Nov 2024", company: "Spotify", question: "How would you improve Spotify's audiobook experience?", type: "Product Sense", tags: ["audiobooks", "audio", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 168, date: "Nov 2024", company: "LinkedIn", question: "How would you improve LinkedIn's premium subscription value?", type: "Product Sense", tags: ["premium", "subscription", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 169, date: "Nov 2024", company: "LinkedIn", question: "Design a product to help LinkedIn compete with Glassdoor for company reviews.", type: "Strategy", tags: ["reviews", "competition", "strategy"], frameworkHint: "Strategy Path" },
  // ── Oct 2024 ──────────────────────────────────────────────────────────────
  { id: 170, date: "Oct 2024", company: "Meta", question: "How would you improve Facebook's news feed algorithm?", type: "Product Sense", tags: ["feed", "algorithm", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 171, date: "Oct 2024", company: "Meta", question: "Design a product to help Meta compete with TikTok for short-form video.", type: "Strategy", tags: ["video", "competition", "strategy"], frameworkHint: "Strategy Path" },
  { id: 172, date: "Oct 2024", company: "Meta", question: "How would you measure the success of Meta's AI assistant?", type: "Analytical", tags: ["AI", "assistant", "metrics"], frameworkHint: "Metric Diagnosis Path" },
  { id: 173, date: "Oct 2024", company: "Google", question: "How would you improve Google's ad targeting while respecting user privacy?", type: "Product Sense", tags: ["ads", "privacy", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 174, date: "Oct 2024", company: "Google", question: "Design a product to help Google enter the healthcare data market.", type: "Strategy", tags: ["healthcare", "data", "strategy"], frameworkHint: "Strategy Path" },
  { id: 175, date: "Oct 2024", company: "Amazon", question: "How would you improve Amazon's seller analytics dashboard?", type: "Product Sense", tags: ["B2B", "analytics", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 176, date: "Oct 2024", company: "Amazon", question: "Design a product to help Amazon compete with Shopify for small businesses.", type: "Strategy", tags: ["SMB", "e-commerce", "strategy"], frameworkHint: "Strategy Path" },
  { id: 177, date: "Oct 2024", company: "Uber", question: "How would you improve Uber's accessibility features for riders with disabilities?", type: "Product Sense", tags: ["accessibility", "disability", "improvement"], frameworkHint: "Accessibility Design Path" },
  { id: 178, date: "Oct 2024", company: "Uber", question: "Design a product to help Uber expand into autonomous vehicle rides.", type: "Strategy", tags: ["autonomous", "EV", "strategy"], frameworkHint: "Strategy Path" },
  { id: 179, date: "Oct 2024", company: "Airbnb", question: "How would you improve Airbnb's pricing recommendations for hosts?", type: "Product Sense", tags: ["pricing", "host", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 180, date: "Oct 2024", company: "Doordash", question: "How would you improve DoorDash's order tracking experience?", type: "Product Sense", tags: ["tracking", "delivery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 181, date: "Oct 2024", company: "Stripe", question: "How would you improve Stripe's dispute resolution process for merchants?", type: "Product Sense", tags: ["disputes", "fintech", "B2B"], frameworkHint: "Improve Existing Product Path" },
  { id: 182, date: "Oct 2024", company: "Stripe", question: "Design a product to help Stripe expand into buy-now-pay-later.", type: "Strategy", tags: ["BNPL", "fintech", "strategy"], frameworkHint: "Strategy Path" },
  { id: 183, date: "Oct 2024", company: "Microsoft", question: "How would you improve Microsoft's Bing AI search experience?", type: "Product Sense", tags: ["AI", "search", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 184, date: "Oct 2024", company: "Apple", question: "How would you improve the App Store discovery experience?", type: "Product Sense", tags: ["App Store", "discovery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  // ── Sep 2024 ──────────────────────────────────────────────────────────────
  { id: 185, date: "Sep 2024", company: "Meta", question: "How would you improve Facebook Marketplace for peer-to-peer transactions?", type: "Product Sense", tags: ["marketplace", "P2P", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 186, date: "Sep 2024", company: "Meta", question: "Design a product to help Meta enter the professional networking space.", type: "Strategy", tags: ["professional", "LinkedIn", "strategy"], frameworkHint: "Strategy Path" },
  { id: 187, date: "Sep 2024", company: "Google", question: "How would you improve Google's product for job seekers?", type: "Product Sense", tags: ["jobs", "search", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 188, date: "Sep 2024", company: "Google", question: "Design a product to help Google compete with Zoom for video conferencing.", type: "Strategy", tags: ["video", "competition", "strategy"], frameworkHint: "Strategy Path" },
  { id: 189, date: "Sep 2024", company: "Amazon", question: "How would you improve Amazon's subscription box service?", type: "Product Sense", tags: ["subscription", "e-commerce", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 190, date: "Sep 2024", company: "Netflix", question: "How would you improve Netflix's social features for watch parties?", type: "Product Sense", tags: ["social", "watch party", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 191, date: "Sep 2024", company: "Spotify", question: "How would you improve Spotify's concert and live event discovery?", type: "Product Sense", tags: ["live events", "discovery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 192, date: "Sep 2024", company: "Uber", question: "How would you improve Uber's multi-stop ride experience?", type: "Product Sense", tags: ["ride-sharing", "multi-stop", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 193, date: "Sep 2024", company: "Airbnb", question: "How would you improve Airbnb's experience for solo travelers?", type: "Product Sense", tags: ["solo travel", "safety", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 194, date: "Sep 2024", company: "Doordash", question: "Design a product to help DoorDash compete with Instacart for grocery delivery.", type: "Strategy", tags: ["grocery", "competition", "strategy"], frameworkHint: "Strategy Path" },
  { id: 195, date: "Sep 2024", company: "LinkedIn", question: "How would you improve LinkedIn's event discovery feature?", type: "Product Sense", tags: ["events", "discovery", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 196, date: "Sep 2024", company: "Microsoft", question: "How would you improve Microsoft's productivity suite for Gen Z workers?", type: "Product Sense", tags: ["productivity", "Gen Z", "B2B"], frameworkHint: "Improve Existing Product Path" },
  { id: 197, date: "Sep 2024", company: "Apple", question: "How would you improve Apple Maps to compete with Google Maps?", type: "Product Sense", tags: ["maps", "competition", "improvement"], frameworkHint: "Improve Existing Product Path" },
  { id: 198, date: "Sep 2024", company: "Stripe", question: "How would you improve Stripe's checkout conversion rate for merchants?", type: "Product Sense", tags: ["conversion", "checkout", "fintech"], frameworkHint: "Improve Existing Product Path" },
  { id: 199, date: "Sep 2024", company: "Lyft", question: "Design a product to help Lyft expand into micro-mobility (scooters/bikes).", type: "Strategy", tags: ["micro-mobility", "expansion", "strategy"], frameworkHint: "Strategy Path" },
  { id: 200, date: "Sep 2024", company: "Tinder", question: "How would you improve Tinder's matching algorithm to increase meaningful connections?", type: "Product Sense", tags: ["matching", "engagement", "improvement"], frameworkHint: "Improve Existing Product Path" },
];

export const ALL_COMPANIES = Array.from(new Set(questionBank.map(q => q.company))).sort();

export function countByType(questions: BankQuestion[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const q of questions) {
    counts[q.type] = (counts[q.type] ?? 0) + 1;
  }
  return counts;
}
