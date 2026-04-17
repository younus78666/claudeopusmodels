import ArticleCard from "./components/ArticleCard";
import ComparisonTable from "./components/ComparisonTable";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  aboutSections,
  articles,
  categoryNotes,
  homeFaq,
  homeSidebarNotes,
  homeTopicClusters,
  siteUrl,
  type Article,
} from "./content";
import { type PageMetaInput, usePageMeta } from "./usePageMeta";

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function buildHomeMeta(): PageMetaInput {
  return {
    title: "Claude Opus Models | Independent AI Model Guides and Comparisons",
    description:
      "Simple guides and comparisons covering Claude, GPT, and Gemini across coding, writing, pricing, and workflow fit.",
    path: "/",
    type: "website",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Claude Opus Models",
        url: siteUrl,
        description:
          "Independent site covering Claude, GPT, and Gemini with model guides, comparisons, and practical buying frameworks.",
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Claude Opus Models",
        url: siteUrl,
        description:
          "Independent AI model guides with comparison pages, pricing guides, and use-case articles.",
      },
    ],
  };
}

function buildBlogMeta(): PageMetaInput {
  return {
    title: "AI Model Guides | Claude, GPT, and Gemini Comparisons",
    description:
      "Browse guides covering Claude Opus, Claude vs GPT, Claude vs Gemini, pricing, coding, and writing use cases.",
    path: "/blog",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Claude Opus Models Guides",
      url: `${siteUrl}/blog`,
      description:
        "Guide archive for Claude Opus Models with model comparisons, pricing pages, and use-case resources.",
    },
  };
}

function buildAboutMeta(): PageMetaInput {
  return {
    title: "About Claude Opus Models | What This Site Covers",
    description:
      "Overview of what Claude Opus Models covers and how the guides compare different AI model families.",
    path: "/about",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Claude Opus Models",
      url: `${siteUrl}/about`,
      description:
        "Overview of what Claude Opus Models covers and how the guides compare different AI model families.",
    },
  };
}

function buildArticleMeta(article: Article): PageMetaInput {
  return {
    title: `${article.title} | Claude Opus Models`,
    description: article.description,
    path: article.path,
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      dateModified: "2026-04-17",
      author: {
        "@type": "Organization",
        name: "Claude Opus Models",
      },
      publisher: {
        "@type": "Organization",
        name: "Claude Opus Models",
      },
      mainEntityOfPage: `${siteUrl}${article.path}`,
    },
  };
}

function buildNotFoundMeta(): PageMetaInput {
  return {
    title: "Page Not Found | Claude Opus Models",
    description:
      "The page you requested is not available. Browse the main guides and comparison pages from the homepage.",
    path: "/404",
    type: "website",
  };
}

