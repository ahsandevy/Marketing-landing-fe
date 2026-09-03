import LiveAccountCard from "./LiveAccountCard.jsx";

export default function StopReporting() {
  return (
    <section data-reveal>
      <div className="abs" style={{ left: 66, top: 724, width: 354, height: 20 }}>
        <span className="live-dot-outer abs" style={{ left: 0, top: 0 }} />
        <span className="live-dot-inner" />
        <span className="abs muted" style={{ left: 22, top: 2, fontSize: 12, fontWeight: 400, letterSpacing: "0.16em", lineHeight: 1.36 }}>ALWAYS ON MARKETING INTELLIGENCE</span>
      </div>

      <h2 className="abs navy" style={{ left: 66, top: 772, width: 540, margin: 0, fontSize: 40, fontWeight: 500, lineHeight: 1.12 }}>
        Stop reporting
        <br />
        <span className="serif" style={{ fontSize: 42, letterSpacing: -1 }}>what happened.</span>
        <br />
        See what&apos;s next.
      </h2>

      <p className="abs muted" style={{ left: 66, top: 968, width: 520, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.55 }}>
        AIgent Z turns Meta Ads and every other growth signal into prioritized recommendations your CMO can act on today.
      </p>

      <a className="abs btn pill-lime" href="#recommendations" style={{ left: 66, top: 1054, width: 248, height: 40, borderRadius: 999, fontSize: 14, fontWeight: 500 }}>
        See Recommendations  →
      </a>
      <a className="abs link-quiet" href="#how" style={{ left: 332, top: 1064, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
        Explore the Engine →
      </a>

      <LiveAccountCard />
    </section>
  );
}
