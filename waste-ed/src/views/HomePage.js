import React from "react";
import AddItemBar from "../components/AddItemBar"
import { Container, Row, Col } from "react-bootstrap";
import fetchAPI from "../fetchAPI"
import UneatenItem from "../components/UneatenItem";
import EatenItem from "../components/EatenItem";
import WastedItem from "../components/WastedItem";

export default function HomePage() {
  const input = 'banana';
  fetchAPI(`https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=${input}`, input)
    .then(data => {
      console.log(data.common);
      // data.common returns the array of 20 items
      // data.common[0].food_name is the item name
      // data.common[0].photo.thumb is the image
    });
  return (
    <>
      <Container className="mt-5">
        <AddItemBar mt={5} />
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <UneatenItem />
            {/* <p>uneaten food component</p> */}
          </Col>
          <Col sm={12} md={4} lg={4}>
            <EatenItem />
            {/* <p>eaten food component</p> */}
          </Col>
          <Col sm={12} md={4} lg={4}>
            <WastedItem />
            {/* <p>wasted food component</p> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
