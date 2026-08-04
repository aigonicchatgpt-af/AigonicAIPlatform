import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const targets = [
  ".about-left", ".stat-card", ".vision-card", ".services-header", ".service-card",
  ".careers-intro", ".role-card", ".contact-inner > div", ".contact-form",
  ".page-hero-content", ".hero-copy", ".hero-visual"
].join(",");

export default function ScrollEffects() {
  const location = useLocation();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const elements = [...document.querySelectorAll(targets)];
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 70, 280)}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        target.classList.toggle("is-visible", isIntersecting);
      });
    }, { threshold: .12, rootMargin: "0px 0px -45px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);
  return null;
}
