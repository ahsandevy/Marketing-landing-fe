import { useState } from "react";
import { FAQS } from "../data/faqs.js";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" data-reveal className="faq-section">
      <div className="faq-intro">
        <p className="muted" style={{ margin: 0, fontSize: 12, fontWeight: 400, letterSpacing: "0.16em" }}>FAQ Section</p>
        <h2 className="navy" style={{ margin: "16px 0 0", fontSize: 36, fontWeight: 500, lineHeight: 1.15 }}>
          Frequently Asked Questions
        </h2>
        <p className="muted" style={{ margin: "20px 0 0", maxWidth: 480, fontSize: 16, fontWeight: 400, lineHeight: 1.55, letterSpacing: "0.01em" }}>
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
