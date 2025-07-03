import { useRef } from "react";
import gsap from "gsap";

const WorkItem2 = ({ item, isLarge = false }) => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const handleHover = () => {
    // Animate text reveal
    gsap.to(textRef.current, {
      y: "0%",
      duration: 0.5,
      ease: "power3.out",
    });

    if (item.type === "video") {
      // Show video with fade + scale animation
      if (videoRef.current) {
        videoRef.current.classList.remove("hidden");
        videoRef.current.play();

        gsap.fromTo(
          videoRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
        );
      }

      // Fade out image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => imageRef.current.classList.add("hidden"),
        });
      }
    }
  };

  const handleLeave = () => {
    // Animate text hide
    gsap.to(textRef.current, {
      y: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    if (item.type === "video") {
      // Fade out video
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            videoRef.current.pause();
            videoRef.current.classList.add("hidden");
          },
        });
      }

      // Fade back in image
      if (imageRef.current) {
        imageRef.current.classList.remove("hidden");

        gsap.fromTo(
          imageRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    }
  };

  return (
    <div
      className={`work-item relative overflow-hidden group ${
        isLarge ? "h-screen" : "h-80"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* Media */}
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {/* Image shown first (video cover) */}
          <img
            ref={imageRef}
            src={item.cover || "/default.jpg"} // fallback if no cover
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Video hidden initially */}
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            className="w-full h-full object-cover absolute top-0 left-0 hidden"
          />
        </>
      )}

      {/* Reveal Text */}
      <div className="absolute bottom-6 left-6 h-8 overflow-hidden z-50">
        <div
          ref={textRef}
          className="text-white text-xl font-semibold"
          style={{ transform: "translateY(100%)" }}
        >
          {item.title}
        </div>
      </div>
    </div>
  );
};

export default WorkItem2;
