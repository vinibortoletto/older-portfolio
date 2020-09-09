import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../../images/icons/logo.svg";
import shapeMobile from "../../images/illustrations/shape-bottom-mobile.svg";
import shapeDesktop from "../../images/illustrations/shape-bottom-desktop.svg";

// Components
import Button from "../../components/Button";

// Styles
import { Container } from "./styles";

function Footer({ lang, cv }) {
  const [shape, setShape] = useState(shapeMobile);

  const enContent = (
    <>
      <img className="logo" src={logo} alt="vinicius bortoletto's logo" />

      <ul className="social-icons">
        <li>
          <a href="https://github.com/vinibortoletto/" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vinicius-bortoletto/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li>
          <a
            href="mailto:ovinibortoletto@gmail.com?subject=website contact"
            target="_blank"
          >
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
      </ul>

      <a href={cv.en} target="_blank">
        <Button className="download" icon="file-download" text="Download CV" />
      </a>

      <p className="copyright">
        Created and designed by <b>Vini Bortoletto</b>
      </p>

      <img src={shape} alt="abstract shape" className="shape" />
    </>
  );

  const brContent = (
    <>
      <img className="logo" src={logo} alt="logo de vinicius bortoletto" />

      <ul className="social-icons">
        <li>
          <a href="https://github.com/vinibortoletto/" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vinicius-bortoletto/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li>
          <a
            href="mailto:ovinibortoletto@gmail.com?subject=website contact"
            target="_blank"
          >
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
      </ul>

      <a href={cv.br} target="_blank">
        <Button
          className="download"
          icon="file-download"
          text="Baixar currículo"
        />
      </a>

      <p className="copyright">Criado e desenvolvido por Vinicius Bortoletto</p>

      <img src={shape} alt="forma abstrata" className="shape" />
    </>
  );

  // Changes shape (mobile or desktop)
  useEffect(() => {
    // Checks width on load
    window.innerWidth >= 800 && setShape(shapeDesktop);

    // Checks width on resize
    window.onresize = () => {
      window.innerWidth >= 800 ? setShape(shapeDesktop) : setShape(shapeMobile);
    };
  }, []);

  return <Container>{lang === "en" ? enContent : brContent}</Container>;
}

export default Footer;
