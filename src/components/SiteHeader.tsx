import { navLinks, siteName } from "../content";

type SiteHeaderProps = {
  currentPage: string;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
};

function SearchIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export default function SiteHeader({
  currentPage,
  searchOpen,
  setSearchOpen,
}: SiteHeaderProps) {
  return (
    <nav className="topnav">
      <div className="topnav-left">
        <a className="topnav-brand" href="/" aria-label={`${siteName} home`}>
          <div className="topnav-logo">C</div>
          <span className="topnav-title">{siteName}</span>
        </a>

        <div className="topnav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`topnav-link ${currentPage === link.id ? "active" : ""}`}
              href={link.id === "home" ? "/" : `/${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <button
        className="topnav-search-btn"
        onClick={() => setSearchOpen(!searchOpen)}
        type="button"
        aria-label="Toggle search"
      >
        <SearchIcon />
      </button>
    </nav>
  );
}
