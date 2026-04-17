import { primaryNav, siteName } from "../content";

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
    <header className="editorial-header">
      <div className="editorial-header-inner">
        <a className="editorial-brand" href="/" aria-label={`${siteName} home`}>
          {siteName}
        </a>

        <nav className="editorial-nav" aria-label="Primary">
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

        <a className="editorial-header-action" href="/blog">
          Browse guides
        </a>
      </div>
    </header>
  );
}
