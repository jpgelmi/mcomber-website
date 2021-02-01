import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./blog.scss";
//Assets
import Preview2 from "../../assets/portfolio/foto3.jpeg";
import Preview4 from "../../assets/portfolio/foto5.jpeg";
import Preview5 from "../../assets/portfolio/foto6.jpeg";
import Preview6 from "../../assets/portfolio/video1.mp4";
import Preview7 from "../../assets/portfolio/video4.mp4";
import Preview8 from "../../assets/portfolio/video3.mp4";
//Components
import Title from "../ui-components/title/title";

const Blog = () => (
  <div id="blog">
    <Title title="PROPUESTAS." />
  </div>
);

export default Blog;
