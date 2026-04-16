const footerLinks = [
  { href: "#family", label: "Claude Models" },
  { href: "#comparison", label: "Comparisons" },
  { href: "#methodology", label: "Methodology" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteFooter() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-brand">
        <strong>Claude Opus Models</strong>
        <p>
          Independent comparisons and guides for Claude, GPT, and Gemini. Built to help users make
          faster, clearer model decisions.
        </p>
      </div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <p className="disclaimer">
        Claude is a trademark of Anthropic. This site is an independent informational resource and
        is not affiliated with or endorsed by Anthropic.
      </p>
    </footer>
  );
}
