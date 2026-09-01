export default function LiveAccountCard() {
  return (
    <div className="abs card-shadow" style={{ left: 653, top: 663, width: 724, height: 524, borderRadius: 13 }}>
      <div className="abs" style={{ left: 40, top: 25, width: 9, height: 9, borderRadius: "50%", background: "#16a34a" }} />
      <p className="abs muted" style={{ left: 54, top: 22, margin: 0, fontSize: 12, fontWeight: 300 }}>LIVE ACCOUNT VIEW</p>
      <p className="abs muted" style={{ left: 476, top: 22, margin: 0, fontSize: 12, fontWeight: 300, textAlign: "right", width: 208 }}>SERVIS SHOUES USD - LAST 30 DAYS</p>
      <p className="abs muted" style={{ left: 40, top: 68, margin: 0, fontSize: 12, fontWeight: 300 }}>AI EXECUTIVE BRIEF</p>
      <h3 className="abs navy" style={{ left: 40, top: 89, width: 398, margin: 0, fontSize: 50, fontWeight: 400, lineHeight: 0.9 }}>
        What should the
        <br />
        <span className="serif" style={{ fontWeight: 400, letterSpacing: -1.5 }}>CMO do next?</span>
      </h3>
      <div className="abs" style={{ left: 476, top: 123, width: 208, textAlign: "right" }}>
        <div style={{ color: "#5d8ebd", fontSize: 30, fontWeight: 700, lineHeight: 1.36 }}>92%</div>
        <div style={{ fontSize: 12, fontWeight: 300 }}>confidence</div>
      </div>
      <div className="abs" style={{ left: 40, top: 204, width: 644, height: 125, borderRadius: 10, borderLeft: "5px solid #5d8ebd", padding: "17px 41px 0 41px", boxShadow: "4px 4px 9.1px rgba(0,0,0,0.09)", background: "linear-gradient(156.12deg, #f5f8fd 31.67%, #fff 101.75%)" }}>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#374151" }}>RECOMMENDATION 01</p>
        <p style={{ margin: "8px 0 0", fontSize: 12, fontWeight: 600, lineHeight: 1.36 }}>Reallocate budget from Facebook to Instagram</p>
        <p style={{ margin: "4px 0 0", width: 474, fontSize: 12, fontWeight: 400, lineHeight: 1.36 }}>Protect ROAS by moving 50% of spend from a lower-performing placement into the stronger BOFU inventory.</p>
        <div className="abs" style={{ right: 24, top: 15, textAlign: "right" }}>
          <div style={{ color: "#5d8ebd", fontSize: 17.143, fontWeight: 700 }}>+4,200 USD</div>
          <div style={{ fontSize: 6.857 }}>project lift</div>
        </div>
      </div>
      <div className="abs" style={{ left: 40, top: 364, width: 644, height: 103, background: "#eceec7", border: "1px solid #c8c8a1", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div style={{ padding: "18px 30px" }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>ROAS</div>
          <div style={{ fontSize: 25, fontWeight: 600 }}>9.57x</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#16a34a" }}>+8.4% MoM</div>
        </div>
        <div style={{ padding: "18px 30px", borderLeft: "1px solid #c8c8a1" }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>SPEND</div>
          <div style={{ fontSize: 25, fontWeight: 600 }}>154,039 USD</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#16a34a" }}>+139.4% MoM</div>
        </div>
        <div style={{ padding: "18px 30px", borderLeft: "1px solid #c8c8a1" }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>CPA</div>
          <div style={{ fontSize: 25, fontWeight: 600 }}>4 USD</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#dc2626" }}>-3% MoM</div>
        </div>
      </div>
      <p className="abs muted" style={{ left: 40, top: 477, margin: 0, fontSize: 12, fontWeight: 300 }}>Verified across 6 connected sources</p>
      <button className="abs btn pill-lime" type="button" style={{ left: 573, top: 482, width: 111, height: 23, borderRadius: 28.87, fontSize: 12, fontWeight: 500, boxShadow: "1.52px 1.52px 4px rgba(0,0,0,0.25)" }}>
        View audit trail
      </button>
    </div>
  );
}
