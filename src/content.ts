export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type TableData = {
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export type Article = {
  slug: string;
  path: string;
  category: string;
  readTime: string;
  updated: string;
  kicker: string;
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  sidebarTitle: string;
  sidebarNote: string;
  sections: ArticleSection[];
  table?: TableData;
  relatedSlugs: string[];
};

export type TopicCluster = {
  title: string;
  description: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AboutSection = {
  title: string;
  text: string;
  points: string[];
};

export const siteUrl = "https://claudeopusmodels.com";

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/compare/claude-vs-gpt", label: "Compare", matchPrefix: "/compare" },
  { href: "/guides/best-ai-model-for-coding", label: "Guides", matchPrefix: "/guides" },
  { href: "/pricing/claude-pricing-guide", label: "Pricing" },
  { href: "/about", label: "About" },
];

export const homeSidebarNotes = [
  {
    title: "Start with the pillar page",
    text: "Use the Claude Opus guide as the homepage anchor, then let comparison and use-case articles support it.",
  },
  {
    title: "Blog structure beats one giant page",
    text: "Publishing separate URLs makes it easier to satisfy narrow search intent and gives the domain more total entry points.",
  },
  {
    title: "Keep the site evergreen",
    text: "Avoid hard-coding fragile claims. Publish frameworks, use cases, and editorial verdicts that stay useful even as vendors refresh names.",
  },
];

export const homeTopicClusters: TopicCluster[] = [
  {
    title: "Pillar and model pages",
    description:
      "These pages explain what the Claude tiers are for and give first-time visitors a strong place to start.",
    links: [
      { label: "Claude Opus guide", href: "/models/claude-opus" },
      { label: "Best Claude model for writing", href: "/guides/best-claude-model-for-writing" },
    ],
  },
  {
    title: "Comparison lane",
    description:
      "These pages answer the questions people ask when they are actively deciding between platforms.",
    links: [
      { label: "Claude vs GPT", href: "/compare/claude-vs-gpt" },
      { label: "Claude vs Gemini", href: "/compare/claude-vs-gemini" },
    ],
  },
  {
    title: "Commercial and use-case lane",
    description:
      "These pages pull in users who are closer to buying, budgeting, or shipping real work.",
    links: [
      { label: "Best AI model for coding", href: "/guides/best-ai-model-for-coding" },
      { label: "Claude pricing guide", href: "/pricing/claude-pricing-guide" },
    ],
  },
];

export const homeFaq: FaqItem[] = [
  {
    question: "Can a blog-style AI site outperform a single landing page?",
    answer:
      "Yes. A single homepage can rank for broad intent, but an editorial structure with dedicated comparison and guide pages usually wins on total traffic, internal linking, and topical authority.",
  },
  {
    question: "What should this domain cover first?",
    answer:
      "Start with a pillar guide to Claude Opus, then publish comparison pages, use-case guides, and one pricing explainer. That gives the site both informational and commercial-intent coverage.",
  },
  {
    question: "Should every page chase the latest model versions?",
    answer:
      "Not necessarily. The strongest editorial pages explain who each family is for, what kind of work it handles well, and how to choose between them. That keeps the content useful between vendor updates.",
  },
  {
    question: "What makes an AI model blog feel trustworthy?",
    answer:
      "Clear disclosures, exact update dates, repeatable comparison criteria, and short editorial verdicts help the site feel grounded instead of padded or generic.",
  },
];

export const aboutSections: AboutSection[] = [
  {
    title: "Editorial mission",
    text: "Claude Opus Models is built as an independent publication, not a vendor microsite. The goal is to help readers decide what to use, not drown them in benchmark theater.",
    points: [
      "Favor practical guidance over feature-list copy.",
      "Show who each model family is for and who should skip it.",
      "Keep every page easy to scan before readers commit to the full article.",
    ],
  },
  {
    title: "Site structure",
    text: "The domain is organized as a topical cluster: one pillar page, a comparison lane, a use-case lane, and a pricing lane. That structure keeps the homepage broad while giving individual queries their own destination.",
    points: [
      "Pillar page for Claude Opus and the Claude family.",
      "Comparison pages for Claude vs GPT and Claude vs Gemini.",
      "Guides for coding and writing workloads.",
      "Pricing coverage for commercial-intent visitors.",
    ],
  },
  {
    title: "Publishing standard",
    text: "When a page includes version-sensitive or price-sensitive details, it should be refreshed with a visible update date and a short note on what changed.",
    points: [
      "Use exact dates like April 17, 2026 when a refresh happens.",
      "Keep evergreen framework sections even when vendor names change.",
      "Link related pages so readers can move from broad questions to specific decisions.",
    ],
  },
];

export const categoryNotes: Record<string, string> = {
  "Model Guide": "Anchor pages that explain the Claude family and give new visitors a clean starting point.",
  Comparison: "Decision pages for readers comparing platforms head-to-head.",
  Guide: "Use-case coverage for people choosing a model for specific work.",
  Pricing: "Commercial-intent pages that explain budgeting, value, and upgrade logic.",
};

export const articles: Article[] = [
  {
    slug: "claude-opus",
    path: "/models/claude-opus",
    category: "Model Guide",
    readTime: "8 min read",
    updated: "April 17, 2026",
    kicker: "Flagship guide",
    title: "Claude Opus explained: when the flagship tier earns its place",
    description:
      "A practical guide to Claude Opus for research, writing, code review, and higher-stakes work.",
    intro:
      "Claude Opus is the tier people reach for when the cost of a weak answer is higher than the cost of a slower one. This page is not meant to repeat vendor positioning. It is here to help readers understand where a flagship model genuinely changes the outcome and where a cheaper tier is the smarter call.",
    highlights: [
      "Best for high-context reasoning and layered writing tasks",
      "Worth paying for when quality matters more than raw turnaround",
      "Usually excessive for quick drafts, tagging, and lightweight automation",
    ],
    sidebarTitle: "Quick verdict",
    sidebarNote:
      "Use Opus when the work is expensive to redo: strategy docs, difficult code review, deep synthesis, and delicate writing.",
    table: {
      caption: "When Opus is the right choice",
      columns: ["Situation", "Why Opus fits", "When a lighter tier is enough"],
      rows: [
        [
          "Long research brief",
          "Handles layered context, nuance, and synthesis well",
          "Use a faster tier if you only need extraction or a short summary",
        ],
        [
          "Hard debugging or refactoring",
          "More room for multi-step reasoning and tradeoff analysis",
          "Use a balanced tier for routine fixes and everyday code chores",
        ],
        [
          "Executive-quality writing",
          "Better when tone, structure, and editorial judgment matter",
          "Use a cheaper tier for rough outlines or first-pass drafts",
        ],
        [
          "Simple FAQ or support automation",
          "Usually unnecessary overkill",
          "A lighter tier is almost always the better budget choice",
        ],
      ],
      note: "The best buying rule is simple: pay for the model that reduces costly rework, not the model with the fanciest label.",
    },
    sections: [
      {
        id: "why-opus",
        title: "Why people pay more for a flagship model",
        paragraphs: [
          "The appeal of a flagship tier is not just that it can answer harder questions. It is that it often produces stronger first drafts, better reasoning chains, and cleaner final language when the brief is messy or ambiguous.",
          "That matters most in tasks where a bad answer creates more work later. If the result feeds into client communication, product direction, or non-trivial code changes, the extra reasoning headroom can be worth it.",
        ],
        bullets: [
          "Better fit for work that needs judgment, not just completion",
          "Useful when prompts are long, layered, or partially conflicting",
          "Less valuable when the task is repetitive or easy to verify",
        ],
      },
      {
        id: "best-workloads",
        title: "The workloads where Opus usually feels different",
        paragraphs: [
          "Opus tends to show its value in research synthesis, editorial rewriting, code review, planning, and any task where the prompt contains several constraints that need to stay intact together.",
          "Readers comparing models often care less about abstract intelligence and more about whether the answer comes back calm, organized, and ready to use. That is the lens this site should keep using.",
        ],
        callout:
          "If the user will copy the answer into a deliverable with minimal editing, that is usually a good signal to test the premium tier first.",
      },
      {
        id: "when-to-step-down",
        title: "When a cheaper Claude tier is the smarter choice",
        paragraphs: [
          "Not every visitor should be sent to the most expensive model. Many day-to-day tasks are better served by a balanced tier that keeps costs controlled while still handling writing, coding, and summarization well.",
          "Fast drafts, classification, lightweight internal tools, and simple knowledge tasks rarely need the deepest model in the stack.",
        ],
        bullets: [
          "Pick a balanced tier for general work that repeats often",
          "Pick a fast tier for lightweight automation and throughput",
          "Reserve Opus for the moments where mistakes are costly",
        ],
      },
      {
        id: "final-take",
        title: "Editorial take",
        paragraphs: [
          "Claude Opus is strongest as a quality tool, not a universal default. The best homepage and blog structure for this domain should reflect that: recommend Opus where it clearly earns the spend, then guide readers to lower-cost options when the work does not justify the premium.",
          "That kind of honest recommendation is what will make the site feel useful instead of promotional.",
        ],
      },
    ],
    relatedSlugs: ["claude-vs-gpt", "best-ai-model-for-coding", "claude-pricing-guide"],
  },
  {
    slug: "claude-vs-gpt",
    path: "/compare/claude-vs-gpt",
    category: "Comparison",
    readTime: "7 min read",
    updated: "April 17, 2026",
    kicker: "Comparison",
    title: "Claude vs GPT: which model family fits the way you actually work?",
    description:
      "An editorial comparison of Claude and GPT across writing, coding, workflow fit, and buying logic.",
    intro:
      "Claude vs GPT is one of the clearest comparison queries for this domain because the reader already knows the category and just wants help choosing a lane. The best answer is not a vague tie. It is a practical guide to workflow fit.",
    highlights: [
      "Claude often wins on calm long-form writing and analysis flow",
      "GPT often wins on ecosystem breadth and tool familiarity",
      "The best choice depends on your workflow stack, not just answer quality",
    ],
    sidebarTitle: "Short answer",
    sidebarNote:
      "Choose Claude if writing quality and long-context flow matter most. Choose GPT if you want breadth, integrations, and a wider surrounding ecosystem.",
    table: {
      caption: "Claude vs GPT by workflow",
      columns: ["Task", "Claude edge", "GPT edge", "Better fit"],
      rows: [
        [
          "Long-form writing",
          "Often feels calmer and more coherent over long drafts",
          "Strong but sometimes chosen more for ecosystem than writing feel",
          "Claude for editorial-heavy work",
        ],
        [
          "Everyday coding",
          "Strong when you want depth and explanation",
          "Strong when you value a larger tool and platform footprint",
          "Depends on whether you want reasoning feel or ecosystem convenience",
        ],
        [
          "Mixed business workflows",
          "Good for focused analysis and polished text",
          "Often attractive for teams that want one broad platform",
          "GPT for broad platform coverage",
        ],
        [
          "High-context analysis",
          "Often favored when the prompt is long and layered",
          "Can still be excellent, especially when multimodal or platform features matter",
          "Claude when the brief is document-heavy",
        ],
      ],
    },
    sections: [
      {
        id: "writing",
        title: "Writing and editorial flow",
        paragraphs: [
          "For many readers, this is where Claude builds loyalty. The output often feels measured, structured, and easy to refine without losing the original voice of the brief.",
          "That does not mean GPT cannot write well. It means the choice often comes down to what kind of writing experience you prefer and how much the surrounding product ecosystem matters to you.",
        ],
      },
      {
        id: "coding",
        title: "Coding and implementation work",
        paragraphs: [
          "The right pick depends on whether the job is deep reasoning or broad workflow coverage. Claude often appeals to people who want careful explanation and fewer throwaway answers. GPT often appeals to people who want a broad platform footprint and many ways to connect the model into existing tools.",
          "For this domain, the best editorial stance is not to crown one winner forever. It is to show where each family feels strongest.",
        ],
        bullets: [
          "Claude for depth-first coding sessions",
          "GPT for broader platform familiarity and mixed workflows",
          "Test both on your real prompts before standardizing",
        ],
      },
      {
        id: "workflow-fit",
        title: "Workflow fit is the real decision",
        paragraphs: [
          "A model does not live in isolation. Teams care about where it plugs in, how it behaves under pressure, and how predictable the output feels from day to day. That is why workflow fit should lead the verdict instead of generic scorekeeping.",
          "If a reader is already committed to a wider platform stack, that context may matter more than small quality differences on one prompt.",
        ],
      },
      {
        id: "verdict",
        title: "Editorial verdict",
        paragraphs: [
          "Claude is often the better recommendation for readers who care about thoughtful writing, deep context handling, and a calmer reasoning style. GPT is often the better recommendation for readers who value breadth, integrations, and a more expansive surrounding ecosystem.",
          "That is the kind of practical framing that makes a comparison page rank and convert trust at the same time.",
        ],
      },
    ],
    relatedSlugs: ["claude-opus", "claude-vs-gemini", "best-ai-model-for-coding"],
  },
  {
    slug: "claude-vs-gemini",
    path: "/compare/claude-vs-gemini",
    category: "Comparison",
    readTime: "7 min read",
    updated: "April 17, 2026",
    kicker: "Comparison",
    title: "Claude vs Gemini: the cleaner choice depends on your workflow stack",
    description:
      "A practical comparison of Claude and Gemini for reasoning, Google-heavy workflows, research, and multimodal work.",
    intro:
      "Claude vs Gemini is not just a question of model quality. It is often a question of ecosystem fit. Readers coming from Google-heavy workflows may value very different things than readers who mostly care about long-form reasoning and editorial clarity.",
    highlights: [
      "Claude is an easy recommendation for document-heavy reasoning",
      "Gemini makes sense when the wider Google environment matters",
      "The strongest page explains workflow fit before it names a winner",
    ],
    sidebarTitle: "Best fit summary",
    sidebarNote:
      "Claude is often easier to recommend for long-form reasoning. Gemini becomes more compelling when the reader already lives inside Google-centric workflows.",
    table: {
      caption: "Claude vs Gemini by scenario",
      columns: ["Scenario", "Claude edge", "Gemini edge", "Best fit"],
      rows: [
        [
          "Long document work",
          "Often feels stronger on layered analysis and structured synthesis",
          "Can still be useful when the Google workflow around the model matters",
          "Claude for reasoning-heavy briefs",
        ],
        [
          "Google Workspace-heavy teams",
          "Works well, but ecosystem fit may be secondary",
          "Often attractive because of the broader Google environment",
          "Gemini for Google-native operations",
        ],
        [
          "Research notes and summaries",
          "Often preferred for polished, careful prose",
          "Useful when multimodal or Workspace context is central",
          "Depends on whether analysis quality or platform fit matters more",
        ],
        [
          "General business use",
          "Strong when you want calm writing and synthesis",
          "Strong when the organization is already deep in Google tooling",
          "Choose the stack your team will actually use",
        ],
      ],
    },
    sections: [
      {
        id: "ecosystem",
        title: "Ecosystem fit changes the answer",
        paragraphs: [
          "This comparison gets muddy when people pretend the model lives on its own. In practice, the reader is choosing not only an answer style but a workflow environment.",
          "For a Google-native team, Gemini can be easier to justify even when the head-to-head answer quality feels close. For a writer, analyst, or researcher focused on document work, Claude may still feel like the cleaner recommendation.",
        ],
      },
      {
        id: "reasoning",
        title: "Reasoning and long-form analysis",
        paragraphs: [
          "Claude often wins readers over when the job involves long prompts, multiple constraints, or a final answer that has to sound composed. That makes it especially strong for editorial workflows and high-context reading tasks.",
          "This is exactly the sort of distinction a comparison page should surface early, because it helps the reader self-segment fast.",
        ],
      },
      {
        id: "multimodal",
        title: "When multimodal and Google workflow matter more",
        paragraphs: [
          "Some readers care less about the feel of the prose and more about how the model fits into the rest of the system they already use. That is where Gemini can become the better fit.",
          "The right editorial move is to state that plainly rather than forcing a universal winner.",
        ],
        bullets: [
          "Claude for reasoning-heavy document work",
          "Gemini for teams anchored in Google workflows",
          "Test on real prompts before making it a blanket rule",
        ],
      },
      {
        id: "verdict",
        title: "Editorial verdict",
        paragraphs: [
          "Choose Claude when the task is closer to analysis, structured writing, and long-context thinking. Choose Gemini when the surrounding Google environment is part of the buying decision, not just the answer itself.",
          "A clear workflow-led verdict is what makes this page useful and linkable.",
        ],
      },
    ],
    relatedSlugs: ["claude-vs-gpt", "claude-opus", "best-claude-model-for-writing"],
  },
  {
    slug: "best-ai-model-for-coding",
    path: "/guides/best-ai-model-for-coding",
    category: "Guide",
    readTime: "9 min read",
    updated: "April 17, 2026",
    kicker: "Use-case guide",
    title: "Best AI model for coding: how to choose by repo size, speed, and risk",
    description:
      "A coding-focused guide comparing model families by debugging depth, repo work, speed, and cost discipline.",
    intro:
      "The best AI model for coding is not one fixed name. It depends on whether you are doing quick bug fixes, deeper architectural work, messy repo exploration, or repeated internal automation. Coding readers care about speed, trust, and how often the first answer is usable.",
    highlights: [
      "Flagship tiers are best for complex reasoning and risky changes",
      "Balanced tiers often win on day-to-day value",
      "The right model changes with repo size, latency needs, and review burden",
    ],
    sidebarTitle: "Fast recommendation",
    sidebarNote:
      "Use a flagship tier for hard reasoning, a balanced tier for daily shipping, and a fast tier only when the task is easy to verify.",
    table: {
      caption: "Coding guide by need",
      columns: ["Need", "Best first pick", "Why"],
      rows: [
        [
          "Complex refactor",
          "Claude Opus or another flagship tier",
          "More room for reasoning, tradeoffs, and careful explanation",
        ],
        [
          "Daily coding assistant",
          "Balanced tiers like Claude Sonnet-style models",
          "Usually the best quality-to-cost ratio for routine work",
        ],
        [
          "Quick utility scripts",
          "Fast lower-cost tiers",
          "Good when the output is easy to test and cheap to discard",
        ],
        [
          "Platform-wide mixed workflows",
          "Whichever family fits the surrounding tool stack",
          "The coding answer is only part of the real buying decision",
        ],
      ],
      note: "Developers rarely need the most expensive model on every prompt. The winning setup is usually a stack, not a single permanent favorite.",
    },
    sections: [
      {
        id: "repo-size",
        title: "Repo size and task complexity matter first",
        paragraphs: [
          "A small bug fix in a familiar codebase is a different problem than a cross-cutting refactor in a messy repository. The right model choice changes with the surface area of the task and how expensive it would be to accept a bad suggestion.",
          "That is why coding pages should help readers think in terms of job type, not just brand preference.",
        ],
      },
      {
        id: "speed-depth",
        title: "Speed versus depth is the daily tradeoff",
        paragraphs: [
          "Many developers do not want the absolute deepest answer every time. They want something fast, usually correct, and cheap enough to keep open all day. That is where balanced tiers often outperform both the slow premium models and the cheapest fast models.",
          "The job of this page is to help readers map each tier to a practical workflow.",
        ],
        bullets: [
          "Flagship tiers for architecture, review, and hard debugging",
          "Balanced tiers for daily pairing and common implementation tasks",
          "Fast tiers for boilerplate, drafts, and easy-to-test changes",
        ],
      },
      {
        id: "risk",
        title: "Risk should guide spend",
        paragraphs: [
          "The more expensive the mistake, the more reasonable it is to pay for a better model. If the change touches production logic, security-sensitive flows, or complex business rules, a deeper model earns its keep faster.",
          "If the code is easy to test, easy to throw away, or mostly repetitive, budget should matter more.",
        ],
      },
      {
        id: "team-choice",
        title: "How teams should choose",
        paragraphs: [
          "A good internal rule is to keep one premium option for hard tasks and one balanced option for day-to-day work. That avoids overspending while still giving developers a tool for genuinely difficult jobs.",
          "That stack-based recommendation is often more useful than telling readers that one model is best forever.",
        ],
      },
    ],
    relatedSlugs: ["claude-opus", "claude-vs-gpt", "claude-pricing-guide"],
  },
  {
    slug: "best-claude-model-for-writing",
    path: "/guides/best-claude-model-for-writing",
    category: "Guide",
    readTime: "6 min read",
    updated: "April 17, 2026",
    kicker: "Use-case guide",
    title: "Best Claude model for writing: choose by draft quality, speed, and editing load",
    description:
      "A writing-focused guide to choosing the right Claude tier for briefs, articles, editing, and tone-sensitive work.",
    intro:
      "Writing is one of the clearest strengths for a Claude-focused site because readers are not just comparing output quality. They are comparing how much cleanup is left after the answer arrives. That makes a writing guide especially useful for this domain.",
    highlights: [
      "Use the premium tier when voice, nuance, and structure matter most",
      "Balanced tiers are usually enough for day-to-day content production",
      "Fast tiers fit outlines, summaries, and internal drafts",
    ],
    sidebarTitle: "Writing rule of thumb",
    sidebarNote:
      "Choose the most expensive Claude tier only when the finished draft needs to feel publication-ready with minimal editing.",
    table: {
      caption: "Best Claude tier for writing jobs",
      columns: ["Writing job", "Best starting tier", "Why"],
      rows: [
        [
          "High-stakes client or executive writing",
          "Claude Opus",
          "Stronger when tone, rhythm, and judgment matter",
        ],
        [
          "Regular blog production",
          "Balanced Claude tier",
          "Usually the best value for briefs, outlines, and rewrites",
        ],
        [
          "Internal notes and summaries",
          "Fast Claude tier",
          "Cheap and quick when polish is not the priority",
        ],
        [
          "Heavy editing and restructuring",
          "Premium or balanced depending on stakes",
          "Pick based on how expensive weak phrasing would be",
        ],
      ],
    },
    sections: [
      {
        id: "quality",
        title: "Writing quality is really about editing load",
        paragraphs: [
          "Readers who ask for the best writing model are often asking a budget question in disguise. They want to know how much editing they will still have to do afterward.",
          "That is why the most useful writing guide does not stop at describing output quality. It connects each tier to how much cleanup a writer should expect.",
        ],
      },
      {
        id: "daily-work",
        title: "Most teams should not default to the premium tier",
        paragraphs: [
          "A balanced tier is often good enough for regular content production, SEO outlines, article updates, product pages, and internal messaging. It gives teams a reliable middle ground without turning every content task into a premium spend decision.",
          "That makes it the default recommendation for many writing-heavy workflows.",
        ],
      },
      {
        id: "premium-moments",
        title: "Where the flagship tier earns the extra spend",
        paragraphs: [
          "Premium writing tiers make the most sense when the output needs stronger tone control, better structure under pressure, or more thoughtful rewriting over long prompts. That includes sensitive messaging, higher-stakes brand content, and pieces that need to sound composed on the first pass.",
          "Those are the moments where a writing guide can honestly say the premium tier is worth testing first.",
        ],
      },
      {
        id: "verdict",
        title: "Editorial verdict",
        paragraphs: [
          "Use the premium Claude tier when the draft needs to sound finished. Use the balanced tier when the work is regular, repeatable, and budget-sensitive. Use the fast tier when you only need speed, structure, or internal scaffolding.",
          "That simple framework is much more useful than a single blanket recommendation.",
        ],
      },
    ],
    relatedSlugs: ["claude-opus", "claude-vs-gemini", "claude-pricing-guide"],
  },
  {
    slug: "claude-pricing-guide",
    path: "/pricing/claude-pricing-guide",
    category: "Pricing",
    readTime: "6 min read",
    updated: "April 17, 2026",
    kicker: "Commercial intent",
    title: "Claude pricing guide: how to think about spend before you upgrade",
    description:
      "A pricing-focused guide to choosing Claude tiers by workload, value, and the cost of bad answers.",
    intro:
      "Pricing pages should do more than repeat plan names. The real job is to help readers understand when a premium model saves money by reducing revision time and when a cheaper tier gives better overall value. That makes pricing coverage one of the most useful commercial-intent assets on this domain.",
    highlights: [
      "Budget should follow workload, not status",
      "Premium spend is easiest to justify when revision cost is high",
      "Readers need a buying framework, not just a price list",
    ],
    sidebarTitle: "Budgeting rule",
    sidebarNote:
      "Spend more only when a weak answer becomes expensive to fix. Otherwise default downward and keep the stack lean.",
    table: {
      caption: "How to choose a Claude tier by budget profile",
      columns: ["Buyer type", "Good starting point", "Why it keeps spend sane"],
      rows: [
        [
          "Solo user with mixed tasks",
          "Balanced tier",
          "Covers writing, coding, and analysis without a premium-first habit",
        ],
        [
          "High-stakes consultant or editor",
          "Premium tier for hard tasks, balanced tier for the rest",
          "Matches spend to deliverable risk",
        ],
        [
          "Team running frequent automation",
          "Fast or balanced tiers",
          "Lower cost matters more when output is repetitive and verifiable",
        ],
        [
          "Research-heavy operator",
          "Premium tier for synthesis workflows",
          "Better if the work would otherwise require heavy manual cleanup",
        ],
      ],
      note: "Verify current official pricing before making a buying decision. Vendor plan names and rates can change faster than the core workflow logic.",
    },
    sections: [
      {
        id: "outcomes",
        title: "Pay for outcomes, not labels",
        paragraphs: [
          "The cleanest pricing advice is to work backward from the cost of a weak answer. If the output feeds into expensive client work, sensitive communication, or non-trivial code changes, paying for a better model can be rational very quickly.",
          "If the task is repetitive, easy to verify, or mostly disposable, the premium tier often becomes unnecessary overhead.",
        ],
      },
      {
        id: "premium",
        title: "Where premium spend is easiest to justify",
        paragraphs: [
          "Premium pricing is easiest to defend when the model is being used for research synthesis, strategy drafts, difficult rewrites, or complex code review. In those cases the model is not just answering faster. It is lowering the chance that a human has to rebuild the output from scratch.",
          "That distinction helps a pricing page feel genuinely useful.",
        ],
      },
      {
        id: "lean-stack",
        title: "A lean stack usually beats one expensive default",
        paragraphs: [
          "For many users, the smartest setup is a mixed stack: one stronger option for hard problems and one cheaper option for common tasks. That keeps total spend disciplined without leaving the team underpowered when the brief gets difficult.",
          "It is a stronger recommendation than telling every reader to upgrade by default.",
        ],
        bullets: [
          "Use a balanced tier as the everyday baseline",
          "Escalate to a premium tier only when the work justifies it",
          "Keep a fast tier for lightweight automation if the volume is high",
        ],
      },
      {
        id: "update-check",
        title: "What to update when vendor pricing changes",
        paragraphs: [
          "If this page is refreshed later, use an exact date and clearly note what changed. Readers do not just want current numbers. They want to know the buying logic still holds.",
          "That is how pricing pages stay trustworthy while still being practical.",
        ],
      },
    ],
    relatedSlugs: ["claude-opus", "best-ai-model-for-coding", "best-claude-model-for-writing"],
  },
];
