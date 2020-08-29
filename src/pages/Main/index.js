import React from "react";

// Components
import Hero from "./Hero";
import Info from "./Info";
import Projects from "./Projects";

function Main({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Info lang={lang} />
    </>
  );
}

export default Main;
