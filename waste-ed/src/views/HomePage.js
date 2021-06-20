import React, { useState, useEffect } from "react";
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

  const [items, setItems] = useState(data.food);

  useEffect(() => {
    console.log("yay use effect triggered");
  }, [items])

  function updateItem(item, status) {
    // update item status and reset items
    // loop through 'items' to find item and update its status
    console.log("hooray it reached HomePage updateItem, items: " + JSON.stringify(items) + ", item: " + item.itemID + ", status: " + status);
    let updatedItems = items;
    let index = 0;
    for (let i = 0; i < items.length; i++) {
      let curItem = items[i];
      if (curItem.itemID === parseInt(item.itemID)) {
        index = i;
      }
    }
    updatedItems[index].status = status;
    console.log("updated items: ", updatedItems);
    setItems(updatedItems);
  }

  return (
    <>
      <Container className="mt-5">
        <AddItemBar mt={5} />
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <UneatenItem updateItem={updateItem} items={items} />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <EatenItem updateItem={updateItem} items={items} />
          </Col>
          {/* <Col sm={12} md={4} lg={4}>
            <WastedItem setItems={setItems} wastedItems={data.food.filter(item => item.status === 'waste')} />
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
