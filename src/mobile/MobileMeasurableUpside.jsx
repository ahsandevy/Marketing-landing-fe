const STATS = [
  { value: "24/7", label: "Always-On Detection" },
  { value: "360°", label: "Marketing Intelligence" },
  { value: "Real-Time", label: "Growth Signals" },
  { value: "AI-Powered", label: "Next Best Actions" },
];

export default function MobileMeasurableUpside() {
  return (
    <section data-reveal className="mobile-section mobile-measurable">
      <h2 className="navy mobile-measurable-title">
        Give your next decision{" "}
        <span className="mobile-measurable-serif">a measurable upside.</span>
      </h2>
      <p className="muted mobile-measurable-body">
        AI gent Z turns fragmented marketing signals into actionable growth
        opportunities. It continuously detects where to scale, optimize, fix,
        and reallocate—giving your team the insight to make smarter decisions
        and the confidence to act on them.
      </p>

      <div className="mobile-measurable-stats">
        {STATS.map((stat) => (
          <div key={stat.value} className="navy mobile-measurable-stat">
            <div className="mobile-measurable-value">{stat.value}</div>
            <div className="mobile-measurable-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <a className="btn pill-navy mobile-measurable-btn" href="#demo">
        Book a Demo
      </a>
    </section>
  );
}