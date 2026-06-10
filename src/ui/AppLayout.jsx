import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media (max-width: 62em) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
  }
`;

const Main = styled.main`
  grid-column: 2;
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
  min-width: 0;

  @media (max-width: 75em) {
    padding: 3.2rem;
  }

  @media (max-width: 62em) {
    grid-column: 1;
    padding: 2.8rem 2.4rem 4.8rem;
  }

  @media (max-width: 37.5em) {
    padding: 2rem 1.4rem 3.2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  min-width: 0;

  @media (max-width: 37.5em) {
    gap: 2rem;
  }
`;

const Overlay = styled.button`
  display: none;

  @media (max-width: 62em) {
    position: fixed;
    inset: 0;
    z-index: 20;
    display: block;
    border: none;
    background-color: var(--backdrop-color);
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
    transition: opacity 0.2s ease-out;
  }
`;

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <StyledAppLayout>
      <Header
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((isOpen) => !isOpen)}
      />
      <Sidebar isOpen={isSidebarOpen} onNavigate={closeSidebar} />
      <Overlay
        type="button"
        aria-label="Close navigation menu"
        $isOpen={isSidebarOpen}
        onClick={closeSidebar}
      />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
