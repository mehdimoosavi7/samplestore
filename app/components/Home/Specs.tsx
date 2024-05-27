"use client";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import { faClock, faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const specs = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="index-promo-wrap">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="feature-item-wrap row">
              <div
                className="feature-item col-xl-4"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="0"
              >
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faTruck} size="lg" />
                </div>
                <div className="feature-text">
                  <h3>Free Shipping</h3>
                  <p>
                    Lorem ipsum dolor sit amet cons tetur adipisicing elit sed
                    do.
                  </p>
                </div>
              </div>
              <div
                className="feature-item col-xl-4"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faClock} size="lg" />
                </div>
                <div className="feature-text">
                  <h3>Support 24/7</h3>
                  <p>
                    Lorem ipsum dolor sit amet cons tetur adipisicing elit sed
                    do.
                  </p>
                </div>
              </div>
              <div
                className="feature-item col-xl-4"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" />
                </div>
                <div className="feature-text">
                  <h3>Secured Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet cons tetur adipisicing elit sed
                    do.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default specs;
