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
    console.log(data);

    const newItem = {
      foodItem: value.toLowerCase(),
      servings: 1,
      expiration: 7,
      img: "",
      status: "uneaten",
      itemID: data.nextId,
    };

    data.food.push(newItem);
    data.nextId++;
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup className="mb-3" variant="outline-secondary">
            {/* <InputGroup.Text id="basic-addon1">+</InputGroup.Text> */}
            <Form.Control
              as="input"
              onChange={handleChange}
              placeholder="+ Add item"
              aria-label="Add item"
              aria-describedby="basic-addon1"
              style={{
                borderRadius: 50,
                boxShadow: "0px 4px #C2BEBE",
                fontSize: "22px",
              }}
            ></Form.Control>
          </InputGroup>
        </Form.Group>
      </Form>

      {/* {data.map((foodItem) => (
        <p>{foodItem.foodItem}</p>
      ))} */}
    </>
  );
}

//on submit -> add item object to local storage
