import hubspot from "../assets/hubspot.png";
import google from "../assets/google.png";
import meta from "../assets/meta.png";
import shopify from "../assets/shopify.png";
import salesforce from "../assets/salesforce.png";
import tiktok from "../assets/tiktok.png";

const CHANNELS = [
  { src: meta, alt: "Meta", ads: true },
  { src: google, alt: "Google", ads: true },
  { src: hubspot, alt: "HubSpot", ads: false },
  { src: shopify, alt: "Shopify", ads: false },
  { src: salesforce, alt: "Salesforce", ads: false },
  { src: tiktok, alt: "TikTok", ads: true },
];

export default function MobileIntelligenceLayer() {
  return (
    <section data-reveal className="mobile-section mobile-intel">
      <div className="mobile-intel-graphic">
        <div className="mobile-intel-cards">
          <div className="mobile-intel-card">
            <div className="mobile-intel-card-title">NEW OPPORTUNITY</div>
            <div className="navy mobile-intel-card-line">Paid search | high intent</div>
            <div className="mobile-intel-card-sub">+18% projected conversions lift</div>
          </div>
          <div className="mobile-intel-card">
            <div className="mobile-intel-card-title">CREATIVE FATIGUE</div>
            <div className="navy mobile-intel-card-line">Meta / Summer campaign</div>
            <div className="mobile-intel-card-sub">Refresh recommended within 5 days</div>
          </div>
        </div>

        <p className="mobile-intel-quote">Finding a signal in the noise!</p>

        <div className="mobile-intel-channels">
          {CHANNELS.map((c) => (
            <div key={c.alt} className="mobile-intel-channel">
              <img
                src={c.src}
                alt={c.alt}
                className="mobile-intel-logo"
                loading="lazy"
              />
              {c.ads && <span className="muted mobile-intel-ads">Ads</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-intel-text">
        <p className="muted mobile-kicker">BUILT FOR THE MODERN MARKETING STACK</p>
        <h2 className="navy mobile-title">
          One Intelligence layer
          <br />
          <span className="serif">across every channel</span>
        </h2>
        <p className="muted mobile-body">
          Meta Ads is only the beginning. AI gent Z connects the performance,
          commerce, and customer signals your team already uses.
        </p>
        <div className="mobile-intel-note">
          Google, HubSpot, Shopify, Salesforce, and TikTok ad integrations are
          coming soon (only Meta Ads is live).
        </div>
      </div>
    </section>
  );
}