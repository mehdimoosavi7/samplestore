import React from "react";
import PagesBanner from "../components/frequents/PagesBanner";
import About from "../components/About/About";

import "./../styles/home.scss";
import Testimonials from "../components/Home/Testimonials";

const page = () => {
  const addressArray: Array<any> = [
    {
      url: "/",
      text: "home",
    },
    {
      url: "/about",
      text: "about us",
    },
  ];
  return (
    <div className="about-page">
      <PagesBanner
        title="about us"
        addressArray={addressArray}
        bg="about-banner.jpg"
      />
      <About />
      <Testimonials />
    </div>
  );
};

export default page;
