import styled from "../../components/styled-components";
import Link from "next/link";

const BlogContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing[6]};
  padding-left: 0;
  padding-right: 0;
  background: white;
  align-items: center;
  ul {
    list-style: none;
    width: 100%;
    max-width: 550px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 750px) {
    padding: 0 ${props => props.theme.spacing[6]};
    padding-bottom: 160px;
  }
`;

const Post = styled.article`
  color: #2d2d2d;
  margin-bottom: ${props => props.theme.spacing[8]};
  a {
    color: inherit;
  }
  h2 {
    margin: 0;
  }
  time {
  }
  p {
    color: #2d2d2d;
  }
`;

const Blog = () => (
  <BlogContainer>
    <ul>
      <li>
        <Post>
          <Link prefetch href="/blog/test">
            <a>
              <h2>Hello World</h2>
            </a>
          </Link>
          <time>2/11/2019</time>
          <p>
            This is a test post wiring up MDX, TypeScript, and Next.js; watch
            this space :)
          </p>
        </Post>
      </li>
    </ul>
  </BlogContainer>
);

export default Blog;
