import MobileBriefDocument from "./MobileBriefDocument.jsx";

export default function MobileExecutiveBrief() {
  return (
    <section id="brief" data-reveal className="mobile-section mobile-exec">
      <div className="mobile-exec-panel">
        <div className="mobile-exec-copy">
          <p className="muted mobile-kicker">CMO-READY OUTPUT</p>
          <h2 className="navy mobile-title">
            From weekly reporting,
            <br />
            <span className="serif">to weekly action.</span>
          </h2>
          <p className="muted mobile-body">
            Turn the live account into a concise executive brief: what change, what
            to fix, where to scale, and the risks to manage.
          </p>
          <button className="btn pill-lime mobile-exec-btn" type="button">
            Generate a board-ready brief →
          </button>
        </div>

        <MobileBriefDocument />
      </div>
    </section>
  );
}
