import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type DataProps = {
  contents: {
    to: string;
    text: string;
  }[];
};
type StyledProps = {
  spacing?: number;
};
type Props = DataProps & StyledProps;

const SimpleNavigation: React.FC<Props> = React.memo((props) => {
  const { contents, spacing } = props;
  return (
    <StyledNavigation spacing={spacing}>
      {contents.map((content, index) => (
        <Link key={index} to={content.to}>
          {content.text}
        </Link>
      ))}
    </StyledNavigation>
  );
});

export default SimpleNavigation;

const StyledNavigation = styled.nav<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  a {
    transition: 0.5s;
    margin-right: ${(props) => props.spacing}px;
    &:hover {
      opacity: 0.8;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
