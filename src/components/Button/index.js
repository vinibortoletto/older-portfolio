import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./styles";

function Button({ icon, text }) {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </Container>
  );
}

export default Button;
