import styled from "styled-components";

export const Container = styled.h1`
  font-size: 1.5rem;
  font-family: var(--ff-special);
  text-align: center;
  color: var(--c-lGreen);
  text-transform: capitalize;
  margin-bottom: var(--m-sm);

  @media only screen and (min-width: 1000px) {
    font-size: 1.8rem;
  }
`;
