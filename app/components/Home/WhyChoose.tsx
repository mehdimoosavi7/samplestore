import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageCol from "../frequents/ImageCol";
import Title from "../frequents/Title";
import CaptionBox from "../frequents/CaptionBox";
import FeatureItem from "../frequents/FeatureItem";
import SellCounter from "../frequents/SellCounter";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const WhyChoose = () => {
  return (
    <section className="index-why-choose">
      <Container className="index-about">
        <Row>
          <Col md={12} lg={6} data-aos={"fade-right"}>
            <div className="imageBox">
              <ImageCol src="/images/index/wh-img-1.jpg" />
              <div className="imageBox-textBox row">
                <SellCounter text={"product sold"} subtitle={"2,150"} />
                <SellCounter text={"partners companies"} subtitle={"220+"} />
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} data-aos={"fade-left"}>
            <div className="content-title">
              <Title title={"why choose us"} />
              <CaptionBox
                caption={`Smart Watch Will Make Your Life Easier & Fast`}
                text={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accuse antium lorem sit totam rem aperiam, eaque ipsa quae ab
                illution inventore veritatis quasi archi.`}
              />
            </div>
            <div className="feature-item-wrap">
              <FeatureItem
                icon={faCheck}
                title={`Long Time Charge`}
                text={`Vestibulum ac diam sit amet quam vehicula elemen tum sed sit
              amet dui praesent sapien pellen tesque .`}
              />
              <FeatureItem
                icon={faCheck}
                title={`Unlimited Color`}
                text={`Vestibulum ac diam sit amet quam vehicula elemen tum sed sit
                amet dui praesent sapien pellen tesque.`}
              />
              <FeatureItem
                icon={faCheck}
                title={`Easy Return`}
                text={`Vestibulum ac diam sit amet quam vehicula elemen tum sed sit
                amet dui praesent sapien pellen tesque.`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
