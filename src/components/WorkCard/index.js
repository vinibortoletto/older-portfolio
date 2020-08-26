import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import work1 from "../../images/works/1/bg.jpg";
import logo1 from "../../images/works/1/logo.svg";

import Button from "../Button";
import { Container } from "./styles";

function WorkCard() {
  return (
    <Container bg={work1}>
      <img src={logo1} alt="logo" className="logo" />

      <div className="content">
        <p className="text">website description</p>

        <div className="line"></div>

        <div className="btns">
          <a href="#">
            <Button icon="desktop" text="Visit website" />
          </a>
          <a href="#">
            <Button icon={["fab", "github"]} text="Visit Github" />
          </a>
        </div>
      </div>

      <div className="bg">
        <div className="shadow"></div>
        <img src={work1} alt="alt" />
      </div>
    </Container>
  );
}

export default WorkCard;
