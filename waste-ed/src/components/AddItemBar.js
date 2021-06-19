import React, { useState } from "react";
import { data } from "../data";
import { Form, InputGroup } from "react-bootstrap";
import { fetchFoodAPI } from "../fetchAPI";

function AddItemBar() {
  const [value, setValue] = useState("");
  const [foodSuggestions, setFoodSuggestions] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
    const foodData = fetchFoodAPI(event.target.value);
    foodData.then((data) => setFoodSuggestions(data));
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);

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
    </>
  );
}

export { AddItemBar };
