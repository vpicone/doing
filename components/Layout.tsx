import styled from "./styled-components";
import Nav from "./Nav";

const Layout = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    padding-bottom: 20vh;
  }
`;

export default ({ children }) => (
  <Layout>
    {children}
    <Nav />
  </Layout>
);
