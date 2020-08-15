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
    padding: 0;

    font-family: var(--ff-regular);
    line-height: 1.3;

    color: var(--c-gold);
    background-color: var(--c-dGreen);
  }
`;
