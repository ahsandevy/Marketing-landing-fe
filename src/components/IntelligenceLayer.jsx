import Crop from "./Crop.jsx";
import hubspot from "../assets/hubspot.png";
import google from "../assets/google.png";
import meta from "../assets/meta.png";
import shopify from "../assets/shopify.png";
import salesforce from "../assets/salesforce.png";
import tiktok from "../assets/tiktok.png";
import ellipse3 from "../assets/ellipse3.svg";
import ellipse10 from "../assets/ellipse10.svg";
import ellipse4 from "../assets/ellipse4.svg";
import ellipse5 from "../assets/ellipse5.svg";
import ellipse6 from "../assets/ellipse6.svg";
import vector10 from "../assets/vector10.svg";
import vector14 from "../assets/vector14.svg";
import vector13 from "../assets/vector13.svg";
import vector25 from "../assets/vector25.svg";

const NODES = [
  [149.89, 2217.41],
  [387.21, 2055.15],
  [352.99, 2247.21],
  [224.95, 1995.54],
];

const STACK = [
  [1951, 46.818],
  [2017.03, 45.618],
  [2081.85, 45.618],
  [2146.68, 46.818],
  [2211.5, 46.818],
  [2275.83, 46.818],
];

export default function IntelligenceLayer() {
  return (
    <section>
      <img className="abs" src={ellipse3} alt="" width={482.2} height={482.2} style={{ left: 28.9, top: 1895.9, width: 482.2, height: 482.2 }} />
      <img className="abs" src={ellipse10} alt="" width={408.41} height={408.41} style={{ left: 66, top: 1932.62, width: 408.41, height: 408.41 }} />
      <img className="abs" src={ellipse4} alt="" width={373.088} height={373.088} style={{ left: 84, top: 1950, width: 373.088, height: 373.088 }} />
      <img className="abs" src={ellipse5} alt="" width={289.198} height={289.198} style={{ left: 125.61, top: 1992.23, width: 289.198, height: 289.198 }} />
      {NODES.map(([l, t]) => (
        <img key={`${l}-${t}`} className="abs" src={ellipse6} alt="" width={8.83} height={8.83} style={{ left: l, top: t, width: 8.83, height: 8.83 }} />
      ))}
      <p className="abs" style={{ left: 167, top: 2062, width: 207.516, margin: 0, textAlign: "center", color: "#fff", fontFamily: "Inria Serif, serif", fontStyle: "italic", fontWeight: 700, fontSize: 37, lineHeight: 1.36 }}>
        Finding a signal in the noise!
      </p>

      <div className="abs" style={{ left: 267, top: 1864, width: 243.393, height: 101, background: "#f7f8e9", border: "0.828px solid #c8c8a1", borderRadius: 4.967, padding: "12px 24px" }}>
        <div style={{ fontSize: 15.172, fontWeight: 700 }}>NEW OPPORTUNITY</div>
        <div style={{ marginTop: 16, fontSize: 13.792, fontWeight: 600, color: "#1e4a79" }}>Paid search | high intent</div>
        <div style={{ fontSize: 13.792, fontWeight: 300 }}>+18% projected conversions lift</div>
      </div>
      <div className="abs" style={{ left: 84, top: 2312, width: 231.984, height: 89, background: "#f7f8e9", border: "0.73px solid #c8c8a1", borderRadius: 4.377, boxShadow: "2.918px 2.918px 5.836px rgba(0,0,0,0.1)", padding: "11px 13px" }}>
        <div style={{ fontSize: 13.369, fontWeight: 700 }}>CREATIVE FATIGUE</div>
        <div style={{ marginTop: 14, fontSize: 12.154, fontWeight: 600, color: "#1e4a79" }}>Meta / Summer campaign</div>
        <div style={{ fontSize: 12.154, fontWeight: 300 }}>Refresh recommended within 5 days</div>
      </div>

      <img className="abs" src={vector10} alt="" width={84} height={88} style={{ left: 461, top: 1978, width: 84, height: 88, transform: "scaleY(-1) rotate(180deg)" }} />
      <img className="abs" src={vector14} alt="" width={72} height={57} style={{ left: 473, top: 2045, width: 72, height: 57, transform: "scaleY(-1) rotate(180deg)" }} />
      <img className="abs" src={vector13} alt="" width={77.58} height={5} style={{ left: 474.25, top: 2118, width: 77.58, height: 5, transform: "rotate(155.78deg)" }} />
      <img className="abs" src={vector25} alt="" width={77.58} height={5} style={{ left: 474.25, top: 2164, width: 77.58, height: 5, transform: "scaleY(-1) rotate(-155.78deg)" }} />
      <img className="abs" src={vector14} alt="" width={72} height={57} style={{ left: 473, top: 2186, width: 72, height: 57, transform: "rotate(180deg)" }} />
      <img className="abs" src={vector10} alt="" width={84} height={88} style={{ left: 461, top: 2222, width: 84, height: 88, transform: "rotate(180deg)" }} />

      {STACK.map(([top, h]) => (
        <div key={top} className="abs" style={{ left: 545, top, width: 164.464, height: h, background: "#ebf1f8", border: "1.104px solid #c8c8a1", borderRadius: 5.519 }} />
      ))}

      <Crop src={meta} box={{ left: 559.35, top: 1965.58, width: 85.286, height: 16.716 }} imgStyle={{ height: "286.73%", left: 0, top: "-94.9%", width: "100%" }} alt="Meta" />
      <span className="abs muted" style={{ left: 656.48, top: 1968.89, fontSize: 13.246 }}>Ads</span>
      <Crop src={google} box={{ left: 559.35, top: 2026.29, width: 94.928, height: 25.388 }} imgStyle={{ height: "100%", left: "-17.57%", top: 0, width: "118.86%" }} alt="Google" />
      <span className="abs muted" style={{ left: 656.48, top: 2030.7, fontSize: 13.246 }}>Ads</span>
      <Crop src={hubspot} box={{ left: 559.35, top: 2093.62, width: 80.271, height: 21.859 }} imgStyle={{ height: "206.56%", left: 0, top: "-50.82%", width: "100%" }} alt="HubSpot" />
      <Crop src={shopify} box={{ left: 557.14, top: 2154.33, width: 99.032, height: 29.897 }} imgStyle={{ height: "368.35%", left: "-5.66%", top: "-134.71%", width: "111.32%" }} alt="Shopify" />
      <Crop src={salesforce} box={{ left: 559.35, top: 2226.08, width: 88.687, height: 17.806 }} imgStyle={{ height: "371.15%", left: "-19.31%", top: "-203.85%", width: "138.22%" }} alt="Salesforce" />
      <Crop src={tiktok} box={{ left: 557, top: 2287, width: 70, height: 23 }} imgStyle={{ height: "170.59%", left: "-0.4%", top: "-35.29%", width: "100.8%" }} alt="TikTok" />
      <span className="abs muted" style={{ left: 656.48, top: 2292, fontSize: 13.246 }}>Ads</span>

      <p className="abs muted" style={{ left: 1070, top: 1980, width: 307, margin: 0, textAlign: "right", fontSize: 15, fontWeight: 300 }}>BUILT FOR THE MODERN MARKETING STACK</p>
      <h2 className="abs navy" style={{ left: 772, top: 2032, width: 605, margin: 0, textAlign: "right", fontSize: 57.626, fontWeight: 500, lineHeight: 0.9 }}>
        One Intelligence layer
        <br />
        <span className="serif">across every channel</span>
      </h2>
      <p className="abs muted" style={{ left: 900, top: 2166, width: 477, margin: 0, textAlign: "right", fontSize: 20, fontWeight: 300, lineHeight: 1.36 }}>
        Meta Ads is only the beginning. AI gent Z connects the performance, commerce, and customer signals your team already uses.
      </p>
      <div className="abs" style={{ left: 630, top: 2392, width: 749, height: 28, borderRadius: 15, background: "#ebf1f8", display: "flex", alignItems: "center", paddingLeft: 11 }}>
        <p style={{ margin: 0, fontSize: 15, fontStyle: "italic", fontWeight: 400 }}>Google, HubSpot, Shopify, Salesforce, and TikTok ad integrations are coming soon (only Meta Ads is live).</p>
      </div>
    </section>
  );
}
