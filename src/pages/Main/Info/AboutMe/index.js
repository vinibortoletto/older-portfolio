import React from "react";

import Title from "../../../../components/Title";
import { Container } from "./styles";

function AboutMe({ lang }) {
  const enContent = (
    <>
      <Title text="about me" />

      <p>
        In the past 8 years I worked as freelance illustrator, helping clients
        from all over the world. However, along the way I started to develop an
        interest for programming, and in the last 2 years I've been working as a
        front-end developer.
      </p>
    </>
  );

  const brContent = (
    <>
      <Title text="sobre mim" />

      <p>
        Atuei por cerca de 8 anos como ilustrador freelancer, trabalhando com
        clientes ao redor do mundo. No entando, no meio do caminho passei a me
        interessar por programação e nos últimos 2 anos venho trabalhando com
        desenvolvimento front-end.
      </p>
    </>
  );

  return <Container>{lang === "en" ? enContent : brContent}</Container>;
}

export default AboutMe;
