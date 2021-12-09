import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  contents: {
    to: string;
    text: string;
  }[];
};

const SimpleNavigation: React.FC<Props> = React.memo((props) => {
  return (
    <StyledNavigation>
      {props.contents.map((content) => (
        <Link to={content.to}>{content.text}</Link>
      ))}
    </StyledNavigation>
  );
});

export default SimpleNavigation;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  a {
    transition: 0.5s;
    margin-right: 32px;
    &:hover {
      opacity: 0.8;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
