const STATS = [
  { value: "24/7", label: "Always-On Detection", left: 194, top: 258, width: 200, valueWeight: 500 },
  { value: "360°", label: "Marketing Intelligence", left: 467, top: 262, width: 203, valueWeight: 500 },
  { value: "Real-Time", label: "Growth Signals", left: 743, top: 264, width: 224, valueWeight: 500 },
  { value: "AI-Powered", label: "Next Best Actions", left: 1040, top: 260, width: 246, valueWeight: 500 },
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
          left: 167,
          top: 56,
          width: 1106,
          margin: 0,
          textAlign: "center",
          fontSize: 42,
          fontWeight: 500,
          lineHeight: 0.95,
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
          left: 167,
          top: 139,
          width: 1106,
          margin: 0,
          textAlign: "center",
          fontSize: 17,
          fontWeight: 300,
          lineHeight: 1.4,
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
            top: stat.top,
            width: stat.width,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, fontWeight: stat.valueWeight, lineHeight: 1.36 }}>{stat.value}</div>
          <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.36 }}>{stat.label}</div>
        </div>
      ))}

      <div
        className="abs"
        style={{
          left: 615,
          top: 385,
          width: 209,
          height: 42,
          borderRadius: 39.456,
          background: "#1e4a79",
          filter: "blur(10px)",
        }}
      />
      <a
        className="abs btn pill-navy"
        href="#demo"
        style={{
          left: 615.15,
          top: 385,
          width: 209,
          height: 42,
          borderRadius: 39.456,
          fontSize: 19,
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
