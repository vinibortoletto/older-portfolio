import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./styles";

function Button({ className, icon, text }) {
  return (
    <Container className={className}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </Container>
  );
}

export default Button;
