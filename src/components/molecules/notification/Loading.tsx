import React, { FC } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { notificationSelector } from "../../../Selectors";

const Loading: FC = ({ children }) => {
  const notificationState = useSelector(notificationSelector);
  const { state, text } = notificationState.loading;
  const isLoading = state;
  const loadingText = text;

  return (
    <>
      {isLoading && (
        <StyledLoadingContainer>
          <Loader type="Watch" color="#8bd5da" />
          <StyledLoadingText>{loadingText}</StyledLoadingText>
        </StyledLoadingContainer>
      )}
      {children}
    </>
  );
};

export default Loading;

const StyledLoadingContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
`;
const StyledLoadingText = styled.span`
  color: #333;
  font-weight: 600;
`;
