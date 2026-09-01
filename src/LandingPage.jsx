import { useEffect, useState } from "react";
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
import "./landing.css";

export default function LandingPage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fit = () => setScale(Math.max(window.innerWidth / 1440, 0.4));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="stage" style={{ height: 4961 * scale }}>
      <div className="artboard" style={{ transform: `scale(${scale})` }}>
        <NetworkBackground />
        <Header />
        <Hero />
        <StopReporting />
        <HowItWorks />
        <IntelligenceLayer />
        <ExecutiveBrief />
        <Recommendations />
        <MeasurableUpside />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
