import React from "react";
import styled from "styled-components";

import { Footer } from "../../organisms/footer";
import { TopPageHeader } from "../../organisms/header";
import { FirstView, Features, Introduction } from "../../organisms/top";

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
