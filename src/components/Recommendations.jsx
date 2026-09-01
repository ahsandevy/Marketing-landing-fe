import RecCard from "./RecCard.jsx";
import { RECS } from "../data/recommendations.js";

export default function Recommendations() {
  return (
    <section>
      <p id="recommendations" className="abs muted" style={{ left: 66, top: 3121, margin: 0, fontSize: 14, fontWeight: 300 }}>AI RECOMMENDATIONS</p>
      <h2 className="abs navy" style={{ left: 346, top: 3176, width: 796, margin: 0, textAlign: "center", fontSize: 48, fontWeight: 500, lineHeight: 0.95 }}>
        Decisions, not <span className="serif">data dumps.</span>
      </h2>
      <p className="abs muted" style={{ left: 78, top: 3269, width: 1303, margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.4 }}>
        Every card leads with one action to take shift the budget, exclude the audience, refresh the creative — backed by its own confidence score, risk level, and revenue lift in USD, plus an owner and a next check-in date.
      </p>
      <button className="abs btn pill-lime" type="button" style={{ left: 1109, top: 3391, width: 152.7, height: 25.83, borderRadius: 28.869, fontSize: 14, fontWeight: 500, gap: 8 }}>
        Last 30 Days
        <span style={{ display: "inline-block", width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid #374151" }} />
      </button>
      <button className="abs btn pill-lime" type="button" style={{ left: 1280, top: 3391, width: 99, height: 26, borderRadius: 28.869, fontSize: 14, fontWeight: 500 }}>
        Refresh
      </button>
      {RECS.map((rec) => (
        <RecCard key={rec.title} rec={rec} />
      ))}
    </section>
  );
}
