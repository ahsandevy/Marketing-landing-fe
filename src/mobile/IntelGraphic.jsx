import { useEffect, useRef, useState } from "react";
import Crop from "../components/Crop.jsx";
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

const ART_W = 700;
const ART_H = 548;
const OX = 28;
const OY = 1864;

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

function pos(left, top) {
  return { left: left - OX, top: top - OY };
}

export default function IntelGraphic() {
  const stageRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / ART_W);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="intel-stage" ref={stageRef} style={{ height: ART_H * scale }}>
      <div className="intel-art" style={{ width: ART_W, height: ART_H, transform: `scale(${scale})` }}>
        <img className="abs" src={ellipse3} alt="" style={{ ...pos(28.9, 1895.9), width: 482.2, height: 482.2 }} />
        <img className="abs" src={ellipse10} alt="" style={{ ...pos(66, 1932.62), width: 408.41, height: 408.41 }} />
        <img className="abs" src={ellipse4} alt="" style={{ ...pos(84, 1950), width: 373.088, height: 373.088 }} />
        <img className="abs" src={ellipse5} alt="" style={{ ...pos(125.61, 1992.23), width: 289.198, height: 289.198 }} />

        {NODES.map(([l, t]) => (
          <img key={`${l}-${t}`} className="abs" src={ellipse6} alt="" style={{ ...pos(l, t), width: 8.83, height: 8.83 }} />
        ))}

        <p className="abs intel-quote" style={{ ...pos(167, 2072), width: 208, margin: 0 }}>
          Finding a signal in the noise!
        </p>

        <div className="abs intel-chip" style={{ ...pos(267, 1864), width: 243, height: 101 }}>
          <div className="muted intel-chip-copy">
            <div className="intel-chip-title">NEW OPPORTUNITY</div>
            <div className="navy intel-chip-line">Paid search | high intent</div>
            <div> +18% projected conversions lift</div>
          </div>
        </div>

        <div className="abs intel-chip intel-chip-shadow" style={{ ...pos(84, 2312), width: 232, height: 89 }}>
          <div className="muted intel-chip-copy">
            <div className="intel-chip-title">CREATIVE FATIGUE</div>
            <div className="navy intel-chip-line">Meta / Summer campaign</div>
            <div>Refresh recommended within 5 days</div>
          </div>
        </div>

        <img className="abs" src={vector10} alt="" style={{ ...pos(461, 1978), width: 84, height: 88, transform: "scaleY(-1) rotate(180deg)" }} />
        <img className="abs" src={vector14} alt="" style={{ ...pos(473, 2045), width: 72, height: 57, transform: "scaleY(-1) rotate(180deg)" }} />
        <img className="abs" src={vector13} alt="" style={{ ...pos(474.25, 2118), width: 77.58, height: 5, transform: "rotate(155.78deg)" }} />
        <img className="abs" src={vector25} alt="" style={{ ...pos(474.25, 2164), width: 77.58, height: 5, transform: "scaleY(-1) rotate(-155.78deg)" }} />
        <img className="abs" src={vector14} alt="" style={{ ...pos(473, 2186), width: 72, height: 57, transform: "rotate(180deg)" }} />
        <img className="abs" src={vector10} alt="" style={{ ...pos(461, 2222), width: 84, height: 88, transform: "rotate(180deg)" }} />

        {STACK.map(([top, h]) => (
          <div key={top} className="abs intel-slot" style={{ ...pos(545, top), width: 164.464, height: h }} />
        ))}

        <Crop src={meta} box={{ ...pos(559.35, 1965.58), width: 85.286, height: 16.716 }} imgStyle={{ height: "286.73%", left: 0, top: "-94.9%", width: "100%" }} alt="Meta" />
        <span className="abs muted intel-ads" style={pos(656.48, 1968.89)}>Ads</span>
        <Crop src={google} box={{ ...pos(559.35, 2026.29), width: 94.928, height: 25.388 }} imgStyle={{ height: "100%", left: "-17.57%", top: 0, width: "118.86%" }} alt="Google" />
        <span className="abs muted intel-ads" style={pos(656.48, 2030.7)}>Ads</span>
        <Crop src={hubspot} box={{ ...pos(559.35, 2093.62), width: 80.271, height: 21.859 }} imgStyle={{ height: "206.56%", left: 0, top: "-50.82%", width: "100%" }} alt="HubSpot" />
        <Crop src={shopify} box={{ ...pos(557.14, 2154.33), width: 99.032, height: 29.897 }} imgStyle={{ height: "368.35%", left: "-5.66%", top: "-134.71%", width: "111.32%" }} alt="Shopify" />
        <Crop src={salesforce} box={{ ...pos(559.35, 2226.08), width: 88.687, height: 17.806 }} imgStyle={{ height: "371.15%", left: "-19.31%", top: "-203.85%", width: "138.22%" }} alt="Salesforce" />
        <Crop src={tiktok} box={{ ...pos(557, 2287), width: 70, height: 23 }} imgStyle={{ height: "170.59%", left: "-0.4%", top: "-35.29%", width: "100.8%" }} alt="TikTok" />
        <span className="abs muted intel-ads" style={pos(656.48, 2292)}>Ads</span>
      </div>
    </div>
  );
}
