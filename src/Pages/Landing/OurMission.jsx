import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full">
      {/* Static Background Image with Scrolling Text */}

      <section
        className="relative h-[100vh] flex flex-col md:flex-row items-center justify-center text-white bg-black/50 bg-fixed overflow-auto"
        style={{
          backgroundImage: "url('/All/mission.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 z-10 max-w-7xl px-6 md:px-10 text-center md:text-left py-20">
          <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
            Missions
          </h2>
          <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            Our mission is to provide top-notch services that help businesses grow and succeed. 
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
          </p>
        </div>
      </section>

      <section
        className="relative h-[100vh] flex flex-col md:flex-row items-center justify-center text-white bg-black/50 bg-fixed overflow-auto"
        style={{
          backgroundImage: "url('/All/Objective.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 z-10 max-w-7xl px-6 md:px-10 text-center md:text-left py-20">
          <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
            Objective
          </h2>
          <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
