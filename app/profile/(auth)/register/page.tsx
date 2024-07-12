"use client";
import { API_URL } from "@/app/components/frequents/API";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Col, Container, Form, Row, ToastContainer } from "react-bootstrap";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    passErr: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let nameValue = name.current && name.current.value;
    let emailValue = email.current && email.current.value;
    let passValue = pass.current && pass.current.value;

    console.log(passValue);
    try {
      const res = await fetch(`${API_URL}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          pass: passValue,
        }),
      });
      toast.success("Your Registeration done successfully.");
      res.status == 201 && router.push("/profile/login");
    } catch (error: any) {
      setError(error);
    }
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = async () => {
    let errors: any = {};
    if (name.current && !name.current.value) {
      errors.emailErr = "Email is required.";
    } else if (email.current && !email.current.value) {
      errors.emailErr = "Email is required.";
    } else if (email.current && !emailRegex.test(email.current.value)) {
      errors.emailErr = "Email is invalid.";
    } else if (pass.current && !pass.current.value) {
      errors.messageErr = "Password is required.";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <section className="login-page">
      <Container>
        <ToastContainer position="top-center" />
        <Row className="justify-center">
          <Col md={12} lg={4}>
            <Form className="login-page-form">
              <Form.Group className="w-100">
                <Form.Label>Name*</Form.Label>
                <Form.Control required type="text" ref={name} />
                {errors.nameErr && (
                  <span className="error">{errors.nameErr}</span>
                )}
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label>Email*</Form.Label>
                <Form.Control required type="text" ref={email} />
                {errors.emailErr && (
                  <span className="error">{errors.emailErr}</span>
                )}
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" required ref={pass} />
                {errors.emailErr && (
                  <span className="error">{errors.passErr}</span>
                )}
              </Form.Group>
              <Form.Group>
                <button
                  type="button"
                  className="login-form-btn feature-link"
                  onClick={isFormValid ? handleSubmit : validateForm}
                >
                  Register
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
