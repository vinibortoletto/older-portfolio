import React from "react";

// Components
import Hero from "./Hero";
import Info from "./Info";
import Projects from "./Projects";

function Main({ lang }) {
  return (
    <main>
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Info lang={lang} />
    </main>
  );
}

export default Main;
