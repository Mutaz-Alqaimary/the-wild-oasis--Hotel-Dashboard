import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  min-width: 0;

  @media (max-width: 62em) {
    padding: 2.4rem;
    gap: 2rem;
  }

  @media (max-width: 37.5em) {
    padding: 1.8rem;
    gap: 1.4rem;
  }
`;

export default DashboardBox;
