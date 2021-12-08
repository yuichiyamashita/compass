import React from "react";
import styled from "styled-components";

type Props = {
  padding?: string;
  align?: "left" | "center" | "right";
  position?: "relative";
  height?: string;
};

const Container: React.FC<Props> = React.memo((props) => {
  const { children, padding, align, position, height } = props;
  return (
    <StyledContainer padding={padding} align={align} position={position} height={height}>
      {children}
    </StyledContainer>
  );
});

export default Container;

const StyledContainer = styled.div<Props>`
  position: ${(props) => props.position};
  width: calc(100vw - 16px);
  height: ${(props) => props.height};
  height: 100%;
  margin: 0 auto;
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
  @media screen and (min-width: 600px) {
    width: calc(100vw - 32px);
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;
