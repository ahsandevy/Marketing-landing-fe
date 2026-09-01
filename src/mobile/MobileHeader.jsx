import { useState } from "react";
import BrandMark from "./../components/BrandMark.jsx";

const LINKS = [
  { href: "#recommendations", id: "recommendations", label: "Recommendation" },
  { href: "#how", id: "how", label: "How it Works" },
  { href: "#brief", id: "brief", label: "Executive Brief" },
];

export default function MobileHeader({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate?.(id);
  };

  return (
    <header className="mobile-header">
      <div className="mobile-header-inner">
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </button>

        <a href="#top" onClick={(event) => go(event, "top")} aria-label="AIgent Z home" className="mobile-brand">
          <BrandMark color="navy" width={132} />
        </a>

        <a className="btn pill-navy mobile-header-btn" href="#demo" onClick={(event) => go(event, "demo")}>
          Book a Demo
        </a>
      </div>

      <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            className="mobile-nav-link"
            href={link.href}
            onClick={(event) => go(event, link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}