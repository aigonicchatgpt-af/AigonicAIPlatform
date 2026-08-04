import "./About.css";

function CompanyOverview() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">

          <span className="about-tag">
            <i /> ABOUT AIGONIC <b>01 / 04</b>
          </span>

          <h2>
            Building Intelligence.
            <span> Empowering People.</span>
          </h2>

          <p>
            The world is entering a new era where Artificial Intelligence is
            becoming the foundation of how people learn, businesses operate,
            industries innovate, and societies progress.
          </p>

          <p>
            At <strong>AiGONIC Innovations Pvt. Ltd.</strong>, we design
            intelligent software, AI-powered products, enterprise automation,
            and digital transformation solutions that simplify complexity,
            improve productivity, and unlock new opportunities. By combining
            Artificial Intelligence, software engineering, cloud computing,
            automation, and digital strategy, we help startups, enterprises,
            educational institutions, and government organizations build a
            smarter and more successful future.
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <h3>AI</h3>
              <span>Innovation</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Future Ready</span>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <span>AI Solutions</span>
            </div>

            <div className="stat-card">
              <h3>∞</h3>
              <span>Growth Potential</span>
            </div>

          </div>

          <div className="about-signal">
            <span className="live-dot" /> AIGONIC INTELLIGENCE NETWORK <b>ONLINE</b>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CompanyOverview;