import MobileRecCard from "./MobileRecCard.jsx";
import { RECS } from "../data/recommendations.js";

export default function MobileRecommendations() {
  return (
    <section id="recommendations" data-reveal className="mobile-section mobile-recs">
      <p className="muted mobile-kicker">AI RECOMMENDATIONS</p>
      <h2 className="navy mobile-title">
        Decisions, not <span className="serif">data dumps.</span>
      </h2>
      <p className="muted mobile-body">
        Every card leads with one action to take shift the budget, exclude the
        audience, refresh the creative — backed by its own confidence score, risk
        level, and revenue lift in USD, plus an owner and a next check-in date.
      </p>

      <div className="mobile-recs-toolbar">
        <button className="btn pill-lime" type="button">
          Last 30 Days
          <span className="caret" />
        </button>
        <button className="btn pill-lime" type="button">
          Refresh
        </button>
      </div>

      <div className="mobile-recs-list">
        {RECS.map((rec, i) => (
          <MobileRecCard key={rec.title} rec={rec} index={i} />
        ))}
      </div>
    </section>
  );
}