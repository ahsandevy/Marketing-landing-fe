import BrandMark from "./BrandMark.jsx";

const LINKS = [
  { href: "#recommendations", id: "recommendations", label: "Recommendation", left: 392, width: 186 },
  { href: "#how", id: "how", label: "How it Works", left: 648, width: 144 },
  { href: "#brief", id: "brief", label: "Executive Brief", left: 862, width: 158 },
];

export default function Header({ onNavigate }) {
  const go = (event, id) => {
    event.preventDefault();
    onNavigate?.(id);
  };

  return (
    <header className="site-header">
      <button className="abs btn" type="button" aria-label="Open menu" style={{ left: 39, top: 26, width: 25, height: 24, background: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3px 0" }}>
        <span className="menu-line" />
        <span className="menu-line" />
        <span className="menu-line" />
      </button>

      <a className="abs" href="#top" onClick={(event) => go(event, "top")} style={{ left: 76, top: 25 }} aria-label="AIgent Z home">
        <BrandMark color="navy" width={159} />
      </a>

      {LINKS.map((link) => (
        <a
          key={link.id}
          className="abs muted"
          href={link.href}
          onClick={(event) => go(event, link.id)}
          style={{ left: link.left, top: 29, width: link.width, textAlign: "center", fontSize: 15, fontWeight: 300, lineHeight: 1.36, textDecoration: "none" }}
        >
          {link.label}
        </a>
      ))}

      <div className="abs glow-navy" style={{ left: 1226, top: 28, width: 152.7, height: 25.83, borderRadius: 28.869 }} />
      <a className="abs btn pill-navy" href="#demo" onClick={(event) => go(event, "demo")} style={{ left: 1227, top: 26, width: 153, height: 31, borderRadius: 28.869, fontSize: 14 }}>Book a Demo</a>
      <div className="abs divider-h" style={{ left: -1, top: 75, width: 1443.5, borderTopColor: "#d7deea" }} />
    </header>
  );
}
