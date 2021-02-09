import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./blog.scss";
//Components
import Title from "../ui-components/title/title";

import Vivienda from "./videos/Vivienda.mp4";
import Deporte from "./videos/Deporte.mp4";
import Naturaleza from "./videos/Naturaleza.mp4";

const Blog = () => (
  <div id="blog" className="about-2">
    <div className="wrapper">
      <Title title="PROPUESTAS" />

      <Row className="trans-container">
        <Col md={12} lg={6}>
          <div className="font70 propuestas-cont">
            EL DESAFÍO DE LA VIVIENDA
          </div>
          <p className="font20 propuestas-cont">
            Lograr dar acceso a vivienda accesible a nuestros vecinos allegados
            y en campamentos es una prioridad social urgente. Frente al
            escenario de la falta de suelo y el alto precio de éste se deben
            desarrollar múltiples caminos con miras a lograr la meta.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="vid">
            <video className="vid margin-vid" controls>
              <source src={Vivienda} />
            </video>
          </div>
        </Col>
      </Row>
      <Row className="trans-container">
        <Col md={12} lg={6}>
          <div className="font70 propuestas-cont">
            DESARROLLO URBANO INTEGRAL
          </div>
          <p className="font20 propuestas-cont">
            La ciudad no puede seguir avanzando sobre los cerros, más bien
            esperamos que la naturaleza de esos cerros entre en nuestra ciudad.
            La protección de nuestro entorno y el desarrollo de las áreas verdes
            asociadas a cerros y esteros es crucial para la comuna que queremos
            ser en el futuro.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="vid margin-vid">
            <video className="vid" controls>
              <source src={Vivienda} />
            </video>
          </div>
        </Col>
      </Row>
      <Row className="trans-container">
        <Col md={12} lg={6}>
          <div className="font70 propuestas-cont">SOCIEDAD CIVIL ACTIVA</div>
          <p className="font20 propuestas-cont">
            El deporte y la cultura, cuando se practican cotidianamente con un
            guía responsable, son las herramientas más potentes que tenemos para
            prevenir otros malos hábitos, como son el consumo de drogas. Debemos
            financiar y apoyar todas las iniciativas que sean un aporte social
            en este sentido. Debemos financiar y apoyar todas las iniciativas de
            la sociedad civil que sean un aporte a nuestra comunidad.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="vid">
            <video className="vid margin-vid" controls>
              <source src={Vivienda} />
            </video>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Blog;
