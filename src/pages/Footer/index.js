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
      <div className="logo">
        <img src={logo} alt="vinicius bortoletto's logo" />
      </div>

      <div className="social-icons">
        <ul>
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
      </div>

      <div className="download">
        <Button icon="file-download" text="Download CV" />
      </div>

      <div className="copyright">
        <p>Created and designed by Vinicius Bortoletto</p>
      </div>

      <img src={shape} alt="abstract shape" className="shape" />
    </Container>
  );
}

export default Footer;
