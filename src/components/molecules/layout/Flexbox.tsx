import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  justify?: "center" | "space-between" | "space-around" | "flex-start" | "flex-end";
  align?: "center" | "flex-start" | "flex-end";
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  margin?: string;
};

const Flexbox: FC<Props> = (props) => {
  const { children, justify, align, direction, margin } = props;
  return (
    <StyledFlexbox justify={justify} align={align} direction={direction} margin={margin}>
      {children}
    </StyledFlexbox>
  );
};

export default Flexbox;

const StyledFlexbox = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: 100%;
  margin: ${(props) => props.margin};
`;
