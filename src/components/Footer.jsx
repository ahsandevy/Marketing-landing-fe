import BrandMark from "./BrandMark.jsx";

export default function Footer() {
  return (
    <footer data-reveal className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <BrandMark color="white" width={180} />
          <p className="footer-tagline">
            Know <span style={{ fontWeight: 500 }}>Exactly</span> What to Do <span style={{ fontWeight: 500 }}>Next</span>
          </p>
        </div>
        <div className="footer-navs">
          <nav className="footer-col">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Disclaimer</div>
            <div>Data Protection</div>
          </nav>
          <nav className="footer-col">
            <a href="#faq" className="footer-link">FAQs</a>
            <div>Cookie Policy</div>
            <div>Integrations Policy</div>
            <div>Automation Disclaimer</div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
