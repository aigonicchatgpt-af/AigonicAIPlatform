import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/CorporateTraining.css";

export default function CorporateTraining() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "corporate-training",
    "icon": "🏢",
    "title": "Corporate Training",
    "tagline": "Empowering Organizations to Thrive in the Age of Artificial Intelligence.",
    "description": "Corporate AI Training that builds AI-ready organizations — from executive strategy sessions to department-specific training in Generative AI, automation and productivity.",
    "intro": "AiGONIC Corporate AI Training programs help organizations build practical AI capabilities across every level of the workforce — from leadership teams and business managers to technical professionals and operational staff. We don't just train employees, we build AI-ready organizations.",
    "audience": "Organizations & leadership teams",
    "highlights": [
      "AI Awareness for Organizations",
      "Generative AI for Business",
      "AI Productivity Training",
      "Prompt Engineering for Professionals",
      "AI for Business Leaders",
      "AI Automation & Workflow Optimization",
      "AI for Sales, Marketing & Customer Success",
      "Customized Enterprise AI Programs"
    ],
    "whoItsFor": [
      "Executive Leadership Teams",
      "Business Managers",
      "Department Heads",
      "IT & Technology Teams",
      "HR & Learning Departments",
      "Sales & Marketing Teams",
      "Operations & Support Teams",
      "Finance Professionals",
      "Customer Service Teams",
      "Entire Organizational Workforce"
    ],
    "whyChoose": [
      {
        "title": "Business-Focused Learning",
        "desc": "Every session is aligned with practical business outcomes."
      },
      {
        "title": "Customized Learning Paths",
        "desc": "Programs tailored to your industry and workforce."
      },
      {
        "title": "Industry Experts",
        "desc": "Training delivered by experienced AI professionals."
      },
      {
        "title": "Measurable Business Impact",
        "desc": "Improves productivity, innovation and digital readiness."
      }
    ],
    "outcomes": [
      "Business-focused learning",
      "Customized learning paths",
      "Hands-on tool experience",
      "Measurable business impact"
    ],
    "steps": [
      "Discover",
      "Learn",
      "Apply",
      "Transform",
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