function HomePage() {
  const featuredArticle = articles[0];
  const secondaryArticles = [articles[1], articles[3]];

  return (
    <main className="page-shell">
      <section className="hero-grid section-shell">
        <div className="feature-column">
          <div className="issue-line">
            <span>Claude guides</span>
            <span>Model comparisons</span>
            <span>Updated April 17, 2026</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Quick start</p>
            <h1>Choose the right AI model without reading ten different sales pages.</h1>
            <p className="lead">
              Claudeopusmodels.com is a simple informational site for understanding Claude models
              and comparing them with GPT and Gemini for coding, writing, research, and pricing.
            </p>
          </div>

          <ArticleCard article={featuredArticle} variant="feature" />
        </div>

        <aside className="sidebar-stack" aria-label="Quick notes">
          <div className="note-card note-card-accent">
            <p className="note-label">Quick summary</p>
            <h2>Start with your workload, then compare the model families that fit it best.</h2>
            <p>
              If you need deep reasoning and high-context work, start with Claude Opus. If you
              need broader ecosystem fit, use the comparison guides below.
            </p>
          </div>

          {homeSidebarNotes.map((note) => (
            <article className="note-card" key={note.title}>
              <strong>{note.title}</strong>
              <p>{note.text}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className="section-shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>Pick the section that matches your question</h2>
          </div>
          <p>
            These guides are grouped by the kind of decision you are trying to make: choosing a
            Claude tier, comparing platforms, or deciding by workload and budget.
          </p>
        </div>

        <div className="cluster-grid">
          {homeTopicClusters.map((cluster) => (
            <article className="cluster-card" key={cluster.title}>
              <h3>{cluster.title}</h3>
              <p>{cluster.description}</p>
              <div className="link-list">
                {cluster.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured guides</p>
            <h2>Useful pages for the most common model decisions</h2>
          </div>
          <p>
            Start with these if you are comparing major model families or trying to choose a model
            for coding work.
          </p>
        </div>

        <div className="article-grid article-grid-two">
          {secondaryArticles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">All guides</p>
            <h2>Browse the current guides and comparison pages</h2>
          </div>
          <p>
            Each page focuses on one clear question so it is easier to scan, compare options, and
            move to the next relevant guide.
          </p>
        </div>

        <div className="article-grid article-grid-three">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} variant="compact" />
          ))}
        </div>
      </section>

      <section className="section-shell faq-shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about Claude, GPT, and Gemini</h2>
          </div>
          <p>These short answers give a quick overview before you move into the detailed guides.</p>
        </div>

        <div className="faq-list">
          {homeFaq.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <main className="page-shell">
      <section className="section-shell page-intro">
        <p className="eyebrow">Guides</p>
        <h1>Browse all guides by decision type</h1>
        <p className="lead">
          These pages are grouped around the questions most users actually have: which model to
          choose, how the major families compare, and which tier makes sense for the work.
        </p>
      </section>

      {categories.map((category) => (
        <section className="section-shell" key={category}>
          <div className="section-head">
            <div>
              <p className="eyebrow">{category}</p>
              <h2>{category}</h2>
            </div>
            <p>{categoryNotes[category]}</p>
          </div>

          <div className="article-grid article-grid-two">
            {articles
              .filter((article) => article.category === category)
              .map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section-shell page-intro">
        <p className="eyebrow">About</p>
        <h1>What this site covers and how to use it</h1>
        <p className="lead">
          The goal of this site is to help you pick the right model faster by using simple guides,
          practical comparisons, and pages organized around real use cases.
        </p>
      </section>

      <section className="about-grid">
        {aboutSections.map((section) => (
          <article className="section-shell" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            <ul className="bullet-list">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Core pages</p>
            <h2>Main guides on the site right now</h2>
          </div>
          <p>These are the main comparison and decision pages currently available on the site.</p>
        </div>

        <div className="article-grid article-grid-three">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} variant="compact" />
          ))}
        </div>
      </section>
    </main>
  );
}

function ArticlePage({ article }: { article: Article }) {
  const relatedArticles = articles.filter((candidate) =>
    article.relatedSlugs.includes(candidate.slug),
  );

  return (
    <main className="page-shell">
      <section className="section-shell article-hero">
        <div className="article-hero-copy">
          <p className="eyebrow">{article.kicker}</p>
          <h1>{article.title}</h1>
          <p className="lead">{article.intro}</p>

          <div className="meta-row">
            <span>{article.category}</span>
            <span>{article.readTime}</span>
            <span>Updated {article.updated}</span>
          </div>

          <div className="tag-row">
            {article.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>

        <div className="hero-note-panel">
          <p className="note-label">{article.sidebarTitle}</p>
          <p>{article.sidebarNote}</p>
        </div>
      </section>

      <div className="story-layout">
        <article className="story-panel">
          {article.table ? <ComparisonTable table={article.table} /> : null}

          {article.sections.map((section) => (
            <section className="content-section" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="bullet-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.callout ? <blockquote>{section.callout}</blockquote> : null}
            </section>
          ))}
        </article>

        <aside className="sidebar-stack story-sidebar">
          <article className="note-card">
            <strong>On this page</strong>
            <div className="toc-list">
              {article.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </div>
          </article>

          <article className="note-card">
            <strong>Page summary</strong>
            <p>{article.description}</p>
          </article>

          <article className="note-card">
            <strong>Related guides</strong>
            <div className="link-list">
              {relatedArticles.map((related) => (
                <a href={related.path} key={related.slug}>
                  {related.title}
                </a>
              ))}
            </div>
          </article>
        </aside>
      </div>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="page-shell">
      <section className="section-shell page-intro">
        <p className="eyebrow">Not found</p>
        <h1>This page is not available.</h1>
        <p className="lead">
          Use the homepage or the guides page to jump back into the published comparisons and
          resources.
        </p>
        <div className="link-list">
          <a href="/">Go to homepage</a>
          <a href="/blog">Browse guides</a>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname);
  const matchedArticle = articles.find((article) => article.path === pathname);

  let meta = buildNotFoundMeta();
  let page = <NotFoundPage />;

  if (pathname === "/") {
    meta = buildHomeMeta();
    page = <HomePage />;
  } else if (pathname === "/blog") {
    meta = buildBlogMeta();
    page = <BlogPage />;
  } else if (pathname === "/about") {
    meta = buildAboutMeta();
    page = <AboutPage />;
  } else if (matchedArticle) {
    meta = buildArticleMeta(matchedArticle);
    page = <ArticlePage article={matchedArticle} />;
  }

  usePageMeta(meta);

  return (
    <div className="site-shell">
      <SiteHeader currentPath={pathname} />
      {page}
      <SiteFooter />
    </div>
  );
}

