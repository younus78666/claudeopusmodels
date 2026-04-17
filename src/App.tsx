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
    title: "Claude Opus Models | Independent AI Model Blog and Comparisons",
    description:
      "Editorial guides and comparisons covering Claude, GPT, and Gemini across coding, writing, pricing, and workflow fit.",
    path: "/",
    type: "website",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Claude Opus Models",
        url: siteUrl,
        description:
          "Editorial site covering Claude, GPT, and Gemini with model guides, comparisons, and buying frameworks.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Claude Opus Models",
        url: siteUrl,
        description:
          "Independent editorial coverage of AI models with comparison pages, pricing guides, and use-case articles.",
      },
    ],
  };
}

function buildBlogMeta(): PageMetaInput {
  return {
    title: "AI Model Blog | Claude, GPT, and Gemini Articles",
    description:
      "Browse the blog archive for Claude Opus guides, Claude vs GPT comparisons, Gemini comparisons, pricing, and use-case articles.",
    path: "/blog",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Claude Opus Models Blog",
      url: `${siteUrl}/blog`,
      description:
        "Archive page for the Claude Opus Models editorial site with model guides, comparisons, and pricing coverage.",
    },
  };
}

function buildAboutMeta(): PageMetaInput {
  return {
    title: "About Claude Opus Models | Editorial Policy and Topical Map",
    description:
      "Learn how Claude Opus Models is structured, what pages it covers, and how the site approaches AI model comparisons.",
    path: "/about",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Claude Opus Models",
      url: `${siteUrl}/about`,
      description:
        "Editorial policy, topical map, and publishing standards for the Claude Opus Models website.",
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
            <span>Issue 01</span>
            <span>Independent AI model blog</span>
            <span>Updated April 17, 2026</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Editorial hub</p>
            <h1>Turn this domain into a real AI model publication, not a long landing page.</h1>
            <p className="lead">
              Claudeopusmodels.com now has the right shape for a content cluster: a strong home
              hub, comparison pages, buying guides, and use-case articles that feel readable like a
              blog instead of stacked sales sections.
            </p>
          </div>

          <ArticleCard article={featuredArticle} variant="feature" />
        </div>

        <aside className="sidebar-stack" aria-label="Editorial notes">
          <div className="note-card note-card-accent">
            <p className="note-label">Launch direction</p>
            <h2>Homepage as front page, articles as ranking assets.</h2>
            <p>
              The homepage introduces the publication. The article pages do the heavy lifting for
              search intent and internal linking.
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
            <p className="eyebrow">Topical map</p>
            <h2>The content cluster this domain should grow around</h2>
          </div>
          <p>
            Each section below has its own clear search intent. Together they make the domain feel
            deeper, more useful, and more linkable than a one-page build ever could.
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
            <p className="eyebrow">Featured reading</p>
            <h2>Start with the pages most likely to pull useful traffic</h2>
          </div>
          <p>
            These are the launch articles worth pushing first because they match broad interest,
            practical buying questions, and high internal-link value.
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
            <p className="eyebrow">Latest articles</p>
            <h2>A fuller blog layout gives this site room to grow</h2>
          </div>
          <p>
            Instead of forcing every topic into the homepage, the site now publishes each intent as
            its own clean page with room for a real verdict, a useful table, and related links.
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
            <h2>Questions a blogging-style homepage should answer clearly</h2>
          </div>
          <p>
            These answers keep the front page useful for first-time readers while pushing deeper
            intent to the article pages.
          </p>
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
        <p className="eyebrow">Blog archive</p>
        <h1>Browse the editorial archive by decision type</h1>
        <p className="lead">
          This archive is organized around how readers actually search: model guides, comparisons,
          use-case advice, and pricing logic.
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
        <p className="eyebrow">About the publication</p>
        <h1>Editorial structure, topical map, and publishing standard</h1>
        <p className="lead">
          The goal of this site is to help readers pick the right model faster. That means clear
          comparison logic, short verdicts, and a content map that supports more than one search
          query.
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
            <p className="eyebrow">Suggested next pages</p>
            <h2>The supporting URLs that make the site feel complete</h2>
          </div>
          <p>
            If you keep growing the site, add new article pages in the same editorial style instead
            of packing everything back into the homepage.
          </p>
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
            <strong>What this page does</strong>
            <p>{article.description}</p>
          </article>

          <article className="note-card">
            <strong>Related reading</strong>
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
        <h1>This page is not part of the current site map.</h1>
        <p className="lead">
          Use the homepage or the blog archive to jump back into the published guides and
          comparisons.
        </p>
        <div className="link-list">
          <a href="/">Go to homepage</a>
          <a href="/blog">Browse the archive</a>
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

