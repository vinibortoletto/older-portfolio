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
    height: 10rem;

    .logo {
      transform: translate(-50%, -100%);
      opacity: 0;
      pointer-events: none;
    }

    .bg .shadow {
      opacity: 0.95;
      height: 10rem;
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
    pointer-events: all;
  }

  .text {
    font-size: var(--fz-sm);
  }

  .line {
    height: 5rem;
    width: 1px;
    margin: var(--m-sm) 0;
    background-color: var(--c-lGreen);
    opacity: 0.3;
  }

  .btns {
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
    max-width: 30rem;
    padding: 1rem 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    justify-items: center;
    justify-self: center;
    align-items: center;

    opacity: 0;
    pointer-events: none;
  }

  /* Add transition to animated elements */
  transition: 0.2s ease-in-out;

  .content,
  .bg .shadow,
  .logo {
    transition: 0.2s ease-in-out;
  }
`;
