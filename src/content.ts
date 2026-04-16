export type ComparisonRow = {
  model: string;
  bestFor: string;
  strength: string;
  tradeoff: string;
  priceTier: string;
};

export type FamilyCard = {
  tier: string;
  title: string;
  description: string;
  points: string[];
  accentClass: string;
};

export type LinkCard = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type SimplePoint = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroInsight = {
  label: string;
  text: string;
};

export const heroHighlights = [
  "Independent analysis",
  "Claude-first coverage",
  "Comparison-led structure",
];

export const heroInsights: HeroInsight[] = [
  {
    label: "Best value",
    text: "Claude Sonnet for balanced everyday work",
  },
  {
    label: "Best broad ecosystem",
    text: "GPT for users who want lots of integrations",
  },
  {
    label: "Best Google-native fit",
    text: "Gemini for Workspace-heavy workflows",
  },
  {
    label: "Best cheap speed",
    text: "Flash and Haiku-style tiers for lighter tasks",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    model: "Claude Opus 4.7",
    bestFor: "Complex reasoning, premium coding, long-form analysis",
    strength: "High-quality answers with strong depth",
    tradeoff: "Usually slower and pricier than lighter tiers",
    priceTier: "Premium",
  },
  {
    model: "Claude Sonnet 4.6",
    bestFor: "Balanced daily work across writing and code",
    strength: "Strong quality-to-cost ratio",
    tradeoff: "Not as deep as Opus on the hardest tasks",
    priceTier: "Mid",
  },
  {
    model: "Claude Haiku 4.5",
    bestFor: "Fast responses, lightweight automation, simple summaries",
    strength: "Speed and lower cost",
    tradeoff: "Less capable on nuanced reasoning",
    priceTier: "Budget",
  },
  {
    model: "GPT-5.4",
    bestFor: "General-purpose use, ecosystem breadth, mixed workflows",
    strength: "Wide product coverage and strong versatility",
    tradeoff: "May not be every user's favorite for long-form flow",
    priceTier: "Mid to premium",
  },
  {
    model: "Gemini 2.5 Pro",
    bestFor: "Google-centric workflows, research, multimodal tasks",
    strength: "Strong fit for Workspace and Google ecosystem users",
    tradeoff: "Choice depends heavily on your workflow stack",
    priceTier: "Mid to premium",
  },
];

export const familyCards: FamilyCard[] = [
  {
    tier: "Premium tier",
    title: "Claude Opus",
    description:
      "Best for demanding coding, heavier reasoning chains, research synthesis, and users who care more about output quality than speed.",
    points: [
      "Strongest pick for complex work",
      "Useful for higher-stakes answers",
      "Often the most expensive Claude path",
    ],
    accentClass: "accent-sand",
  },
  {
    tier: "Balanced tier",
    title: "Claude Sonnet",
    description:
      "The practical default for many users. Good for coding, writing, summarization, and general business tasks without the full Opus cost.",
    points: [
      "Strong day-to-day value",
      "Great middle ground for teams",
      'Usually the safest "start here" option',
    ],
    accentClass: "accent-mint",
  },
  {
    tier: "Fast tier",
    title: "Claude Haiku",
    description:
      "Built for quicker, cheaper tasks like lightweight assistants, drafts, categorization, and summaries where speed matters most.",
    points: [
      "Fast response times",
      "Budget-friendly for simple workloads",
      "Not the best choice for deep analysis",
    ],
    accentClass: "accent-sky",
  },
];

export const nextPages: LinkCard[] = [
  {
    title: "Best AI Model for Coding",
    description:
      "Compare Claude, GPT, and Gemini on debugging, repo understanding, refactoring, latency, and value for money.",
    cta: "Build this page from your testing framework",
    href: "#methodology",
  },
  {
    title: "Claude vs GPT",
    description:
      "A head-to-head page can rank better than a giant homepage section because the intent is clearer and easier to satisfy.",
    cta: "Use a short verdict plus evidence",
    href: "#faq",
  },
  {
    title: "Claude vs Gemini",
    description:
      "This page captures users comparing reasoning, context handling, and ecosystem fit, especially Google-heavy workflows.",
    cta: "Start from the snapshot table above",
    href: "#comparison",
  },
  {
    title: "Claude Pricing Guide",
    description:
      "Pricing intent is commercial and useful. A clear pricing explainer can support both search traffic and conversions later.",
    cta: "Add disclosures and update dates",
    href: "#footer",
  },
];

export const trafficPoints: SimplePoint[] = [
  {
    title: "Single page wins on speed",
    description: "Fast to publish, easier to maintain, and good for a first launch.",
  },
  {
    title: "Content cluster wins on reach",
    description: "Separate pages give you more opportunities to rank for distinct intents.",
  },
  {
    title: "Best compromise",
    description:
      "Launch one polished page first, then split the strongest sections into standalone URLs.",
  },
];

export const methodologyItems: SimplePoint[] = [
  {
    title: "1. Coding",
    description:
      "Check bug fixing, refactoring, instruction following, and ability to handle large context.",
  },
  {
    title: "2. Writing",
    description:
      "Review structure, clarity, tone control, and how much editing the outputs still need.",
  },
  {
    title: "3. Research",
    description:
      "Compare synthesis quality, accuracy habits, and how well the model handles long documents.",
  },
  {
    title: "4. Cost and speed",
    description: "Visitors care about performance per dollar, not just raw model capability.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is Claude Opus?",
    answer:
      "Claude Opus is the highest-capability Claude tier, usually aimed at harder reasoning, deeper coding help, and longer-form analytical work.",
  },
  {
    question: "Is Claude better than GPT?",
    answer:
      "It depends on what you value most. Claude is often favored for long-context writing and analysis, while GPT can be attractive for wider ecosystem coverage and broad product integrations.",
  },
  {
    question: "Which Claude model is best for coding?",
    answer:
      "Opus is the stronger premium choice for demanding coding, while Sonnet is often the better value starting point for most users.",
  },
  {
    question: "Is this website official?",
    answer:
      "No. This website is an independent informational resource and is not affiliated with Anthropic.",
  },
];
