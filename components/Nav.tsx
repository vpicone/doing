import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "./styled-components";

type ListProps = {
  home: boolean;
  scrolling: string;
};

const LinkList = styled.ul<ListProps>`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  padding-bottom: 0.5rem;
  position: ${props => (props.home ? "relative" : "fixed")};
  width: 100vw;
  left: 0;
  top: 0;
  background: ${props => (props.home ? "transparent" : "white")};
  transition: all 0.5s ease;
  box-shadow: ${props =>
    props.home || props.scrolling == "false"
      ? "none"
      : "0 2px 2px rgba(0, 0, 0, 0.05)"};
  a {
    text-decoration: none;
    color: ${props => (props.home ? props.theme.colors.brand03 : "#fb4b53")};
  }

  li {
    border-bottom: 2px solid
      ${props => (props.home ? props.theme.colors.brand03 : "#fb4b53")};
  }

  @media (max-width: 750px) {
    margin: 0;
  }
`;

const ListItem = styled.li`
  margin: ${props => props.theme.spacing[6]};
  font-size: ${props => props.theme.typeScale[5]}px;
  font-variation-settings: var(--light-condensed);
  transition: all 0.5s ease;
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
const Nav: React.FC<{ home?: boolean }> = ({ home }) => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 0);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });
  return (
    <nav>
      <LinkList home={home} scrolling={scrolling ? "true" : "false"}>
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
          <Link href="blog">
            <a>blog</a>
          </Link>
        </ListItem>
      </LinkList>
    </nav>
  );
};
export default Nav;
