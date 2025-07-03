import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { RiArrowLeftSLine } from "react-icons/ri"
import { RiArrowRightSLine } from "react-icons/ri"


const slides = [
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2025/02/Elroq_Launch_Hero_Stills_BS_6_New.jpg",
    title: "Skoda",
    subtitle: "Be more",
  },
  {
    type: "video",
    src: "c:\Users\pc\dhaakad-frontend-animations\src\components\oltra.mp4",
    title: "Michelob ULTRA",
    subtitle: "The ULTRA Hustle",
  },
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2025/01/EA_2025_SWY_EDP_hero-movie_30s_DIGITAL_169_solo_VA_no-logo.0538-1-1536x864.jpg",
    title: "Armani",
    subtitle: "Stronger with you",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Animate text on slide change
  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subtitleRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, [current]);

  const currentSlide = slides[current];

  return (
    <section className="relative h-[70vh] bg-black text-white overflow-hidden">
      {/* Slide Content */}
      <div className="absolute inset-0 z-0">
        {currentSlide.type === "image" ? (
          <img
            src={currentSlide.src}
            alt="Slide"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={currentSlide.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {currentSlide.title}
        </h1>
        <p ref={subtitleRef} className="mt-2 text-lg text-gray-300">
          {currentSlide.subtitle}
        </p>
      </div>

      {/* Arrows */}
      <div
        className="absolute z-20 top-1/2 left-6 -translate-y-1/2 cursor-pointer text-3xl"
        onClick={handlePrev}
      >
        <RiArrowLeftSLine />
      </div>
      <div
        className="absolute z-20 top-1/2 right-6 -translate-y-1/2 cursor-pointer text-3xl"
        onClick={handleNext}
      >
        <RiArrowRightSLine />
      </div>

      {/* Bottom Line Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-[1px] w-10 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-gray-500/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
