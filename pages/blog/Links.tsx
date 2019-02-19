import Link from "next/link";
import styled from "../../components/styled-components";
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .next,
  .prev {
    color: inherit;
    max-width: 48%;
    text-align: center;
    margin: 0;
  }

  .next {
    margin-left: auto;
  }

  .next.disabled {
    background: linear-gradient(0.25turn, hsl(30, 0%, 64%), hsl(357, 0%, 64%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 600px) {
    font-size: ${props => props.theme.typeScale[2]}px;
  }
`;

const LabelContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${props => props.theme.spacing[8]};
  font-size: ${props => props.theme.typeScale[6]}px;
  span {
    cursor: pointer;
    background: linear-gradient(
      0.25turn,
      hsl(30, 96%, 64%),
      hsl(357, 96%, 64%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:first-of-type {
      background: linear-gradient(
        0.25turn,
        hsl(357, 90%, 64%),
        hsl(30, 90%, 64%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  span.next {
    margin-left: auto;
  }

  .disabled {
    background: linear-gradient(0.25turn, hsl(30, 0%, 64%), hsl(35, 0%, 64%));
    cursor: default;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Links: React.FC<{
  prev?: { href: string; title: string };
  next: { href: string; title: string; disabled: boolean };
}> = ({ prev, next }) => (
  <>
    <LabelContainer>
      {prev && (
        <Link passHref href={prev.href}>
          <span>← Previous</span>
        </Link>
      )}
      {next.disabled ? (
        <span style={{ alignSelf: "flex-end" }} className={`next disabled`}>
          Next →
        </span>
      ) : (
        <Link passHref href={next.href}>
          <span style={{ alignSelf: "flex-end" }} className={`next`}>
            Next →
          </span>
        </Link>
      )}
    </LabelContainer>
    <LinkContainer>
      {prev && (
        <Link prefetch href={prev.href}>
          <a className="prev">
            <span>{prev.title}</span>
          </a>
        </Link>
      )}
      {next.disabled ? (
        <a className="next disabled">
          <span>{next.title}</span>
        </a>
      ) : (
        <Link prefetch href={next.href}>
          <a className="next">
            <span>{next.title}</span>
          </a>
        </Link>
      )}
    </LinkContainer>
  </>
);

export default Links;
