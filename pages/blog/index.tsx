import styled from "../../components/styled-components";

const BlogContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing[6]};
  padding-top: 150px;
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
    padding: 80px ${props => props.theme.spacing[6]};
  }
`;

const Post = styled.article`
  color: #2d2d2d;
  margin-bottom: ${props => props.theme.spacing[8]};
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
          <h2>Title</h2>
          <time>2/11/2019</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            expedita est perspiciatis natus possimus quis minus eveniet dolorem,
            doloremque explicabo commodi incidunt nobis vitae provident.
            Assumenda neque accusantium ipsa voluptate.
          </p>
        </Post>
      </li>
      <li>
        <Post>
          <h2>Title</h2>
          <time>2/11/2019</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            expedita est perspiciatis natus possimus quis minus eveniet dolorem,
            doloremque explicabo commodi incidunt nobis vitae provident.
            Assumenda neque accusantium ipsa voluptate.
          </p>
        </Post>
      </li>
      <li>
        <Post>
          <h2>Title</h2>
          <time>2/11/2019</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            expedita est perspiciatis natus possimus quis minus eveniet dolorem,
            doloremque explicabo commodi incidunt nobis vitae provident.
            Assumenda neque accusantium ipsa voluptate.
          </p>
        </Post>
      </li>
      <li>
        <Post>
          <h2>Title</h2>
          <time>2/11/2019</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            expedita est perspiciatis natus possimus quis minus eveniet dolorem,
            doloremque explicabo commodi incidunt nobis vitae provident.
            Assumenda neque accusantium ipsa voluptate.
          </p>
        </Post>
      </li>
      <li>
        <Post>
          <h2>Title</h2>
          <time>2/11/2019</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            expedita est perspiciatis natus possimus quis minus eveniet dolorem,
            doloremque explicabo commodi incidunt nobis vitae provident.
            Assumenda neque accusantium ipsa voluptate.
          </p>
        </Post>
      </li>
      <li>
        <Post>
          <h2>Title</h2>
          <time>2/11/2019</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            expedita est perspiciatis natus possimus quis minus eveniet dolorem,
            doloremque explicabo commodi incidunt nobis vitae provident.
            Assumenda neque accusantium ipsa voluptate.
          </p>
        </Post>
      </li>
    </ul>
  </BlogContainer>
);

export default Blog;
