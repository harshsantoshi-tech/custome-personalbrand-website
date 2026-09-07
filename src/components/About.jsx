import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image-wrap">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
          alt="Elena Marsh in a strategy session"
        />
        <p className="about-caption">Elena, workshop session with a client leadership team</p>
      </div>
      <div className="about-content">
        <p className="about-label">About</p>
        <h2 className="display about-heading">
          I help leadership teams make the hard calls with confidence.
        </h2>
        <p className="about-text">
          For the past ten years I've worked with founders and executive
          teams at mid-size companies navigating growth plateaus,
          restructuring, and market repositioning. My approach starts with
          the numbers, not the narrative: understanding where the business
          actually stands before recommending where it should go.
        </p>
        <p className="about-text">
          I work across operations, go-to-market strategy, and
          organizational design, typically over a 6–12 week engagement
          that ends with a plan your team can actually execute, not a
          deck that sits in a drive folder.
        </p>
        <div className="about-stats">
          <div>
            <p className="display about-stat-num">10</p>
            <p className="about-stat-label">Years in strategy consulting</p>
          </div>
          <div>
            <p className="display about-stat-num">40+</p>
            <p className="about-stat-label">Companies advised</p>
          </div>
          <div>
            <p className="display about-stat-num">€60M+</p>
            <p className="about-stat-label">Client revenue impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}