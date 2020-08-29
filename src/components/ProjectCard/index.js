import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Button";
import { Container } from "./styles";

function ProjectCard({ logo, bg, text, website, github }) {
  return (
    <Container>
      <img src={logo} alt="logo" className="logo" />

      <div className="content">
        <p className="text">{text}</p>

        <div className="line"></div>

        <div className="btns">
          <a href={website}>
            <Button icon="desktop" text="Visit website" />
          </a>
          <a href={github}>
            <Button icon={["fab", "github"]} text="Visit github" />
          </a>
        </div>
      </div>

      <div className="bg">
        <div className="shadow"></div>
        <img src={bg} alt="alt" />
      </div>
    </Container>
  );
}

export default ProjectCard;
