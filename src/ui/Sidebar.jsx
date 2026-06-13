import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  grid-column: 1;
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition:
    transform 0.25s ease-out,
    box-shadow 0.25s ease-out;

  @media (max-width: 62em) {
    position: fixed;
    inset: 5.8rem auto 0 0;
    z-index: 30;
    width: 28rem;
    max-width: min(28rem, calc(100vw - 4.8rem));
    padding: 2.4rem 2rem;
    gap: 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    box-shadow: ${(props) => (props.$isOpen ? "var(--shadow-lg)" : "none")};
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-105%")});
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
    overflow-y: auto;
  }

  @media (max-width: 37.5em) {
    inset-block-start: 5.1rem;
    width: 8rem;
    padding: 2rem 1rem;
    gap: 1.6rem;
    align-items: center;
  }
`;

function Sidebar({ isOpen, onNavigate }) {
  return (
    <StyledSidebar $isOpen={isOpen}>
      <Logo />
      <MainNav onNavigate={onNavigate} />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
