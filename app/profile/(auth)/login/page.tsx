"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const session = useSession();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: "",
  });

  if (session.status == "authenticated") {
    router?.push("/");
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let emailValue = email.current && email.current.value;
    let passwordValue = password.current && password.current.value;
    
    toast.success("You logged in successfully.");
    
    signIn("credentials", {
      email: emailValue,
      password: passwordValue,
    });
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = async () => {
    let errors: any = {};
    if (email.current && !email.current.value) {
      errors.emailErr = "Email is required.";
    } else if (email.current && !emailRegex.test(email.current.value)) {
      errors.emailErr = "Email is invalid.";
    } else if (password.current && !password.current.value) {
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
                <Form.Label>Email*</Form.Label>
                <Form.Control required type="text" ref={email} />
                {errors.emailErr && (
                  <span className="error">{errors.emailErr}</span>
                )}
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" required ref={password} />
                {errors.emailErr && (
                  <span className="error">{errors.passwordErr}</span>
                )}
              </Form.Group>
              <Form.Group>
                <button
                  type="button"
                  className="login-form-btn feature-link"
                  onClick={isFormValid ? handleSubmit : validateForm}
                >
                  Login
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
