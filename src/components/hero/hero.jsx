import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import VideoComber from "../../assets/hero/videoComber.mp4";
//Components
import Button from "../ui-components/button/button";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
        <div className="hero-image">
            <video width="100%" controls autoPlay muted>
              <source src={VideoComber} type="video/mp4"/>
            </video>
        </div>
        </Col>
        <Col md={12} lg={6}>
        <div className="hero-info">
            <h1 className="weight800 font60"></h1>
            <h1 className="weight800 font60">
              ¡Trabajemos Juntos Lo Barnechea!
            </h1>
            <p className="font12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Button label="Hablemos!" target={"contact"} className="boton" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
