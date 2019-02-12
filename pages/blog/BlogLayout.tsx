import styled from "../../components/styled-components";

const Layout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;

  h1 {
    white-space: nowrap;
    margin: ${props => props.theme.spacing[2]} 0;
    font-size: ${props => props.theme.typeScale[13]}px;
    font-variation-settings: var(--bold);
  }

  h2 {
    white-space: nowrap;
    font-size: ${props => props.theme.typeScale[8]}px;
    margin: 0;
    font-variation-settings: var(--regular-condensed);
    margin-bottom: ${props => props.theme.spacing[6]};
    color: slategray;
  }
`;

const MDXStyles = styled.article`
  max-width: 600px;
  padding: 0 1rem;
  font-size: ${props => props.theme.typeScale[4]}px;
  h3 {
    font-size: ${props => props.theme.typeScale[6]}px;
    margin-top: ${props => props.theme.spacing[8]};
  }
  blockquote {
    padding: ${props => props.theme.spacing[1]};
    font-variation-settings: var(--light-condensed);
    font-style: italic;
    text-align: center;
    p {
      font-size: ${props => props.theme.typeScale[5]}px;
    }
  }

  ul {
    list-style: square outside;
    /* margin-left: -40px; */
    margin: 2rem 0 2rem -40px;
  }

  p {
    margin: 1rem auto;
  }

  .linkContainer {
    display: flex;
    justify-content: space-between;
  }

  .next,
  .prev {
    display: block;
    color: inherit;
    text-decoration: none;
    span {
      text-decoration: underline;
      margin: 0 ${props => props.theme.spacing[4]};
    }
    margin: ${props => props.theme.spacing[8]} 0;
  }

  .next {
    text-align: right;
  }

  .next.disabled {
    color: slategrey;
    span {
      text-decoration: none;
    }
  }
`;

export default ({ title, subtitle, children }) => (
  <Layout>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <MDXStyles>{children}</MDXStyles>
  </Layout>
);
