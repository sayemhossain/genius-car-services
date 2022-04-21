import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }

  return (
    <div className="container w-50 mx-auto my-5">
      <h3 className="text-center text-danger mb-4">Register Now</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept term and condition" />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="mt-2">
        Already have an account?
        <Link to="/login" className="text-danger text-decoration-none ms-1">
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
