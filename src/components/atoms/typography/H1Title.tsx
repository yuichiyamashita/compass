import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  color?: string;
  fontSize?: string;
};

const H1Title: FC<Props> = (props) => {
  const { children, color, fontSize } = props;
  return (
    <StyledTitle color={color} fontSize={fontSize}>
      {children}
    </StyledTitle>
  );
};

export default H1Title;

const StyledTitle = styled.h1<Props>`
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  color: ${(props) => props.color};
  margin-bottom: 24px;
  line-height: 32px;
`;
