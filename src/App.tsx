import { useCallback, useEffect, useRef, useState } from "react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  aboutEeat,
  type BlogPost,
  filterTags,
  posts,
  siteDescription,
  siteName,
  siteUrl,
} from "./content";
import { type PageMetaInput, usePageMeta } from "./usePageMeta";

/* ------------------------------------------------------------------ */
/*  Icon                                                               */
/* ------------------------------------------------------------------ */

function Icon({
  name,
  size = 20,
  color = "currentColor",
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
    arrow: <path d="M19 12H5m7-7l-7 7 7 7" />,
    x: <path d="M18 6L6 18M6 6l12 12" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </>
    ),
    bookmark: (
      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    ),
    list: (
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    ),
    grid: (
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Routing helpers                                                    */
/* ------------------------------------------------------------------ */

type Page = "home" | "post" | "about";

function getInitialRoute(): { page: Page; post: BlogPost | null } {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/about") return { page: "about", post: null };

  if (path.startsWith("/article/")) {
    const slug = path.replace("/article/", "");
    const found = posts.find((p) => p.slug === slug);
    if (found) return { page: "post", post: found };
  }

  return { page: "home", post: null };
}

function navigate(page: Page, post?: BlogPost) {
  let url = "/";
  if (page === "about") url = "/about";
  else if (page === "post" && post) url = `/article/${post.slug}`;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

/* ------------------------------------------------------------------ */
/*  Search Bar                                                         */
/* ------------------------------------------------------------------ */

function SearchBar({
  query,
  setQuery,
  onClose,
}: {
  query: string;
  setQuery: (q: string) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="search-bar">
      <Icon name="search" size={18} color="var(--text-tertiary)" />
      <input
        ref={ref}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles\u2026"
      />
      <button onClick={onClose} type="button">
        <Icon name="x" size={18} />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Card (Featured)                                               */
/* ------------------------------------------------------------------ */

function HeroCard({
  post,
  onClick,
}: {
  post: BlogPost;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="hero-card"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: `linear-gradient(135deg, ${post.color}12 0%, ${post.color}06 100%)`,
        border: `1px solid ${post.color}30`,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? `0 12px 32px ${post.color}15` : "none",
      }}
    >
      <div
        className="hero-card-circle-1"
        style={{
          background: `${post.color}08`,
          border: `1px solid ${post.color}12`,
        }}
      />
      <div
        className="hero-card-circle-2"
        style={{ background: `${post.color}06` }}
      />

      <div className="hero-card-content">
        <div
          className="category-badge"
          style={{
            background: `${post.color}18`,
            color: post.color,
          }}
        >
          {post.category}
        </div>
        <h2
          style={{
            color: hovered ? post.color : "var(--text-primary)",
          }}
        >
          {post.title}
        </h2>
        <p className="excerpt">{post.excerpt}</p>
        <div className="hero-card-meta">
          <span className="meta-icon">
            <Icon name="clock" size={14} /> {post.readTime}
          </span>
          <span>{post.date}</span>
          <div style={{ display: "flex", gap: 6 }}>
            {post.tags.slice(0, 2).map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Grid Card                                                          */
/* ------------------------------------------------------------------ */

function GridCard({
  post,
  onClick,
  index,
  bookmarked,
  toggleBookmark,
}: {
  post: BlogPost;
  onClick: () => void;
  index: number;
  bookmarked: boolean;
  toggleBookmark: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="grid-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 0.08}s`,
        animationFillMode: "both",
      }}
    >
      <div
        className="grid-card-header"
        onClick={onClick}
        style={{
          background: `linear-gradient(135deg, ${post.color}20 0%, ${post.color}08 100%)`,
        }}
      >
        <div className="circle-1" style={{ background: `${post.color}12` }} />
        <div className="circle-2" style={{ background: `${post.color}10` }} />
        <div className="diamond" style={{ background: `${post.color}15` }} />
        <span className="icon" style={{ color: post.color }}>
          {post.icon}
        </span>
      </div>

      <div className="grid-card-body" onClick={onClick}>
        <div
          className="category-label"
          style={{ color: post.color, background: `${post.color}12` }}
        >
          {post.category}
        </div>
        <h3
          style={{
            color: hovered ? post.color : "var(--text-primary)",
          }}
        >
          {post.title}
        </h3>
        <p>{post.excerpt}</p>
      </div>

      <div className="grid-card-footer">
        <div className="meta">
          <span>{post.date}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <button
          className={`bookmark-btn ${bookmarked ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark();
          }}
          type="button"
        >
          <Icon name="bookmark" size={16} />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  List Card                                                          */
/* ------------------------------------------------------------------ */

function ListCard({
  post,
  onClick,
  index,
  bookmarked,
  toggleBookmark,
}: {
  post: BlogPost;
  onClick: () => void;
  index: number;
  bookmarked: boolean;
  toggleBookmark: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="list-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 0.06}s`,
        animationFillMode: "both",
        animation: `fadeIn 0.3s ease ${index * 0.06}s both`,
      }}
    >
      <div
        className="list-card-accent"
        onClick={onClick}
        style={{
          background: `linear-gradient(180deg, ${post.color}20 0%, ${post.color}08 100%)`,
        }}
      >
        <span className="icon" style={{ color: post.color }}>
          {post.icon}
        </span>
      </div>

      <div className="list-card-body" onClick={onClick}>
        <div className="category-label" style={{ color: post.color }}>
          {post.category}
        </div>
        <h3
          style={{
            color: hovered ? post.color : "var(--text-primary)",
          }}
        >
          {post.title}
        </h3>
        <p>{post.excerpt}</p>
        <div className="meta">
          <span>{post.date}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="list-card-actions">
        <button
          className={`bookmark-btn ${bookmarked ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark();
          }}
          type="button"
        >
          <Icon name="bookmark" size={16} />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feed Page                                                          */
/* ------------------------------------------------------------------ */

function FeedPage({
  filteredPosts,
  cardStyle,
  activeTag,
  setActiveTag,
  bookmarks,
  toggleBookmark,
}: {
  filteredPosts: BlogPost[];
  cardStyle: "grid" | "list";
  activeTag: string;
  setActiveTag: (tag: string) => void;
  bookmarks: number[];
  toggleBookmark: (id: number) => void;
}) {
  const featured = filteredPosts[0];
  const rest = activeTag === "all" ? filteredPosts.slice(1) : filteredPosts;
  const showHero = activeTag === "all" && featured;

  return (
    <div>
      <div className="feed-header">
        <h1>Latest Insights</h1>
        <p>
          Expert analysis of Claude models, AI safety, and building trustworthy
          AI applications.
        </p>
      </div>

      <div className="tag-filters">
        {filterTags.map((tag) => (
          <button
            key={tag}
            className={`tag-btn ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>

      {showHero && (
        <HeroCard
          post={featured}
          onClick={() => navigate("post", featured)}
        />
      )}

      {(activeTag === "all" ? rest : filteredPosts).length === 0 && (
        <div className="empty-state">No articles found.</div>
      )}

      {cardStyle === "grid" ? (
        <div className="grid-layout">
          {(activeTag === "all" ? rest : filteredPosts).map((post, i) => (
            <GridCard
              key={post.id}
              post={post}
              onClick={() => navigate("post", post)}
              index={i}
              bookmarked={bookmarks.includes(post.id)}
              toggleBookmark={() => toggleBookmark(post.id)}
            />
          ))}
        </div>
      ) : (
        <div className="list-layout">
          {(activeTag === "all" ? rest : filteredPosts).map((post, i) => (
            <ListCard
              key={post.id}
              post={post}
              onClick={() => navigate("post", post)}
              index={i}
              bookmarked={bookmarks.includes(post.id)}
              toggleBookmark={() => toggleBookmark(post.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Post Page                                                          */
/* ------------------------------------------------------------------ */

function PostPage({
  post,
  bookmarked,
  toggleBookmark,
}: {
  post: BlogPost;
  bookmarked: boolean;
  toggleBookmark: () => void;
}) {
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ animation: "fadeIn 0.3s ease" }}>
      {/* Progress bar */}
      <div className="reading-progress">
        <div
          className="reading-progress-bar"
          style={{
            width: `${readProgress * 100}%`,
            background: post.color,
          }}
        />
      </div>

      {/* Back + Actions */}
      <div className="post-top-bar">
        <button
          className="back-btn"
          onClick={() => navigate("home")}
          type="button"
        >
          <Icon name="arrow" size={16} /> All articles
        </button>
        <div className="post-actions">
          <button
            className={`post-action-btn ${bookmarked ? "bookmarked" : ""}`}
            onClick={toggleBookmark}
            type="button"
          >
            <Icon name="bookmark" size={14} />{" "}
            {bookmarked ? "Saved" : "Save"}
          </button>
          <button className="post-action-btn" type="button">
            <Icon name="share" size={14} /> Share
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div
        className="article-header"
        style={{
          background: `linear-gradient(135deg, ${post.color}10 0%, ${post.color}04 100%)`,
          border: `1px solid ${post.color}20`,
        }}
      >
        <div className="circle-1" style={{ background: `${post.color}08` }} />
        <div className="circle-2" style={{ background: `${post.color}06` }} />

        <div className="article-header-content">
          <div
            className="category-badge"
            style={{
              background: `${post.color}18`,
              color: post.color,
            }}
          >
            {post.category}
          </div>

          <h1>{post.title}</h1>
          <p className="excerpt">{post.excerpt}</p>

          <div className="article-author-row">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                className="author-avatar"
                style={{ background: post.color }}
              >
                C
              </div>
              <div className="author-info">
                <div className="author-name">{post.author}</div>
                <div className="author-role">{post.authorRole}</div>
              </div>
            </div>
            <div className="author-divider" />
            <div className="article-meta">
              <span>{post.date}</span>
              <span className="meta-icon">
                <Icon name="clock" size={13} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway Box */}
      <div
        className="key-takeaway"
        style={{ borderLeftColor: post.color }}
      >
        <div className="key-takeaway-label" style={{ color: post.color }}>
          Key Takeaway
        </div>
        <p>{post.keyTakeaway}</p>
      </div>

      <div className="article-layout">
        {/* Article Body */}
        <article className="article-body">
          {post.body.split("\n\n").map((para, i) => {
            if (para.startsWith("## ")) {
              const heading = para.replace("## ", "");
              return (
                <h2 key={i} id={`section-${i}`}>
                  {heading}
                </h2>
              );
            }
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: para.replace(
                    /\*\*(.*?)\*\*/g,
                    `<strong style="color:${post.color}">$1</strong>`,
                  ),
                }}
              />
            );
          })}
        </article>

        {/* Sidebar TOC */}
        {post.toc && (
          <aside className="article-sidebar">
            <div className="toc-panel">
              <div className="toc-label">In this article</div>
              {post.toc.map((item, i) => (
                <div
                  className={`toc-item ${i === 0 ? "active" : ""}`}
                  key={i}
                  style={
                    i === 0
                      ? { borderLeftColor: post.color }
                      : undefined
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              className="expert-panel"
              style={{
                background: `${post.color}08`,
                border: `1px solid ${post.color}15`,
              }}
            >
              <div className="expert-label" style={{ color: post.color }}>
                Source
              </div>
              <p>{post.expertCredentials}</p>
            </div>
          </aside>
        )}
      </div>

      {/* Tags */}
      <div className="article-tags">
        {post.tags.map((t) => (
          <span className="article-tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      {/* Continue Reading CTA */}
      <div className="continue-reading">
        <div className="label">Continue Reading</div>
        <p>
          Explore more insights on Claude models, AI safety, and building
          trustworthy AI applications.
        </p>
        <button
          className="continue-reading-btn"
          onClick={() => navigate("home")}
          type="button"
        >
          Browse All Articles
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Profile / About Page                                               */
/* ------------------------------------------------------------------ */

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-logo">C</div>
        <h2>{siteName}</h2>
        <p>
          Expert analysis and practical guides for Anthropic's Claude AI
          models. We cover model capabilities, safety research, benchmarks, and
          best practices for building trustworthy AI applications.
        </p>
      </div>

      <div className="eeat-grid">
        {aboutEeat.map((item) => (
          <div className="eeat-card" key={item.label}>
            <div className="label">{item.label}</div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Meta builders                                                      */
/* ------------------------------------------------------------------ */

function buildHomeMeta(): PageMetaInput {
  return {
    title: `${siteName} | Expert AI Model Analysis`,
    description: siteDescription,
    path: "/",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      description: siteDescription,
    },
  };
}

function buildAboutMeta(): PageMetaInput {
  return {
    title: `About | ${siteName}`,
    description: `About ${siteName} — expert analysis of Claude models, AI safety, and trustworthy AI applications.`,
    path: "/about",
    type: "website",
  };
}

function buildPostMeta(post: BlogPost): PageMetaInput {
  return {
    title: `${post.title} | ${siteName}`,
    description: post.excerpt,
    path: `/article/${post.slug}`,
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: siteName,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [cardStyle, setCardStyle] = useState<"grid" | "list">("list");

  // Listen for popstate (back/forward navigation)
  useEffect(() => {
    const onPop = () => setRoute(getInitialRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.page, route.post?.id]);

  const toggleBookmark = useCallback((id: number) => {
    setBookmarks((b) =>
      b.includes(id) ? b.filter((x) => x !== id) : [...b, id],
    );
  }, []);

  const filteredPosts = posts.filter((p) => {
    const matchTag = activeTag === "all" || p.tags.includes(activeTag);
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTag && matchSearch;
  });

  // Page meta
  let meta: PageMetaInput;
  if (route.page === "about") {
    meta = buildAboutMeta();
  } else if (route.page === "post" && route.post) {
    meta = buildPostMeta(route.post);
  } else {
    meta = buildHomeMeta();
  }
  usePageMeta(meta);

  return (
    <div className="site-shell">
      <SiteHeader
        currentPage={route.page === "post" ? "home" : route.page}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      <main
        className={`main-content ${route.page === "post" ? "post-view" : ""}`}
      >
        {searchOpen && (
          <SearchBar
            query={searchQuery}
            setQuery={setSearchQuery}
            onClose={() => {
              setSearchOpen(false);
              setSearchQuery("");
            }}
          />
        )}

        {route.page === "home" && (
          <FeedPage
            filteredPosts={filteredPosts}
            cardStyle={cardStyle}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}

        {route.page === "post" && route.post && (
          <PostPage
            post={route.post}
            bookmarked={bookmarks.includes(route.post.id)}
            toggleBookmark={() => toggleBookmark(route.post!.id)}
          />
        )}

        {route.page === "about" && <ProfilePage />}
      </main>

      <SiteFooter />

      {/* Card style toggle */}
      {route.page === "home" && (
        <button
          className="tweak-toggle"
          onClick={() =>
            setCardStyle((s) => (s === "grid" ? "list" : "grid"))
          }
          title={`Switch to ${cardStyle === "grid" ? "list" : "grid"} view`}
          type="button"
        >
          <Icon name={cardStyle === "grid" ? "list" : "grid"} size={18} />
        </button>
      )}
    </div>
  );
}
