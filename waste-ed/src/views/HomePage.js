import React from "react";
import { AddItemBar } from "../components/AddItemBar";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  return (
    <>
      <Container className="mt-5">
        <AddItemBar mt={5} />
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <p>uneaten food component</p>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <p>eaten food component</p>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <p>wasted food component</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
