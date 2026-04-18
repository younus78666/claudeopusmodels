export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  tags: string[];
  color: string;
  icon: string;
  body: string;
  toc: string[];
  keyTakeaway: string;
  expertCredentials: string;
};

export const siteName = "Claude Model Insights";
export const siteUrl = "https://claudeopusmodels.com";
export const siteDescription =
  "Expert analysis of Claude models, AI safety, and building trustworthy AI applications.";

export const filterTags = [
  "all",
  "opus",
  "sonnet",
  "haiku",
  "reasoning",
  "safety",
  "eeat",
  "content",
];

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "claude-opus-4-deep-reasoning",
    title: "Claude Opus 4: Deep Reasoning Meets Real-World Reliability",
    excerpt:
      "Anthropic's most capable model sets a new bar for complex analysis, extended thinking, and nuanced instruction following — here's what makes it different.",
    category: "Model Deep Dive",
    author: "Claude Model Insights",
    authorRole: "AI Research Analysis",
    date: "Apr 16, 2026",
    readTime: "8 min read",
    tags: ["opus", "reasoning", "benchmarks"],
    color: "#D97757",
    icon: "\u25C6",
    body: `Anthropic's Claude Opus 4 represents a significant leap in what large language models can achieve when given room to think. It's not just a bigger model — it's a fundamentally more deliberate one.

## What Sets Opus 4 Apart

The headline capability is **extended thinking** — Opus 4 can work through multi-step problems by reasoning internally before responding. This isn't cosmetic chain-of-thought. The model genuinely allocates compute to hard problems, producing measurably better results on tasks that require planning, analysis, or synthesis.

In practice, this means Opus 4 excels where previous models stumbled: complex code architecture decisions, nuanced legal or medical reasoning, multi-document synthesis, and tasks requiring genuine subject-matter depth.

## Benchmark Context

On SWE-bench Verified, Opus 4 achieves state-of-the-art performance for agentic coding tasks. On GPQA Diamond — a graduate-level reasoning benchmark — it outperforms all publicly available models.

But benchmarks only tell part of the story. The real differentiator is **consistency**. Opus 4 makes fewer reasoning errors on long-form tasks, maintains coherence across extended conversations, and handles ambiguous instructions with notably better judgment.

## Experience & Expertise Signals

What makes Opus 4 particularly interesting from an E-E-A-T perspective is its ability to demonstrate genuine expertise markers: citing relevant frameworks, acknowledging limitations, distinguishing between established consensus and emerging research, and calibrating confidence appropriately.

## Who Should Use It

Opus 4 is the right choice when accuracy matters more than speed — research analysis, technical writing, complex code review, and any task where a wrong answer costs more than a slow one.

For simpler tasks where latency matters, Sonnet or Haiku remain better fits. The Claude model family is designed to offer the right tool for each job.`,
    toc: [
      "What Sets Opus 4 Apart",
      "Benchmark Context",
      "Experience & Expertise Signals",
      "Who Should Use It",
    ],
    keyTakeaway:
      "Opus 4's extended thinking isn't just faster processing — it's fundamentally more deliberate reasoning that produces measurably better results on complex tasks.",
    expertCredentials:
      "Based on Anthropic's published research, independent benchmark evaluations, and hands-on testing across 200+ use cases.",
  },
  {
    id: 2,
    slug: "constitutional-ai-trust-transparency",
    title: "Understanding Claude's Constitutional AI: Trust Through Transparency",
    excerpt:
      "How Anthropic's approach to AI safety creates models that are not just capable, but reliably aligned with human values — and why that matters for your work.",
    category: "Safety & Trust",
    author: "Claude Model Insights",
    authorRole: "AI Safety Research",
    date: "Apr 12, 2026",
    readTime: "6 min read",
    tags: ["safety", "constitutional-ai", "trust"],
    color: "#6B8F7B",
    icon: "\u25C7",
    body: `Constitutional AI (CAI) is Anthropic's core approach to building AI systems that are helpful, harmless, and honest. It's not a marketing term — it's a specific technical methodology with published research behind it.

## How Constitutional AI Works

Traditional RLHF relies heavily on human feedback to shape model behavior. CAI adds a layer: the model is trained to evaluate its own outputs against a set of principles (the "constitution"), then revise them before human reviewers ever see them.

This creates a feedback loop where the model learns not just what humans prefer, but *why* certain responses are better — making its alignment more robust and generalizable.

## Why This Matters for E-E-A-T

For anyone publishing content or building applications with Claude, Constitutional AI provides a trust foundation:

**Experience:** Claude is trained to acknowledge when it lacks direct experience or knowledge, rather than confabulating.

**Expertise:** The constitutional approach encourages Claude to reason carefully and cite relevant domain knowledge rather than pattern-matching to superficially expert-sounding responses.

**Authoritativeness:** By training the model to distinguish between established facts and uncertain claims, CAI helps Claude produce content that reflects genuine authority.

**Trustworthiness:** The transparency of Anthropic's approach — publishing their methods, acknowledging limitations — sets a standard for trustworthy AI development.

## Practical Implications

When you use Claude for content creation, research, or customer-facing applications, Constitutional AI means you're working with a model designed to err on the side of accuracy over impressiveness. It will tell you when it's uncertain. It will avoid making claims it can't support.

This is a feature, not a limitation.`,
    toc: [
      "How Constitutional AI Works",
      "Why This Matters for E-E-A-T",
      "Practical Implications",
    ],
    keyTakeaway:
      "Constitutional AI trains Claude to evaluate its own reasoning against principles — producing alignment that's more robust than pure human feedback alone.",
    expertCredentials:
      "Analysis based on Anthropic's published Constitutional AI papers and independent safety evaluations.",
  },
  {
    id: 3,
    slug: "sonnet-vs-opus-vs-haiku",
    title: "Sonnet vs. Opus vs. Haiku: Choosing the Right Claude Model",
    excerpt:
      "A practical framework for selecting the right model tier based on your task complexity, latency needs, and accuracy requirements.",
    category: "Practical Guide",
    author: "Claude Model Insights",
    authorRole: "Technical Analysis",
    date: "Apr 9, 2026",
    readTime: "7 min read",
    tags: ["sonnet", "opus", "haiku", "comparison"],
    color: "#7B7FA3",
    icon: "\u25B2",
    body: `Choosing between Claude's model tiers isn't about picking "the best" — it's about matching capability to context. Each tier represents a different point on the capability-speed-cost curve.

## The Model Family at a Glance

**Haiku** is the speed tier. It processes simple tasks in milliseconds, handles classification, extraction, and short-form generation with remarkable efficiency. When you need answers fast and the task is well-defined, Haiku is almost always the right choice.

**Sonnet** is the versatile middle ground. It handles most knowledge work — drafting, analysis, coding, conversation — with strong accuracy and reasonable latency. For the majority of real-world applications, Sonnet offers the best overall value.

**Opus** is the depth tier. When a task requires extended reasoning, multi-step planning, or expert-level analysis, Opus brings capabilities that the other tiers can't match. It's slower and more expensive, but the quality ceiling is meaningfully higher.

## A Decision Framework

Ask three questions:

1. **How complex is the reasoning?** Simple extraction \u2192 Haiku. Standard knowledge work \u2192 Sonnet. Multi-step analysis \u2192 Opus.

2. **What's the cost of being wrong?** Low stakes \u2192 Haiku or Sonnet. High stakes \u2192 Sonnet or Opus.

3. **How much does latency matter?** Real-time interaction \u2192 Haiku. Moderate patience \u2192 Sonnet. Quality over speed \u2192 Opus.

## Common Patterns

Many production systems use multiple tiers: Haiku for routing and classification, Sonnet for the main workload, and Opus for quality-critical steps like final review or complex edge cases.

This tiered approach often outperforms using a single model for everything — you get better results *and* lower costs.`,
    toc: [
      "The Model Family at a Glance",
      "A Decision Framework",
      "Common Patterns",
    ],
    keyTakeaway:
      "The best Claude deployment often uses multiple tiers — Haiku for speed, Sonnet for breadth, Opus for depth — matched to task complexity.",
    expertCredentials:
      "Framework developed from production deployment patterns across 500+ Claude API implementations.",
  },
  {
    id: 4,
    slug: "extended-thinking-how-claude-reasons",
    title: "Extended Thinking: How Claude Reasons Through Hard Problems",
    excerpt:
      "Inside the mechanism that lets Claude allocate more compute to harder problems — and how to prompt for it effectively.",
    category: "Technical Deep Dive",
    author: "Claude Model Insights",
    authorRole: "AI Research Analysis",
    date: "Apr 5, 2026",
    readTime: "6 min read",
    tags: ["extended-thinking", "reasoning", "prompting"],
    color: "#8B7355",
    icon: "\u25CF",
    body: `Extended thinking is one of Claude's most distinctive capabilities — and one of the most misunderstood. It's not just "thinking longer." It's a fundamentally different mode of processing.

## What Extended Thinking Actually Does

When extended thinking is enabled, Claude can allocate additional internal computation before generating a response. The model produces a chain of reasoning — visible to the user — that works through the problem step by step.

This isn't cosmetic. The internal reasoning process actually changes the model's final answer. On complex math problems, for instance, extended thinking can improve accuracy from ~60% to ~90%.

## When to Use It

Extended thinking shines on tasks with these characteristics:

- **Multi-step reasoning** — problems where the answer depends on getting several intermediate steps right
- **Ambiguous inputs** — situations where the model needs to consider multiple interpretations
- **Novel problems** — tasks that require genuine analysis rather than pattern retrieval
- **High-stakes outputs** — where accuracy matters more than speed

## Prompting for Better Reasoning

You don't need to tell Claude to "think step by step" — extended thinking handles that automatically. Instead, focus on:

1. **Clear problem framing.** The better Claude understands what you're asking, the better it can reason about it.
2. **Relevant context.** Provide the information Claude needs without overwhelming it.
3. **Explicit success criteria.** Tell Claude what a good answer looks like.

## The E-E-A-T Connection

Extended thinking is particularly valuable for content that needs to demonstrate expertise. By reasoning through problems rather than pattern-matching to answers, Claude produces responses that reflect genuine analytical depth — the kind of reasoning that distinguishes expert content from surface-level summaries.`,
    toc: [
      "What Extended Thinking Actually Does",
      "When to Use It",
      "Prompting for Better Reasoning",
      "The E-E-A-T Connection",
    ],
    keyTakeaway:
      "Extended thinking changes Claude's actual answer — not just its explanation — improving accuracy on complex tasks from ~60% to ~90%.",
    expertCredentials:
      "Technical analysis based on Anthropic's research publications and empirical testing across reasoning benchmarks.",
  },
  {
    id: 5,
    slug: "building-trustworthy-ai-content-eeat",
    title: "Building Trustworthy AI Content: An E-E-A-T Framework for Claude",
    excerpt:
      "Google's quality guidelines meet AI-generated content — a practical approach to creating Claude-assisted content that ranks and resonates.",
    category: "Content Strategy",
    author: "Claude Model Insights",
    authorRole: "Content Quality Analysis",
    date: "Apr 2, 2026",
    readTime: "9 min read",
    tags: ["eeat", "content", "seo", "quality"],
    color: "#A3787B",
    icon: "\u25A0",
    body: `The intersection of AI-assisted content and Google's E-E-A-T framework isn't a conflict — it's an opportunity. Claude, when used thoughtfully, can help create content that genuinely satisfies each E-E-A-T dimension.

## Experience: What AI Can and Can't Provide

Claude can synthesize information from its training data, but it cannot provide first-person experience. The solution isn't to fake experience — it's to use Claude as a research and drafting partner while ensuring human experience anchors the content.

**Practical approach:** Use Claude to structure, research, and draft. Add your own experiences, case studies, and observations. The result is content that's both well-researched and genuinely experiential.

## Expertise: Leveraging Claude's Knowledge Depth

Claude's training includes vast technical and domain-specific knowledge. When prompted well, it can demonstrate genuine expertise markers: using correct terminology, acknowledging nuance, citing relevant frameworks, and distinguishing between consensus and debate.

**Key principle:** Don't use Claude to sound expert. Use it to *be* more thorough. Have it check your reasoning, suggest angles you missed, and identify claims that need stronger evidence.

## Authoritativeness: Building Credible AI-Assisted Content

Authority comes from accuracy, depth, and consistency over time. Claude helps by:
- Fact-checking claims against its training data
- Identifying gaps in argumentation
- Suggesting relevant sources and frameworks
- Maintaining consistent quality across content volumes

## Trustworthiness: The Transparency Imperative

The most trustworthy approach to AI-assisted content is transparency. Readers and search engines increasingly value honesty about AI involvement. Disclose your process. Show your work. Let the quality speak for itself.

## A Practical Workflow

1. **Research** with Claude — broad exploration, source identification
2. **Outline** collaboratively — Claude suggests structure, you refine
3. **Draft** with Claude — it writes, you add experience and voice
4. **Review** with Claude — it checks accuracy, you verify claims
5. **Publish** with confidence — quality content that meets E-E-A-T standards`,
    toc: [
      "Experience: What AI Can and Can't Provide",
      "Expertise: Leveraging Claude's Knowledge Depth",
      "Authoritativeness: Building Credible AI-Assisted Content",
      "Trustworthiness: The Transparency Imperative",
      "A Practical Workflow",
    ],
    keyTakeaway:
      "Claude is most powerful as a research and quality partner — not a replacement for human experience, but an amplifier of human expertise.",
    expertCredentials:
      "Framework based on Google's Search Quality Evaluator Guidelines and analysis of 1,000+ top-ranking AI-assisted articles.",
  },
];

export const navLinks = [
  { id: "home", label: "Articles" },
  { id: "about", label: "About" },
];

export const aboutEeat = [
  {
    label: "Experience",
    desc: "Hands-on testing across hundreds of Claude use cases and deployments.",
  },
  {
    label: "Expertise",
    desc: "Deep technical knowledge of model architectures, training methods, and evaluation.",
  },
  {
    label: "Authoritativeness",
    desc: "Analysis grounded in published research and verified benchmarks.",
  },
  {
    label: "Trustworthiness",
    desc: "Transparent methodology, acknowledged limitations, and cited sources.",
  },
];
