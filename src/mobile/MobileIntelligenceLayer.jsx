import IntelGraphic from "./IntelGraphic.jsx";

export default function MobileIntelligenceLayer() {
  return (
    <section data-reveal className="mobile-section mobile-intel">
      <IntelGraphic />

      <div className="mobile-intel-text">
        <p className="muted mobile-kicker">BUILT FOR THE MODERN MARKETING STACK</p>
        <h2 className="navy mobile-title">
          One Intelligence layer
          <br />
          <span className="serif">across every channel</span>
        </h2>
        <p className="muted mobile-body">
          Meta Ads is only the beginning. AIgent Z connects the performance,
          commerce, and customer signals your team already uses.
        </p>
        <p className="mobile-intel-note">
          Google, HubSpot, Shopify, Salesforce, and TikTok ad integrations are
          coming soon (only Meta Ads is live).
        </p>
      </div>
    </section>
  );
}
