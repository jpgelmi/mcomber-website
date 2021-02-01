import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Preview1 from "../../assets/portfolio/foto7.jpeg";
import Preview2 from "../../assets/portfolio/foto3.jpeg";
import Preview3 from "../../assets/portfolio/foto4.jpeg";
import Preview4 from "../../assets/portfolio/foto5.jpeg";
import Preview5 from "../../assets/portfolio/foto6.jpeg";
import Preview6 from "../../assets/portfolio/foto8.jpeg";
//Components
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

const Portfolio = () => (
  <div className = "position-cont">
    <div class="gallery cf">
      <div className= "img-cont">
        <img src={Preview1} />
      </div>
      <div className= "img-cont">
        <img src={Preview2} />
      </div>
      <div className= "img-cont">
        <img src={Preview3} />
      </div>
      <div className= "img-cont">
        <img src={Preview4} />
      </div>
      <div className= "img-cont">
        <img src={Preview5}/>
      </div>
      <div className= "img-cont">
        <img src={Preview6}/>
      </div>
    </div>
  </div>
);

export default Portfolio;
