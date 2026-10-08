const STEPS = [
  ["01", "Detect", "Find wasted spend, saturation, and shifts others miss."],
  ["02", "Explain", "Connect the signal to a business implication"],
  ["03", "Quantify", "Model revenue lift, ROAS, CPA, and risk"],
  ["04", "Recommend", "Give the team a move they can approve or stimulate"],
];

export default function MobileHowItWorks() {
  return (
    <section id="how" data-reveal className="mobile-section mobile-how">
      <div className="mobile-how-card">
        <p className="muted mobile-kicker">FROM DATA TO DECISION</p>
        <h2 className="navy mobile-title">
          The CMO doesn&apos;t need <span className="serif">another dashboard.</span>
        </h2>
        <p className="muted mobile-body">
          Every cycle, AI gent Z distills the account into four things that
          matter: what changed, where there&apos;s room to scale, what&apos;s putting spend
          at risk, and the single highest-leverage move to make next.
        </p>

        <div className="mobile-how-grid">
          {STEPS.map(([n, t, d]) => (
            <div key={n} className="mobile-how-cell navy">
              <div className="mobile-how-num">{n}</div>
              <div className="mobile-how-title">{t}</div>
              <div className="mobile-how-desc">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
