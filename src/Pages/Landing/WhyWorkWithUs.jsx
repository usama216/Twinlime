import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const WhyWorkWithUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div>
          <h1 className="text-4xl font-bold text-center "
             data-aos="fade-up"
          >The reasons why you should <br/> work with us</h1>

          <div className="flex items-center justify-around gap-20 mt-10 flex-wrap">
            <div    data-aos="fade-left">
              <h1 className="text-6xl text-blue-600 font-bold text-center">12</h1>
              <p className="text-center text-2xl">Years in business</p>
            </div>
            <div    data-aos="fade-up">
            <h1 className="text-6xl text-blue-600 font-bold text-center">70</h1>
            <p className="text-center text-2xl">Satisfied
            customers</p>
            </div>
            <div    data-aos="fade-right">
            <h1 className="text-6xl text-blue-600 font-bold text-center">100%</h1>
            <p className="text-center text-2xl">High quality</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWorkWithUs;
