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
import "./landing.css";

const DESIGN = 1440;
const FAQ_TOP = 4295;
const NAV = 76;

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

  document.documentElement.style.setProperty("--nav-h", `${navH}px`);

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
      const top = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    [navH],
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

  return (
    <div className="stage" id="top" style={{ height: boardH * scale }}>
      <div
        className="site-nav-shell"
        style={{
          left: offsetX,
          width: DESIGN * scale,
          height: navH,
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
