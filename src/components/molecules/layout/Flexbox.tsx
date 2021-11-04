import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  justify?: "center" | "space-between" | "space-around";
  align?: "center" | "flex-start" | "flex-end";
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
};

const Flexbox: FC<Props> = (props) => {
  const { children, justify, align, direction } = props;
  return (
    <StyledFlexbox justify={justify} align={align} direction={direction}>
      {children}
    </StyledFlexbox>
  );
};

export default Flexbox;

const StyledFlexbox = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  height: 100%;
`;
