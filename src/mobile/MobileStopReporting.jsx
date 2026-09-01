import MobileLiveAccountCard from "./MobileLiveAccountCard.jsx";

export default function MobileStopReporting() {
  return (
    <section data-reveal className="mobile-section mobile-stop">
      <div className="mobile-stop-kicker">
        <span className="live-dot-outer">
          <span className="live-dot-inner" />
        </span>
        <span className="muted mobile-kicker">ALWAYS ON MARKETING INTELLIGENCE</span>
      </div>

      <h2 className="navy mobile-title">
        Stop reporting
        <br />
        <span className="serif">what happened.</span>
        <br />
        See what&apos;s next.
      </h2>

      <p className="muted mobile-body">
        AI gent Z turns Meta Ads and every other growth signal into prioritized
        recommendations your CMO can act on today
      </p>

      <div className="mobile-stop-links">
        <a className="btn pill-lime mobile-stop-btn" href="#recommendations">
          See Recommendations →
        </a>
        <a className="mobile-quiet-link" href="#how">
          Explore the Engine →
        </a>
      </div>

      <MobileLiveAccountCard />
    </section>
  );
}