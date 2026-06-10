import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 37.5em) {
    gap: 0.6rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    min-height: 4.8rem;
    transition: all 0.3s;

    @media (max-width: 75em) {
      font-size: 1.5rem;
      padding: 1.2rem 1.6rem;
    }

    @media (max-width: 62em) {
      font-size: 1.5rem;
      padding: 1rem 1.4rem;
    }

    @media (max-width: 37.5em) {
      justify-content: center;
      gap: 0;
      width: 5.2rem;
      height: 5.2rem;
      min-height: 5.2rem;
      padding: 0;
    }
  }

  @media (max-width: 37.5em) {
    & span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;

    @media (max-width: 37.5em) {
      width: 2.3rem;
      height: 2.3rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav({ onNavigate }) {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard" onClick={onNavigate} aria-label="Home">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" onClick={onNavigate} aria-label="Bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" onClick={onNavigate} aria-label="Cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/guests" onClick={onNavigate} aria-label="Guests">
            <HiOutlineUserGroup />
            <span>Guests</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" onClick={onNavigate} aria-label="Users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" onClick={onNavigate} aria-label="Settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
