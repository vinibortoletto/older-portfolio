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
  const cv = {
    br:
      "https://drive.google.com/file/d/1L_878YqIofWhSj588TwqZAMsZZ9YbpqH/view?usp=sharing",
    en:
      "https://drive.google.com/file/d/1C77_MIy7eGY2lGzqtdvSbV5LHmQvH1C8/view?usp=sharing",
  };

  // Get lang from localStorage OR set default lang
  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    localLang !== null && setLang(localLang);
  }, []);

  return (
    <>
      <GlobalStyles />

      <StarsBg />

      <Header lang={lang} setLang={setLang} cv={cv} />
      <Main lang={lang} />
      <Footer lang={lang} cv={cv} />
    </>
  );
}

export default App;
