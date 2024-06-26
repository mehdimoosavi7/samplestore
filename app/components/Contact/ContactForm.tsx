"use client";
import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../frequents/API";
import { ToastContainer, toast } from "react-toastify";
import PrevWords from "../frequents/PrevWords";

const ContactForm = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    messageErr: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = async () => {
    let errors: any = {};
    if (name.current && !name.current.value) {
      errors.nameErr = "Name is required.";
    } else if (email.current && !email.current.value) {
      errors.emailErr = "Email is required.";
    } else if (email.current && !emailRegex.test(email.current.value)) {
      errors.emailErr = "Email is invalid.";
    } else if (phone.current && !phone.current.value) {
      errors.phoneErr = "Phone number is required.";
    } else if (phone.current && phone.current.value.length < 8) {
      errors.phoneErr = "Phone number must be at least 8 characters.";
    } else if (message.current && !message.current.value) {
      errors.messageErr = "Message is required.";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleForm = async (event: any) => {
    const sendData = async () => {
      try {
        setLoading(true);
        const response: any = await axios.post(API_URL + "contactus", {
          name: name.current && name.current.value,
          email: email.current && email.current.value,
          phone: phone.current && phone.current.value,
          subject: subject.current && subject.current.value,
          message: message.current && message.current.value,
        });
        setData(response.data);
        toast.success("Message sent successfully.");
      } catch (err: any) {
        setError(err);
        toast.error("Message not sent! please try later.");
      } finally {
        setLoading(false);
        name.current && (name.current.value = "");
        email.current && (email.current.value = "");
        phone.current && (phone.current.value = "");
        subject.current && (subject.current.value = "");
        message.current && (message.current.value = "");
      }
    };
    isFormValid ? sendData() : validateForm();
  };

  return (
    <section className="contact-form">
      <Container>
        <ToastContainer position="top-center" />
        <Row>
          <Col>{loading && <Spinner />}</Col>
        </Row>
        <Row className="mb-5">
          <Col xl={4} className="map-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"
              className="h-100 w-100"
            ></iframe>
          </Col>
          <Col xl={8}>
            <Form action="">
              <Row className="gap-y-5">
                <Form.Group as={Col} lg="6">
                  <Form.Control
                    placeholder="Your Full Name*"
                    required
                    type="text"
                    ref={name}
                  />
                  {errors.nameErr && (
                    <span className="error">{errors.nameErr}</span>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg="6">
                  <Form.Control
                    placeholder="Email Address*"
                    type="email"
                    required
                    ref={email}
                  />
                  {errors.emailErr && (
                    <span className="error">{errors.emailErr}</span>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg="6">
                  <Form.Control
                    placeholder="Phone Number"
                    type="text"
                    maxLength={11}
                    ref={phone}
                    onKeyDown={PrevWords}
                  />
                  {errors.phoneErr && (
                    <span className="error">{errors.phoneErr}</span>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg="6">
                  <Form.Control
                    placeholder="Subject"
                    type="text"
                    ref={subject}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    id="messageInput"
                    placeholder="Your Messages.."
                    as="textarea"
                    rows={5}
                    ref={message}
                  />
                  {errors.messageErr && (
                    <span className="error">{errors.messageErr}</span>
                  )}
                </Form.Group>
                <Form.Group>
                  <button
                    type="button"
                    className="contact-form-btn feature-link"
                    onClick={handleForm}
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
