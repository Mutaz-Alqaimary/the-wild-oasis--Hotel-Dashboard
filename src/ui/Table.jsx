import { Children, createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  min-width: 0;

  @media (max-width: 62em) {
    font-size: 1.35rem;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  min-width: ${(props) => props.$minWidth};

  @media (max-width: 75em) {
    column-gap: 1.6rem;
  }
`;

const ScrollArea = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-grey-50);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-300);
    border-radius: 999px;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (max-width: 75em) {
    padding: 1.4rem 1.8rem;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  & > * {
    min-width: 0;
  }

  @media (max-width: 75em) {
    padding: 1.2rem 1.8rem;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }

  @media (max-width: 37.5em) {
    padding: 1rem;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ $columns, $minWidth = "90rem", children }) {
  const childrenArray = Children.toArray(children);
  const footer = childrenArray.find((child) => child.type === Footer);
  const tableContent = childrenArray.filter((child) => child.type !== Footer);

  return (
    <TableContext.Provider value={{ $columns, $minWidth }}>
      <StyledTable role="table">
        <ScrollArea>{tableContent}</ScrollArea>
        {footer}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { $columns, $minWidth } = useContext(TableContext);
  return (
    <StyledHeader
      role="row"
      $columns={$columns}
      $minWidth={$minWidth}
      as="header"
    >
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { $columns, $minWidth } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={$columns} $minWidth={$minWidth}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
