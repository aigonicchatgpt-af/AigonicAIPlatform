import { useEffect, useRef } from "react";

function NeuralCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia(
        "(pointer: coarse), (prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return undefined;
    }

    const cursor = cursorRef.current;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame;
    let lastSpark = 0;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.17;
      ringY += (mouseY - ringY) * 0.17;

      cursor.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      frame = requestAnimationFrame(animate);
    };

    const makeSpark = (x, y, burst = false) => {
      const spark = document.createElement("i");

      const angle = Math.random() * Math.PI * 2;
      const distance = burst
        ? 16 + Math.random() * 28
        : Math.random() * 18;

      spark.className = `cursor-spark${
        burst ? " cursor-burst" : ""
      }${!burst && Math.random() > 0.48 ? " cursor-fog" : ""}`;

      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;

      spark.style.setProperty(
        "--spark-x",
        `${Math.cos(angle) * distance}px`
      );

      spark.style.setProperty(
        "--spark-y",
        `${Math.sin(angle) * distance}px`
      );

      document.body.appendChild(spark);

      spark.addEventListener("animationend", () => spark.remove());
    };

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const interactive = event.target.closest(
        "a, button, input, textarea, select, [role='button'], .quick-reply-btn, .upload-btn, .chat-close-btn, .chat-input textarea, .chat-button"
      );

      cursor.classList.toggle(
        "cursor-active",
        Boolean(interactive)
      );

      if (performance.now() - lastSpark > 48) {
        lastSpark = performance.now();
        makeSpark(mouseX, mouseY);
      }
    };

    const click = (event) => {
      for (let i = 0; i < 9; i++) {
        makeSpark(event.clientX, event.clientY, true);
      }
    };

    document.addEventListener("pointermove", move);
    document.addEventListener("pointerdown", click);

    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerdown", click);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="neural-cursor"
      aria-hidden="true"
    >
      <span className="cursor-mark">
        <span className="cursor-logo">AG</span>
      </span>
    </div>
  );
}

export default NeuralCursor;