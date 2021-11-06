import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  padding?: string;
  align?: "left" | "center" | "right";
};

const Container: FC<Props> = (props) => {
  const { children, padding, align } = props;
  return (
    <StyledContainer padding={padding} align={align}>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div<Props>`
  width: calc(100vw - 16px);
  height: 100%;
  margin: 0 auto;
  padding: ${(props) => props.padding};
  text-align: ${(props) => (props.align ? props.align : "center")};
  @media screen and (min-width: 600px) {
    width: calc(100vw - 32px);
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;
