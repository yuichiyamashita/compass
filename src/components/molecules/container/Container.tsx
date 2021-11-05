import React, { FC } from "react";
import styled from "styled-components";

const Container: FC = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: calc(100vw - 16px);
  height: 100%;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 600px) {
    width: calc(100vw - 32px);
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;
