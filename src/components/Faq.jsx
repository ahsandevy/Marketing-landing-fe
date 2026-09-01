import { useState } from "react";
import { FAQS } from "../data/faqs.js";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-intro">
        <p className="muted" style={{ margin: 0, fontSize: 14, fontWeight: 300 }}>FAQ Section</p>
        <h2 className="navy" style={{ margin: "20px 0 0", fontSize: 42, fontWeight: 700, lineHeight: 0.95 }}>
          Frequently Asked Questions
        </h2>
        <p className="muted" style={{ margin: "28px 0 0", width: 561, fontSize: 16, fontWeight: 300, lineHeight: 1.4 }}>
          Find quick answers about AIgent Z, its AI agents, integrations, and how it helps marketing teams make faster, smarter decisions with less manual effort.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => {
          const open = openFaq === i;
          return (
            <div key={item.q} className="faq-item">
              <button
                className="faq-row"
                type="button"
                onClick={() => setOpenFaq(open ? -1 : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="faq-q navy">
                  <span style={{ fontWeight: 600 }}>Q</span>
                  <span style={{ fontWeight: 400 }}> {item.q}</span>
                </span>
                <span className={open ? "caret caret-open" : "caret caret-closed"} aria-hidden="true" />
              </button>
              <div className="faq-panel" data-open={open ? "true" : "false"} id={`faq-panel-${i}`}>
                <div className="faq-panel-inner">
                  <p className="muted faq-a">{item.a}</p>
                </div>
              </div>
              {i < FAQS.length - 1 && <div className="divider-h faq-rule" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
