import { useRef } from "react";
import gsap from "gsap";

const HoverVideoBlock = ({ image, video, title }) => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleHover = () => {
    gsap.to(textRef.current, {
      y: "0%",
      duration: 0.5,
      ease: "power3.out",
    });

    if (videoRef.current) {
      videoRef.current.classList.remove("hidden");
      videoRef.current.play();

      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => imageRef.current.classList.add("hidden"),
      });
    }
  };

  const handleLeave = () => {
    gsap.to(textRef.current, {
      y: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });

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

    if (imageRef.current) {
      imageRef.current.classList.remove("hidden");
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="flex-1 h-screen relative group  overflow-hidden flex items-start justify-start"
    >
      {/* Image (default visible) */}
      <img
        ref={imageRef}
        src={image}
        alt="cover"
        className="w-full h-full object-cover"
      />

      {/* Video (on hover) */}
      <video
        ref={videoRef}
        src={video}
        muted
        playsInline
        loop
        className="w-full h-full object-cover absolute top-0 left-0 hidden"
      ></video>

      {/* Reveal text */}
      <div className="absolute bottom-6 left-6 h-8 overflow-hidden z-50">
        <div
          ref={textRef}
          className="text-white text-xl font-semibold"
          style={{ transform: "translateY(100%)" }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <section className="min-h-screen  px-6 py-16 text-white">
      <div className="flex flex-col  md:flex-row md:items-start gap-5 mx-auto">
        <HoverVideoBlock
          image="https://api.themill.com/wp-content/uploads/2024/08/Screen-Shot-2024-08-12-at-9.28.56-AM-Large.jpeg"
          video="https://player.vimeo.com/progressive_redirect/playback/997728111/rendition/1080p/file.mp4?loc=external&signature=b99d9dbc2b9d4b012b82c5219656a5d3ad147f340d407f98fd68e1fa4fd6edf5"
          title="Light Chase Cinematic Shot"
        />
        <HoverVideoBlock
          image="https://api.themill.com/wp-content/uploads/2024/10/Halloween-reel.jpeg"
          video="https://download-video-ak.vimeocdn.com/v3-1/playback/b6da3e9c-16ec-44d8-9bc6-9bf51c1438a0/ab4f1521-bff6db76?__token__=st=1751527986~exp=1751531586~acl=%2Fv3-1%2Fplayback%2Fb6da3e9c-16ec-44d8-9bc6-9bf51c1438a0%2Fab4f1521-bff6db76%2A~hmac=7aaaec9e6e279cdb28a65b5c38783a18497da92c45915f43d007f970e4403994&r=dXMtZWFzdDE%3D"
          title="Halloween FX Composition"
        />
      </div>
    </section>
  );
};

export default Section3;
