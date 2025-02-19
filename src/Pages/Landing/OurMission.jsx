import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  const [showObjectiveBG, setShowObjectiveBG] = useState(false);
  const missionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.5) {
          setShowObjectiveBG(true);
        }
        AOS.refresh(); // 🔥 Ensure animations restart when scrolling
      },
      { threshold: 0.5 }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      {/* Mission Section */}
      <section
        ref={missionRef}
        className="relative h-[110vh] flex flex-col md:flex-row items-center justify-center text-white bg-black/50 bg-fixed"
        style={{
          backgroundImage: "url('/All/mission.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 z-10 max-w-7xl px-6 md:px-10 text-center md:text-left py-20">
          <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
            Mission
          </h2>
          <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
            Our mission is to provide top-notch services that help businesses grow and succeed.
          </p>
        </div>
      </section>

      {/* Objective Section - Background Appears on 50% Mission Scroll */}
      <section
        className={`relative h-[110vh] flex flex-col md:flex-row items-center justify-center text-white bg-fixed transition-opacity duration-1000 ${
          showObjectiveBG ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: showObjectiveBG ? "url('/All/objective.jpg')" : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 z-10 max-w-7xl px-6 md:px-10 text-center md:text-left py-20">
          <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="600">
            Objective
          </h2>
          <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="800">
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



// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const OurMission = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//   }, []);

//   return (
//     <div className="relative w-full">
//       {/* Mission Section */}
//       <section
//         className="relative h-[110vh] flex flex-col md:flex-row items-center justify-center text-white bg-black/50 bg-fixed"
//         style={{
//           backgroundImage: "url('/All/mission.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 z-10 max-w-7xl px-6 md:px-10 text-center md:text-left py-20">
//           <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
//             Mission
//           </h2>
//           <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
//             Our mission is to provide top-notch services that help businesses grow and succeed.
//             Our mission is to provide top-notch services that help businesses grow and succeed.
//             Our mission is to provide top-notch services that help businesses grow and succeed.
//           </p>
//         </div>
//       </section>

//       {/* Objective Section - Text Delay Added */}
//       <section
//         className="relative h-[110vh] flex flex-col md:flex-row items-center justify-center text-white bg-black/50 bg-fixed"
//         style={{
//           backgroundImage: "url('/All/objective.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 z-10 max-w-7xl px-6 md:px-10 text-center md:text-left py-20">
//           <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up" data-aos-delay="600">
//             Objective
//           </h2>
//           <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="800">
//             Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
//             Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
//             Our objective is to innovate and deliver cutting-edge solutions to meet business needs.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurMission;
