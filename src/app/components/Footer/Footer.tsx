import React from "react";
import Link from "next/link";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  faInstagram,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 5,
      title: "Products",
      url: "/products",
    },
  ];
  return (
    <footer className="footer">
      <Container className="h-100">
        <Row className="h-100">
          <Col
            sm={12}
            lg={6}
            xl={4}
            className="flex flex-col justify-content-start gap-3"
          >
            <h2 className="text-2xl">
              <Link href={"/"}>My Store</Link>
            </h2>
            <p>
              Elit irure sit est in veniam ut eiusmod irure sit proident.
              Laborum id tempor ut occaecat sunt pariatur aliqua. Id Lorem
              voluptate esse excepteur incididunt id ipsum velit consequat.
            </p>
          </Col>
          <Col sm={12} lg={6} xl={4}>
            <div className="nav">
              {links &&
                links.map((link) => {
                  return (
                    <Link key={link.id} href={link.url} className="nav-item">
                      <FontAwesomeIcon icon={faChevronRight} />
                      {link.title}
                    </Link>
                  );
                })}
            </div>
          </Col>
          <Col sm={12} lg={6} xl={4}>
            <Form>
              <Form.Label>Join to news feed</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <Button type="button" className="subs-btn">
                Join us!
              </Button>
            </Form>
            <div className="addressBox">
              <p>No 24, Park st, London</p>
              <div className="socialLinks">
                <Link href={"https://instagram.com"} target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href={"https://telegram.com"} target="_blank">
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </Link>
                <Link href={"https://whatsapp.com"} target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyRight">
        <Container>
          <Row>
            <Col className="copyRight-text">All Rights Reserved @2024</Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
