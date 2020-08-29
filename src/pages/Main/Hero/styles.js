import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: var(--m-bg);

  .avatar img {
    width: 7rem;
    margin: auto;
    display: block;
  }

  .title {
    text-align: center;
    margin-bottom: var(--m-md);

    h1 {
      font-family: var(--ff-special);
      color: var(--c-lGreen);
      text-transform: lowercase;
    }

    h2 {
      font-weight: normal;
      font-size: 1rem;
      color: var(--c-grey);
      text-transform: capitalize;
    }
  }

  .info-items {
    margin-bottom: var(--m-bg);

    ul {
      text-align: center;
    }

    li {
      margin-bottom: var(--m-sm);
    }

    svg {
      color: var(--c-lGreen);
      margin-right: 0.7rem;
    }
  }

  .drawing img {
    width: 100%;
  }

  .shape img {
    margin: -6px -1rem;
    width: calc(100% + 2rem);
  }
`;
