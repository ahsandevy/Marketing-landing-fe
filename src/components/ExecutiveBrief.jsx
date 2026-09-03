import BriefDocument from "./BriefDocument.jsx";

export default function ExecutiveBrief() {
  return (
    <section id="brief" data-reveal className="abs" style={{ left: 26, top: 2500, width: 1389, height: 562, background: "#ebf1f8", borderRadius: 10 }}>
      <p className="abs muted" style={{ left: 48, top: 168, margin: 0, fontSize: 12, fontWeight: 400, letterSpacing: "0.16em" }}>CMO-READY OUTPUT</p>
      <h2 className="abs navy" style={{ left: 48, top: 196, width: 580, margin: 0, fontSize: 36, fontWeight: 500, lineHeight: 1.15 }}>
        From weekly reporting,
        <br />
        <span className="serif">to weekly action.</span>
      </h2>
      <p className="abs muted" style={{ left: 48, top: 300, width: 560, margin: 0, fontSize: 16, fontWeight: 400, lineHeight: 1.55 }}>
        Turn the live account into a concise executive brief: what changed, what to fix, where to scale, and the risks to manage.
      </p>
      <button className="abs btn pill-lime" type="button" style={{ left: 48, top: 400, width: 280, height: 40, borderRadius: 999, fontSize: 14, fontWeight: 500 }}>
        Generate a board-ready brief →
      </button>
      <BriefDocument />
    </section>
  );
}
