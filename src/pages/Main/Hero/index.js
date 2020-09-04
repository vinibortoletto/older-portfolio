import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar from "../../../images/illustrations/avatar.svg";
import drawing from "../../../images/illustrations/drawing.svg";
import shapeMobile from "../../../images/illustrations/shape-top-mobile.svg";
import shapeDesktop from "../../../images/illustrations/shape-top-desktop.svg";

import { Container } from "./styles";

function Hero({ lang }) {
  const [shape, setShape] = useState(shapeMobile);

  const brContent = (
    <>
      <div className="hero-wrapper">
        <img
          className="avatar"
          src={avatar}
          alt="avatar de vinicius bortoletto"
        />

        <div>
          <div className="title">
            <h1>vini.bortoletto</h1>
            <h2>desenvolvedor front-end</h2>
          </div>

          <div className="info-items">
            <ul>
              <li>
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                <span>+55 19 98872-4386</span>
              </li>
              <li>
                <FontAwesomeIcon icon="envelope" />
                <span>ovinibortoletto@gmail.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon="globe-americas" />
                <span>Piracicaba | São Paulo | Brasil</span>
              </li>
              <li>
                <FontAwesomeIcon icon="calendar-day" />
                <span>19/08/1993</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="illustrations">
        <img
          className="drawing"
          src={drawing}
          alt="ilustração sobre desenvolvimento web"
        />
        <img className="shape" src={shape} alt="forma abstrata" />
      </div>
    </>
  );

  const enContent = (
    <>
      <div className="hero-wrapper">
        <img
          className="avatar"
          src={avatar}
          alt="vinicius bortoletto's avatar"
        />

        <div>
          <div className="title">
            <h1>vini.bortoletto</h1>
            <h2>front-end developer</h2>
          </div>

          <div className="info-items">
            <ul>
              <li>
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                <span>+55 19 98872-4386</span>
              </li>
              <li>
                <FontAwesomeIcon icon="envelope" />
                <span>ovinibortoletto@gmail.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon="globe-americas" />
                <span>Piracicaba | São Paulo | Brasil</span>
              </li>
              <li>
                <FontAwesomeIcon icon="calendar-day" />
                <span>19/08/1993</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="illustrations">
        <img
          className="drawing"
          src={drawing}
          alt="web development line drawing"
        />
        <img className="shape" src={shape} alt="abstract shape" />
      </div>
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

export default Hero;
