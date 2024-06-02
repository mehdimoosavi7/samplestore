"use client";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropogation();
    }
    setValidated(true);
  };

  return (
    <section className="contact-form">
      <Container>
        <Row className="mb-5">
          <Col xl={4} className="map-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"
              className="h-100 w-100"
            ></iframe>
          </Col>
          <Col xl={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Form.Group className="mb-4" as={Col} lg="6">
                  <Form.Control
                    id="nameInput"
                    placeholder="Your Full Name*"
                    required
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-4" as={Col} lg="6">
                  <Form.Control id="emailInput" placeholder="Email Address*" type="email" />
                </Form.Group>
                <Form.Group className="mb-4" as={Col} lg="6">
                  <Form.Control id="phoneInput" placeholder="Phone Number" type="number" />
                </Form.Group>
                <Form.Group className="mb-4" as={Col} lg="6">
                  <Form.Control id="subjectInput" placeholder="Subject" type="text"/>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    id="messageInput"
                    placeholder="Your Messages.."
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>
                <Form.Group>
                  <button
                    type="submit"
                    className="contact-form-btn feature-link"
                  >
                    Submit
                  </button>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
