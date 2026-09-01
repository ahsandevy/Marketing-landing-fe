import BriefDocument from "./BriefDocument.jsx";

export default function ExecutiveBrief() {
  return (
    <section id="brief" className="abs" style={{ left: 26, top: 2500, width: 1389, height: 562, background: "#ebf1f8", borderRadius: 10 }}>
      <p className="abs muted" style={{ left: 40, top: 146, margin: 0, fontSize: 15, fontWeight: 300 }}>CMO-READY OUTPUT</p>
      <h2 className="abs navy" style={{ left: 40, top: 170, width: 655, margin: 0, fontSize: 57.626, fontWeight: 500, lineHeight: 0.9 }}>
        From weekly reporting,
        <br />
        <span className="serif">to weekly action.</span>
      </h2>
      <p className="abs muted" style={{ left: 40, top: 291, width: 620, margin: 0, fontSize: 20, fontWeight: 300, lineHeight: 1.36 }}>
        Turn the live account into a concise executive brief: what change, what to fix, where to scale, and the risks to manage.
      </p>
      <button className="abs btn pill-lime" type="button" style={{ left: 43, top: 379, width: 355, height: 37, borderRadius: 41.353, fontSize: 21.487, fontWeight: 500 }}>
        Generate a board-ready brief →
      </button>
      <BriefDocument />
    </section>
  );
}
