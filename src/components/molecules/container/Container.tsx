import React, { FC } from "react";
import styled from "styled-components";

const Container: FC = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: calc(100% - 32px);
  }
  @media screen and (max-width: 420px) {
    width: calc(100% - 16px);
  }
`;
