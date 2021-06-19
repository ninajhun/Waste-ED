import React from "react";
import { data } from "../data";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import { Form } from "react-bootstrap";

export default function AddItemBar() {
  console.log(data);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control as="input" placeholder="Add item">
            {/* <InputGroup>Add item</InputGroup> */}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
