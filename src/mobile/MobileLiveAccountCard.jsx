export default function MobileLiveAccountCard() {
  return (
    <div className="mobile-live-card" data-reveal>
      <div className="mobile-live-head">
        <span className="mobile-live-dot" />
        <span className="muted mobile-live-label">LIVE ACCOUNT VIEW</span>
        <span className="muted mobile-live-label mobile-live-right">SERVIS SHOES USD - LAST 30 DAYS</span>
      </div>

      <div className="mobile-live-subhead">
        <div>
          <p className="muted mobile-live-label">AI EXECUTIVE BRIEF</p>
          <h3 className="navy mobile-live-title">
            What should the <span className="serif">CMO</span> do next?
          </h3>
        </div>
        <div className="mobile-live-confidence">
          <div>92%</div>
          <div className="muted mobile-live-label">confidence</div>
        </div>
      </div>

      <div className="mobile-live-rec">
        <div className="mobile-live-rec-top">
          <p className="mobile-live-rec-label">RECOMMENDATION 01</p>
          <div className="mobile-live-rec-metric">
            <span>+4,200 USD</span>
            <span className="muted"> projected lift</span>
          </div>
        </div>
        <p className="mobile-live-rec-title">Reallocate budget from Facebook to Instagram</p>
        <p className="mobile-live-rec-desc">
          Protect ROAS by moving 50% of spend from a lower-performing placement
          into the stronger BOFU inventory.
        </p>
      </div>

      <div className="mobile-live-metrics">
        <div className="mobile-live-metric">
          <div className="mobile-live-metric-label">ROAS</div>
          <div className="mobile-live-metric-value">9.57x</div>
          <div className="mobile-live-delta up">+8.4% MoM</div>
        </div>
        <div className="mobile-live-metric">
          <div className="mobile-live-metric-label">SPEND</div>
          <div className="mobile-live-metric-value">154,039 USD</div>
          <div className="mobile-live-delta up">+139.4% MoM</div>
        </div>
        <div className="mobile-live-metric">
          <div className="mobile-live-metric-label">CPA</div>
          <div className="mobile-live-metric-value">4 USD</div>
          <div className="mobile-live-delta down">-3% MoM</div>
        </div>
      </div>

      <div className="mobile-live-foot">
        <span className="muted mobile-live-label">Verified across 6 connected sources</span>
        <button className="btn pill-lime mobile-live-audit" type="button">
          View audit trail
        </button>
      </div>
    </div>
  );
}