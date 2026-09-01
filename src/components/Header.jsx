import BrandMark from "./BrandMark.jsx";

export default function Header() {
  return (
    <header>
      <button className="abs btn" type="button" aria-label="Open menu" style={{ left: 39, top: 26, width: 25, height: 24, background: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "3px 0" }}>
        <span className="menu-line" />
        <span className="menu-line" />
        <span className="menu-line" />
      </button>

      <div className="abs" style={{ left: 76, top: 25 }}>
        <BrandMark color="navy" width={159} />
      </div>

      <a className="abs muted" href="#recommendations" style={{ left: 392, top: 29, width: 186, textAlign: "center", fontSize: 18, fontWeight: 300, lineHeight: 1.36, textDecoration: "none" }}>Recommendation</a>
      <a className="abs muted" href="#how" style={{ left: 648, top: 29, width: 144, textAlign: "center", fontSize: 18, fontWeight: 300, lineHeight: 1.36, textDecoration: "none" }}>How it Works</a>
      <a className="abs muted" href="#brief" style={{ left: 862, top: 29, width: 158, textAlign: "center", fontSize: 18, fontWeight: 300, lineHeight: 1.36, textDecoration: "none" }}>Executive Brief</a>

      <div className="abs glow-navy" style={{ left: 1226, top: 28, width: 152.7, height: 25.83, borderRadius: 28.869 }} />
      <a className="abs btn pill-navy" href="#demo" style={{ left: 1227, top: 26, width: 153, height: 31, borderRadius: 28.869, fontSize: 15 }}>Book a Demo</a>
      <div className="abs divider-h" style={{ left: -1, top: 75, width: 1443.5, borderTopColor: "#d7deea" }} />
    </header>
  );
}
