"use client";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Title from "../frequents/Title";
import CaptionBox from "../frequents/CaptionBox";
import ImageCol from "../frequents/ImageCol";
import FeatureItem from "../frequents/FeatureItem";
import Aos from "aos";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <Container className="index-about">
        <Row>
          <Col md={12} lg={6} data-aos={"fade-right"}>
            <ImageCol src="/images/index/about-img-6.jpg" />
          </Col>
          <Col md={12} lg={6} data-aos={"fade-left"}>
            <div className="content-title">
              <Title title={"about us"} />
              <CaptionBox
                caption={`Our Watches Are Fast & Safe With New Features`}
                text={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accuse antium lorem sit totam rem aperiam, eaque ipsa quae ab
                illution inventore veritatis quasi archi.`}
              />
            </div>
            <div className="feature-item-wrap">
              <FeatureItem
                icon={faCheck}
                title={`The Perfect Device For Health`}
                text={`Vestibulum ac diam sit amet quam vehicula elemen tum sed sit
              amet dui praesent sapien pellen tesque .`}
              />
              <FeatureItem
                icon={faCheck}
                title={`Your Fitness Coach On Your Wrist`}
                text={`Vestibulum ac diam sit amet quam vehicula elemen tum sed sit
                amet dui praesent sapien pellen tesque.`}
              />
            </div>
            <Link className="feature-link" href="/about">
              Read More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
