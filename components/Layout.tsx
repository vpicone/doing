import styled from "./styled-components";
import Nav from "./Nav";

const LayoutStyles = styled.div<{ home: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${props => (props.home ? "0" : "120px")};
  justify-content: ${props => (props.home ? "center" : "flex-start")};
  align-items: center;
  background: ${props => (props.home ? "transparent" : "white")};
  @media (max-width: 750px) {
    padding-bottom: ${props => (props.home ? "20vh" : 0)};
    padding-top: ${props => (props.home ? "0" : "90px")};
  }
`;

const Layout = props => (
  <LayoutStyles home={props.path === "/"}>
    {props.children}
    <Nav home={props.path === "/"} />
  </LayoutStyles>
);

export default Layout;
