import styled from "./styled-components";
import Nav from "./Nav";

const LayoutStyles = styled.main<{ home: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    padding-bottom: ${props => (props.home ? "20vh" : 0)};
  }
`;

const Layout = props => (
  <LayoutStyles home={props.home}>
    {props.children}
    <Nav home={props.path === "/"} />
  </LayoutStyles>
);

export default Layout;
