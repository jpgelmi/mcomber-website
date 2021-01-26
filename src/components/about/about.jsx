import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import HeroImage from "./hero-image.png";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="SOBRE MÍ." />
      <Row>
        <Col md={12} lg={6}>
          <p className="font20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididuntut labore et dolore magna aliqua. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididuntut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
