import React, { useState } from "react";
import { data } from "../data";
import "./components.css";
import { Form, InputGroup } from "react-bootstrap";

export default function AddItemBar() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
    // console.log(value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+</InputGroup.Text>
            <Form.Control
              as="input"
              onChange={handleChange}
              placeholder="Add item"
              aria-label="Add item"
              aria-describedby="basic-addon1"
            ></Form.Control>
          </InputGroup>
        </Form.Group>
      </Form>
    </>
  );
}

//on submit -> add item object to local storage
