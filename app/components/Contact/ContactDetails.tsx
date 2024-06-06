import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../frequents/Title";
import CaptionBox from "../frequents/CaptionBox";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import FeatureItem from "../frequents/FeatureItem";

const ContactDetails = () => {
  const details: Array<any> = [
    {
      icon: faLocation,
      title: "our location",
      text: "2767 Sunrise Street, 10th Avenue, New York, USA",
    },
    {
      icon: faEnvelope,
      title: "email us",
      link1: "hello@ekom.com",
      link2: "support@ekom.com",
      linkType: "mailto:",
    },
    {
      icon: faPhone,
      title: "call us",
      link1: "+44587154765",
      link2: "+55576234532",
      linkType: "tel:",
    },
  ];
  return (
    <section className="contact-details index-promo-wrap text-center">
      <Container>
        <Row>
          <Col className="mb-5">
            <Title title="send message" />
            <CaptionBox caption="we are here to help you" />
          </Col>
        </Row>
        <Row className="feature-item-wrap">
          {details.map((detail: any, index: number) => {
            return (
              <FeatureItem
                key={index}
                classname="col-12 col-lg-4"
                icon={detail.icon}
                title={detail.title}
                text={detail.text}
                link1={detail.link1}
                link2={detail.link2}
                size={"lg"}
                linkType={detail.linkType}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetails;
