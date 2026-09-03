import polygon1 from "../assets/polygon1.svg";

export default function Hero() {
  return (
    <section className="hero">
      <p className="abs navy hero-kicker" style={{ left: 420, top: 148, width: 600, margin: 0, textAlign: "center" }}>
        AI-Powered Marketing Intelligence, Across Every Channel.
      </p>
      <div className="abs pill-gold hero-chip" style={{ left: 1118, top: 148 }}>
        Guardrail-Protected Scaling
      </div>
      <img className="abs" src={polygon1} alt="" width={18} height={16} style={{ left: 1102, top: 170, width: 18, height: 16, transform: "rotate(-135.13deg)" }} />

      <h1 className="abs navy" style={{ left: 280, top: 216, width: 880, margin: 0, textAlign: "center", fontSize: 40, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.12 }}>
        Find Every Dollar Your Campaigns Are Leaving Behind.
      </h1>

      <div className="abs pill-gold hero-chip" style={{ left: 168, top: 348 }}>
        Creative Fatigue Detection
      </div>
      <img className="abs" src={polygon1} alt="" width={18} height={16} style={{ left: 372, top: 334, width: 18, height: 16, transform: "rotate(44.55deg)" }} />

      <p className="abs navy" style={{ left: 250, top: 410, width: 940, margin: 0, textAlign: "center", fontSize: 16, fontWeight: 400, lineHeight: 1.55 }}>
        AIgent Z helps marketing teams monitor ad performance, catch risks, and scale what&apos;s working with AI-powered insights. Built for faster decisions, real-time monitoring, and confident budget calls. Currently live for Meta Ads, with Google, HubSpot, Shopify, Salesforce, and TikTok coming soon.
      </p>

      <div className="abs" style={{ left: 620, top: 532, width: 200, height: 36, borderRadius: 999, background: "rgba(30,74,121,0.7)", filter: "blur(12px)" }} />
      <a id="demo" className="abs btn pill-navy" href="#demo" style={{ left: 620, top: 528, width: 200, height: 44, borderRadius: 999, fontSize: 15 }}>
        Book a Demo
      </a>
    </section>
  );
}
