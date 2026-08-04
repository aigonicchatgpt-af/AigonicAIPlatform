import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AIExperienceLab.css";

export default function AIExperienceLab() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-experience-lab",
    "icon": "🚐",
    "title": "AI Experience Lab",
    "tagline": "Experience Artificial Intelligence Before You Imagine Its Possibilities.",
    "description": "An immersive AI Experience Lab where students, educators and enterprises interact with next-gen AI through live demos, intelligent prototypes and real-world use cases.",
    "intro": "The AiGONIC AI Experience Lab is an immersive innovation environment where individuals, educators, enterprises and institutions interact with next-generation AI technologies through live demonstrations, intelligent prototypes and real-world applications. It transforms complex AI concepts into engaging, hands-on experiences that inspire curiosity, build confidence and accelerate innovation.",
    "audience": "Students, educators, enterprises & institutions",
    "highlights": [
      "Live AI Demonstrations",
      "Generative AI",
      "AI Assistants & Intelligent Agents",
      "Computer Vision",
      "Robotics & Automation",
      "AI in Business",
      "Industry Innovation Zones"
    ],
    "whoItsFor": [
      "Students & Future Innovators",
      "Schools, Colleges & Universities",
      "Corporate Teams",
      "Business Leaders",
      "Entrepreneurs & Startups",
      "Government Organizations",
      "Researchers & Technology Enthusiasts"
    ],
    "whyChoose": [
      {
        "title": "Real-World Applications",
        "desc": "Experience AI through real-world applications, not theory alone."
      },
      {
        "title": "Expert Guidance",
        "desc": "Understand emerging technologies with expert guidance."
      },
      {
        "title": "Enterprise-Ready Solutions",
        "desc": "Explore AI platforms built for real business and institutional use."
      },
      {
        "title": "Inspired Innovation",
        "desc": "Leave with a clearer vision of what Artificial Intelligence can achieve."
      }
    ],
    "outcomes": [
      "Live AI demonstrations",
      "Hands-on prototype interactions",
      "Industry innovation zones",
      "Practical, real-world use cases"
    ],
    "steps": [
      "Plan the experience",
      "Deploy the mobile lab",
      "Facilitate guided discovery",
      "Inspire the next steps"
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
