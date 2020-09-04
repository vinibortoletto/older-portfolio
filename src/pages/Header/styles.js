import styled from "styled-components";

export const Container = styled.header`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--m-md);

  .btns-wrapper {
    display: flex;
  }

  .btn-download {
    margin-right: 1rem;
  }

  .btns-flag,
  img {
    height: 100%;
  }

  .btns-flag-bg {
    height: 7rem;
    width: 40px;

    position: absolute;
    top: 1rem;
    right: 1rem;

    background-color: grey;
  }

  .btns-flag {
    position: relative;
    width: 40px;

    .hidden {
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.2s ease-in-out;
    }

    .hidden {
      z-index: -1;
      opacity: 0;
    }

    &.show {
      .hidden {
        top: 3.5rem;
        opacity: 1;
        z-index: 0;
      }
    }
  }

  @media only screen and (min-width: 800px) {
    margin-bottom: var(--m-bg);

    height: 3rem;
    .logo {
    }
  }
`;
