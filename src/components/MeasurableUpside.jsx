const STATS = [
  { value: "24/7", label: "Always-On Detection", left: 80 },
  { value: "360°", label: "Marketing Intelligence", left: 400 },
  { value: "Real-Time", label: "Growth Signals", left: 720 },
  { value: "AI-Powered", label: "Next Best Actions", left: 1040 },
];

export default function MeasurableUpside() {
  return (
    <section
      data-reveal
      className="abs measurable"
      style={{
        left: 0,
        top: 3755,
        width: 1440,
        height: 483,
        overflow: "hidden",
        borderRadius: "20px 20px 0 0",
        backgroundImage:
          "linear-gradient(86.2deg, rgb(241, 244, 171) 1.387%, rgb(213, 213, 126) 99.826%)",
      }}
    >
      <h2
        className="abs navy"
        style={{
          left: 160,
          top: 64,
          width: 1120,
          margin: 0,
          textAlign: "center",
          fontSize: 36,
          fontWeight: 500,
          lineHeight: 1.15,
        }}
      >
        Give your next decision{" "}
        <span className="serif" style={{ color: "#6d7420" }}>
          a measurable upside.
        </span>
      </h2>
      <p
        className="abs muted"
        style={{
          left: 220,
          top: 132,
          width: 1000,
          margin: 0,
          textAlign: "center",
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.55,
        }}
      >
        AI gent Z turns fragmented marketing signals into actionable growth opportunities. It continuously detects where to scale, optimize, fix, and reallocate—giving your team the insight to make smarter decisions and the confidence to act on them.
      </p>

      {STATS.map((stat) => (
        <div
          key={stat.value}
          className="abs navy"
          style={{
            left: stat.left,
            top: 248,
            width: 320,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.2 }}>{stat.value}</div>
          <div style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.4, marginTop: 6 }}>{stat.label}</div>
        </div>
      ))}

      <div
        className="abs"
        style={{
          left: 620,
          top: 390,
          width: 200,
          height: 44,
          borderRadius: 39.456,
          background: "#1e4a79",
          filter: "blur(10px)",
        }}
      />
      <a
        className="abs btn pill-navy"
        href="#demo"
        style={{
          left: 620,
          top: 390,
          width: 200,
          height: 44,
          borderRadius: 999,
          fontSize: 15,
          fontWeight: 500,
          color: "#fafafa",
          boxShadow: "2.077px 2.077px 6.126px rgba(0,0,0,0.1)",
        }}
      >
        Book a Demo
      </a>
    </section>
  );
}
