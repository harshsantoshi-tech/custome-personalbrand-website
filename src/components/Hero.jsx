import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <img
        className={`hero-img ${loaded ? "loaded" : ""}`}
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
        alt="Elena Marsh, Business Strategy Consultant"
      />
      <div className="hero-overlay" />
      <div className="hero-text">
        <h1 className="display hero-name">Elena Marsh</h1>
        <p className="hero-tagline">
          Strategy consulting for mid-size companies restructuring
          operations, entering new markets, or planning their next
          stage of growth.
        </p>
      </div>
    </section>
  );
}