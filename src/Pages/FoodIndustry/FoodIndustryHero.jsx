import React from "react";

const FoodIndustryHero = () => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center text-center text-white px-[10%] ">
      {/* Background Video */}
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/video.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Content */}
      {/* <div className="video-content space-y-2 z-10">
    <img src="/logo/20.png" className="w-full md:w-[70rem] h-auto" />

      </div> */}

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default FoodIndustryHero;
