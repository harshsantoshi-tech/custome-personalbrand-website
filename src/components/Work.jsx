import { useState } from "react";
import "./Work.css";

const services = [
  {
    name: "Growth Strategy",
    desc: "A clear-eyed assessment of where growth is stalling, and a prioritized plan to fix it.",
    price: "From €4,500 · 6 weeks",
  },
  {
    name: "Operational Restructuring",
    desc: "Redesigning team structure, workflows, and decision rights for a business that's outgrown its current setup.",
    price: "From €7,000 · 8 weeks",
  },
  {
    name: "Market Entry Strategy",
    desc: "Research, positioning, and a go-to-market plan for entering a new region or segment.",
    price: "From €6,000 · 6 weeks",
  },
];

const caseStudies = [
  {
    id: 1,
    industry: "Retail",
    client: "A regional retail chain",
    result: "+38% revenue in 12 months",
    aspect: "aspect-tall",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    industry: "Fintech",
    client: "A Series B fintech startup",
    result: "Cut operating costs 22%",
    aspect: "aspect-wide",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    industry: "Manufacturing",
    client: "A family-owned manufacturer",
    result: "Entered 3 new markets",
    aspect: "aspect-portrait",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    industry: "Healthcare",
    client: "A healthcare services group",
    result: "Restructured into 4 business units",
    aspect: "aspect-square",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    industry: "Retail",
    client: "A DTC retail brand",
    result: "Doubled fulfillment capacity",
    aspect: "aspect-wide",
    src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    industry: "Fintech",
    client: "A payments platform",
    result: "Reduced churn from 9% to 4%",
    aspect: "aspect-tall",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
];

const tabs = ["All", "Retail", "Fintech", "Manufacturing", "Healthcare"];

export default function Work() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? caseStudies : caseStudies.filter((c) => c.industry === active);

  return (
    <section className="work" id="work">
      <div className="services">
        {services.map((s) => (
          <div className="service-card" key={s.name}>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
            <p className="service-price">{s.price}</p>
          </div>
        ))}
      </div>

      <div className="work-header">
        <div>
          <p className="work-label">Case studies</p>
          <h2 className="display work-heading">Recent client engagements</h2>
        </div>
        <div className="filters">
          {tabs.map((t) => (
            <button
              key={t}
              className={`filter-btn ${active === t ? "active" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery">
        {filtered.map((c) => (
          <div className={`gallery-item ${c.span}`} key={c.id}>
            <img src={c.src} alt={c.client} />
            <div className="gallery-caption">
              <span className="gallery-tag">{c.industry}</span>
              <p className="gallery-result">{c.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}