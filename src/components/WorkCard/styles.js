import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;

  display: grid;
  align-items: center;

  border-radius: 0.2rem;
  border: 1px solid var(--c-dGreen);

  cursor: pointer;

  &:hover {
    border: 1px solid var(--c-lGreen);

    .logo {
      transform: translate(-50%, -100%);
      opacity: 0;
    }

    .bg .shadow {
      opacity: 0.9;
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

    transform: translate(-50%, -50%);
  }

  .text {
    font-size: var(--fz-sm);
  }

  .line {
    width: 5rem;
    height: 1px;
    margin: var(--m-sm) 0;
    background-color: var(--c-lGreen);
  }

  .btns a:first-child {
    margin-right: 0.5rem;
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

      background-color: var(--c-dGreen);
      opacity: 0.3;
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
  }

  /* Add transition to animated elements */
  transition: 0.2s ease-in-out;

  .content,
  .bg .shadow,
  .logo {
    transition: 0.2s ease-in-out;
  }
`;
