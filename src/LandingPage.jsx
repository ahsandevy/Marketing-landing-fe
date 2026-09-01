import { useCallback, useEffect, useRef, useState } from "react";
import NetworkBackground from "./components/NetworkBackground.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import StopReporting from "./components/StopReporting.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import IntelligenceLayer from "./components/IntelligenceLayer.jsx";
import ExecutiveBrief from "./components/ExecutiveBrief.jsx";
import Recommendations from "./components/Recommendations.jsx";
import MeasurableUpside from "./components/MeasurableUpside.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import DemoPopup from "./components/DemoPopup.jsx";
import MobileHeader from "./mobile/MobileHeader.jsx";
import MobileHero from "./mobile/MobileHero.jsx";
import MobileStopReporting from "./mobile/MobileStopReporting.jsx";
import MobileHowItWorks from "./mobile/MobileHowItWorks.jsx";
import MobileIntelligenceLayer from "./mobile/MobileIntelligenceLayer.jsx";
import MobileExecutiveBrief from "./mobile/MobileExecutiveBrief.jsx";
import MobileRecommendations from "./mobile/MobileRecommendations.jsx";
import MobileMeasurableUpside from "./mobile/MobileMeasurableUpside.jsx";
import MobileFaq from "./mobile/MobileFaq.jsx";
import MobileFooter from "./mobile/MobileFooter.jsx";
import "./landing.css";

const DESIGN = 1440;
const FAQ_TOP = 4295;
const NAV = 76;
const MOBILE_BREAKPOINT = 769;

export default function LandingPage() {
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? document.documentElement.clientWidth || window.innerWidth : DESIGN,
  );
  const [bottomH, setBottomH] = useState(666);
  const [demoOpen, setDemoOpen] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const onResize = () => setVw(document.documentElement.clientWidth || window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = bottomRef.current;
    if (!el) return;
    const measure = () => setBottomH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scale = vw / DESIGN;
  const boardH = FAQ_TOP + bottomH;
  const navH = NAV;
  const offsetX = (vw - DESIGN * scale) / 2;
  const isMobile = vw < MOBILE_BREAKPOINT;

  document.documentElement.style.setProperty("--nav-h", `${isMobile ? 64 : navH}px`);

  const onNavigate = useCallback(
    (id) => {
      if (id === "demo") {
        setDemoOpen(true);
        return;
      }
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - (isMobile ? 60 : navH);
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    [navH, isMobile],
  );

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link || event.defaultPrevented) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      event.preventDefault();
      onNavigate(id);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [onNavigate]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    document.body.classList.add("reveal-ready");
    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("reveal-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="mobile" id="top">
        <MobileHeader onNavigate={onNavigate} />
        <main>
          <MobileHero />
          <MobileStopReporting />
          <MobileHowItWorks />
          <MobileIntelligenceLayer />
          <MobileExecutiveBrief />
          <MobileRecommendations />
          <MobileMeasurableUpside />
          <MobileFaq />
        </main>
        <MobileFooter />
        <DemoPopup open={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    );
  }

  return (
    <div className="stage" id="top" style={{ height: boardH * scale }}>
      <div
        className="site-nav-shell"
        style={{
          left: offsetX,
          width: DESIGN * scale,
          height: navH * scale,
        }}
      >
        <div
          className="site-nav-inner"
          style={{
            width: DESIGN,
            height: NAV,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          <Header onNavigate={onNavigate} />
        </div>
      </div>

      <div
        className="artboard"
        style={{
          height: boardH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          marginLeft: offsetX,
        }}
      >
        <NetworkBackground />
        <Hero />
        <StopReporting />        <HowItWorks />
        <IntelligenceLayer />
        <ExecutiveBrief />
        <Recommendations />
        <MeasurableUpside />
        <div ref={bottomRef} className="abs page-bottom" style={{ left: 0, top: FAQ_TOP, width: DESIGN }}>
          <Faq />
          <Footer />
        </div>
      </div>
      <DemoPopup open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
