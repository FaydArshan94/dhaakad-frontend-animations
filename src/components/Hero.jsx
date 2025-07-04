import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const slides = [
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2025/02/Elroq_Launch_Hero_Stills_BS_6_New.jpg",
    title: "Skoda",
    subtitle: "Be more",
  },

  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2025/01/EA_2025_SWY_EDP_hero-movie_30s_DIGITAL_169_solo_VA_no-logo.0538-1-1536x864.jpg",
    title: "Armani",
    subtitle: "Stronger with you",
  },

  {
    type: "video",
    src: "src/assets/night.mp4",
    title: "LVCVA",
    subtitle: "F1",
  },

  {
    type: "video",
    src: "src/assets/children.mp4",
    title: "Google Pixel 9 with Gemini Live",
    subtitle: "Now We're Talking",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg",
    title: "Skoda",
    subtitle: "Be more",
  },

  {
    type: "image",
    src: "https://images.pexels.com/photos/9415997/pexels-photo-9415997.jpeg",
    title: "Armani",
    subtitle: "Stronger with you",
  },

  {
    type: "image",
    src: "https://images.pexels.com/photos/2219318/pexels-photo-2219318.jpeg",
    title: "LVCVA",
    subtitle: "F1",
  },

  {
    type: "image",
    src: "https://images.pexels.com/photos/2219318/pexels-photo-2219318.jpeg",
    title: "Google Pixel 9 with Gemini Live",
    subtitle: "Now We're Talking",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // +1 = forward, -1 = backward
  const slideRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    // Slide in/out animation
    const tl = gsap.timeline();
    tl.fromTo(
      slideRef.current,
      {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
    // tl.fromTo(
    //   [titleRef.current, subtitleRef.current],
    //   { y: 50, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
    //   "-=0.4"
    // );
  }, [current]);

  const currentSlide = slides[current];

  return (
    <section className="relative h-[70vh] bg-black text-white overflow-hidden">
      {/* Slide Content */}
      <div className="absolute inset-0 z-0" ref={slideRef}>
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

      {/* Overlay Text */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1
          // ref={titleRef}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {currentSlide.title}
        </h1>
        <p className="mt-2 text-lg text-gray-300">{currentSlide.subtitle}</p>
      </div>

      {/* Navigation Arrows */}
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

      {/* Bottom Indicators */}
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
