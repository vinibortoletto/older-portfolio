import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button";
import { Container } from "./styles";

function ProjectCard({ lang, logo, bg, text, website, github }) {
  const enContent = (
    <>
      <img src={logo} alt="vinicius bortoletto's logo" className="logo" />

      <div className="content">
        <p className="text">{text}</p>

        <div className="line"></div>

        <div className="btns">
          <a href={website} target="_blank">
            <Button icon="desktop" text="Visit website" />
          </a>

          <a href={github} target="_blank">
            <Button icon={["fab", "github"]} text="Visit github" />
          </a>
        </div>
      </div>

      <div className="bg">
        <div className="shadow"></div>
        <img src={bg} alt="abstract shape" />
      </div>
    </>
  );

  const brContent = (
    <>
      <img src={logo} alt="logo de vinicius bortoletto" className="logo" />

      <div className="content">
        <p className="text">{text}</p>

        <div className="line"></div>

        <div className="btns">
          <a href={website} target="_blank">
            <Button icon="desktop" text="Visitar website" />
          </a>
          <a href={github} target="_blank">
            <Button icon={["fab", "github"]} text="Visitar github" />
          </a>
        </div>
      </div>

      <div className="bg">
        <div className="shadow"></div>
        <img src={bg} alt="abstract shape" />
      </div>
    </>
  );

  return <Container>{lang === "en" ? enContent : brContent}</Container>;
}

export default ProjectCard;
