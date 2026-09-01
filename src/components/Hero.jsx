import polygon1 from "../assets/polygon1.svg";

export default function Hero() {
  return (
    <section className="hero">
      <p className="abs navy" style={{ left: 475, top: 143, width: 491, margin: 0, textAlign: "center", fontSize: 16, fontWeight: 200, letterSpacing: "0.02em", lineHeight: 1.36 }}>
        AI-Powered Marketing Intelligence, Across Every Channel.
      </p>
      <div className="abs pill-gold" style={{ left: 1110, top: 146, width: 232, height: 31, borderRadius: 28.869, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
        Guardrail-Protected Scaling
      </div>
      <img className="abs" src={polygon1} alt="" width={23.739} height={20.558} style={{ left: 1091, top: 172, width: 23.739, height: 20.558, transform: "rotate(-135.13deg)" }} />

      <h1 className="abs navy" style={{ left: 185, top: 225, width: 1071, margin: 0, textAlign: "center", fontSize: 50, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 0.95 }}>
        Find Every Dollar Your Campaigns Are Leaving Behind.
      </h1>

      <div className="abs pill-gold" style={{ left: 156, top: 338, width: 221, height: 31, borderRadius: 28.869, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
        Creative Fatigue Detection
      </div>
      <img className="abs" src={polygon1} alt="" width={23.739} height={20.558} style={{ left: 369.88, top: 321, width: 23.739, height: 20.558, transform: "rotate(44.55deg)" }} />

      <p className="abs navy" style={{ left: 166, top: 412, width: 1108, margin: 0, textAlign: "center", fontSize: 16, fontWeight: 400, lineHeight: 1.4 }}>
        AIgent Z helps marketing teams monitor ad performance, catch risks, and scale what&apos;s working with AI-powered insights. Built for faster decisions, real-time monitoring, and confident budget calls. Currently live for Meta Ads, with Google, HubSpot, Shopify, Salesforce, and TikTok coming soon.
      </p>

      <div className="abs" style={{ left: 603, top: 536.1, width: 236.44, height: 40, borderRadius: 44.7, background: "rgba(30,74,121,0.7)", filter: "blur(13.239px)" }} />
      <a id="demo" className="abs btn pill-navy" href="#demo" style={{ left: 603, top: 533, width: 236.9, height: 48, borderRadius: 44.7, fontSize: 20, boxShadow: "2.353px 2.353px 6.94px rgba(0,0,0,0.1)" }}>
        Book a Demo
      </a>
    </section>
  );
}
