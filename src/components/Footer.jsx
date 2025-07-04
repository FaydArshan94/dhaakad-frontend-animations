import React, { useRef } from "react";
import gsap from "gsap";

function Footer() {
  // Reusable text reveal component
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
        className="relative h-6 overflow-hidden cursor-pointer"
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

  return (
    <footer className="text-white px-4  py-8 sm:px-5">
      <div className="w-full flex flex-col  py-10 md:flex-row justify-between items-start md:items-start">
        {/* General Inquiries */}
        <div >
          <h2 className="tracking-wide text-zinc-400 font-[Tric] mb-4">
            GENERAL INQUIRIES
          </h2>
          <ul className="space-y-2 font-[Tric]">
            <li><RevealText text="CONTACT" /></li>
            <li><RevealText text="LEGAL" /></li>
            <li><RevealText text="ABOUT" /></li>
          </ul>
        </div>

        {/* Follow */}
        <div className=" w-20 ">
          <h2 className="mb-4 font-[Tric] text-zinc-400">FOLLOW</h2>
          <ul className="space-y-2   font-[Tric]">
            <li className=""><RevealText text="INSTAGRAM" /></li>
            <li className=""><RevealText text="LINKEDIN" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
