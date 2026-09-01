import BrandMark from "./BrandMark.jsx";

export default function Footer() {
  return (
    <footer data-reveal className="site-footer">
      <div className="abs" style={{ left: 66, top: 42 }}>
        <BrandMark color="white" width={354} />
        <p style={{ margin: "20px 0 0", color: "#fff", fontSize: 15, textAlign: "right", width: 354 }}>
          Know <span style={{ fontWeight: 500 }}>Exactly</span> What to Do <span style={{ fontWeight: 500 }}>Next</span>
        </p>
      </div>
      <nav className="abs" style={{ left: 997, top: 47, color: "#fff", fontSize: 15, lineHeight: 1.55 }}>
        <div>Privacy Policy</div>
        <div>Terms & Conditions</div>
        <div>Disclaimer</div>
        <div>Data Protection</div>
      </nav>
      <nav className="abs" style={{ left: 1203, top: 47, color: "#fff", fontSize: 15, lineHeight: 1.55 }}>
        <a href="#faq" className="footer-link" style={{ color: "inherit", textDecoration: "none", display: "block" }}>FAQs</a>
        <div>Cookie Policy</div>
        <div>Integrations Policy</div>
        <div>Automation Disclaimer</div>
      </nav>
    </footer>
  );
}
