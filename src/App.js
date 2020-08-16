import React from "react";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Styles
import { GlobalStyles } from "./helpers/GlobalStyles";
import "./helpers/variables.css";

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
