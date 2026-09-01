import { useState } from "react";
import { FAQS } from "../data/faqs.js";

const TOPS = [4314, 4435, 4482, 4529, 4576, 4623];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section>
      <p className="abs muted" style={{ left: 66, top: 4295, margin: 0, fontSize: 15, fontWeight: 300 }}>FAQ Section</p>
      <h2 className="abs navy" style={{ left: 66, top: 4334, width: 439, margin: 0, fontSize: 50, fontWeight: 700, lineHeight: 0.9 }}>Frequently Asked Question</h2>
      <p className="abs muted" style={{ left: 66, top: 4443, width: 561, margin: 0, fontSize: 20, fontWeight: 300, lineHeight: 1.36 }}>
        Quick answers about AIgent Z — integrations, recommendations, and how it helps marketing teams decide faster, without the guesswork.
      </p>

      {FAQS.map((item, i) => {
        const open = openFaq === i;
        return (
          <div key={item.q} className="abs" style={{ left: 721, top: TOPS[i], width: 646 }}>
            <button className="faq-row" type="button" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <p className="navy" style={{ margin: 0, fontSize: 20, width: 603 }}>
                  <span style={{ fontWeight: 600 }}>Q</span>
                  <span style={{ fontWeight: 400 }}> {item.q}</span>
                </p>
                <span className={open ? "caret caret-open" : "caret caret-closed"} style={{ marginTop: 8, flexShrink: 0 }} />
              </div>
              {open && (
                <p className="muted" style={{ margin: "8px 0 0", width: 603, fontSize: 15, fontWeight: 400, lineHeight: 2.02 }}>
                  {item.a}
                </p>
              )}
            </button>
            {i < FAQS.length - 1 && <div className="divider-h" style={{ position: "relative", width: 646, marginTop: open ? 12 : 16, borderTopColor: "#d9d4c4" }} />}
          </div>
        );
      })}
    </section>
  );
}
