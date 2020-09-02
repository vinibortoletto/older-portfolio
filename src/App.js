import React, { useState, useEffect } from "react";

import "./components/FontAwesome";

// Components
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

import StarsBg from "./components/StarsBg";

// Styles
import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

function App() {
  const [lang, setLang] = useState("en");

  // Get lang from localStorage OR set default lang
  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    localLang !== null && setLang(localLang);
  }, []);

  return (
    <>
      <GlobalStyles />

      <StarsBg />

      <Header lang={lang} setLang={setLang} />
      <Main lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;
