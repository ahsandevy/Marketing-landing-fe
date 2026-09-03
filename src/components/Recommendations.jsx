import RecCard from "./RecCard.jsx";
import { RECS } from "../data/recommendations.js";

export default function Recommendations() {
  return (
    <section data-reveal>
      <p id="recommendations" className="abs muted" style={{ left: 66, top: 3128, margin: 0, fontSize: 12, fontWeight: 400, letterSpacing: "0.16em" }}>AI RECOMMENDATIONS</p>
      <h2 className="abs navy" style={{ left: 220, top: 3172, width: 1000, margin: 0, textAlign: "center", fontSize: 36, fontWeight: 500, lineHeight: 1.15 }}>
        Decisions, not <span className="serif">data dumps.</span>
      </h2>
      <p className="abs muted" style={{ left: 160, top: 3236, width: 1120, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.55, textAlign: "center" }}>
        Every card leads with one action to take — shift the budget, exclude the audience, refresh the creative — backed by its own confidence score, risk level, and revenue lift in USD, plus an owner and a next check-in date.
      </p>
      <button className="abs btn pill-lime" type="button" style={{ left: 1096, top: 3388, width: 148, height: 32, borderRadius: 999, fontSize: 13, fontWeight: 500, gap: 8 }}>
        Last 30 Days
        <span style={{ display: "inline-block", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid #374151" }} />
      </button>
      <button className="abs btn pill-lime" type="button" style={{ left: 1256, top: 3388, width: 118, height: 32, borderRadius: 999, fontSize: 13, fontWeight: 500 }}>
        Refresh
      </button>
      {RECS.map((rec, i) => (
        <RecCard key={rec.title} rec={rec} index={i} />
      ))}
    </section>
  );
}
