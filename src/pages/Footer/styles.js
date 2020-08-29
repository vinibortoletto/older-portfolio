import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  justify-items: center;

  .logo img {
    width: 10rem;
    margin-bottom: 2.5rem;
  }

  .social-icons {
    margin-bottom: 1.5rem;

    ul {
      display: flex;
    }

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
    margin-bottom: 1rem;
  }

  .copyright {
    color: var(--c-lGreen);
    font-size: var(--fz-sm);
    text-align: center;
    margin-bottom: 10rem;
  }

  .shape {
    /* width: 100%; */
    margin: -6px -1rem;
    width: calc(100% + 2rem);
  }
`;
