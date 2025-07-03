import { useRef } from "react";
import WorkItem from "./WorkItem";
import WorkItem2 from "./WorkItem2";
import gsap from "gsap";
import Section3 from "./Section3";

// Section 1 Projects
const projects = [
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2024/12/02_EOY24_FILM_60s_WITH20LOGO_VA_1920x1080.mp4.00_00_39_03.Still009-1-1536x864.jpg",
    title: "Coca-Cola Red Label",
    subtitle: "Brand Campaign",
  },
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2025/01/Mill_EOY24_Short.00_00_51_10.Still004-1536x864.jpg",
    title: "H&M Fluid Style",
    subtitle: "Fashion Editorial",
  },
  {
    type: "video",
    src: "https://player.vimeo.com/progressive_redirect/playback/1026252865/rendition/1080p/file.mp4?loc=external&signature=e4ad9c840575abcba7dd1dbd4e8048c97f4e7dd9c3a2cbb50ce8fa24b1e59bf2",
    cover: "https://api.themill.com/wp-content/uploads/2024/06/Screenshot-2024-06-05-at-3.18.17-PM.jpg",
    title: "Apple Vision",
    subtitle: "Product Launch",
  },
];

// Section 2 Projects
const photoProjects = [
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2024/10/Miniature-16_9-1536x864.jpg",
    title: "First Photo",
  },
  {
    type: "image",
    src: "https://api.themill.com/wp-content/uploads/2024/09/The-Mill-Games-Reel-2024-Cover-Image-1536x864.jpg",
    title: "Second Photo",
  },
];

const Work = () => {
  // Refs for first HoloDrive block
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  // Refs for second HoloDrive block
  const textRef2 = useRef(null);
  const videoRef2 = useRef(null);
  const imageRef2 = useRef(null);

  // First block handlers
  const handleHover = () => {
    gsap.to(textRef.current, {
      y: "0%",
      duration: 0.5,
      ease: "power3.out",
    });

    if (videoRef.current) {
      videoRef.current.classList.remove("hidden");
      videoRef.current.play();
    }
    if (imageRef.current) {
      imageRef.current.classList.add("hidden");
    }
  };

  const handleLeave = () => {
    gsap.to(textRef.current, {
      y: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.classList.add("hidden");
    }
    if (imageRef.current) {
      imageRef.current.classList.remove("hidden");
    }
  };

  // Second block handlers
  const handleHover2 = () => {
    gsap.to(textRef2.current, {
      y: "0%",
      duration: 0.5,
      ease: "power3.out",
    });

    if (videoRef2.current) {
      videoRef2.current.classList.remove("hidden");
      videoRef2.current.play();
    }
    if (imageRef2.current) {
      imageRef2.current.classList.add("hidden");
    }
  };

  const handleLeave2 = () => {
    gsap.to(textRef2.current, {
      y: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    if (videoRef2.current) {
      videoRef2.current.pause();
      videoRef2.current.classList.add("hidden");
    }
    if (imageRef2.current) {
      imageRef2.current.classList.remove("hidden");
    }
  };

  return (
    <>
      {/* Section 1 */}
      <section className="min-h-screen px-6 py-4 text-white">
        <div className="w-full flex flex-col gap-4 items-center">
          <h2 className="text-2xl md:text-2xl w-[45%] text-center">
            The Mill is a full-service creative content studio. A community of
            creative pioneers who strive to push creative and technical
            boundaries. Empowered by our heritage, we are focused on building
            the legacy for the future of The Mill.
          </h2>
          <h2 className="text-2xl md:text-2xl w-[45%] text-center">
            Whether it is our clients, our fellow artists, or anyone who makes
            delivering world-class work possible, our mission and values are the
            touchstones for who we are, how we perform and the content we
            create.
          </h2>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col md:flex-row gap-5 mt-10 max-w-8xl mx-auto">
          <div className="flex-1">
            <WorkItem item={projects[0]} isLarge />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            {projects.slice(1).map((item, index) => (
              <WorkItem key={index} item={item} />
            ))}
          </div>
        </div>

        {/* HoloDrive Block 1 */}
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="w-full h-screen mt-5 relative group"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://api.themill.com/wp-content/uploads/2024/11/Holo-Drive-hero-Large.jpeg"
            alt=""
          />
          <video
            ref={videoRef}
            className="w-full h-full object-cover absolute top-0 left-0 hidden"
            src="https://player.vimeo.com/progressive_redirect/playback/1030180077/rendition/1080p/file.mp4?loc=external&signature=a62b08cc6908e2efb941d25898a815bd34d8d179185b4f937dbd8d58ed54228c"
            muted
            playsInline
            loop
          ></video>
          <div className="absolute bottom-6 left-6 h-8 overflow-hidden z-50">
            <div
              ref={textRef}
              className="text-white text-xl font-semibold"
              style={{ transform: "translateY(100%)" }}
            >
              HoloDrive, the groundbreaking photographic location capture
              technique
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen px-6 py-4 text-white">
        <div className="flex flex-col md:flex-row gap-5 mx-auto">
          {/* Left side */}
          <div className="flex flex-col gap-5 flex-1">
            {photoProjects.map((item, index) => (
              <WorkItem2 key={index} item={item} />
            ))}
          </div>

          {/* Right side HoloDrive #2 */}
          <div
            onMouseEnter={handleHover2}
            onMouseLeave={handleLeave2}
            className="flex-1 h-screen relative group"
          >
            <video
              ref={videoRef2}
              className="w-full h-full object-cover absolute top-0 left-0 hidden"
              src="https://player.vimeo.com/progressive_redirect/playback/963665175/rendition/1080p/file.mp4?loc=external&signature=8237b12f89627a5bd337620d2e6b3f3c2fba6bbd92847318ccd9a1bebb2864b9"
              muted
              playsInline
              loop
            ></video>
            <img
              ref={imageRef2}
              className="w-full h-full object-cover"
              src="https://api.themill.com/wp-content/uploads/2024/11/Holo-Drive-hero-Large.jpeg"
              alt=""
            />
            <div className="absolute bottom-6 left-6 h-8 overflow-hidden z-50">
              <div
                ref={textRef2}
                className="text-white text-xl font-semibold"
                style={{ transform: "translateY(100%)" }}
              >
                HoloDrive, the groundbreaking photographic location capture
                technique
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section3 />

    </>
  );
};

export default Work;
