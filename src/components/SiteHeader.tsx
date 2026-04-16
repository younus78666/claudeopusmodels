const navLinks = [
  { href: "#comparison", label: "Compare" },
  { href: "#family", label: "Claude Models" },
  { href: "#picks", label: "Best Picks" },
  { href: "#methodology", label: "Methodology" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Claude Opus Models home">
        <span className="brand-mark">C</span>
        <span className="brand-text">
          <strong>Claude Opus Models</strong>
          <small>Independent AI model guide</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
