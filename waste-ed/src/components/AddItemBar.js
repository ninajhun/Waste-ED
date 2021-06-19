import React from "react";
import { data } from "../data";
import "./components.css";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import { Form, InputGroup } from "react-bootstrap";

export default function AddItemBar() {
  console.log(data);
  return (
    <>
      <Form>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">+</InputGroup.Text>
            <Form.Control
              as="input"
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
