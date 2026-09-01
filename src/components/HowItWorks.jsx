const STEPS = [
  ["01", "Detect", "Find wasted spend, saturation, and shifts others miss.", true],
  ["02", "Explain", "Connect the signal to a business implication", true],
  ["03", "Quantify", "Model revenue lift, ROAS, CPA, and risk", true],
  ["04", "Recommendation", "Give the team a move they can improve or stimulate", false],
];

export default function HowItWorks() {
  return (
    <section id="how" data-reveal className="abs card-shadow" style={{ left: 26, top: 1239, width: 1389, height: 556, borderRadius: 10, boxShadow: "4px 4px 16.7px rgba(0,0,0,0.15)" }}>
      <p className="abs muted" style={{ left: 40, top: 60, margin: 0, fontSize: 14, fontWeight: 300 }}>FROM DATA TO DECISION</p>
      <h2 className="abs navy" style={{ left: 94, top: 114, width: 1201, margin: 0, fontSize: 48, fontWeight: 500, lineHeight: 0.95, textAlign: "center" }}>
        The CMO doesn&apos;t need <span className="serif">another dashboard.</span>
      </h2>
      <p className="abs muted" style={{ left: 40, top: 202, width: 1315, margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.4 }}>
        Every cycle, AI gent Z distills the account into four things that matter: what changed, where there&apos;s room to scale, what&apos;s putting spend at risk, and the single highest-leverage move to make next. No dashboard to read, no report to translate — just the recommendation, the reasoning, and the numbers behind it.
      </p>
      <div className="abs" style={{ left: 40, top: 319, width: 1313, height: 188, borderRadius: 8.746, boxShadow: "4px 4px 5.75px rgba(0,0,0,0.05)", background: "linear-gradient(81.16deg, #fcffbc 1.39%, #d5d57e 99.83%)" }}>
        {STEPS.map(([n, t, d, light], i) => (
          <div key={n} className="abs navy" style={{ left: [27, 376, 725, 1074][i], top: 48, width: 212 }}>
            <div style={{ fontSize: 14, fontWeight: light ? 200 : 400 }}>{n}</div>
            <div style={{ fontSize: 22, fontWeight: light ? 200 : 400, margin: "2px 0 8px" }}>{t}</div>
            <div style={{ fontSize: 14, fontWeight: light ? 200 : 400, lineHeight: "normal" }}>{d}</div>
          </div>
        ))}
        <div className="abs" style={{ left: 314, top: 16, width: 0, height: 141, borderLeft: "1px solid rgba(30,74,121,0.28)" }} />
        <div className="abs" style={{ left: 650, top: 16, width: 0, height: 141, borderLeft: "1px solid rgba(30,74,121,0.28)" }} />
        <div className="abs" style={{ left: 1015, top: 16, width: 0, height: 141, borderLeft: "1px solid rgba(30,74,121,0.28)" }} />
      </div>
    </section>
  );
}
