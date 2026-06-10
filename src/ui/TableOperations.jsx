import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  min-width: 0;

  @media (max-width: 62em) {
    width: 100%;
    align-items: stretch;
    justify-content: space-between;
    gap: 1.2rem;
  }

  @media (max-width: 41.5em) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export default TableOperations;
