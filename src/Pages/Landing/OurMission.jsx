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
        className="relative h-[80vh] flex flex-col items-center justify-start text-white bg-black/50 bg-fixed overflow-auto"
        style={{
          backgroundImage: "url('/All/wine.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex justify-between items-center h-[90vh] gap-10 z-10 max-w-7xl px-10 text-center py-20">
          <h2 className="text-5xl font-bold" data-aos="fade-up">
           Mission
          </h2>
          <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
          
          </p>
        </div>
      </section>

      <section
        className="relative h-[80vh] flex flex-col items-center justify-start text-white bg-black/50 bg-fixed overflow-auto"
        style={{
          backgroundImage: "url('/All/Dairy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex justify-between items-center h-[90vh] gap-10  z-10 max-w-7xl px-10 text-center py-20">
          <h2 className="text-5xl font-bold" data-aos="fade-up">
            Objective
          </h2>
          <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="200">
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
            Our objective is to innovate and deliver cutting-edge solutions to meet business needs. 
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
