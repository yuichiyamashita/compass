import React from "react";
import styled from "styled-components";

import { Footer, FirstView, Features, Introduction, TopPageHeader } from "../organisms";

const Top: React.FC = () => {
  return (
    <StyledTopContainer>
      <TopPageHeader />
      <FirstView />
      <Introduction />
      <Features />
      <Footer />
    </StyledTopContainer>
  );
};

export default Top;

const StyledTopContainer = styled.div`
  background: #f8fbfe;
`;
