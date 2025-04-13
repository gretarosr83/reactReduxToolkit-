import React, { useState } from "react";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import credential from "../utils/credentials";

const LoginPage = () => {
  const _ = require("lodash");
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [mesasge, setMessage] = useState("");

  const handlechangesForm = (e) => {
    const { name, value } = e.target;
    setFormData((...prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data);

    if (_.isEqual(dataObject, credential)) {
      localStorage.setItem("logginCredentials", JSON.stringify(dataObject));
      window.location.reload();
    } else {
      setMessage(mesasge, "Error on credentials");
    }
  };

  return (
    <Container>
      <form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handlechangesForm}
          />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handlechangesForm}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
