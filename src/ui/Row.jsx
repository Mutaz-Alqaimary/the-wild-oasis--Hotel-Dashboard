import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: 1.6rem;
      flex-wrap: wrap;

      @media (max-width: 37.5em) {
        align-items: flex-start;
        flex-direction: column;
        gap: 1.2rem;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;

      @media (max-width: 37.5em) {
        gap: 1.2rem;
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
