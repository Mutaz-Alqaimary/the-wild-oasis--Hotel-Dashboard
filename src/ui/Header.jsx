import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const StyledHeader = styled.header`
  grid-column: 2;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;

  @media (max-width: 75em) {
    padding: 1.2rem 3.2rem;
  }

  @media (max-width: 62em) {
    position: sticky;
    top: 0;
    z-index: 40;
    grid-column: 1;
    justify-content: space-between;
    padding: 1rem 2.4rem;
  }

  @media (max-width: 37.5em) {
    gap: 0.8rem;
    padding: 0.8rem 1.4rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  min-width: 0;

  @media (max-width: 37.5em) {
    gap: 0.8rem;
  }
`;

const SidebarToggle = styled(ButtonIcon)`
  display: none;

  @media (max-width: 62em) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

function Header({ isSidebarOpen, onToggleSidebar }) {
  return (
    <StyledHeader>
      <SidebarToggle
        type="button"
        aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isSidebarOpen}
        onClick={onToggleSidebar}
      >
        {isSidebarOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
      </SidebarToggle>

      <HeaderActions>
        <UserAvatar />
        <HeaderMenu />
      </HeaderActions>
    </StyledHeader>
  );
}

export default Header;
