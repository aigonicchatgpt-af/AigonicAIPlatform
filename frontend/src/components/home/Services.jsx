import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import "./Services.css";

/*const services = [
  {
    icon: "🚐",
    title: "AI Experience Lab",
    description:
      "Hands-on AI learning through our mobile AI lab for schools, colleges and communities.(Mobile)"
  },
  {
    icon: "🎓",
    title: "AI Workshops",
    description:
      "Practical workshops on ChatGPT, Prompt Engineering, AI Tools, Automation and Generative AI."
  },
  {
    icon: "💼",
    title: "AI Career Programs",
    description:
      "Certification programs, live projects, internships and placement support for AI careers."
  },
  {
    icon: "👨‍🏫",
    title: "Teacher Training",
    description:
      "Empowering educators with AI tools, teaching methodologies and classroom innovation."
  },
  {
    icon: "🏢",
    title: "Corporate Training",
    description:
      "AI upskilling programs for employees, leadership teams and organizations."
  },
  {
    icon: "🤝",
    title: "AI Consulting",
    description:
      "AI strategy, implementation, automation and digital transformation services."
  },
  {
    icon: "🏫",
    title: "AI School Curriculum",
    description:
      "Future-ready AI curriculum designed for schools with practical learning."
  },
  {
    icon: "📦",
    title: "AI Products",
    description:
      "Custom AI software, chatbots, AI assistants and enterprise solutions."
  },
  {
    icon: "🧠",
    title: "AI Research",
    description:
      "Research in Generative AI, Agentic AI, Computer Vision and Machine Learning."
  },
  {
    icon: "🚀",
    title: "Startup Incubation",
    description:
      "Mentorship, technical guidance and AI product development support."
  }
];*/

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-header">
        <span>OUR SERVICES</span>

        <div className="services-pulse"><i /> AI CAPABILITY MATRIX <b>10 MODULES</b></div>

        <h2>What We Offer</h2>

        <p>
          Aigonic Innovations Pvt Ltd provides AI-powered education,
          training, consulting and enterprise solutions.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <Link to={`/services/${service.slug}`} className="service-card" key={service.slug}>
            <span className="service-index">{String(index + 1).padStart(2, "0")}</span>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <span className="service-link">Explore service <ArrowUpRight size={15}/></span>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default Services;
