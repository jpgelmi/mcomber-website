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
          <div className="hero-image">
            <video width="100%" controls autoPlay muted className ="hero-video">
              <source src={ComberVid} type="video/mp4" className="hero-video"/>
            </video>
          </div>
      </Row>
    </div>
  </div>
);

export default hero;

