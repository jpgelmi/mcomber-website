import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Components
import Button from "../ui-components/button/button";
//import video
import ComberVid from "../../assets/hero/videoComber.mp4";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <video width="100%" controls autoPlay muted>
              <source src={ComberVid} type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">
              ¡Trabajemos Juntos<br></br>
              Lo Barnechea!
            </h1>
            <p className="font12">
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;

