import React from "react";

import Title from "../../../../components/Title";
import { Container } from "./styles";

function Skills({ lang }) {
  const enContent = (
    <>
      <Title text="skills" />

      <div>
        <h2>languages</h2>
        <p>
          <span className="html">HTML5</span>,{" "}
          <span className="css">
            CSS3 (SASS, LESS, TailwindCSS, Bulma, BEM)
          </span>
          and <span className="js">JavaScript (ES6, React.js)</span>.
        </p>
      </div>

      <div>
        <h2>tools</h2>
        <p>
          Visual Studio Code, GIT, Gulp, Figma, Adobe Photoshop, Procreate and
          Linux.
        </p>
      </div>

      <div>
        <h2>speaking languages</h2>
        <p>Portuguese (native), English (fluent) and French (intermediate).</p>
      </div>
    </>
  );

  const brContent = (
    <>
      <Title text="habilidades" />

      <div>
        <h2>linguagens</h2>
        <p>
          <span className="html">HTML5</span>,{" "}
          <span className="css">
            CSS3 (SASS, LESS, TailwindCSS, Bulma, BEM)
          </span>
          e <span className="js">JavaScript (ES6, React.js)</span>.
        </p>
      </div>

      <div>
        <h2>ferramentas</h2>
        <p>
          Visual Studio Code, GIT, Gulp, Figma, Adobe Photoshop, Procreate e
          Linux.
        </p>
      </div>

      <div>
        <h2>idiomas</h2>
        <p>Português (nativo), Inglês (fluente) e Francês (intermediário).</p>
      </div>
    </>
  );

  return <Container>{lang === "en" ? enContent : brContent}</Container>;
}

export default Skills;
