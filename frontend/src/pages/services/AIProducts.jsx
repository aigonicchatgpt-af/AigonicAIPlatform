import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AIProducts.css";

export default function AIProducts() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-products",
    "icon": "📦",
    "title": "AI Products",
    "tagline": "Intelligent Products Designed for a Smarter World.",
    "description": "Custom AI-powered products — from business assistants and CRM to school ERP, analytics dashboards and document intelligence — engineered to scale.",
    "intro": "AiGONIC designs and builds intelligent AI-powered products that help businesses, educational institutions, governments and organizations operate more efficiently, make smarter decisions and deliver exceptional experiences — scalable, secure and built to evolve.",
    "audience": "Startups, schools & enterprises",
    "highlights": [
      "AI Business Assistant",
      "AI Customer Support Platform",
      "AI Learning Platform",
      "AI School ERP",
      "AI College Management System",
      "AI HR Management System",
      "AI CRM Platform",
      "AI Analytics Dashboard",
      "AI Document Intelligence",
      "AI Automation Platform",
      "AI Knowledge Assistant",
      "Custom AI Products"
    ],
    "whoItsFor": [
      "Education",
      "Healthcare",
      "Manufacturing",
      "Retail & E-Commerce",
      "Banking & Financial Services",
      "Hospitality",
      "Agriculture",
      "Logistics",
      "Government",
      "Startups & SMEs",
      "Large Enterprises"
    ],
    "whyChoose": [
      {
        "title": "AI-First by Design",
        "desc": "Artificial Intelligence embedded into every product."
      },
      {
        "title": "Scalable Architecture",
        "desc": "Built to grow from startup to enterprise scale."
      },
      {
        "title": "Secure & Reliable",
        "desc": "Modern security practices and enterprise-grade reliability."
      },
      {
        "title": "Cloud-Ready",
        "desc": "Accessible anytime, anywhere, with seamless scalability."
      }
    ],
    "outcomes": [
      "AI-first, scalable architecture",
      "Secure, cloud-ready delivery",
      "User-centered design",
      "Continuous innovation"
    ],
    "steps": [
      "Discover",
      "Configure",
      "Deploy",
      "Optimize",
      "Scale"
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
