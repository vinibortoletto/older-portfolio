import React from "react";

// Components
import Hero from "./Hero";
import Info from "./Info";
import Projects from "./Projects";

// Styles
import { Container } from "./styles";

function Main({ lang }) {
  return (
    <Container>
      <Hero lang={lang} />

      <section className="info-projects-wrapper">
        <Projects lang={lang} />
        <Info lang={lang} />
      </section>
    </Container>
  );
}

export default Main;
