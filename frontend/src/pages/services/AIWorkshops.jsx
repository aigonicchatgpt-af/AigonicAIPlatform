import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AIWorkshops.css";

export default function AIWorkshops() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-workshops",
    "icon": "🎓",
    "title": "AI Workshops",
    "tagline": "Turn Curiosity Into Capability.",
    "description": "Immersive, hands-on AI workshops — from AI awareness and prompt engineering to AI agents and automation — that turn curiosity into practical capability.",
    "intro": "AiGONIC AI Workshops are immersive, hands-on learning experiences designed to help students, educators, professionals, entrepreneurs and organizations understand how Artificial Intelligence works and how it can be used in the real world. Every session moves beyond presentations and theory into guided experimentation and practical projects.",
    "audience": "Students, educators, professionals & organizations",
    "highlights": [
      "AI Awareness Workshop",
      "Generative AI Workshop",
      "Prompt Engineering Workshop",
      "AI Tools for Productivity",
      "AI for Business Leaders",
      "AI for Educators",
      "AI for Students",
      "AI Automation Workshop",
      "AI Agents Workshop",
      "Industry-Specific AI Workshop"
    ],
    "whoItsFor": [
      "Students",
      "Teachers and Faculty Members",
      "Schools, Colleges & Universities",
      "Working Professionals",
      "Entrepreneurs and Startups",
      "Corporate Teams",
      "Managers and Business Leaders",
      "Government Departments",
      "Non-Profit Organizations",
      "Technology Enthusiasts"
    ],
    "whyChoose": [
      {
        "title": "Designed for the Audience",
        "desc": "Every workshop is adapted to the participants' knowledge level, goals and industry."
      },
      {
        "title": "Delivered by Practitioners",
        "desc": "Sessions connect technical knowledge with real-world implementation."
      },
      {
        "title": "Focused on Application",
        "desc": "Participants explore, test, create and solve — not just listen."
      },
      {
        "title": "Built for Measurable Impact",
        "desc": "Every session creates stronger understanding and clear next steps."
      }
    ],
    "outcomes": [
      "Practical AI understanding",
      "Hands-on guided activities",
      "Responsible AI awareness",
      "Future-ready confidence"
    ],
    "steps": [
      "Discover",
      "Experience",
      "Apply",
      "Create",
      "Transform"
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
