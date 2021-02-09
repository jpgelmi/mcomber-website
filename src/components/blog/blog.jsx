import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./blog.scss";
//Components
import Title from "../ui-components/title/title";

import Vivienda from "./videos/Vivienda.mp4";

const Blog = () => (
  <div id="blog" className="about-2">
    <div className="wrapper">
      <Title title="PROPUESTAS" />
      <Row className="trans-container">
        <Col md={12} lg={6}>
          <p className="font20">
            Soy Michael Comber, tengo 28 años, soy Arquitecto y Magíster en
            Proyecto Urbano de la PUC. Tuve la alegría de liderar la
            Organización Vecinal Plan 18 durante 5 años, con la cual nos
            dedicamos a generar proyectos de desarrollo urbano y social en el
            Cerro 18, experiencia que luego llevó a a que me titulara con un
            proyecto enfocado en el desarrollo integral del cerro y sus
            alrededores.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="vid-cont2">
            <video className="vid" controls>
              <source src={Vivienda} />
            </video>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Blog;
