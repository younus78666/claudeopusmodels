import { articles, primaryNav, siteName } from "../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <a className="site-footer-title" href="/">
            {siteName}
          </a>
          <p>
            Independent informational publication covering Claude, GPT, and Gemini with clean model
            guides, comparison pages, and pricing logic for real workflows.
          </p>
        </div>

        <div className="site-footer-links">
          <div>
            <p className="site-footer-label">Journal</p>
            <div className="site-footer-list">
              {primaryNav.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="site-footer-label">Core guides</p>
            <div className="site-footer-list">
              {articles.slice(0, 4).map((article) => (
                <a href={article.path} key={article.slug}>
                  {article.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="site-footer-disclaimer">
        Claude is a trademark of Anthropic. This website is an independent informational resource
        and is not affiliated with or endorsed by Anthropic, OpenAI, or Google.
      </p>
    </footer>
  );
}
