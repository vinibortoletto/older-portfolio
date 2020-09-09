import React, { useEffect, useState } from "react";

// Images
import logo from "../../images/icons/logo.svg";
import brFlag from "../../images/icons/br.svg";
import enFlag from "../../images/icons/en.svg";

// Components
import Button from "../../components/Button";

// Styles
import { Container } from "./styles";

function Header({ lang, setLang, cv }) {
  function handleLangBtn() {
    // Show lang buttons
    const btnsContainer = document.querySelector(".btns-flag");

    btnsContainer.classList.contains("show")
      ? btnsContainer.classList.remove("show")
      : btnsContainer.classList.add("show");

    // Hide lang buttons
    function hideLangBtns() {
      btnsContainer.classList.remove("show");
      document.removeEventListener("click", hideLangBtns);
    }

    btnsContainer.classList.contains("show") &&
      document.addEventListener("click", hideLangBtns);

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

  const enContent = (
    <>
      <a
        className="logo"
        href="https://vinibortoletto.github.io/portfolio"
        target="_blank"
      >
        <img src={logo} alt="vinicius bortoletto's logo" />
      </a>

      <div className="btns-wrapper">
        <a href={cv.en} target="_blank">
          <Button
            className="btn-download"
            icon="file-download"
            text="Download CV"
          />
        </a>

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

  const brContent = (
    <>
      <a
        className="logo"
        href="https://vinibortoletto.github.io/portfolio"
        target="_blank"
      >
        <img src={logo} alt="logo de vinicius bortoletto" />
      </a>

      <div className="btns-wrapper">
        <a href={cv.br} target="_blank">
          <Button
            className="btn-download"
            icon="file-download"
            text="Baixar currículo"
          />
        </a>

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

  return <Container>{lang === "en" ? enContent : brContent}</Container>;
}

export default Header;
