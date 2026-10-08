function HeroBadgeArrow() {
  return (
    <svg
      className="hero-badge-arrow"
      viewBox="0 0 18.0642 16.3601"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.09721 0.500001C8.48211 -0.166668 9.44437 -0.166667 9.82927 0.500002L17.9372 14.5433C18.4986 15.5157 17.0747 16.7918 16.1104 16.2166C14.0118 14.9647 11.5398 13.8166 9.41074 13.7141C7.01624 13.599 4.3037 14.7525 2.03487 16.0644C1.05546 16.6307 -0.441638 15.2898 0.124036 14.31L8.09721 0.500001Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MobileHero() {
  return (
    <section className="mobile-section mobile-hero">
      <p className="mobile-hero-sub">
        AI-Powered Marketing Intelligence,{" "}
        <span className="serif">Across Every Channel.</span>
      </p>

      <div className="mobile-hero-head">
        <span className="hero-badge hero-badge-guard">
          Guardrail-Protected Scaling
          <HeroBadgeArrow />
        </span>
        <h1 className="mobile-hero-title">
          Find Every Dollar Your Campaigns Are Leaving Behind.
        </h1>
        <span className="hero-badge hero-badge-creative">
          Creative Fatigue Detection
          <HeroBadgeArrow />
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
