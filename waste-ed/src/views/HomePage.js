import React, { useState, useEffect } from "react";
import { AddItemBar } from "../components/AddItemBar";
import { Container, Row, Col } from "react-bootstrap";
import UneatenItem from "../components/UneatenItem";
import EatenItem from "../components/EatenItem";
import WastedItem from "../components/WastedItem";
import { data } from "../data";

export default function HomePage(props) {
  const [eatenItems, setEatenItems] = useState([]);
  const [uneatenItems, setUneatenItems] = useState([]);
  const [wastedItems, setWastedItems] = useState([]);

  const [currentData, setCurrentData] = useState(data.food);

  useEffect(() => {
    setEatenItems(currentData.filter((item) => item.status === "eaten"));
    setUneatenItems(currentData.filter((item) => item.status === "uneaten"));
    setWastedItems(currentData.filter((item) => item.status === "waste"));
  }, [currentData]);

  return (
    <>
      <Container className="mt-5">
        <AddItemBar mt={5} />
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <UneatenItem
              uneatenItems={uneatenItems}
              setCurrentData={setCurrentData}
              currentData={currentData}
            />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <EatenItem
              eatenItems={eatenItems}
              setCurrentData={setCurrentData}
              currentData={currentData}
            />
          </Col>
          <Col sm={12} md={4} lg={4}>
            <WastedItem
              wastedItems={wastedItems}
              setCurrentData={setCurrentData}
              currentData={currentData}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
