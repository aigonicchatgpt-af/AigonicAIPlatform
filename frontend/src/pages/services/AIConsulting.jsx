import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AIConsulting.css";

export default function AIConsulting() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-consulting",
    "icon": "🤝",
    "title": "AI Consulting",
    "tagline": "From AI Opportunity to Practical Implementation.",
    "description": "AI strategy, implementation, automation and digital transformation services designed to turn AI opportunities into a practical, prioritized roadmap.",
    "intro": "AiGONIC AI Consulting helps ambitious organizations identify high-value AI opportunities, design the right solution and implement it with confidence — turning strategy into measurable business outcomes.",
    "audience": "Ambitious organizations",
    "highlights": [
      "AI Strategy & Roadmapping",
      "Use-Case Prioritization",
      "Implementation Planning",
      "Automation & Digital Transformation",
      "Change Management",
      "Ongoing Optimisation"
    ],
    "whoItsFor": [
      "Business Leaders",
      "Founders & Entrepreneurs",
      "IT & Technology Teams",
      "Operations Teams",
      "Enterprises & Institutions"
    ],
    "whyChoose": [
      {
        "title": "Actionable Strategy",
        "desc": "A clear, prioritized AI roadmap — not just a report."
      },
      {
        "title": "Practical Implementation",
        "desc": "Hands-on support from design through to launch."
      },
      {
        "title": "Business-First Thinking",
        "desc": "Every recommendation is tied to measurable outcomes."
      },
      {
        "title": "Continuous Optimisation",
        "desc": "Ongoing support to refine and scale what works."
      }
    ],
    "outcomes": [
      "Actionable AI strategy",
      "Prioritized use cases",
      "Practical implementation plan",
      "Ongoing optimisation support"
    ],
    "steps": [
      "Discover high-value opportunities",
      "Design the solution",
      "Launch and optimise",
      "Measure and iterate"
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
