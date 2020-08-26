import React from "react";

import Title from "../../../components/Title";
import WorkCard from "../../../components/WorkCard";
import { Container } from "./styles";

function Works() {
  return (
    <Container>
      <Title text="trabalhos" />

      <WorkCard />
    </Container>
  );
}

export default Works;
