import LiveAccountCard from "./LiveAccountCard.jsx";

export default function StopReporting() {
  return (
    <section>
      <div className="abs" style={{ left: 66, top: 724, width: 354, height: 20 }}>
        <span className="live-dot-outer abs" style={{ left: 0, top: 0 }} />
        <span className="live-dot-inner" />
        <span className="abs muted" style={{ left: 22, top: 0, fontSize: 15, fontWeight: 300, lineHeight: 1.36 }}>ALWAYS ON MARKETING INTELLIGENCE</span>
      </div>

      <h2 className="abs navy" style={{ left: 75, top: 772, width: 525, margin: 0, fontSize: 62.121, fontWeight: 700, lineHeight: 0.9 }}>
        Stop reporting
        <br />
        <span className="serif" style={{ fontSize: 66.39, letterSpacing: -1.9917 }}>what happened.</span>
        <br />
        See what’s next.
      </h2>

      <p className="abs muted" style={{ left: 66, top: 972, width: 545, margin: 0, fontSize: 20, fontWeight: 300, lineHeight: 1.36 }}>
        AI gent Z turns Meta Ads and every other growth signal into prioritized recommendations your CMO can act on today
      </p>

      <a className="abs btn pill-lime" href="#recommendations" style={{ left: 66, top: 1054, width: 292, height: 37, borderRadius: 41.353, fontSize: 21.487, fontWeight: 500 }}>
        See Recommendations  →
      </a>
      <a className="abs link-quiet" href="#how" style={{ left: 392, top: 1059, fontSize: 21.487, fontWeight: 500, textDecoration: "none" }}>
        Explore the Engine →
      </a>

      <LiveAccountCard />
    </section>
  );
}
