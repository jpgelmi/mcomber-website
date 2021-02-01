import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Preview2 from "../../assets/portfolio/foto3.jpeg";
import Preview4 from "../../assets/portfolio/foto5.jpeg";
import Preview5 from "../../assets/portfolio/foto6.jpeg";
import Preview6 from "../../assets/portfolio/video1.mp4";
import Preview7 from "../../assets/portfolio/video4.mp4";
import Preview8 from "../../assets/portfolio/video3.mp4";
//Components
import Title from "../ui-components/title/title";

const Portfolio = () => (
  <div className="position-cont" id="portfolio">
    <Title title="EN TERRENO." />
    <div class="gallery cf">
      <div className="img-cont">
        <img src={Preview2} />
      </div>
      <div className="img-cont">
        <img src={Preview4} />
      </div>
      <div className="img-cont">
        <img src={Preview5} />
      </div>
      <div className="vid-cont2">
        <video className="vid" controls>
          <source src={Preview8} />
        </video>
      </div>
      <div className="vid-cont2">
        <video className="vid" controls>
          <source src={Preview6} />
        </video>
      </div>
      <div className="vid-cont2">
        <video className="vid" controls>
          <source src={Preview7} />
        </video>
      </div>
    </div>
  </div>
);

export default Portfolio;
