import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/AISchoolCurriculum.css";

export default function AISchoolCurriculum() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "ai-school-curriculum",
    "icon": "🏫",
    "title": "AI School Curriculum",
    "tagline": "Preparing Students for a World Powered by Artificial Intelligence.",
    "description": "A comprehensive, age-appropriate AI School Curriculum — from AI fundamentals to robotics, generative AI and digital ethics — for primary through higher secondary.",
    "intro": "The AiGONIC AI School Curriculum is a comprehensive, future-focused learning program designed to help schools integrate Artificial Intelligence in a structured, engaging and age-appropriate way — developing digital literacy, computational thinking, creativity and ethical awareness.",
    "audience": "Schools & education networks",
    "highlights": [
      "AI Fundamentals",
      "Computational Thinking",
      "Coding & AI Applications",
      "Robotics & Intelligent Systems",
      "Generative AI & Creativity",
      "AI Ethics & Digital Citizenship",
      "Innovation & Project-Based Learning"
    ],
    "whoItsFor": [
      "Primary School",
      "Middle School",
      "Secondary School",
      "Higher Secondary"
    ],
    "whyChoose": [
      {
        "title": "Future-Focused Curriculum",
        "desc": "Prepares students for careers in an AI-driven world."
      },
      {
        "title": "Age-Appropriate Learning",
        "desc": "Every lesson is tailored to the student's developmental stage."
      },
      {
        "title": "Teacher Enablement",
        "desc": "Comprehensive training and continuous support for educators."
      },
      {
        "title": "Easy School Integration",
        "desc": "Complements existing academic programs without disruption."
      }
    ],
    "outcomes": [
      "Structured, grade-wise curriculum",
      "Teacher handbooks & training",
      "Project-based learning kits",
      "Annual innovation challenges"
    ],
    "steps": [
      "Discover",
      "Learn",
      "Build",
      "Innovate",
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
