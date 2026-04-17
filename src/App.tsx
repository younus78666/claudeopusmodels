import ArticleCard from "./components/ArticleCard";
import ComparisonTable from "./components/ComparisonTable";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  aboutSections,
  articles,
  categoryNotes,
  homeCta,
  homeEditorialLogs,
  homeFeaturedStories,
  homeFaq,
  homeTopicClusters,
  siteDescription,
  siteName,
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
    title: `${siteName} | Independent AI Guides and Comparisons`,
    description: siteDescription,
    path: "/",
    type: "website",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description: siteDescription,
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: siteName,
        url: siteUrl,
        description: siteDescription,
      },
    ],
  };
}

function buildBlogMeta(): PageMetaInput {
  return {
    title: `AI Model Guides | ${siteName}`,
    description:
      "Browse guides covering Claude Opus, Claude vs GPT, Claude vs Gemini, pricing, coding, and writing use cases.",
    path: "/blog",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${siteName} Guides`,
      url: `${siteUrl}/blog`,
      description:
        "Guide archive for Claude Opus Model Insights with model comparisons, pricing pages, and use-case resources.",
    },
  };
}

function buildAboutMeta(): PageMetaInput {
  return {
    title: `About ${siteName} | What This Site Covers`,
    description:
      "Overview of what Claude Opus Model Insights covers and how the guides compare different AI model families.",
    path: "/about",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `About ${siteName}`,
      url: `${siteUrl}/about`,
      description:
        "Overview of what Claude Opus Model Insights covers and how the guides compare different AI model families.",
    },
  };
}

function buildArticleMeta(article: Article): PageMetaInput {
  return {
    title: `${article.title} | ${siteName}`,
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
        name: siteName,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
      },
      mainEntityOfPage: `${siteUrl}${article.path}`,
    },
  };
}

function buildNotFoundMeta(): PageMetaInput {
  return {
    title: `Page Not Found | ${siteName}`,
    description:
      "The page you requested is not available. Browse the main guides and comparison pages from the homepage.",
    path: "/404",
    type: "website",
  };
}

function findArticleBySlug(slug: string) {
  const article = articles.find((candidate) => candidate.slug === slug);

  if (!article) {
    throw new Error(`Missing article for slug: ${slug}`);
  }

  return article;
}

function HomePage() {
  const featuredArticle = findArticleBySlug("claude-opus");
  const featuredStories = homeFeaturedStories.map((story) => ({
    ...story,
    article: findArticleBySlug(story.slug),
  }));
  const editorialLogs = homeEditorialLogs.map((story) => ({
    ...story,
    article: findArticleBySlug(story.slug),
  }));

  return (
    <main className="home-page">
      <section className="editorial-hero">
        <div className="home-section-inner">
          <div className="editorial-hero-grid">
            <div className="editorial-hero-copy">
              <p className="hero-kicker">Independent AI model publication</p>
              <h1 className="editorial-display">
                Claude Opus insights for <br />
                <span>real AI model</span> <br />
                decisions.
              </h1>
              <p className="editorial-deck">{siteDescription}</p>
            </div>

            <aside className="editorial-callout">
              <p className="callout-kicker">The flagship guide</p>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.description}</p>
              <a className="text-link" href={featuredArticle.path}>
                Read the guide
              </a>
            </aside>
          </div>

          <article className="editorial-hero-feature">
            <img
              alt="Abstract editorial-style visualization representing complex connected reasoning."
              src="/images/homepage-hero.jpg"
            />
            <div className="editorial-hero-overlay">
              <span className="feature-badge">Flagship guide</span>
              <h2>Claude Opus explained</h2>
              <p>{featuredArticle.description}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="editorial-band editorial-band-soft" id="start-reading">
        <div className="home-section-inner">
          <div className="editorial-section-head">
            <h2>The Topical Ecosystem</h2>
            <p>
              The site is organized around three practical lanes so visitors can move quickly from
              understanding Claude Opus to comparing model families and making budget decisions.
            </p>
          </div>

          <div className="ecosystem-grid">
            {homeTopicClusters.map((cluster, index) => (
              <article className="ecosystem-card" key={cluster.title}>
                <span className="ecosystem-mark">{`0${index + 1}`}</span>
                <h3>{cluster.title}</h3>
                <p>{cluster.description}</p>
                <div className="ecosystem-links">
                  {cluster.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band">
        <div className="home-section-inner">
          <div className="editorial-section-head editorial-section-head-stack">
            <h2>Curated Insights</h2>
          </div>

          <div className="curated-grid">
            {featuredStories.map((story) => (
              <article className="curated-story" key={story.slug}>
                <div className="curated-image-wrap">
                  <img alt={story.imageAlt} src={story.image} />
                </div>
                <div className="curated-meta">
                  <span className="topic-chip">{story.label}</span>
                  <span>{story.article.readTime}</span>
                </div>
                <h3>
                  <a href={story.article.path}>{story.article.title}</a>
                </h3>
                <p>{story.summary}</p>
                <a className="underlined-link" href={story.article.path}>
                  Read guide
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band-muted">
        <div className="home-section-inner">
          <div className="editorial-section-head editorial-section-head-inline">
            <h2>Recent Editorial Logs</h2>
            <a className="archive-link" href="/blog">
              View all guides
            </a>
          </div>

          <div className="editorial-log-list">
            {editorialLogs.map((story) => (
              <article className="editorial-log-item" key={story.slug}>
                <div className="editorial-log-date">{story.article.updated}</div>
                <div className="editorial-log-copy">
                  <h3>
                    <a href={story.article.path}>{story.article.title}</a>
                  </h3>
                  <p>{story.article.description}</p>
                </div>
                <div className="editorial-log-tags">
                  {story.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band">
        <div className="home-section-inner faq-editorial-layout">
          <div>
            <h2>Clarifications &amp; Context</h2>
            <p className="faq-editorial-intro">
              Fundamental questions about the site, what the comparison pages cover, and how to use
              the guides.
            </p>
          </div>

          <div className="faq-editorial-list">
            {homeFaq.map((item) => (
              <article className="faq-editorial-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-cta-band">
        <div className="home-section-inner">
          <div className="editorial-cta-panel">
            <p className="hero-kicker">{homeCta.eyebrow}</p>
            <h2>{homeCta.title}</h2>
            <p>{homeCta.text}</p>
            <div className="editorial-cta-actions">
              <a className="editorial-button editorial-button-primary" href={homeCta.primary.href}>
                {homeCta.primary.label}
              </a>
              <a
                className="editorial-button editorial-button-secondary"
                href={homeCta.secondary.href}
              >
                {homeCta.secondary.label}
              </a>
            </div>
          </div>
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
