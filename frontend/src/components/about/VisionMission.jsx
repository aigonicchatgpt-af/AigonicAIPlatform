import "./About.css";
import { Eye, Target, Sparkles } from "lucide-react";

function VisionMission() {
  return (
    <section className="vision-section">

      <div className="vision-grid">

        <div className="vision-card">
          <span className="vision-icon">
            <Eye size={21} />
          </span>
          <small>01 / VISION</small>

          <h3>Our Vision</h3>

          <p>
            To become a globally recognized Artificial Intelligence and
            Digital Innovation company that empowers people, businesses,
            and institutions through intelligent technologies, ethical
            innovation, and continuous learning—creating a smarter,
            more connected, and sustainable future.
          </p>
        </div>

        <div className="vision-card">
          <span className="vision-icon">
            <Target size={21} />
          </span>
          <small>02 / MISSION</small>

          <h3>Our Mission</h3>

          <p>
            To democratize Artificial Intelligence by building intelligent
            software, delivering world-class AI education, enabling
            enterprise automation, and accelerating digital transformation
            through practical, scalable, and future-ready technology
            solutions that create measurable value.
          </p>
        </div>

        <div className="vision-card">
          <span className="vision-icon">
            <Sparkles size={21} />
          </span>
          <small>03 / VALUES</small>

          <h3>Our Values</h3>

          <p>
            Innovation • Integrity • Excellence • Learning • Collaboration •
            Impact • Customer Success • Responsible AI
          </p>
        </div>

      </div>

    </section>
  );
}

export default VisionMission;