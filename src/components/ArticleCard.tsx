import { type Article } from "../content";

type ArticleCardProps = {
  article: Article;
  variant?: "feature" | "standard" | "compact";
};

export default function ArticleCard({
  article,
  variant = "standard",
}: ArticleCardProps) {
  const cardClassName =
    variant === "feature"
      ? "story-card story-card-feature"
      : variant === "compact"
        ? "story-card story-card-compact"
        : "story-card";

  return (
    <article className={cardClassName}>
      <div className="story-meta">
        <span>{article.kicker}</span>
        <span>{article.readTime}</span>
      </div>

      <h3>
        <a href={article.path}>{article.title}</a>
      </h3>

      <p>{article.description}</p>

      {variant !== "compact" ? (
        <ul className="bullet-list">
          {article.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}

      <a className="story-link" href={article.path}>
        Read article
      </a>
    </article>
  );
}

