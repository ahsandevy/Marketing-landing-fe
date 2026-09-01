import BrandMark from "../components/BrandMark.jsx";

export default function MobileFooter() {
  return (
    <footer data-reveal className="mobile-footer">
      <div className="mobile-footer-brand">
        <BrandMark color="white" width={200} />
        <p className="mobile-footer-tagline">
          Know <span style={{ fontWeight: 500 }}>Exactly</span> What to Do{" "}
          <span style={{ fontWeight: 500 }}>Next</span>
        </p>
      </div>
      <nav className="mobile-footer-col">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Disclaimer</span>
        <span>Data Protection</span>
      </nav>
      <nav className="mobile-footer-col">
        <a href="#faq" className="mobile-footer-link">
          FAQs
        </a>
        <span>Cookie Policy</span>
        <span>Integrations Policy</span>
        <span>Automation Disclaimer</span>
      </nav>
    </footer>
  );
}