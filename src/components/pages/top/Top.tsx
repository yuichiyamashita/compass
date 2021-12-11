import React from "react";
import styled from "styled-components";

import { Footer } from "../../organisms/footer";
import { TopPageHeader } from "../../organisms/header";
import { FirstView } from "../../organisms/firstView";
import { Introduction } from "../../organisms/introduction";
import { Features } from "../../organisms/features";

// import bg from "../../../assets/images/topbg.jpg";

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
