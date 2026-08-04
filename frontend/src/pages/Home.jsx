import Hero from "../components/home/Hero";
import CompanyOverview from "../components/about/CompanyOverview";
import VisionMission from "../components/about/VisionMission";
import Services from "../components/home/Services";
import CareersSection from "../components/careers/CareersSection";
import ContactSection from "../components/contact/ContactSection";

// ✅ Single Chat Widget


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <CompanyOverview />
        <VisionMission />
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Careers */}
      <section id="careers">
        <CareersSection />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>

    </>
  );
}

export default Home;