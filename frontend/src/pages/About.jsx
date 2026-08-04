import CompanyOverview from "../components/about/CompanyOverview";
import VisionMission from "../components/about/VisionMission";
import PageHero from "../components/common/PageHero";

function About() {
  return (
    <>
      <PageHero eyebrow="About Aigonic" title="Built for the " highlight="intelligence era." description="We turn emerging AI capability into practical, human-centered systems that create real momentum." />
      <CompanyOverview />
      <VisionMission />
    </>
  );
}

export default About;
