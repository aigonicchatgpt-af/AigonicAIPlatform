import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AICareerPrograms.css";

export default function AICareerPrograms() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-career-programs",
    "icon": "💼",
    "title": "AI Career Programs",
    "tagline": "Build Skills That Shape the Future. Build a Career That Leads It.",
    "description": "Structured AI Career Programs — from AI Foundations to Generative AI, Machine Learning, Data Science and NLP — built around mentorship and capstone projects.",
    "intro": "AiGONIC AI Career Programs are designed for individuals who want more than knowledge — they want the confidence, expertise and practical experience to build successful careers in the age of intelligent technology, through project-based learning and industry-relevant mentorship.",
    "audience": "Students, graduates & career switchers",
    "highlights": [
      "Artificial Intelligence Foundations",
      "Machine Learning Professional",
      "Generative AI Specialist",
      "AI Developer Program",
      "Data Science & AI Analytics",
      "Computer Vision & Intelligent Imaging",
      "Natural Language Processing",
      "AI Automation & Intelligent Workflows",
      "AI for Business Leaders"
    ],
    "whoItsFor": [
      "Students",
      "Graduates",
      "Working Professionals",
      "Career Switchers",
      "Entrepreneurs",
      "Faculty Members",
      "Corporate Teams",
      "Technology Enthusiasts",
      "Startups",
      "Innovation Leaders"
    ],
    "whyChoose": [
      {
        "title": "Learn by Building",
        "desc": "Every concept is reinforced through practical implementation."
      },
      {
        "title": "Future-Ready Skills",
        "desc": "Master technologies transforming industries and careers."
      },
      {
        "title": "Flexible Learning Options",
        "desc": "Classroom, online, hybrid, weekend or corporate formats."
      },
      {
        "title": "Lifelong Learning Community",
        "desc": "Join a network of learners, mentors and innovators."
      }
    ],
    "outcomes": [
      "Industry-focused curriculum",
      "Hands-on capstone projects",
      "Expert mentorship",
      "Industry-recognized certification"
    ],
    "steps": [
      "Learn",
      "Practice",
      "Build",
      "Certify",
      "Grow"
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
