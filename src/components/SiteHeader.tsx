import { primaryNav } from "../content";

type SiteHeaderProps = {
  currentPath: string;
};

function isActiveLink(currentPath: string, href: string, matchPrefix?: string) {
  if (matchPrefix) {
    return currentPath.startsWith(matchPrefix);
  }

  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar-ribbon">
        <span>Claude Opus Models</span>
        <span>Independent editorial coverage</span>
        <span>Comparisons, guides, and pricing logic</span>
      </div>

      <div className="masthead">
        <a className="brand" href="/" aria-label="Claude Opus Models home">
          <span className="brand-mark">CM</span>
          <span className="brand-text">
            <strong>Claude Opus Models</strong>
            <small>AI model blog for real buying and workflow decisions</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          {primaryNav.map((link) => (
            <a
              className={
                isActiveLink(currentPath, link.href, link.matchPrefix) ? "active" : undefined
              }
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
