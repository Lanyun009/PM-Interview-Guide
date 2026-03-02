// Lewis Lin's PM Question Bank — curated from the public Google Sheets
// Source: https://docs.google.com/spreadsheets/d/1rz10oEeLx-eGnilahKczYPhGfCUzIEKL-xRnjoQ-SX4
// Dataset spans 2019–2025, 2500+ community-submitted real interview questions
// This curated set of ~200 representative questions covers all types and major companies

export type QuestionType =
  | "Product Sense"
  | "Execution"
  | "Strategy"
  | "Analytical"
  | "Product Design"
  | "Behavioral"
  | "Estimation"
  | "System Design"
  | "Pricing"
  | "Leadership & Drive";

export type InterviewFormat = "Phone" | "Video" | "In-Person" | "On-Site" | "First Round" | "Other";

export interface BankQuestion {
  id: number;
  company: string;
  question: string;
  type: QuestionType;
  format: InterviewFormat;
  tags: string[];
}

export const QUESTION_TYPES: QuestionType[] = [
  "Product Sense",
  "Execution",
  "Strategy",
  "Analytical",
  "Product Design",
  "Behavioral",
  "Estimation",
  "System Design",
  "Pricing",
  "Leadership & Drive",
];

export const COMPANIES = [
  "Meta / Facebook",
  "Google",
  "Amazon",
  "Microsoft",
  "Uber",
  "Airbnb",
  "Stripe",
  "Doordash",
  "LinkedIn",
  "Coinbase",
  "Shopify",
  "Netflix",
  "Dropbox",
  "Zynga",
  "Adobe",
  "Instacart",
  "Walmart",
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
  "System Design": "#fb923c",
  "Pricing": "#34d399",
  "Leadership & Drive": "#e879f9",
};

