import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import HeroImage from "./hero-image.png";
import Logo from "./logo_trans.png";
import Title from "../ui-components/title/title";

const about = () => (
  <div id="about" className = "about-2" >
    <div className="wrapper">
      <Title title="SOBRE MÍ." />
      <Row className="trans-container">
        <Col md={12} lg={6}>
          <p className="font20">
            Soy Michael Comber, tengo 28 años, vivo hace más de veinte años en
            Lo Barnechea y crecí lleno de experiencias que me llenan de orgullo
            a la vez que me dejan muy en claro los desafíos a los cuales nos
            debemos dedicar. Soy Arquitecto y Magíster en Proyecto Urbano de la
            PUC. Tuve la alegría de liderar la Organización Vecinal Plan 18
            durante 5 años, con la cual nos dedicamos a generar proyectos de
            desarrollo urbano y social en el Cerro 18, experiencia que luego me
            llevó a titularme con un proyecto enfocado en el desarrollo integral
            del cerro y sus alrededores.
          </p>
          <p className="font20 pad">
            Trabajé en la SECPLA de Lo Barnechea y actualmente soy arquitecto en
            el Ministerio de Vivienda y Urbanismo, lugar en el cual me he
            desarrollado profesionalmente y desde donde veo la tremenda
            influencia que tiene la ciudad como motor de oportunidades y una
            mejor calidad de vida.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" className="img-2" />
          </div>
        </Col>
        <div className="image-trans">
          <img src={Logo} alt="hero" className="trans" />
        </div>
      </Row>
    </div>
  </div>
);

export default about;
