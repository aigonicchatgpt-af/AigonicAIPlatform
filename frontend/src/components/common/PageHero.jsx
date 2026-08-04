import { Sparkles, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import "./PageHero.css";

function PageHero({ eyebrow = "AIGONIC INTELLIGENCE", title, highlight, description }) {
  return <section className="page-hero">
    <div className="page-hero-grid" />
    <div className="page-hero-glow page-hero-glow-one" /><div className="page-hero-glow page-hero-glow-two" />
    <motion.div className="container page-hero-content" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
      <span className="eyebrow"><Sparkles size={14}/>{eyebrow}</span>
      <h1>{title} {highlight && <em>{highlight}</em>}</h1>
      <p>{description}</p>
      <span className="page-hero-mark"><ArrowDownRight size={18}/> Explore the future</span>
    </motion.div>
  </section>;
}

export default PageHero;
