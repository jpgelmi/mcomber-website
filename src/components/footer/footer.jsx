import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./footer.scss";

import Logo from '../../assets/footer/combersemos.png';

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
          <div className="footer-box">
            <img src={Logo} alt="logo" className= "foot-img"/>
          </div>
    </div>
  </div>
);
export default partnerBox;
