import styled from "styled-components";

function createStars(numOfStars) {
  let value = `${Math.floor(Math.random() * 3000)}px ${Math.floor(
    Math.random() * 3000
  )}px var(--c-mGreen)`;

  for (let i = 2; i <= numOfStars; i++) {
    value = `${value}, ${Math.floor(Math.random() * 3000)}px ${Math.floor(
      Math.random() * 3000
    )}px var(--c-mGreen)`;
  }

  return value;
}

export const Container = styled.div`
  position: absolute;
  z-index: -1;

  .stars-1 {
    width: 1px;
    height: 1px;
    border-radius: 100px;
    background: transparent;
    animation: animStar 200s linear infinite;
    box-shadow: ${createStars(700)};
  }

  .stars-1:after {
    content: "";
    position: absolute;
    top: 3000px;
    width: 1px;
    height: 1px;
    border-radius: 100px;
    background: transparent;
    box-shadow: ${createStars(700)};
  }

  .stars-2 {
    width: 2px;
    height: 2px;
    border-radius: 100px;
    background: transparent;
    animation: animStar 250s linear infinite;
    box-shadow: ${createStars(400)};
  }

  .stars-2:after {
    content: "";
    position: absolute;
    top: 3000px;
    width: 2px;
    height: 2px;
    border-radius: 100px;
    background: transparent;
    box-shadow: ${createStars(400)};
  }

  .stars-3 {
    width: 3px;
    height: 3px;
    border-radius: 100px;
    background: transparent;
    animation: animStar 300s linear infinite;
    box-shadow: ${createStars(200)};
  }

  .stars-3:after {
    content: "";
    position: absolute;
    top: 3000px;
    width: 3px;
    height: 3px;
    border-radius: 100px;
    background: transparent;
    box-shadow: ${createStars(200)};
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-3000px);
    }
  }
`;
