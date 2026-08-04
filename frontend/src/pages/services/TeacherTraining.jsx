import { useEffect } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import BackToServices from "../../components/common/BackToServices";
import "../../styles/services/TeacherTraining.css";

export default function TeacherTraining() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const service = {
    "slug": "teacher-training",
    "icon": "👨‍🏫",
    "title": "Teacher Training",
    "tagline": "Empower Educators to Teach With Intelligence.",
    "description": "A specialized AI learning experience for teachers, faculty and academic leaders — covering lesson planning, personalized learning, assessments and classroom-ready AI tools.",
    "intro": "A specialized learning experience for teachers, faculty members, trainers and academic leaders. Participants discover how AI can support lesson planning, assessments, personalized learning, content creation, student engagement and academic administration.",
    "audience": "Educators & academic teams",
    "highlights": [
      "Lesson Planning with AI",
      "Personalized Learning",
      "AI-Assisted Assessments",
      "Content Creation Tools",
      "Student Engagement",
      "Academic Administration"
    ],
    "whoItsFor": [
      "Teachers and Faculty Members",
      "Schools, Colleges & Universities",
      "Academic Leaders",
      "Training Departments"
    ],
    "whyChoose": [
      {
        "title": "Age & Curriculum Aware",
        "desc": "Every lesson strategy is tailored to real classroom needs."
      },
      {
        "title": "Hands-On Enablement",
        "desc": "Teachers practice with the tools, not just watch demos."
      },
      {
        "title": "Responsible Use Guidance",
        "desc": "Clear guidance on accuracy, privacy and ethical AI use."
      },
      {
        "title": "Ongoing Support",
        "desc": "Ongoing support to help educators confidently deliver AI education."
      }
    ],
    "outcomes": [
      "AI-ready lesson strategies",
      "Personalized learning techniques",
      "Responsible use guidance",
      "Classroom-ready resources"
    ],
    "steps": [
      "Understand the context",
      "Train and co-create",
      "Support classroom adoption",
      "Review outcomes together"
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
