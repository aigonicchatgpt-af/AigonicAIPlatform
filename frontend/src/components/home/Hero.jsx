import { ArrowRight, Play, Sparkles, Activity, BrainCircuit, Orbit } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

const reveal = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

const Hero = () => <section className="hero" id="home">
  <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-noise" />
  <div className="container hero-container">
    <motion.div className="hero-copy" initial="hidden" animate="visible" transition={{ staggerChildren: .1 }}>
      <motion.span variants={reveal} className="eyebrow ai-eyebrow"><Sparkles size={14}/> AI Innovation • Enterprise Solutions <i>● Live</i></motion.span>

      <motion.h1 variants={reveal}>
        Building Intelligence That Moves the <em>World Forward.</em>
      </motion.h1>

      <motion.p variants={reveal}>
        Artificial Intelligence is no longer the future. It is becoming the foundation of every successful business.
        <br /><br />
        At <strong>Aigonic Innovation Pvt Ltd</strong>, we design intelligent software, AI-powered products,
        enterprise automation, and world-class education that help organizations scale faster, work smarter,
        and lead with confidence.
        <br /><br />
        From startups to global enterprises, we create technology that transforms ideas into lasting
        competitive advantage.
      </motion.p>

      <motion.div variants={reveal} className="hero-buttons">
        <a href="#contact" className="button button-primary">
          Build with AI <ArrowRight size={18}/>
        </a>
        <a href="#services" className="text-button">
          <span><Play size={14} fill="currentColor"/></span> Explore Our Solutions
        </a>
      </motion.div>

      <motion.div variants={reveal} className="hero-proof">
        <div><strong>AI</strong><span>Driven Innovation</span></div>
        <div><strong>Enterprise</strong><span>Automation Solutions</span></div>
        <div><strong>24/7</strong><span>Intelligent Support</span></div>
      </motion.div>
    </motion.div>

    <motion.div
      className="hero-visual"
      aria-label="AI workflow visual"
      initial={{ opacity: 0, scale: .92, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: .75, delay: .2 }}
    >
      <div className="orbit orbit-a"><span /></div>
      <div className="orbit orbit-b"><span /></div>

      <div className="neural-core">
        <BrainCircuit size={34}/>
        <span>AI</span>
      </div>

      <div className="visual-card main-card">
        <div className="card-head">
          <span className="card-label">AIGONIC OS</span>
          <Activity size={17}/>
        </div>

        <h3>Empowering Businesses with Intelligent AI.</h3>

        <div className="chart">
          <i/><i/><i/><i/><i/><i/><i/>
        </div>

        <div className="card-row">
          <span>AI Performance</span>
          <b>99.9%</b>
        </div>
      </div>

      <div className="floating-card top-card">
        <Sparkles size={16}/>
        <span>AI Solution Ready<br/><b>Business Growth</b></span>
      </div>

      <div className="floating-card bottom-card">
        <span className="live-dot"/>
        Intelligent systems running 24/7
      </div>

      <div className="floating-card signal-card">
        <Orbit size={15}/>
        <span>Enterprise AI <b>Connected</b></span>
      </div>
    </motion.div>
  </div>
</section>;

export default Hero;
