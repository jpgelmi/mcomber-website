import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import LogoImg from "../../assets/navbar/logo.png";
import MobileMenuIcon from "../../assets/navbar/mobile-menu.svg";

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="pointer" height={100} />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" height={"40"} />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SOBRE MÍ
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              EN TERRENO
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROPESTAS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="comber"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              COMBERsemos
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTÁCTAME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;
