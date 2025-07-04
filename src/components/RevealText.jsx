import React, { useRef } from "react";
import gsap from "gsap";

const RevealText = ({ text }) => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const handleHover = () => {
    gsap.to(topRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(bottomRef.current, {
      y: "0%",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(topRef.current, {
      y: "0%",
      duration: 0.4,
      ease: "power3.inOut",
    });
    gsap.to(bottomRef.current, {
      y: "100%",
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      className="relative h-6 overflow-hidden cursor-pointer inline-block"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <span
        ref={topRef}
        className="block absolute top-0 left-0 w-full transform translate-y-0"
      >
        {text}
      </span>
      <span
        ref={bottomRef}
        className="block absolute top-0 left-0 w-full transform translate-y-full"
      >
        {text}
      </span>
    </div>
  );
};

export default RevealText;
