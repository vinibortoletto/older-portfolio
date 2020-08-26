import React from "react";

// Components
import Hero from "./Hero";
import Info from "./Info";
import Works from "./Works";

function Main({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <Works lang={lang} />
      <Info lang={lang} />
    </>
  );
}

export default Main;
