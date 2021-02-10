import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import HeroImage from "./hero-image.png";
import Title from "../ui-components/title/title";

const about = () => (
  <div id="about" className="about-2">
    <div className="wrapper">
      <Title title="SOBRE MÍ" />
      <Row className="trans-container">
        <Col md={12} lg={6}>
          <p className="font20">
            Soy Michael Comber, tengo 28 años, soy Arquitecto y Magíster en Proyecto Urbano UC. Tuve la alegría de liderar la
            Organización Vecinal Plan 18 durante 5 años, con la cual nos
            dedicamos a generar proyectos de desarrollo urbano y social en el
            Cerro 18, experiencia que luego llevó a a que me titulara con un
            proyecto enfocado en el desarrollo integral del cerro y sus
            alrededores.
          </p>
          <p className="font20 pad">
            Vivo hace más de veinte años en Lo Barnechea y crecí lleno de
            experiencias que me llenan de orgullo a la vez que me dejan muy en
            claro los desafíos a los cuales nos debemos dedicar.
          </p>
          <p className="font20 pad">
            Trabajé en la SECPLA de Lo Barnechea y actualmente soy arquitecto en
            el Ministerio de Vivienda y Urbanismo, lugar en el cual me he
            desarrollado profesionalmente y desde donde veo la tremenda
            influencia que tiene la ciudad como motor de oportunidades y una
            mejor calidad de vida.
          </p>
          <p className="font20 pad">
            ¡Te invito a conocerme más! Puedes contactarme a través de esta
            página o mis redes sociales ¡Súmate! COMBERsemos.
          </p>
          <div className="medium__button">
          <a
            target="_blank"
            href="https://aportes.servel.cl/servel-aportes/inicio.xhtml"
            rel="noopener noreferrer"
          >
            <button value="Aportar">Haz tu aporte</button>
          </a>
        </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="Michael comber - Candidato Concejal por Lo Barnechea" className="img-2" />
          </div>
        </Col>
        
      </Row>
    </div>
  </div>
);

export default about;
