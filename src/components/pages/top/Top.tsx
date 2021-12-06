import React, { FC } from "react";
import styled from "styled-components";
import { Parallax } from "@react-spring/parallax";

import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import { FirstView } from "../../organisms/firstView";
import { Introduction } from "../../organisms/introduction";
import { Features } from "../../organisms/features";

// import bg from "../../../assets/images/topbg.jpg";

const Top: FC = () => {
  return (
    <>
      <Header />
      {/* <StyledTopParallaxContainer> */}
      {/* <Parallax pages={4} style={{ top: "0", left: "0", paddingTop: "72px" }}> */}
      <FirstView />
      <Introduction />
      <Features />
      {/* </Parallax> */}
      {/* </StyledTopParallaxContainer> */}
      <Footer />
    </>
  );
};

export default Top;

const StyledTopParallaxContainer = styled.div`
  height: 100vh;
`;
