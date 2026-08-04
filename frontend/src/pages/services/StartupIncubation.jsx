import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/StartupIncubation.css";

export default function StartupIncubation() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "startup-incubation",
    "icon": "🚀",
    "title": "Startup Incubation",
    "tagline": "Where Visionary Ideas Become Scalable Businesses.",
    "description": "End-to-end Startup Incubation — from idea validation and MVP development to funding readiness and go-to-market strategy — for AI-first founders.",
    "intro": "The AiGONIC Startup Incubation Program empowers entrepreneurs, innovators, researchers and early-stage startups to transform ambitious ideas into sustainable, technology-driven businesses — from concept validation to product development, market entry and growth.",
    "audience": "AI founders & early-stage teams",
    "highlights": [
      "Startup Validation",
      "AI Product Development",
      "Business Strategy",
      "Technical Mentorship",
      "MVP Development",
      "Branding & Market Positioning",
      "Funding Readiness",
      "Growth & Scaling"
    ],
    "whoItsFor": [
      "Student Entrepreneurs",
      "Early-Stage Startups",
      "AI & Deep-Tech Founders",
      "SaaS Product Teams",
      "Research & Innovation Teams",
      "University Innovation Cells",
      "Women Entrepreneurs",
      "Social Innovation Startups"
    ],
    "whyChoose": [
      {
        "title": "AI-First Innovation",
        "desc": "Build future-ready startups powered by AI from day one."
      },
      {
        "title": "End-to-End Support",
        "desc": "From idea validation to product launch and business growth."
      },
      {
        "title": "Industry Mentorship",
        "desc": "Learn from experienced entrepreneurs and AI specialists."
      },
      {
        "title": "Global Growth Perspective",
        "desc": "Build solutions designed to compete in global markets."
      }
    ],
    "outcomes": [
      "Startup validation & strategy",
      "AI product & MVP development",
      "Technical mentorship",
      "Funding & investor readiness"
    ],
    "steps": [
      "Ideate",
      "Build",
      "Launch",
      "Scale",
      "Lead"
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
