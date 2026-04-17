import { articles, primaryNav } from "../content";

const footerFeatures = [
  "Model guides that stay useful between vendor updates",
  "Comparison pages built around workflow fit, not hype",
  "Pricing coverage that explains spend decisions clearly",
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <strong>Claude Opus Models</strong>
          <p>
            Independent guides and comparisons for Claude, GPT, and Gemini. Built to help you make
            faster model decisions for real work.
          </p>
        </div>

        <div>
          <p className="footer-label">Browse</p>
          <div className="footer-links">
            {primaryNav.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-label">Core pages</p>
          <div className="footer-links">
            {articles.slice(0, 4).map((article) => (
              <a href={article.path} key={article.slug}>
                {article.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-meta">
        {footerFeatures.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>

      <p className="disclaimer">
        Claude is a trademark of Anthropic. This website is an independent informational resource
        and is not affiliated with or endorsed by Anthropic, OpenAI, or Google.
      </p>
    </footer>
  );
}
