import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "../../../../components/Title";
import { Container } from "./styles";

function Social() {
  return (
    <Container>
      <Title text="social" />

      <div className="items">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/vinicius-bortoletto/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            <span>Linkedin</span>
          </a>
        </div>

        <div>
          <a href="https://github.com/vinicius-bortoletto/">
            <FontAwesomeIcon icon={["fab", "github-square"]} />
            <span>Github</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Social;
