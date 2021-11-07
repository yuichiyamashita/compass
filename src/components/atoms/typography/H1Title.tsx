import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  color?: string;
};

const H1Title: FC<Props> = (props) => {
  const { children, color } = props;
  return <StyledTitle color={color}>{children}</StyledTitle>;
};

export default H1Title;

const StyledTitle = styled.h1<Props>`
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => props.color};
  margin-bottom: 24px;
`;