export const questionBank: BankQuestion[] = [
  // ── FACEBOOK / META ──────────────────────────────────────────────
  { id: 1, company: "Meta / Facebook", question: "How do you improve Facebook Reactions?", type: "Product Sense", format: "Phone", tags: ["engagement", "social", "improvement"] },
  { id: 2, company: "Meta / Facebook", question: "Design a product that helps people become healthier.", type: "Product Sense", format: "Video", tags: ["health", "design", "0-to-1"] },
  { id: 3, company: "Meta / Facebook", question: "Design a healthcare product for people moving to a new city.", type: "Product Sense", format: "Video", tags: ["health", "design", "social"] },
  { id: 4, company: "Meta / Facebook", question: "Design a product to improve FB employees' health.", type: "Product Sense", format: "Video", tags: ["health", "internal", "design"] },
  { id: 5, company: "Meta / Facebook", question: "Design a product for a library.", type: "Product Sense", format: "Video", tags: ["design", "accessibility", "0-to-1"] },
  { id: 6, company: "Meta / Facebook", question: "Design a crisis management app.", type: "Product Sense", format: "Video", tags: ["design", "safety", "0-to-1"] },
  { id: 7, company: "Meta / Facebook", question: "Build a feature for lending (goods) on Facebook.", type: "Product Sense", format: "In-Person", tags: ["marketplace", "social", "feature"] },
  { id: 8, company: "Meta / Facebook", question: "What goals and success metrics would you set for buy & sell groups?", type: "Execution", format: "Phone", tags: ["metrics", "marketplace", "goals"] },
  { id: 9, company: "Meta / Facebook", question: "Goals and success metrics for FB video.", type: "Execution", format: "Phone", tags: ["metrics", "video", "goals"] },
  { id: 10, company: "Meta / Facebook", question: "How would you set a goal for Facebook Lite?", type: "Execution", format: "Phone", tags: ["metrics", "goals", "lite"] },
  { id: 11, company: "Meta / Facebook", question: "You are PM of FB Login used by 3rd parties and you notice successful logins metrics is down on a Monday morning, what will you do?", type: "Execution", format: "Phone", tags: ["metric drop", "diagnosis", "login"] },
  { id: 12, company: "Meta / Facebook", question: "You're the PM for FB watch. What goals would you set?", type: "Execution", format: "Phone", tags: ["metrics", "video", "goals"] },
  { id: 13, company: "Meta / Facebook", question: "How would you set a goal for Facebook Marketplace?", type: "Execution", format: "Video", tags: ["metrics", "marketplace", "goals"] },
  { id: 14, company: "Meta / Facebook", question: "You are PM of FB Events and you saw an overnight drop in RSVPs by 10%. How would you go about determining what happened?", type: "Execution", format: "Phone", tags: ["metric drop", "diagnosis", "events"] },
  { id: 15, company: "Meta / Facebook", question: "How would you measure the success of Facebook Stories?", type: "Execution", format: "Phone", tags: ["metrics", "stories", "success"] },
  { id: 16, company: "Meta / Facebook", question: "How would you measure success for IG stories.", type: "Execution", format: "Phone", tags: ["metrics", "instagram", "stories"] },
  { id: 17, company: "Meta / Facebook", question: "One smart Engineer came to you with the idea that we should show recommended Marketplace items on Newsfeed. What will you do?", type: "Execution", format: "Phone", tags: ["prioritization", "marketplace", "newsfeed"] },
  { id: 18, company: "Meta / Facebook", question: "IG Executives had a strategy meeting and decided they want to pursue something in the area of Education. You've been chosen as the PM to lead the effort. What do you do?", type: "Product Sense", format: "Video", tags: ["strategy", "education", "instagram"] },
  { id: 19, company: "Meta / Facebook", question: "Few years ago Facebook used to restrict user signups with .edu emails only. Why did they remove that restriction and what were the pros & cons of doing so?", type: "Strategy", format: "In-Person", tags: ["strategy", "growth", "decision"] },
  { id: 20, company: "Meta / Facebook", question: "How would you validate the idea for a borrowing and lending product? How would you build it?", type: "Product Sense", format: "First Round", tags: ["validation", "marketplace", "0-to-1"] },
  { id: 21, company: "Meta / Facebook", question: "Design a feature for meaningful connections for Groups.", type: "Product Sense", format: "First Round", tags: ["design", "social", "groups"] },
  { id: 22, company: "Meta / Facebook", question: "Define goal for IG shopping.", type: "Execution", format: "First Round", tags: ["metrics", "instagram", "shopping"] },
  { id: 23, company: "Meta / Facebook", question: "How would Meta/FB be interested in facilitating the events feature? Define success metrics for events feature on Facebook.", type: "Analytical", format: "First Round", tags: ["metrics", "events", "success"] },
  { id: 24, company: "Meta / Facebook", question: "You are the PM for Facebook app. Design a product for music.", type: "Product Sense", format: "First Round", tags: ["design", "music", "social"] },
  { id: 25, company: "Meta / Facebook", question: "PM for IG/FB reels, how would you measure success. Tradeoff: reels engagement is up but stories engagement is down?", type: "Execution", format: "On-Site", tags: ["metrics", "reels", "tradeoff"] },
  { id: 26, company: "Meta / Facebook", question: "You are the PM for 2028 LA Olympics. What would you build and why?", type: "Product Sense", format: "First Round", tags: ["design", "events", "0-to-1"] },
  { id: 27, company: "Meta / Facebook", question: "You are the PM at Meta. Build a product for Group Travel?", type: "Product Sense", format: "First Round", tags: ["design", "travel", "groups"] },
  { id: 28, company: "Meta / Facebook", question: "How would you incorporate a video service into Facebook?", type: "Product Sense", format: "On-Site", tags: ["video", "design", "strategy"] },
  { id: 29, company: "Meta / Facebook", question: "Build a product around Volunteering.", type: "Product Sense", format: "First Round", tags: ["design", "social good", "0-to-1"] },
  { id: 30, company: "Meta / Facebook", question: "Build a product around Education.", type: "Product Sense", format: "First Round", tags: ["design", "education", "0-to-1"] },
  { id: 31, company: "Meta / Facebook", question: "Design a fitness APP for Meta.", type: "Product Sense", format: "First Round", tags: ["design", "health", "fitness"] },
  { id: 32, company: "Meta / Facebook", question: "How would you build Meta Pay? Define success and why did Meta build this?", type: "Analytical", format: "First Round", tags: ["payments", "strategy", "metrics"] },
  { id: 33, company: "Meta / Facebook", question: "Design a parking solution for Google / Apple maps.", type: "Product Sense", format: "First Round", tags: ["design", "maps", "transportation"] },
  { id: 34, company: "Meta / Facebook", question: "Success Metrics for FB Fundraisers.", type: "Execution", format: "First Round", tags: ["metrics", "fundraising", "social good"] },
  { id: 35, company: "Meta / Facebook", question: "How would you build Meta Pay? Define success and why did Meta build this?", type: "Analytical", format: "First Round", tags: ["payments", "fintech", "strategy"] },

  // ── GOOGLE ───────────────────────────────────────────────────────
  { id: 36, company: "Google", question: "How would you price a brand new Kindle book?", type: "Pricing", format: "In-Person", tags: ["pricing", "amazon", "books"] },
  { id: 37, company: "Google", question: "Estimate memory needed for Nest cameras for fiscal year 2020.", type: "Estimation", format: "Phone", tags: ["estimation", "hardware", "iot"] },
  { id: 38, company: "Google", question: "Evaluate competitor landscape (direct & indirect) for Drop Box.", type: "Strategy", format: "Phone", tags: ["strategy", "competitive", "cloud"] },
  { id: 39, company: "Google", question: "How would you get more usage for Google Search?", type: "Strategy", format: "First Round", tags: ["growth", "search", "strategy"] },
  { id: 40, company: "Google", question: "Design a washer/dryer for urban living.", type: "Product Sense", format: "First Round", tags: ["design", "hardware", "urban"] },
  { id: 41, company: "Google", question: "Design a URL shortener.", type: "System Design", format: "On-Site", tags: ["system design", "technical", "scale"] },
  { id: 42, company: "Google", question: "How would you design a bike sharing product?", type: "Product Sense", format: "On-Site", tags: ["design", "transportation", "sharing"] },
  { id: 43, company: "Google", question: "Estimate the cost of storage for Google Photos. Why does Google offer such an expensive product for free?", type: "Estimation", format: "First Round", tags: ["estimation", "strategy", "photos"] },
  { id: 44, company: "Google", question: "How many umbrellas are sold in a city when it rains?", type: "Estimation", format: "First Round", tags: ["estimation", "market size"] },
  { id: 45, company: "Google", question: "Choose a google product. You're the lead PM for it, today is your first day. What are the top 2-3 things you'd do in the next 12 months?", type: "Product Sense", format: "First Round", tags: ["strategy", "prioritization", "onboarding"] },
  { id: 46, company: "Google", question: "Design a book shelf for kids.", type: "Product Design", format: "First Round", tags: ["design", "kids", "hardware"] },
  { id: 47, company: "Google", question: "Improve internet connectivity.", type: "Product Sense", format: "Phone", tags: ["infrastructure", "access", "improvement"] },
  { id: 48, company: "Google", question: "Design an Uber app for people with disabilities.", type: "Product Design", format: "Video", tags: ["accessibility", "design", "inclusive"] },
  { id: 49, company: "Google", question: "How would you increase revenue of MS PowerPoint?", type: "Product Sense", format: "Video", tags: ["monetization", "B2B", "strategy"] },
  { id: 50, company: "Google", question: "Immigrants are coming into the US and need healthcare. Design a product for them.", type: "Product Sense", format: "Video", tags: ["health", "accessibility", "design"] },
  { id: 51, company: "Google", question: "You're the CTO of a company, architect a program that provides unique IDs upon requests from a client. This program will be used by FB & Google. Hence needs to scale.", type: "System Design", format: "In-Person", tags: ["system design", "scale", "technical"] },
  { id: 52, company: "Google", question: "Improve Coffee Machine? What is the stickiness of Coffee Machine? After the design, what would you say to Nespresso CEO in the lift in 2 mins?", type: "Product Design", format: "On-Site", tags: ["design", "hardware", "improvement"] },
  { id: 53, company: "Google", question: "What should google do post-covid for Small and Medium businesses? How will I measure success for wellness tool for SMB employees?", type: "Strategy", format: "On-Site", tags: ["strategy", "SMB", "post-covid"] },
  { id: 54, company: "Google", question: "Google Chrome browser downloads in Android mobile has gone down. How would you find the root cause?", type: "Execution", format: "First Round", tags: ["metric drop", "diagnosis", "mobile"] },
  { id: 55, company: "Google", question: "If you're an Instagram Shop PM, what metric would you set as North Star?", type: "Analytical", format: "First Round", tags: ["metrics", "north star", "instagram"] },
  { id: 56, company: "Google", question: "Describe a time when you used data to influence a decision.", type: "Behavioral", format: "First Round", tags: ["behavioral", "data", "influence"] },
  { id: 57, company: "Google", question: "Estimate the number of wasted meeting hours in the US.", type: "Estimation", format: "First Round", tags: ["estimation", "productivity", "market size"] },
  { id: 58, company: "Google", question: "Give me three of your favorite tech products apps/devices. Imagine you're the PM of product. How would you improve it for the next 1-2 years?", type: "Product Design", format: "First Round", tags: ["improvement", "design", "roadmap"] },
  { id: 59, company: "Google", question: "PM at Camera company, we now have new features with facial recognition. Buildings already have cameras installed for live stream for security. What should the accuracy of the algorithm be for roll out as the sole source of verification to enter buildings?", type: "Analytical", format: "On-Site", tags: ["AI", "accuracy", "tradeoff"] },
  { id: 60, company: "Google", question: "You are a Google Search PM, an engineer has been tinkering with algo for snippets. An engineer believes it's a better algorithm. How would you evaluate that to put into production?", type: "Execution", format: "First Round", tags: ["experimentation", "A/B test", "search"] },

  // ── AMAZON ───────────────────────────────────────────────────────
  { id: 61, company: "Amazon", question: "What's the most interesting/impactful project you have done?", type: "Behavioral", format: "First Round", tags: ["behavioral", "impact", "project"] },
  { id: 62, company: "Amazon", question: "Tell me of a time when you had to deep dive and dig data to solve a problem.", type: "Behavioral", format: "First Round", tags: ["behavioral", "data", "problem solving"] },
  { id: 63, company: "Amazon", question: "Tell me of a time when a technical decision you took fell apart.", type: "Behavioral", format: "First Round", tags: ["behavioral", "failure", "technical"] },
  { id: 64, company: "Amazon", question: "Tell me of a time when you received harsh feedback. How did you react.", type: "Behavioral", format: "First Round", tags: ["behavioral", "feedback", "growth"] },
  { id: 65, company: "Amazon", question: "System Design for a Alexa enabled treadmill.", type: "System Design", format: "First Round", tags: ["system design", "IoT", "hardware"] },
  { id: 66, company: "Amazon", question: "Design a product to find doctors for people who are moving to a new city; assume you are a brand new startup.", type: "Product Sense", format: "First Round", tags: ["health", "design", "startup"] },
  { id: 67, company: "Amazon", question: "Tell me about a problem you solved in a novel way. What was the issue and what was the outcome?", type: "Behavioral", format: "First Round", tags: ["behavioral", "innovation", "problem solving"] },
  { id: 68, company: "Amazon", question: "Tell me about a system design that you got involved in any your past jobs.", type: "System Design", format: "On-Site", tags: ["system design", "experience", "technical"] },

  // ── MICROSOFT ────────────────────────────────────────────────────
  { id: 69, company: "Microsoft", question: "Design an Uber app for people with disabilities.", type: "Product Design", format: "Video", tags: ["accessibility", "design", "inclusive"] },
  { id: 70, company: "Microsoft", question: "How would you increase revenue of MS PowerPoint?", type: "Product Sense", format: "Video", tags: ["monetization", "B2B", "Office"] },
  { id: 71, company: "Microsoft", question: "Strategy for MS Office.", type: "Strategy", format: "Phone", tags: ["strategy", "B2B", "Office"] },
  { id: 72, company: "Microsoft", question: "What is your favorite game? What feature would you create for this game? What metrics would you look at to determine if this is worth while - before a single engineering dollar spent?", type: "Product Sense", format: "Phone", tags: ["gaming", "metrics", "feature"] },
  { id: 73, company: "Microsoft", question: "Create a home automation remote control and tell me about it.", type: "Product Sense", format: "Other", tags: ["design", "IoT", "hardware"] },

  // ── UBER ─────────────────────────────────────────────────────────
  { id: 74, company: "Uber", question: "If you were a PM at Uber, how would you decide whether to switch from the driver model to the self-driving cars model?", type: "Strategy", format: "First Round", tags: ["strategy", "autonomous", "decision"] },
  { id: 75, company: "Uber", question: "How to reduce driver canceling.", type: "Execution", format: "First Round", tags: ["supply", "retention", "driver"] },
  { id: 76, company: "Uber", question: "What goals would you set for Uber Green.", type: "Execution", format: "First Round", tags: ["metrics", "sustainability", "goals"] },
  { id: 77, company: "Uber", question: "How would you build a system to estimate the ETA of an Uber driver?", type: "System Design", format: "On-Site", tags: ["system design", "ETA", "maps"] },
  { id: 78, company: "Uber", question: "Build a system that matches available Uber drivers with riders.", type: "System Design", format: "On-Site", tags: ["system design", "matching", "marketplace"] },
  { id: 79, company: "Uber", question: "Design a kids ride-on feature for Uber.", type: "Product Design", format: "First Round", tags: ["design", "kids", "safety", "accessibility"] },

  // ── DOORDASH ─────────────────────────────────────────────────────
  { id: 80, company: "Doordash", question: "How would you improve the worst post-booking experience on Opentable?", type: "Product Sense", format: "First Round", tags: ["improvement", "restaurant", "UX"] },
  { id: 81, company: "Doordash", question: "Which app have you used for finding an apartment? How would you improve it?", type: "Product Design", format: "First Round", tags: ["improvement", "real estate", "UX"] },
  { id: 82, company: "Doordash", question: "Improve the post booking experience of Ticketmaster.", type: "Product Sense", format: "First Round", tags: ["improvement", "events", "UX"] },
  { id: 83, company: "Doordash", question: "If you were a PM at X, and you want to launch X, how would you make the case that X is worth launching? If it's approved, how would you price the X?", type: "Analytical", format: "First Round", tags: ["pricing", "launch", "strategy"] },

  // ── STRIPE ───────────────────────────────────────────────────────
  { id: 84, company: "Stripe", question: "Assume you're a PM on Google Maps and want to integrate with DoorDash to allow users to order delivery. Design the API.", type: "System Design", format: "On-Site", tags: ["API", "integration", "system design"] },
  { id: 85, company: "Stripe", question: "Stripe Checkout - merchants are complaining that by requiring billing details we are adding friction and hurting conversion. What would you do?", type: "Execution", format: "On-Site", tags: ["conversion", "UX", "tradeoff"] },
  { id: 86, company: "Stripe", question: "You're the PM responsible for reactions at Facebook. How would I launch? Who would I talk to?", type: "Execution", format: "On-Site", tags: ["launch", "social", "stakeholders"] },

  // ── LINKEDIN ─────────────────────────────────────────────────────
  { id: 87, company: "LinkedIn", question: "Few years ago Facebook used to restrict user signups with .edu emails only. Why did they remove that restriction and what were the pros & cons of doing so?", type: "Strategy", format: "In-Person", tags: ["strategy", "growth", "decision"] },
  { id: 88, company: "LinkedIn", question: "What feature would you include in LinkedIn to increase its revenue?", type: "Product Sense", format: "Phone", tags: ["monetization", "feature", "B2B"] },

  // ── COINBASE ─────────────────────────────────────────────────────
  { id: 89, company: "Coinbase", question: "If you are a PM at Spotify, how would you grow Spotify by 20%?", type: "Strategy", format: "First Round", tags: ["growth", "music", "strategy"] },
  { id: 90, company: "Coinbase", question: "Pick any Fintech product, talk about business goal, and build metrics.", type: "Execution", format: "First Round", tags: ["metrics", "fintech", "goals"] },
  { id: 91, company: "Coinbase", question: "Should Coinbase be in the NFT space and if so in what capacity?", type: "Strategy", format: "First Round", tags: ["strategy", "crypto", "NFT"] },

  // ── SHOPIFY ──────────────────────────────────────────────────────
  { id: 92, company: "Shopify", question: "Shopify realized it's difficult to build all the features to meet all of their users needs and made a decision to open up its platform allowing 3rd party developers to build apps for its users. Your product team is working on building the Shopify App Store that allows merchants to discover and install apps that can help them grow their businesses. What are the goals and success metrics of the app marketplace? Now that the Shopify App Store has been running for a year, the overall app installation and usage rate have stagnated. How would you go about growing the product?", type: "Product Sense", format: "First Round", tags: ["marketplace", "growth", "metrics"] },

  // ── INSTACART / DOORDASH ─────────────────────────────────────────
  { id: 93, company: "Instacart", question: "Design Safeway if their sales are declining in areas with Instacart and Bluepapron.", type: "Product Sense", format: "First Round", tags: ["strategy", "grocery", "competitive"] },

  // ── WALMART ──────────────────────────────────────────────────────
  { id: 94, company: "Walmart", question: "You're a PM at DoorDash, what feature will you improve? What KPI will you identify for success? After 3 months of that feature change, the KPI stays flat, what will you do?", type: "Product Sense", format: "First Round", tags: ["improvement", "metrics", "diagnosis"] },
  { id: 95, company: "Walmart", question: "Make a product to help people buy/sell a home.", type: "Product Sense", format: "First Round", tags: ["design", "real estate", "marketplace"] },

  // ── NETFLIX ──────────────────────────────────────────────────────
  { id: 96, company: "Netflix", question: "You're an experienced PM at Netflix. 6 months ago, launched Netflix Podcasts. What's the rationale, how to set goals, and how to measure success.", type: "Analytical", format: "On-Site", tags: ["metrics", "launch", "podcasts"] },
  { id: 97, company: "Netflix", question: "Goals for Netflix podcast.", type: "Analytical", format: "First Round", tags: ["metrics", "goals", "podcasts"] },

  // ── DROPBOX ──────────────────────────────────────────────────────
  { id: 98, company: "Dropbox", question: "How do you improve Slack?", type: "Product Sense", format: "Phone", tags: ["improvement", "B2B", "collaboration"] },

  // ── ZYNGA ────────────────────────────────────────────────────────
  { id: 99, company: "Zynga", question: "What is your favorite game? What feature would you create for this game? What metrics would you look at to determine if this is worth while - before a single engineering dollar spent?", type: "Product Sense", format: "Phone", tags: ["gaming", "feature", "metrics"] },

  // ── ADOBE ────────────────────────────────────────────────────────
  { id: 100, company: "Adobe", question: "Strategy for MS Office.", type: "Strategy", format: "Phone", tags: ["strategy", "B2B", "competitive"] },

  // ── SWIGGY / INDIA FOOD TECH ─────────────────────────────────────
  { id: 101, company: "Other", question: "Design a Food delivery app for Kids.", type: "Product Sense", format: "First Round", tags: ["design", "kids", "food delivery"] },
  { id: 102, company: "Other", question: "Design an emergency system for leveraging Amazon Alexa.", type: "Product Sense", format: "On-Site", tags: ["design", "voice", "safety"] },

  // ── DOCUSIGN ─────────────────────────────────────────────────────
  { id: 103, company: "Other", question: "Design a phone for children.", type: "Product Design", format: "First Round", tags: ["design", "kids", "hardware"] },

  // ── CISCO MERAKI ─────────────────────────────────────────────────
  { id: 104, company: "Other", question: "How to approach designing cloud architecture/tech stack of a Nest security camera?", type: "System Design", format: "Video", tags: ["system design", "IoT", "cloud"] },

  // ── REDFIN ───────────────────────────────────────────────────────
  { id: 105, company: "Other", question: "How do you measure success of the Hot Home feature in Redfin?", type: "Execution", format: "In-Person", tags: ["metrics", "real estate", "feature"] },

  // ── SCRIBD ───────────────────────────────────────────────────────
  { id: 106, company: "Other", question: "What is your proudest moment as a product manager?", type: "Behavioral", format: "In-Person", tags: ["behavioral", "leadership", "impact"] },

  // ── PARK+ ────────────────────────────────────────────────────────
  { id: 107, company: "Other", question: "What feature would you include in LinkedIn to increase its revenue?", type: "Product Sense", format: "Phone", tags: ["monetization", "B2B", "feature"] },

  // ── YAHOO ────────────────────────────────────────────────────────
  { id: 108, company: "Other", question: "Improve YouTube monetization / Improve getting to airport experience / Design a grocery shopping app.", type: "Product Sense", format: "First Round", tags: ["monetization", "improvement", "design"] },

  // ── AFFIRM ───────────────────────────────────────────────────────
  { id: 109, company: "Other", question: "Design a product to find doctors for people who are moving to a new city; assume you are a brand new startup.", type: "Product Sense", format: "First Round", tags: ["health", "design", "startup"] },

  // ── GRAMMARLY ────────────────────────────────────────────────────
  { id: 110, company: "Other", question: "The CEO wants you to develop a new 'lists' feature in Slack. How would you build it?", type: "Product Sense", format: "First Round", tags: ["design", "B2B", "feature"] },

  // ── GOOGLE CLOUD ─────────────────────────────────────────────────
  { id: 111, company: "Google", question: "Calculate the Productive hours lost due to traffic congestion each year in your city.", type: "Estimation", format: "First Round", tags: ["estimation", "transportation", "productivity"] },
  { id: 112, company: "Google", question: "Give me three of your favorite tech products apps/devices. Imagine you're the PM of product. How would you improve it for the next 1-2 years?", type: "Product Design", format: "First Round", tags: ["improvement", "roadmap", "design"] },

  // ── MUTEFLY ──────────────────────────────────────────────────────
  { id: 113, company: "Other", question: "I'm the founder. 1. Project people thought was difficult but you delivered. 2. Difficult work relationship. 3. Failed Product. 4. Weakness.", type: "Behavioral", format: "Other", tags: ["behavioral", "leadership", "failure"] },

  // ── ADDITIONAL CLASSIC PRODUCT SENSE QUESTIONS ───────────────────
  { id: 114, company: "Other", question: "Imagine you own a wildly successful food truck, and you want to scale it up. How would you do it?", type: "Strategy", format: "Phone", tags: ["strategy", "scaling", "growth"] },
  { id: 115, company: "Other", question: "Imagine you were PM for buyer seller market-place: what would be the key metric you studied, how would you diagnose a drop. If engineering brought a solution to you how would you decide whether or not to prioritize working on it.", type: "Execution", format: "In-Person", tags: ["metrics", "marketplace", "prioritization"] },
  { id: 116, company: "Other", question: "Pick an non-technical product you use. Why do you like it and why don't you like it? How will you improve it.", type: "Product Sense", format: "Other", tags: ["improvement", "design", "UX"] },
  { id: 117, company: "Other", question: "How would you design a Time Machine?", type: "Product Sense", format: "First Round", tags: ["design", "creative", "0-to-1"] },
  { id: 118, company: "Other", question: "Design an app for the DMV.", type: "Product Sense", format: "First Round", tags: ["design", "government", "UX"] },
  { id: 119, company: "Other", question: "Work for Toaster company, premium technologically advanced toaster, 8 slices in 20 seconds, 500$. Sales mostly via retail, very limited online presence. New competition same features half the price they have mainly online sales. What would you do?", type: "Strategy", format: "First Round", tags: ["strategy", "competitive", "pricing"] },
  { id: 120, company: "Other", question: "How would you design a fire alarm for deaf people?", type: "Product Design", format: "First Round", tags: ["accessibility", "design", "inclusive"] },
  { id: 121, company: "Other", question: "Design an ATM for blind users.", type: "Product Design", format: "First Round", tags: ["accessibility", "design", "inclusive"] },
  { id: 122, company: "Other", question: "Design a product for the elderly to use smartphones more easily.", type: "Product Design", format: "First Round", tags: ["accessibility", "design", "elderly"] },
  { id: 123, company: "Other", question: "How would you measure success for a new feature you just launched?", type: "Execution", format: "First Round", tags: ["metrics", "launch", "success"] },
  { id: 124, company: "Other", question: "How would you prioritize a list of 10 features for the next quarter?", type: "Execution", format: "First Round", tags: ["prioritization", "roadmap", "tradeoff"] },
  { id: 125, company: "Other", question: "Your north star metric dropped 20% overnight. Walk me through how you'd diagnose this.", type: "Execution", format: "First Round", tags: ["metric drop", "diagnosis", "north star"] },

  // ── META BEHAVIORAL ──────────────────────────────────────────────
  { id: 126, company: "Meta / Facebook", question: "Tell me a time 1. you delivered on a product you didn't sign up for, 2. disagreed with a colleague and your stance was NOT proved right, 3. you delivered something with resource constraints.", type: "Leadership & Drive", format: "On-Site", tags: ["behavioral", "leadership", "constraints"] },
  { id: 127, company: "Meta / Facebook", question: "Tell me a time when you had a 1. difficult working relationship, 2. product you delivered that failed, 3. challenging time obtaining support from others, 4. harsh feedback from peer or manager.", type: "Leadership & Drive", format: "On-Site", tags: ["behavioral", "leadership", "failure"] },
  { id: 128, company: "Meta / Facebook", question: "You are the PM for Facebook app. Design a product for music.", type: "Product Sense", format: "First Round", tags: ["design", "music", "social"] },
  { id: 129, company: "Meta / Facebook", question: "Pretend Verified is a New Product Launch. How would you go about defining success?", type: "Analytical", format: "First Round", tags: ["launch", "metrics", "verification"] },

  // ── ADDITIONAL GOOGLE ─────────────────────────────────────────────
  { id: 130, company: "Google", question: "1) Why would you buy the shoes with kinetic energy of 5X? 2) Career Failure story. 3) Success metrics for google photos. 4) Should google translate add elearning option on the menu or not?", type: "Product Design", format: "First Round", tags: ["metrics", "behavioral", "design"] },
  { id: 131, company: "Google", question: "PM at Apple/Google - Build a product around parking.", type: "Product Sense", format: "On-Site", tags: ["design", "transportation", "maps"] },
  { id: 132, company: "Google", question: "Define Goals and Success Metrics for FB Groups focused on buying/selling (assume fb marketplace does not exist).", type: "Analytical", format: "First Round", tags: ["metrics", "marketplace", "goals"] },
  { id: 133, company: "Google", question: "What would you build as a neighborhood product for Facebook?", type: "Product Sense", format: "First Round", tags: ["design", "social", "local"] },
  { id: 134, company: "Google", question: "You're an experienced PM at Netflix. 6 months ago, launched Netflix Podcasts. What's the rationale, how to set goals, and how to measure success.", type: "Analytical", format: "On-Site", tags: ["metrics", "launch", "strategy"] },
  { id: 135, company: "Google", question: "Design a parking solution for Google / Apple maps.", type: "Product Sense", format: "First Round", tags: ["design", "maps", "transportation"] },

  // ── ADDITIONAL BEHAVIORAL ─────────────────────────────────────────
  { id: 136, company: "Other", question: "Tell me about a time you navigated a challenging work relationship. Tell me about a time you gave difficult/constructive feedback to someone. Tell me about a time you learned something from your colleague. Tell me about a product failure. Tell me about an area of weakness you are working on.", type: "Leadership & Drive", format: "On-Site", tags: ["behavioral", "leadership", "feedback"] },
  { id: 137, company: "Other", question: "A critical feedback you received.", type: "Behavioral", format: "First Round", tags: ["behavioral", "feedback", "growth"] },
  { id: 138, company: "Other", question: "Tell me a challenging product that you are proud of. Tell me a time you received a critical feedback. Follow-up, any other thing you are currently working on to improve? Tell me a time you had cross-functional challenges. Tell me how your product failed.", type: "Leadership & Drive", format: "On-Site", tags: ["behavioral", "leadership", "failure"] },

  // ── ADDITIONAL ESTIMATION ─────────────────────────────────────────
  { id: 139, company: "Other", question: "Estimate the number of piano tuners in Chicago.", type: "Estimation", format: "Phone", tags: ["estimation", "market size", "classic"] },
  { id: 140, company: "Other", question: "How many gas stations are in the US?", type: "Estimation", format: "Phone", tags: ["estimation", "market size"] },
  { id: 141, company: "Other", question: "Estimate the market size for electric vehicles in 2030.", type: "Estimation", format: "First Round", tags: ["estimation", "market size", "EV"] },

  // ── ADDITIONAL STRATEGY ───────────────────────────────────────────
  { id: 142, company: "Other", question: "Should Uber enter the grocery delivery market?", type: "Strategy", format: "First Round", tags: ["strategy", "expansion", "marketplace"] },
  { id: 143, company: "Other", question: "How would you decide whether to launch a new product in India vs. Brazil?", type: "Strategy", format: "First Round", tags: ["strategy", "international", "expansion"] },
  { id: 144, company: "Other", question: "What would you do if your top competitor launched a feature that directly copies yours?", type: "Strategy", format: "First Round", tags: ["strategy", "competitive", "response"] },
  { id: 145, company: "Other", question: "How would you build a moat for a social networking product?", type: "Strategy", format: "First Round", tags: ["strategy", "moat", "social"] },

  // ── ADDITIONAL EXECUTION ──────────────────────────────────────────
  { id: 146, company: "Other", question: "DAU dropped 20% last week. Walk me through your investigation.", type: "Execution", format: "First Round", tags: ["metric drop", "diagnosis", "DAU"] },
  { id: 147, company: "Other", question: "How would you run an A/B test for a new onboarding flow?", type: "Execution", format: "First Round", tags: ["experimentation", "A/B test", "onboarding"] },
  { id: 148, company: "Other", question: "You have 3 engineers for 3 months. What would you build?", type: "Execution", format: "First Round", tags: ["prioritization", "constraints", "roadmap"] },
  { id: 149, company: "Other", question: "How would you improve user retention for a subscription app?", type: "Execution", format: "First Round", tags: ["retention", "subscription", "improvement"] },

  // ── ADDITIONAL ANALYTICAL ─────────────────────────────────────────
  { id: 150, company: "Other", question: "What is the North Star metric for Airbnb? Why?", type: "Analytical", format: "First Round", tags: ["north star", "metrics", "marketplace"] },
  { id: 151, company: "Other", question: "How would you measure the success of Instagram Reels?", type: "Analytical", format: "First Round", tags: ["metrics", "video", "social"] },
  { id: 152, company: "Other", question: "What metrics would you use to evaluate the health of a two-sided marketplace?", type: "Analytical", format: "First Round", tags: ["metrics", "marketplace", "health"] },
  { id: 153, company: "Other", question: "How would you set up a dashboard to monitor a newly launched feature?", type: "Analytical", format: "First Round", tags: ["metrics", "monitoring", "launch"] },

  // ── ADDITIONAL PRODUCT DESIGN ─────────────────────────────────────
  { id: 154, company: "Other", question: "Design a product for remote workers who feel isolated.", type: "Product Design", format: "First Round", tags: ["design", "remote work", "social"] },
  { id: 155, company: "Other", question: "Design a navigation app for visually impaired users.", type: "Product Design", format: "First Round", tags: ["accessibility", "design", "maps"] },
  { id: 156, company: "Other", question: "Design a product to help seniors stay connected with family.", type: "Product Design", format: "First Round", tags: ["design", "elderly", "social"] },
  { id: 157, company: "Other", question: "Design a product that helps people learn a new language in 15 minutes a day.", type: "Product Design", format: "First Round", tags: ["design", "education", "habit"] },
  { id: 158, company: "Other", question: "Design a feature for Spotify that helps users discover new music.", type: "Product Design", format: "First Round", tags: ["design", "music", "discovery"] },
  { id: 159, company: "Other", question: "Design a product for parents to manage their kids' screen time.", type: "Product Design", format: "First Round", tags: ["design", "kids", "parenting"] },
  { id: 160, company: "Other", question: "How would you redesign the airport experience?", type: "Product Design", format: "First Round", tags: ["design", "travel", "UX"] },

  // ── ADDITIONAL META ───────────────────────────────────────────────
  { id: 161, company: "Meta / Facebook", question: "How would you grow WhatsApp's DAU by 20%?", type: "Strategy", format: "First Round", tags: ["growth", "messaging", "DAU"] },
  { id: 162, company: "Meta / Facebook", question: "Design a product for Meta's metaverse that drives daily active usage.", type: "Product Sense", format: "First Round", tags: ["metaverse", "design", "engagement"] },
  { id: 163, company: "Meta / Facebook", question: "How would you improve Instagram's algorithm to show more relevant content?", type: "Product Sense", format: "First Round", tags: ["algorithm", "feed", "relevance"] },
  { id: 164, company: "Meta / Facebook", question: "Facebook Marketplace GMV is declining. What would you do?", type: "Execution", format: "On-Site", tags: ["metric drop", "marketplace", "diagnosis"] },
  { id: 165, company: "Meta / Facebook", question: "Design a product for Meta to enter the healthcare space.", type: "Product Sense", format: "First Round", tags: ["health", "design", "expansion"] },

  // ── ADDITIONAL GOOGLE ─────────────────────────────────────────────
  { id: 166, company: "Google", question: "How would you improve Google Maps for cyclists?", type: "Product Sense", format: "First Round", tags: ["improvement", "maps", "transportation"] },
  { id: 167, company: "Google", question: "Design a product to help people find trustworthy local services (plumbers, electricians).", type: "Product Sense", format: "First Round", tags: ["design", "local", "trust"] },
  { id: 168, company: "Google", question: "Google Assistant usage is declining. What would you do?", type: "Execution", format: "First Round", tags: ["metric drop", "voice", "diagnosis"] },
  { id: 169, company: "Google", question: "How would you monetize Google Maps?", type: "Strategy", format: "First Round", tags: ["monetization", "maps", "strategy"] },

  // ── ADDITIONAL AMAZON ─────────────────────────────────────────────
  { id: 170, company: "Amazon", question: "How would you improve Amazon's recommendation engine?", type: "Product Sense", format: "First Round", tags: ["improvement", "ML", "recommendations"] },
  { id: 171, company: "Amazon", question: "Design a product for Amazon to enter the healthcare space.", type: "Product Sense", format: "First Round", tags: ["health", "design", "expansion"] },
  { id: 172, company: "Amazon", question: "Amazon Prime membership is declining. What would you do?", type: "Execution", format: "First Round", tags: ["retention", "subscription", "diagnosis"] },
  { id: 173, company: "Amazon", question: "How would you measure the success of Alexa?", type: "Analytical", format: "First Round", tags: ["metrics", "voice", "success"] },

  // ── ADDITIONAL UBER ───────────────────────────────────────────────
  { id: 174, company: "Uber", question: "How would you improve Uber Eats' driver retention?", type: "Execution", format: "First Round", tags: ["retention", "supply", "driver"] },
  { id: 175, company: "Uber", question: "Design a safety feature for Uber that protects both riders and drivers.", type: "Product Design", format: "First Round", tags: ["safety", "design", "trust"] },
  { id: 176, company: "Uber", question: "How would you grow Uber's market share in Southeast Asia?", type: "Strategy", format: "First Round", tags: ["growth", "international", "strategy"] },
  { id: 177, company: "Uber", question: "Uber's surge pricing is causing negative press. What would you do?", type: "Strategy", format: "First Round", tags: ["pricing", "PR", "strategy"] },

  // ── ADDITIONAL AIRBNB ─────────────────────────────────────────────
  { id: 178, company: "Other", question: "How would you improve Airbnb's host onboarding experience?", type: "Product Sense", format: "First Round", tags: ["onboarding", "supply", "UX"] },
  { id: 179, company: "Other", question: "Design a feature for Airbnb to increase trust between hosts and guests.", type: "Product Design", format: "First Round", tags: ["trust", "design", "marketplace"] },
  { id: 180, company: "Other", question: "Airbnb's booking conversion rate dropped 15%. What would you investigate?", type: "Execution", format: "First Round", tags: ["conversion", "metric drop", "diagnosis"] },

  // ── ADDITIONAL LINKEDIN ───────────────────────────────────────────
  { id: 181, company: "LinkedIn", question: "How would you improve LinkedIn's job recommendation algorithm?", type: "Product Sense", format: "First Round", tags: ["improvement", "ML", "jobs"] },
  { id: 182, company: "LinkedIn", question: "Design a product for LinkedIn to help recent graduates find their first job.", type: "Product Design", format: "First Round", tags: ["design", "jobs", "education"] },
  { id: 183, company: "LinkedIn", question: "LinkedIn's premium subscription growth is stagnating. What would you do?", type: "Strategy", format: "First Round", tags: ["monetization", "subscription", "growth"] },

  // ── ADDITIONAL SPOTIFY ────────────────────────────────────────────
  { id: 184, company: "Other", question: "How would you improve Spotify's podcast discovery?", type: "Product Sense", format: "First Round", tags: ["improvement", "podcasts", "discovery"] },
  { id: 185, company: "Other", question: "Design a social feature for Spotify that connects music fans.", type: "Product Design", format: "First Round", tags: ["design", "social", "music"] },
  { id: 186, company: "Other", question: "Spotify's free-to-premium conversion rate is declining. What would you do?", type: "Execution", format: "First Round", tags: ["conversion", "subscription", "diagnosis"] },

  // ── ADDITIONAL DUOLINGO ───────────────────────────────────────────
  { id: 187, company: "Other", question: "How would you grow Duolingo's DAU by 30%?", type: "Strategy", format: "First Round", tags: ["growth", "education", "DAU"] },
  { id: 188, company: "Other", question: "Design a feature for Duolingo that improves long-term retention.", type: "Product Design", format: "First Round", tags: ["retention", "education", "habit"] },

  // ── ADDITIONAL SLACK ──────────────────────────────────────────────
  { id: 189, company: "Other", question: "How would you improve Slack's onboarding for new teams?", type: "Product Sense", format: "First Round", tags: ["onboarding", "B2B", "UX"] },
  { id: 190, company: "Other", question: "Design a feature for Slack that helps remote teams feel more connected.", type: "Product Design", format: "First Round", tags: ["design", "remote work", "B2B"] },

  // ── ADDITIONAL FINTECH ────────────────────────────────────────────
  { id: 191, company: "Other", question: "Design a financial product for unbanked populations in emerging markets.", type: "Product Design", format: "First Round", tags: ["design", "fintech", "accessibility"] },
  { id: 192, company: "Other", question: "How would you measure the success of a peer-to-peer payment feature?", type: "Analytical", format: "First Round", tags: ["metrics", "payments", "success"] },
  { id: 193, company: "Other", question: "Design a product that helps people save money automatically.", type: "Product Design", format: "First Round", tags: ["design", "fintech", "savings"] },

  // ── ADDITIONAL EDTECH ─────────────────────────────────────────────
  { id: 194, company: "Other", question: "Design an online learning platform for K-12 students in rural areas.", type: "Product Design", format: "First Round", tags: ["design", "education", "accessibility"] },
  { id: 195, company: "Other", question: "How would you improve Coursera's course completion rate?", type: "Product Sense", format: "First Round", tags: ["retention", "education", "improvement"] },

  // ── ADDITIONAL HEALTH ─────────────────────────────────────────────
  { id: 196, company: "Other", question: "Design a product that helps people manage chronic illness.", type: "Product Design", format: "First Round", tags: ["design", "health", "chronic"] },
  { id: 197, company: "Other", question: "How would you measure the success of a mental health app?", type: "Analytical", format: "First Round", tags: ["metrics", "health", "mental health"] },

  // ── ADDITIONAL SYSTEM DESIGN ──────────────────────────────────────
  { id: 198, company: "Other", question: "Design a rate limiter for a high-traffic API.", type: "System Design", format: "On-Site", tags: ["system design", "API", "scale"] },
  { id: 199, company: "Other", question: "Design a notification system that can handle 10 million users.", type: "System Design", format: "On-Site", tags: ["system design", "scale", "notifications"] },
  { id: 200, company: "Other", question: "Design a real-time collaborative document editing system like Google Docs.", type: "System Design", format: "On-Site", tags: ["system design", "real-time", "collaboration"] },
];

export const QUESTION_BANK_STATS = {
  total: questionBank.length,
  companies: Array.from(new Set(questionBank.map(q => q.company))).length,
  types: QUESTION_TYPES.length,
  source: "Lewis Lin's PM Question Bank (community-sourced, 2019–2025)",
  sourceUrl: "https://docs.google.com/spreadsheets/d/1rz10oEeLx-eGnilahKczYPhGfCUzIEKL-xRnjoQ-SX4",
};
