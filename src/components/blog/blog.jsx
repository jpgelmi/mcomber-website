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
  <div id="blog" className="about-2">
    <div className="wrapper">
      <Title title="PROPUESTAS." />
      <Row>
        <div className="font70 propuestas-cont">EL DESAFÍO DE LA VIVIENDA</div>
        <p className="font20 parrafo">
          Lograr dar acceso a vivienda accesible a nuestros vecinos allegados y
          en campamentos es una prioridad social urgente. Frente al escenario de
          la falta de suelo y el alto precio de éste se deben desarrollar
          múltiples caminos con miras a lograr la meta.
        </p>
        <div className="font70 propuestas-cont despues">
          DESARROLLO URBANO INTEGRAL
        </div>
        <p className="font20 parrafo">
          La ciudad no puede seguir avanzando sobre los cerros, más bien
          esperamos que la naturaleza de esos cerros entre en nuestra ciudad. La
          protección de nuestro entorno y el desarrollo de las áreas verdes
          asociadas a cerros y esteros es crucial para la comuna que queremos
          ser en el futuro. alrededores.
        </p>
        <div className="font70 propuestas-cont despues">
          SOCIEDAD CIVIL ACTIVA
        </div>
        <p className="font20 parrafo">
          El deporte y la cultura, cuando se practican cotidianamente con un
          guía responsable, son las herramientas más potentes que tenemos para
          prevenir otros malos hábitos, como son el consumo de drogas. Debemos
          financiar y apoyar todas las iniciativas que sean un aporte social en
          este sentido.
        </p>
      </Row>
    </div>
  </div>
);

export default Blog;
