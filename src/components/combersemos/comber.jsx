import React from "react";
import { Row, Col } from "react-flexbox-grid";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";

import Title from "../ui-components/title/title";

import "./comber.scss";

const Comber = () => (
  <div id="comber">
    <div className="container">
      <Title title="COMBERsemos" />
      <Row className="row">
        <div className="img-container">
          <a target="_blank" href="https://www.instagram.com/tv/CKfJuUbAXen/" rel="noopener noreferrer">
            <img src={image1} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a target="_blank" href="" rel="noopener noreferrer">
            <img src={image2} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a target="_blank" href="https://www.instagram.com/tv/CIWpg5uJ6MO/" rel="noopener noreferrer">
            <img src={image6} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a target="_blank" href="" rel="noopener noreferrer">
            <img src={image3} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a target="_blank" href="" rel="noopener noreferrer">
            <img src={image4} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a
            target="_blank"
            href="https://www.instagram.com/tv/CKSff-ggj3m/"
            rel="noopener noreferrer"
          >
            <img src={image5} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a
            target="_blank"
            href="https://www.instagram.com/tv/CJCdgG6DgSS/"
            rel="noopener noreferrer"
          >
            <img src={image7} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a target="_blank" href="" rel="noopener noreferrer">
            <img src={image8} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a
            target="_blank"
            href="https://www.instagram.com/p/CGYYwM2DBwO/?igshid=n20c71rbjad7"
            rel="noopener noreferrer"
          >
            <img src={image9} className="img-c" />
          </a>
        </div>
        <div className="img-container">
          <a
            target="_blank"
            href="https://www.instagram.com/tv/CJ_BTh-jR0z/"
            rel="noopener noreferrer"
          >
            <img src={image10} className="img-c" />
          </a>
        </div>
      </Row>
    </div>
  </div>
);

export default Comber;
