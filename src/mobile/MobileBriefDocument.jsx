export default function MobileBriefDocument() {
  return (
    <div className="mobile-brief">
      <div className="mobile-brief-head">
        <span className="navy mobile-brief-label">AI EXECUTIVE BRIEF</span>
        <span className="muted mobile-brief-date">NEWLY GENERATED | AUG 27, 2026</span>
      </div>
      <div className="mobile-brief-divider" />

      <div className="mobile-brief-grid">
        <div>
          <div className="mobile-brief-cell-title">What Changed?</div>
          <p className="mobile-brief-cell-text">
            +8.2% ROAS: 9.55x this week, led by strong BOFU campaigns
          </p>
        </div>
        <div>
          <div className="mobile-brief-cell-title">What to Fix?</div>
          <p className="mobile-brief-cell-text">
            Refresh dynamic catalogue creative and tighten frequency caps.
          </p>
        </div>
        <div>
          <div className="mobile-brief-cell-title">Where to Scale?</div>
          <p className="mobile-brief-cell-text">
            3 high-efficiency campaigns identified for incremental budget.
          </p>
        </div>
        <div>
          <div className="mobile-brief-cell-title">Risks</div>
          <p className="mobile-brief-cell-text">
            Creative fatigue emerging across four Meta ad sets
          </p>
        </div>
      </div>

      <div className="mobile-brief-divider" />
      <div className="navy mobile-brief-label">PRIMARY RECOMMENDATION</div>
      <div className="mobile-brief-primary">
        Move budget into peak evening hours, especially 6 PM - 10 PM.
      </div>
      <div className="mobile-brief-metric">+500 to +700 incremental purchases</div>
    </div>
  );
}