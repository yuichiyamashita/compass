import React from "react";
import styled from "styled-components";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

import { Container } from "../../molecules/container";
import { BasicTypographyWithIcon } from "../../molecules/typography-with-icon";
import { MainPageHeader } from "../../organisms/header";
import { TrainingMenus } from "../../organisms/main";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <MainPageHeader />
      <Container padding={"92px 0 64px"}>
        <BasicTypographyWithIcon
          icon={MenuBookTwoToneIcon}
          text="トレーニングメニュー"
          spacing="xxs"
          fontSize="20px"
          fontWeight={600}
          iconSize="30px"
          iconColor="primary"
          margin="0 0 24px 0"
        />
        <TrainingMenus />
      </Container>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  background: #f8fbfe;
  min-height: 100vh;
  color: #555;
`;
