import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: var(--m-bg);

  .avatar {
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
    }

    h2 {
      margin: 0;
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

  .drawing {
    width: 100%;
  }

  .shape {
    margin: -6px -5vw;
    width: calc(100% + 10vw);
  }

  @media only screen and (min-width: 900px) {
    margin-bottom: 32rem;

    .hero-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .avatar {
      order: 2;
      width: 10rem;
      margin: 0;
    }

    .title {
      text-align: left;

      h1 {
        font-size: 3rem;
        margin: 0;
      }

      h2 {
        font-size: 1.3rem;
      }
    }

    .info-items {
      margin-bottom: 0;

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4rem 2rem;

        text-align: left;
      }

      li {
        margin-bottom: 0;
      }
    }

    .drawing-wrapper {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -19vw;

      z-index: -1;
      overflow: hidden;

      .drawing {
        opacity: 0.2;
      }
    }

    .drawing {
      padding: 0 10vw 0 10vw;
    }
  }

  @media only screen and (min-width: 1000px) {
    .avatar {
      width: 13rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .title h1 {
      font-size: 3.5rem;
    }

    .info-items {
      font-size: 1.2rem;
    }
  }
`;
