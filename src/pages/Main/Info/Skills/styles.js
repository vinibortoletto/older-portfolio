import styled from "styled-components";

export const Container = styled.section`
  padding: 0 1rem;
  margin-bottom: var(--m-bg);

  h2 {
    color: var(--c-grey);
    font-size: var(--fz-sm);
    font-weight: normal;
    text-transform: capitalize;
  }

  div {
    margin-bottom: var(--m-sm);

    &:last-child {
      margin-bottom: 0;
    }
  }

  .html:hover {
    color: #ff9532;
  }
  .css:hover {
    color: #5bbef7;
  }
  .js:hover {
    color: #ffbf00;
  }

  .html,
  .js,
  .css {
    transition: 0.2s ease-in-out;
  }
`;
