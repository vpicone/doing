// import Link from "next/link";
import styled from "./styled-components";

const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacing[6]};
  padding: 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.brand03};
  }
  @media (max-width: 750px) {
    width: 100vw;
  }
`;

const ListItem = styled.li`
  margin: ${props => props.theme.spacing[6]};
  font-size: ${props => props.theme.typeScale[5]}px;
  font-variation-settings: var(--light-condensed);
  transition: all 0.5s ease;
  border-bottom: 1px solid white;
  padding: 0 0.5rem;
  &:hover {
    font-variation-settings: var(--semi-bold-condensed);
    cursor: pointer;
  }
  @media (max-width: 750px) {
    margin: ${props => props.theme.spacing[4]};
    font-size: ${props => props.theme.typeScale[3]}px;
    padding: 0 0.25rem;
  }
`;
const Nav = () => (
  <nav>
    <LinkList>
      {/* <ListItem>
        <Link>
          <a>about</a>
        </Link>
      </ListItem> */}
      <ListItem>
        <a href="https://github.com/vpicone">github</a>
      </ListItem>
      <ListItem>
        <a href="https://linkedin.com/in/vincepicone">linkedin</a>
      </ListItem>
      <ListItem>
        <a href="https://twitter.com/TheElodin">twitter</a>
      </ListItem>
      <ListItem>
        <a href="mailto:vp@vincepic.one">email</a>
      </ListItem>
    </LinkList>
  </nav>
);
export default Nav;
