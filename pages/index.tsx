import React from "react";
import styled from "../components/styled-components";
import { config, Trail } from "react-spring";
import Head from "next/head";

const Display = styled.h1`
  font-size: ${props => props.theme.typeScale[18]}px;
  text-align: center;
  color: ${props => props.theme.colors.brand03};
  max-width: 900px;
  line-height: 1;
  margin: ${props => props.theme.spacing[4]};
  @media (max-width: 750px) {
    font-size: ${props => props.theme.typeScale[11]}px;
    max-width: 375px;
  }
`;

const Word = styled.span<{ done: boolean }>`
  text-shadow: 6px 6px 2px #f20510;
  ${props =>
    props.done &&
    `&:hover {
      text-shadow: 6px 6px 1px #f20510;
      font-weight: 100 !important;
    }`}
`;

const string = "Who are you without the doing?";
const items = string.split(" ").map((item, i, arr) => {
  return {
    text: item,
    key: i,
    em: i === arr.length - 1
  };
});

const Home: React.FunctionComponent = () => {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Head>
        <title>Vince Picone – Web Developer</title>
      </Head>
      <Display>
        <Trail
          after={{ done: true, transition: "all 0.6s ease" }}
          items={items}
          keys={item => item.key}
          config={{ ...config.gentle, ...config.slow }}
          from={{
            fontStretch: "85%",
            fontWeight: 100,
            done: false
          }}
          to={{
            fontStretch: "100%",
            fontWeight: 700,
            done: false
          }}
        >
          {item => props => {
            return item.em ? (
              <Word as="em" done={props.done} style={props}>
                {item.text}
              </Word>
            ) : (
              <Word done={props.done} style={props}>
                {`${item.text} `}
              </Word>
            );
          }}
        </Trail>
      </Display>
    </section>
  );
};

export default Home;
