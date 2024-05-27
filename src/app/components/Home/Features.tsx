import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../frequents/Title";
import {
  faBell,
  faHandHoldingDroplet,
  faMedal,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import CaptionBox from "../frequents/CaptionBox";
import FeatureItem from "../frequents/FeatureItem";

const Features = () => {
  return (
    <section className="index-features">
      <Container>
        <Row>
          <Col className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="index-features-header text-center mb-4">
              <Title title={"features"} />
              <CaptionBox
                caption={`Our Special Features`}
                text={`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout`}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} className="pr-0">
            <div className="product-features feature-item-wrap">
              <FeatureItem
                icon={faBell}
                title={`Notification Alert`}
                text={`estibulum ac diam sit amet quam vehicula elemen tum sed sit
                    amet dui praesent sapien pellen tesque .`}
              />
              <FeatureItem
                icon={faMedal}
                title={`High Quality`}
                text={`estibulum ac diam sit amet quam vehicula elemen tum sed sit
                    amet dui praesent sapien pellen tesque .`}
              />
              <FeatureItem
              icon={faUserGroup}
                title={`User Friendly`}
                text={`estibulum ac diam sit amet quam vehicula elemen tum sed sit
                    amet dui praesent sapien pellen tesque .`}
              />
              <FeatureItem
                icon={faHandHoldingDroplet}
                title={`Free Support`}
                text={`estibulum ac diam sit amet quam vehicula elemen tum sed sit
                    amet dui praesent sapien pellen tesque .`}
              />
            </div>
          </Col>
          <Col lg={6} md={12} className="pl-0">
            <div className="product-feature-bg"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
