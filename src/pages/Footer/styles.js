import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  justify-items: center;
  /* position: relative; */

  .logo {
    width: 10rem;
    margin-bottom: 2.5rem;
  }

  .social-icons {
    margin-bottom: 1.5rem;
    display: flex;

    li {
      margin-right: 1.5rem;

      &:last-child {
        margin-right: 0;
      }
    }

    svg {
      color: var(--c-lGreen);
      font-size: 1.75rem;
    }
  }

  .download {
    margin-bottom: 2rem;
  }

  .copyright {
    color: var(--c-lGreen);
    font-size: var(--fz-sm);
    text-align: center;
    margin-bottom: 15rem;
  }

  .shape {
    margin: -6px -1rem;
    width: calc(100% + 2rem);
  }

  @media only screen and (min-width: 600px) {
    .shape {
      margin: -6px -2rem;
      width: calc(100% + 4rem);
    }
  }
`;
