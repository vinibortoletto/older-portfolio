import React from "react";

// import { Container } from './styles';

// Components
import Hero from "./Hero";
import Info from "./Info";
import Works from "./Works";

function Main({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <Info lang={lang} />
      <Works lang={lang} />
    </>
  );
}

export default Main;
