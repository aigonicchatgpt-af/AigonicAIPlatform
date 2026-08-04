import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AIResearch.css";

export default function AIResearch() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-research",
    "icon": "🧠",
    "title": "AI Research",
    "tagline": "Exploring Intelligence. Creating the Technologies of Tomorrow.",
    "description": "Applied AI Research across Generative AI, Machine Learning, Computer Vision, NLP and AI Agents — turning emerging ideas into real-world solutions.",
    "intro": "AiGONIC Research is dedicated to discovering new possibilities, solving complex challenges and developing intelligent technologies that create lasting value for businesses, education, healthcare and society — combining scientific thinking with practical implementation.",
    "audience": "Research teams, universities & innovators",
    "highlights": [
      "Generative AI",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "AI Agents",
      "Intelligent Automation",
      "Responsible AI",
      "Edge AI & IoT Intelligence",
      "AI for Education",
      "AI for Healthcare"
    ],
    "whoItsFor": [
      "Universities and Academic Institutions",
      "Research Laboratories",
      "Government Organizations",
      "Corporate Innovation Teams",
      "Technology Startups",
      "Industry Partners",
      "International Research Networks"
    ],
    "whyChoose": [
      {
        "title": "Future-Focused Vision",
        "desc": "Investing in technologies that define the next generation of AI."
      },
      {
        "title": "Practical Innovation",
        "desc": "Every initiative is designed with real-world impact in mind."
      },
      {
        "title": "Ethical Development",
        "desc": "Responsible AI principles guide every stage of research."
      },
      {
        "title": "Multidisciplinary Expertise",
        "desc": "Researchers, engineers and designers solving problems together."
      }
    ],
    "outcomes": [
      "Evidence-backed direction",
      "Hands-on experimentation",
      "Cross-disciplinary collaboration",
      "Responsible AI frameworks"
    ],
    "steps": [
      "Discover",
      "Explore",
      "Develop",
      "Validate",
      "Innovate"
    ]
  };

  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-grid" />
        <div className="container service-detail-intro">
          <BackToServices />
          <span className="service-detail-icon">{service.icon}</span>
          <span className="eyebrow"><Sparkles size={14} /> Aigonic service</span>
          <h1>{service.title}</h1>
          <p className="service-tagline">{service.tagline}</p>
          <p>{service.intro}</p>
          <a href="/#contact" className="detail-cta">Talk to our team <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="service-detail-body">
        <div className="container detail-layout">
          <aside className="detail-aside">
            <span>DESIGNED FOR</span>
            <b>{service.audience}</b>
            <i /> <small>AI capability / active</small>

            <span className="aside-sub">WHO IT'S FOR</span>
            <ul className="aside-list">
              {service.whoItsFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>

          <div>
            <span className="detail-label">WHAT YOU CAN EXPERIENCE</span>
            <div className="highlight-chips">
              {service.highlights.map((item) => <span className="highlight-chip" key={item}>{item}</span>)}
            </div>

            <span className="detail-label">WHAT YOU GET</span>
            <div className="outcome-grid">
              {service.outcomes.map((outcome) => (
                <div className="outcome-card" key={outcome}><Check size={18} /><b>{outcome}</b></div>
              ))}
            </div>

            <span className="detail-label">WHY CHOOSE AIGONIC</span>
            <div className="why-grid">
              {service.whyChoose.map((item) => (
                <div className="why-card" key={item.title}>
                  <b>{item.title}</b>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <span className="detail-label process-label">HOW WE WORK</span>
            <div className="process-list">
              {service.steps.map((step, index) => (
                <div className="process-step" key={step}>
                  <span>0{index + 1}</span>
                  <b>{step}</b>
                  <ArrowRight size={17} />
                </div>
              ))}
            </div>

            <div className="detail-bottom-cta">
              <div>
                <b>Ready to bring {service.title} to your team?</b>
                <p>Talk to us about your goals and we'll design the right path forward.</p>
              </div>
              <a href="/#contact" className="detail-cta">Talk to our team <ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
