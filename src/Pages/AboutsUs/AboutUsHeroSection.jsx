import React from "react";

const AboutUsHeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white pt-32">
      {/* Background Video */}
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/About/About-Video.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Content */}
      <div className="video-content space-y-2 z-10">
    <img src="/twinlime-logo-white.png" className="w-full"/>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default AboutUsHeroSection;
