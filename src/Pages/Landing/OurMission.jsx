import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full">
      {/* Mission Section with Background Image */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white bg-black/50"
        style={{
          backgroundImage: "url('/All/wine.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl px-10 text-center">
          <h2 className="text-5xl font-bold" data-aos="fade-up">
            Mission
          </h2>
          <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
            Our mission is to provide top-notch services that help businesses grow and succeed.
          </p>
        </div>
      </section>

      {/* Objective Section with Background Image */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white bg-black/50"
        style={{
          backgroundImage: "url('/All/Dairy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl px-10 text-center">
          <h2 className="text-5xl font-bold" data-aos="fade-down">
            Objective
          </h2>
          <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
