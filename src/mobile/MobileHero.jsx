import polygon1 from "../assets/polygon1.svg";

export default function MobileHero() {
  return (
    <section className="mobile-section mobile-hero">
      <p className="mobile-hero-sub">
        AI-Powered Marketing Intelligence, Across Every Channel.
      </p>

      <div className="mobile-hero-head">
        <h1 className="mobile-hero-title">
          Find Every Dollar Your Campaigns Are Leaving Behind.
        </h1>
        <span className="pill-gold hero-badge hero-badge-guard">
          Guardrail-Protected Scaling
        </span>
        <span className="pill-gold hero-badge hero-badge-creative">
          Creative Fatigue Detection
          <img src={polygon1} alt="" className="mobile-hero-arrow" />
        </span>
      </div>

      <p className="mobile-hero-body">
        AIgent Z helps marketing teams monitor ad performance, catch risks, and
        scale what&apos;s working with AI-powered insights. Built for faster
        decisions, real-time monitoring, and confident budget calls. Currently
        live for Meta Ads, with Google, HubSpot, Shopify, Salesforce, and TikTok
        coming soon.
      </p>

      <a id="demo" className="btn pill-navy mobile-hero-btn" href="#demo">
        Book a Demo
      </a>
    </section>
  );
}