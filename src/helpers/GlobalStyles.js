import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 2rem 5vw 0 5vw;

    font-family: var(--ff-regular);
    line-height: 1.3;

    color: var(--c-gold);
    background-color: var(--c-dGreen);
  }

  button {
    border: none;
    background-color: transparent;
    border-radius: 0;
    color: inherit;
    cursor: pointer;

    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media only screen and (min-width: 800px) {
    body {
      padding-right: 10vw;
      padding-left: 10vw;
    }
  }
`;
