import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import FacebookIcon from "../../../assets/contact/FacebookIcon.svg";
import InstagramIcon from "../../../assets/contact/InstagramIcon.svg";
import TicIcon from "../../../assets/contact/TiktokIcon.svg";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={2} lg={1} className="contact__social">
          <a target="_blank" href="https://www.facebook.com/COMBERsemos/">
            <img src={FacebookIcon} alt="facebook" />
          </a>
        </Col>
        <Col xs={2} lg={1} className="contact__social">
          <a target="_blank" href="https://www.instagram.com/comber_v/">
            <img src={InstagramIcon} alt="Twitter" />
          </a>
        </Col>
        <Col xs={2} lg={1} className="contact__social">
          <a target="_blank" href="https://www.tiktok.com/@comber_v?lang=es">
            <img src={TicIcon} alt="Dribble" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
