import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";


function AddItemModal() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Modal.Dialog className="h-50 inline-block w-70">
      <Modal.Header closeButton>
        <Modal.Title>Expiration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6}>
            <img src="" alt="item"></img>
          </Col>
          <Col xs={6}>
            <h1>Eggs</h1>
          </Col>
        </Row>

        <Container>
          <Row className="m-2 ">
            <Col xs={5}>
              <label className="input-group-text">Date</label>
            </Col>
            <Col xs={7}>
              <div className="container">
                <div className="row">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="m-2 ">
            <Col xs={5}>
              <label className="input-group-text">Days</label>
            </Col>
            <Col xs={7}>
              <div className="input-group mb-3">
                <div className="input-group-prepend"></div>
                <select className="custom-select" id="inputGroupSelect01">
                  <option defaultValue>7</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="30">30</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row className="m-2">
            <Col xs={5}>
              <label className="input-group-text">Servings</label>
            </Col>
            <Col xs={7}>
              <div className="input-group mb-3">
                <div className="input-group-prepend"></div>
                <select className="custom-select" id="inputGroupSelect01">
                  <option defaultValue>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="30">30</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer className="mx-auto">
        <Button className="" variant="secondary">
          Save
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export {AddItemModal};
