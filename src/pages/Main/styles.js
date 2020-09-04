import styled from "styled-components";

export const Container = styled.main`
  margin-bottom: 7rem;

  @media only screen and (min-width: 800px) {
    h1 {
      text-align: left;
    }

    .info-projects-wrapper {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 0 3rem;

      & div:first-child {
        order: 2;
      }
    }
  }
`;
