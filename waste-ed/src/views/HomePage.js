import React, { useState, useEffect} from "react";
import { AddItemBar } from "../components/AddItemBar";
import { Container, Row, Col } from "react-bootstrap";
// import fetchAPI from "../fetchAPI"
import UneatenItem from "../components/UneatenItem";
import EatenItem from "../components/EatenItem";
import WastedItem from "../components/WastedItem";
import { data } from "../data";

export default function HomePage(props) {
  // const input = 'banana';
  // fetchAPI(`https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=${input}`, input)
  //   .then(data => {
  //     // console.log(data.common);
  //     // data.common returns the array of 20 items
  //     // data.common[0].food_name is the item name
  //     // data.common[0].photo.thumb is the image
  //   });

  const [eatenItems, setEatenItems] = useState([]);
  const [uneatenItems, setUneatenItems] = useState([]);
  const [wastedItems, setWastedItems] = useState([]);

  // const [currentData, setCurrentData] = useState()

  useEffect(() => {
      setEatenItems(data.food.filter(item => item.status === 'eaten'))
    setUneatenItems(data.food.filter(item => item.status === 'uneaten'))
    setWastedItems(data.food.filter(item => item.status === 'waste'))

  },)


  return (

    <>
      <Container className="mt-5">
        <AddItemBar mt={5} />
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <UneatenItem uneatenItems={uneatenItems} />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <EatenItem eatenItems={eatenItems} />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <WastedItem wastedItems={wastedItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
