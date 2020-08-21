import React, { useEffect, useState } from "react";

// Images
import logo from "../../images/icons/logo.svg";
import brFlag from "../../images/icons/br.svg";
import enFlag from "../../images/icons/en.svg";

// Components
import Button from "../../components/Button";

// Styles
import { Container } from "./styles";

function Header({ lang, setLang }) {
  function handleLangBtn() {
    // Show lang buttons
    const btnsContainer = document.querySelector(".btns-flag");

    btnsContainer.classList.contains("show")
      ? btnsContainer.classList.remove("show")
      : btnsContainer.classList.add("show");

    // Change language
    const btnHidden = document.querySelector(".btns-flag .hidden");

    btnHidden.addEventListener("click", () => {
      if (lang === "en") {
        setLang("br");
        localStorage.setItem("lang", "br");
      } else {
        setLang("en");
        localStorage.setItem("lang", "en");
      }

      window.location.reload();
    });
  }

  function brContent() {
    return (
      <>
        {/* Logo */}
        <a className="logo" href="https://vinicius-bortoletto.github.io">
          <img src={logo} alt="logo de vinicius bortoletto" />
        </a>

        <div className="btns-wrapper">
          {/* Download button */}
          <Button
            className="btn-download"
            icon="file-download"
            text="Baixar currículo"
          />

          {/* Flags buttons */}
          <div onClick={handleLangBtn} className="btns-flag">
            <button className="visible">
              {lang === "en" ? (
                <img src={enFlag} alt="bandeira do reino unido" />
              ) : (
                <img src={brFlag} alt="bandeira do brasil" />
              )}
            </button>
            <button className="hidden">
              {lang === "en" ? (
                <img src={brFlag} alt="bandeira do brasil" />
              ) : (
                <img src={enFlag} alt="bandeira do reino unido" />
              )}
            </button>
          </div>
        </div>
      </>
    );
  }

  function enContent() {
    return (
      <>
        {/* Logo */}
        <a className="logo" href="https://vinicius-bortoletto.github.io">
          <img src={logo} alt="vinicius bortoletto's logo" />
        </a>

        <div className="btns-wrapper">
          {/* Download button */}
          <Button
            className="btn-download"
            icon="file-download"
            text="Download CV"
          />

          {/* Flags buttons */}
          <div onClick={handleLangBtn} className="btns-flag">
            <button className="visible">
              {lang === "en" ? (
                <img src={enFlag} alt="united kingdom's flag" />
              ) : (
                <img src={brFlag} alt="brazil's flag" />
              )}
            </button>
            <button className="hidden">
              {lang === "en" ? (
                <img src={brFlag} alt="brazil's flag" />
              ) : (
                <img src={enFlag} alt="united kingdom's flag" />
              )}
            </button>
          </div>
        </div>
      </>
    );
  }

  return <Container>{lang === "en" ? enContent() : brContent()}</Container>;
}

export default Header;
