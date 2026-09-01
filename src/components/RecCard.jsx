export default function RecCard({ rec }) {
  const typeW = rec.typeW ?? 33.846;
  return (
    <article className="abs rec-card" style={{ left: rec.left, top: 3451, width: 434.361, height: 240 }}>
      <div className="abs" style={{ left: 17.85, top: 13.26, display: "flex", gap: 4.96, alignItems: "center" }}>
        <div className="tag" style={{ width: 28.762, height: 16.316, background: "#dc2626", color: "#fff", fontSize: 8, fontFamily: "Segoe UI, sans-serif" }}>
          HIGH
        </div>
        <div className="tag" style={{ width: typeW, height: 16.77, background: "rgba(255,255,255,0.5)", color: "#374151", fontSize: 8, fontWeight: 600, border: "0.394px solid #6b7280", fontFamily: "Segoe UI, sans-serif" }}>
          {rec.type}
        </div>
        <div className="tag" style={{ width: 70.417, height: 16.316, background: "#d3e2ff", color: "#374151", fontSize: 8, fontWeight: 400, fontFamily: "Segoe UI, sans-serif" }}>
          {rec.confidence}
        </div>
        <div className="tag" style={{ width: 58.516, height: 16.316, background: "#90d8ab", color: "#11863c", fontSize: 8, fontFamily: "Segoe UI, sans-serif" }}>
          {rec.risk}
        </div>
      </div>
      <div className="abs" style={{ right: 8.94, top: 13.26, width: 127.884, textAlign: "right", fontFamily: "Segoe UI, sans-serif" }}>
        <div style={{ color: "#78a3cd", fontSize: 14, fontWeight: 700, lineHeight: "normal" }}>{rec.lift}</div>
        <div style={{ color: "#374151", fontSize: 9, fontWeight: 300, lineHeight: "normal" }}>Revenue Lift</div>
      </div>
      <p className="abs navy" style={{ left: 17.85, top: 74, width: 381, margin: 0, fontSize: 15, lineHeight: 0.95, fontWeight: 400 }}>
        {rec.title}
      </p>
      <div className="abs" style={{ left: 17.85, top: 138.76, width: 266 }}>
        <div className="navy" style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.2 }}>CURATED INSIGHTS</div>
        <p style={{ margin: "6px 0 0", paddingLeft: 15, borderLeft: "1.671px solid #c8c8a1", fontSize: 10, lineHeight: "normal", color: "#374151", fontFamily: "Segoe UI, sans-serif" }}>
          {rec.insight}
        </p>
      </div>
      <div className="abs divider-h" style={{ left: 16, top: 202.98, width: 409.628 }} />
      <div className="abs" style={{ left: 22.81, top: 216.24, fontSize: 9, color: "#374151", fontFamily: "Segoe UI, sans-serif" }}>{rec.owner}</div>
      <div className="abs" style={{ left: 143.81, top: 216.24, fontSize: 9, color: "#374151", fontFamily: "Segoe UI, sans-serif" }}>{rec.check}</div>
      <button className="abs btn pill-lime" type="button" style={{ left: 371.92 - 8.93 - rec.actionW, top: 213.18, width: rec.actionW, height: 18.355, borderRadius: 19.313, fontSize: 9, fontWeight: 500 }}>
        {rec.action}
      </button>
      <button className="abs btn" type="button" style={{ left: 371.92, top: 213.18, width: 53.557, height: 18.355, borderRadius: 19.313, background: "#f5f9ff", color: "#374151", fontSize: 9, fontWeight: 500, boxShadow: "1.016px 1.016px 2.999px rgba(0,0,0,0.1)" }}>
        Details
      </button>
    </article>
  );
}
