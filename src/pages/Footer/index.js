import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../../images/icons/logo.svg";
import shape from "../../images/illustrations/shape-bottom-mobile.svg";

// Components
import Button from "../../components/Button";

// Styles
import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <img className="logo" src={logo} alt="vinicius bortoletto's logo" />

      <ul className="social-icons">
        <li>
          <FontAwesomeIcon icon={["fab", "github-square"]} />
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </li>
        <li>
          <FontAwesomeIcon icon="envelope" />
        </li>
      </ul>

      <Button className="download" icon="file-download" text="Download CV" />

      <p className="copyright">Created and designed by Vinicius Bortoletto</p>

      <img src={shape} alt="abstract shape" className="shape" />
    </Container>
  );
}

export default Footer;
