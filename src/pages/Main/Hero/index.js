import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import avatar from "../../../images/illustrations/avatar.svg";
import drawing from "../../../images/illustrations/drawing.svg";
import shape from "../../../images/illustrations/shape-top-mobile.svg";

import { Container } from "./styles";

function Hero({ lang }) {
  function brContent() {
    return (
      <>
        <div className="avatar">
          <img src={avatar} alt="avatar de vinicius bortoleto" />
        </div>

        <div>
          <div className="title">
            <h1>vinicius bortoletto</h1>
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

          <div className="drawing">
            <img src={drawing} alt="desenho sobre desenvolvimento web" />
          </div>

          <div className="shape">
            <img src={shape} alt="uma forma abstrata" />
          </div>
        </div>
      </>
    );
  }

  function enContent() {
    return (
      <>
        <div className="avatar">
          <img src={avatar} alt="vinicius bortoleto's avatar" />
        </div>

        <div>
          <div className="title">
            <h1>vinicius bortoletto</h1>
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

          <div className="drawing">
            <img src={drawing} alt="web development line drawing" />
          </div>

          <div className="shape">
            <img src={shape} alt="abstract shape" />
          </div>
        </div>
      </>
    );
  }

  return <Container>{lang === "en" ? enContent() : brContent()}</Container>;
}

export default Hero;
