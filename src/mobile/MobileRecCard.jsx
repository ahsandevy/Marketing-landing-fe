export default function MobileRecCard({ rec, index = 0 }) {
  return (
    <article className="mobile-rec" data-reveal style={{ "--rd": `${index * 90}ms` }}>
      <div className="mobile-rec-top">
        <div className="mobile-rec-tags">
          <span className="mobile-tag mobile-tag-high">HIGH</span>
          <span className="mobile-tag mobile-tag-type">{rec.type}</span>
          <span className="mobile-tag mobile-tag-conf">{rec.confidence}</span>
          <span className="mobile-tag mobile-tag-risk">{rec.risk}</span>
        </div>
        <div className="mobile-rec-lift">
          <div className="mobile-rec-lift-value">{rec.lift}</div>
          <div className="mobile-rec-lift-label">Revenue Lift</div>
        </div>
      </div>

      <h3 className="navy mobile-rec-title">{rec.title}</h3>

      <div className="mobile-rec-insight-label">CURATED INSIGHTS</div>
      <p className="mobile-rec-insight">{rec.insight}</p>

      <div className="mobile-rec-divider" />

      <div className="mobile-rec-meta">
        <span>{rec.owner}</span>
        <span>{rec.check}</span>
      </div>
      <div className="mobile-rec-actions">
        <button className="btn pill-lime mobile-rec-action" type="button">
          {rec.action}
        </button>
        <button className="btn mobile-rec-details" type="button">
          Details
        </button>
      </div>
    </article>
  );
}