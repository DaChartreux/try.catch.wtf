import styled from "@emotion/styled";

const Layout = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 7.25rem);
  margin-top: 7.25rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-top: 6.5rem;
  }
`;

export default Layout;
