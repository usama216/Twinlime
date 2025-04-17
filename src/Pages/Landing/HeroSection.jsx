// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="h-[100vh] flex flex-col items-center justify-center text-center text-white px-[10%] ">
//       {/* Background Video */}
//       <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
//         <video
//           className="min-w-full min-h-full absolute object-cover"
//           src="/video.mp4"
//           type="video/mp4"
//           autoPlay
//           muted
//           loop
//         />
//       </div>

//       {/* Content */}
//       <div className="video-content space-y-2 z-10">
//     {/* <img src="/twinlime-logo-white.png" className="w-full"/> */}
//     <img src="/logo/20.png" className="w-full md:w-[70rem] h-auto" />

//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/Hero/1.jpeg",
    "/Hero/2.jpeg",
    "/Hero/dd.jpg",
    "/Hero/4.jpeg",
    "/Hero/5.jpeg",
    "/Hero/6.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="relative h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Logo Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <img src="/logo/20.png" className="w-[70rem] h-auto" alt="Logo" />
      </div>
    </section>
  );
};

export default HeroSection;
