import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;
  margin-bottom: var(--m-sm);

  display: grid;
  align-items: center;

  border-left: 3px solid var(--c-mGreen);

  &:hover {
    height: 15rem;

    .logo {
      transform: translate(-50%, -100%);
      opacity: 0;
    }

    .bg .shadow {
      opacity: 0.95;
      height: 15rem;
    }

    .content {
      opacity: 1;
      pointer-events: all;
    }
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;

    height: 3rem;

    transform: translate(-50%, -50%);
  }

  .text {
    font-size: var(--fz-sm);
    text-align: center;
  }

  .line {
    width: 5rem;
    height: 1px;
    margin: var(--m-sm) 0;
    background-color: var(--c-lGreen);
  }

  .btns {
    a:first-child {
      /* margin-right: 0.5rem; */
    }

    a {
    }

    button {
      display: block;
      width: 10rem;
      margin-bottom: 0.5rem;
    }
  }

  .bg,
  .bg .shadow,
  .bg img {
    width: inherit;
    height: inherit;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    .shadow {
      position: absolute;
      top: 0;
      left: 0;

      background-color: var(--c-drGreen);
      opacity: 0.5;
    }

    img {
      object-fit: cover;
    }
  }

  .content {
    display: grid;
    justify-items: center;

    opacity: 0;
    pointer-events: none;

    padding: 1rem 2rem;
  }

  /* Add transition to animated elements */
  transition: 0.2s ease-in-out;

  .content,
  .bg .shadow,
  .logo {
    transition: 0.2s ease-in-out;
  }
`;
