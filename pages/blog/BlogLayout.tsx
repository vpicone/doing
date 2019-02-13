import styled from "../../components/styled-components";

const Layout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  max-width: 100vw;
  h1 {
    white-space: nowrap;
    margin: ${props => props.theme.spacing[2]} 0;
    font-size: ${props => props.theme.typeScale[13]}px;
    font-variation-settings: var(--bold);
    background: linear-gradient(hsl(357, 90%, 64%), hsl(30, 90%, 64%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    white-space: nowrap;
    font-size: ${props => props.theme.typeScale[10]}px;
    margin: 0;
    font-variation-settings: var(--regular-condensed);
    margin-bottom: ${props => props.theme.spacing[6]};
    color: slategray;
  }

  @media (max-width: 600px) {
    h1 {
      margin: ${props => props.theme.spacing[3]} 0;
      line-height: 1;
      font-size: ${props => props.theme.typeScale[10]}px;
      white-space: normal;
      overflow: hidden;
      text-align: center;
    }
    h2 {
      white-space: normal;
      font-size: ${props => props.theme.typeScale[6]}px;
      margin: 0;
      font-variation-settings: var(--regular-condensed);
    }
    padding: 0 ${props => props.theme.spacing[4]};
  }
`;

const MDXStyles = styled.article`
  max-width: 600px;
  font-size: ${props => props.theme.typeScale[4]}px;
  h3 {
    font-size: ${props => props.theme.typeScale[6]}px;
    margin: 0;
    margin-top: ${props => props.theme.spacing[8]};
  }
  blockquote {
    padding: ${props => props.theme.spacing[1]};
    font-variation-settings: var(--light-condensed);
    font-style: italic;
    text-align: center;
    p {
      font-size: ${props => props.theme.typeScale[5]}px;
      margin: 0;
    }
  }

  ul {
    list-style: square outside;
    margin: 2rem 0 2rem -40px;
  }

  p {
    margin: 1rem auto;
  }

  @media (max-width: 600px) {
    ul {
      margin: 0;
    }

    p {
      margin: ${props => props.theme.spacing[6]} auto;
    }

    max-width: 100vw;
    padding: ${props => props.theme.spacing[5]};
  }
`;

export default ({ title, subtitle, children }) => (
  <Layout>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <MDXStyles>{children}</MDXStyles>
  </Layout>
);
