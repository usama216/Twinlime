import React, { useEffect } from "react";
import Heading from "../../components/atoms/Heading";
import HeroSection from "./HeroSection";
import OurMission from "./OurMission";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";
import Timeline from "../AboutsUs/Timeline";

const LandingPage = () => {
    useEffect(()=>(
  window.scrollTo(0,0)
    ),[])
  return (
    <>
      <HeroSection />
      <OurMission />
      <WhyWorkWithUs />
    <Timeline/>
      <Categories />
      <PopularProducts />
    </>
  );
};

export default LandingPage;
