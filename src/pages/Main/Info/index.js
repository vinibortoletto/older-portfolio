import React from "react";

import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Social from "./Social";

import { Container } from "./styles";

function Info({ lang }) {
  return (
    <Container>
      <Skills lang={lang} />
      <AboutMe lang={lang} />
      <Social lang={lang} />
    </Container>
  );
}

export default Info;
