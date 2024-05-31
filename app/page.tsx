"use client";
import TopSlider from "./components/Home/TopSlider";
import BrandSlider from "./components/Home/BrandSlider";
import About from "./components/Home/About";
import Features from "./components/Home/Features";
import Specs from "./components/Home/Specs";
import WorkFlow from "./components/Home/WorkFlow";
import WhyChoose from "./components/Home/WhyChoose";
import HighQuality from "./components/Home/HighQuality";
import Testimonials from "./components/Home/Testimonials";
import Blogs from "./components/Home/Blogs";
import { useEffect } from "react";

import "./styles/home.scss";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopSlider />
      <BrandSlider />
      <About />
      <Features />
      <Specs />
      <WorkFlow />
      <WhyChoose />
      <HighQuality />
      <Testimonials />
      <Blogs />
    </>
  );
}
