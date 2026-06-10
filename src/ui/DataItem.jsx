import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
  min-width: 0;

  @media (max-width: 37.5em) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  flex-shrink: 0;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }

  @media (max-width: 37.5em) {
    gap: 0.6rem;
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
