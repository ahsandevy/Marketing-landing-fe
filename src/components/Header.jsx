import BrandMark from "./BrandMark.jsx";

const LINKS = [
  { href: "#recommendations", id: "recommendations", label: "Recommendations" },
  { href: "#how", id: "how", label: "How it Works" },
  { href: "#brief", id: "brief", label: "Executive Brief" },
];

export default function Header({ onNavigate }) {
  const go = (event, id) => {
    event.preventDefault();
    onNavigate?.(id);
  };

  return (
    <header className="site-header">
      <div className="site-header-left">
        <button className="header-menu btn" type="button" aria-label="Open menu">
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
        <a href="#top" onClick={(event) => go(event, "top")} aria-label="AIgent Z home" className="header-logo">
          <BrandMark color="navy" width={128} />
        </a>
      </div>

      <nav className="site-header-nav">
        {LINKS.map((link) => (
          <a
            key={link.id}
            className="header-link muted"
            href={link.href}
            onClick={(event) => go(event, link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="site-header-right">
        <a className="btn pill-navy header-cta" href="#demo" onClick={(event) => go(event, "demo")}>
          Book a Demo
        </a>
      </div>
    </header>
  );
}
