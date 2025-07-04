// ScrollReveal.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // when top of el hits 90% of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default ScrollReveal;
