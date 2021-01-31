import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./footer.scss";

import Logo from '../../assets/footer/logo.png';

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div className="footer-box">
            <img src={Logo} alt="logo" height = {200}/>
            <p>¡Trabajemos Juntos<br></br>Lo Barnechea!</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
        </Col>
      </Row>
    </div>
  </div>
);
export default partnerBox;
