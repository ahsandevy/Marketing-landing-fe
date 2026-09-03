import { useCallback, useEffect, useState } from "react";
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

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  const onNavigate = useCallback((id) => {
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
    const nav = document.querySelector(".mobile-header");
    const offset = nav ? nav.getBoundingClientRect().height : 56;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--nav-h", "64px");
  }, []);

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
  }, []);

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
