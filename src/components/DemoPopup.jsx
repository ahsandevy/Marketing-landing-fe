import { useEffect } from "react";

export default function DemoPopup({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-popup" onClick={(e) => e.stopPropagation()}>
        <p className="demo-subtitle">SEE AI GENT Z IN ACTION</p>
        <h2 className="demo-heading">Book your CMO demo.</h2>
        <p className="demo-desc">
          See the recommendation hiding in your Meta, Google and TikTok Ads
          data.
        </p>

        <div className="demo-fields">
          <div className="demo-field">
            <label className="demo-label">Full Name</label>
            <input className="demo-input" type="text" placeholder="Your Name" />
          </div>
          <div className="demo-field">
            <label className="demo-label">Phone Number</label>
            <input
              className="demo-input"
              type="tel"
              placeholder="630-530-5468"
            />
          </div>
          <div className="demo-field">
            <label className="demo-label">Work email</label>
            <input
              className="demo-input"
              type="email"
              placeholder="you@company.com"
            />
          </div>
          <div className="demo-field">
            <label className="demo-label">Company</label>
            <input
              className="demo-input"
              type="text"
              placeholder="Company Name"
            />
          </div>
        </div>

        <button className="demo-submit" type="button">
          Request a Demo
        </button>

        <p className="demo-footnote">
          No sales pitch. Just a clear view of your next best marketing move.
        </p>
      </div>
    </div>
  );
}
