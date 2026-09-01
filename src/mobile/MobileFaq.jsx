import { useState } from "react";
import { FAQS } from "../data/faqs.js";

export default function MobileFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" data-reveal className="mobile-section mobile-faq">
      <p className="muted mobile-kicker">FAQ Section</p>
      <h2 className="navy mobile-title">Frequently Asked Questions</h2>
      <p className="muted mobile-body">
        Find quick answers about AIgent Z, its AI agents, integrations, and how
        it helps marketing teams make faster, smarter decisions with less manual
        effort.
      </p>

      <div className="mobile-faq-list">
        {FAQS.map((item, i) => {
          const open = openFaq === i;
          return (
            <div key={item.q} className="mobile-faq-item">
              <button
                className="mobile-faq-row"
                type="button"
                onClick={() => setOpenFaq(open ? -1 : i)}
                aria-expanded={open}
                aria-controls={`mfaq-panel-${i}`}
              >
                <span className="navy mobile-faq-q">
                  <span style={{ fontWeight: 600 }}>Q</span>
                  <span style={{ fontWeight: 400 }}> {item.q}</span>
                </span>
                <span className={open ? "caret caret-open" : "caret caret-closed"} aria-hidden="true" />
              </button>
              <div className="faq-panel" data-open={open ? "true" : "false"} id={`mfaq-panel-${i}`}>
                <div className="faq-panel-inner">
                  <p className="muted mobile-faq-a">{item.a}</p>
                </div>
              </div>
              {i < FAQS.length - 1 && <div className="divider-h mobile-faq-rule" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}