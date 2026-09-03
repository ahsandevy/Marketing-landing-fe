const STEPS = [
  ["01", "Detect", "Find wasted spend, saturation, and shifts others miss.", true],
  ["02", "Explain", "Connect the signal to a business implication", true],
  ["03", "Quantify", "Model revenue lift, ROAS, CPA, and risk", true],
  ["04", "Recommendation", "Give the team a move they can improve or stimulate", false],
];

export default function HowItWorks() {
  return (
    <section id="how" data-reveal className="abs card-shadow" style={{ left: 26, top: 1239, width: 1389, height: 556, borderRadius: 10, boxShadow: "4px 4px 16.7px rgba(0,0,0,0.15)" }}>
      <p className="abs muted" style={{ left: 48, top: 48, margin: 0, fontSize: 12, fontWeight: 400, letterSpacing: "0.16em" }}>FROM DATA TO DECISION</p>
      <h2 className="abs navy" style={{ left: 48, top: 88, width: 1293, margin: 0, fontSize: 36, fontWeight: 500, lineHeight: 1.15, textAlign: "center" }}>
        The CMO doesn&apos;t need <span className="serif">another dashboard.</span>
      </h2>
      <p className="abs muted" style={{ left: 80, top: 160, width: 1229, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.55, textAlign: "center" }}>
        Every cycle, AIgent Z distills the account into four things that matter: what changed, where there&apos;s room to scale, what&apos;s putting spend at risk, and the single highest-leverage move to make next. No dashboard to read, no report to translate — just the recommendation, the reasoning, and the numbers behind it.
      </p>
      <div className="abs" style={{ left: 40, top: 280, width: 1309, height: 220, borderRadius: 12, boxShadow: "4px 4px 5.75px rgba(0,0,0,0.05)", background: "linear-gradient(81.16deg, #fcffbc 1.39%, #d5d57e 99.83%)" }}>
        {STEPS.map(([n, t, d, light], i) => (
          <div key={n} className="abs navy" style={{ left: [40, 367, 694, 1021][i], top: 40, width: 248 }}>
            <div style={{ fontSize: 12, fontWeight: light ? 400 : 500 }}>{n}</div>
            <div style={{ fontSize: 18, fontWeight: 500, margin: "6px 0 10px" }}>{t}</div>
            <div style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.45 }}>{d}</div>
          </div>
        ))}
        <div className="abs" style={{ left: 327, top: 28, width: 0, height: 164, borderLeft: "1px solid rgba(30,74,121,0.28)" }} />
        <div className="abs" style={{ left: 654, top: 28, width: 0, height: 164, borderLeft: "1px solid rgba(30,74,121,0.28)" }} />
        <div className="abs" style={{ left: 981, top: 28, width: 0, height: 164, borderLeft: "1px solid rgba(30,74,121,0.28)" }} />
      </div>
    </section>
  );
}
