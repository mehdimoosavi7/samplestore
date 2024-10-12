"use client";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import {
  faClock,
  faCreditCard,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatureItem from "../frequents/FeatureItem";

const specs = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: faTruck,
      title: "free shipping",
      text: "Lorem ipsum dolor sit amet cons tetur adipisicing elit sed do.",
    },
    {
      icon: faClock,
      title: "Support 24/7",
      text: "Lorem ipsum dolor sit amet cons tetur adipisicing elit sed do.",
    },
    {
      icon: faCreditCard,
      title: "Secured Payment",
      text: "Lorem ipsum dolor sit amet cons tetur adipisicing elit sed do.",
    },
  ];

  return (
    <section className="index-promo-wrap">
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <div className="feature-item-wrap row">
              {features.map((feature, index) => {
                return (
                  <FeatureItem
                    classname="col-12 col-lg-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={200 * index}
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    text={feature.text}
                    size={"lg"}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default specs;
