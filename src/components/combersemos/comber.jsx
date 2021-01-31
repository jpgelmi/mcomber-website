import React from "react";
import { Row, Col } from "react-flexbox-grid";
import cubillos from "./cubillos.png";
import Title from "../ui-components/title/title";

import "./comber.scss";

const Comber = () => (
  <div id="comber">
    <div className="container">
      <Title title="COMBERsemos." />
      <Row className="row">
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
      </Row>
      <Row className="row">
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
      </Row>
      <Row className="row">
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
        <Col className="img-container">
          <img src={cubillos} className="img" />
        </Col>
      </Row>
    </div>
  </div>
);

export default Comber;
