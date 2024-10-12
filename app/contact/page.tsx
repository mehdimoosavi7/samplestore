import React from "react";
import PagesBanner from "../components/frequents/PagesBanner";
import ContactDetails from "../components/Contact/ContactDetails";

import "./../styles/home.scss";
import ContactForm from "../components/Contact/ContactForm";


const page = () => {
  const addressArray: Array<any> = [
    {
      url: "/",
      text: "home",
    },
    {
      url: "/contact",
      text: "contact us",
    },
  ];
  return (
    <div className="contact-page">
      <PagesBanner
        title="contact us"
        addressArray={addressArray}
        bg="contact-banner.jpg"
      />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default page;
