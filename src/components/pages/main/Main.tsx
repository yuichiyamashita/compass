import React from "react";
import styled from "styled-components";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

import { Container } from "../../molecules/container";
import { BasicTypographyWithIcon } from "../../molecules/typography-with-icon";
import { AppHeader } from "../../organisms/header";
import { TrainingMenus } from "../../organisms/main";

const Main: React.FC = () => {
  return (
    <StyledMain>
      <AppHeader />
      <Container padding={"124px 0 64px"}>
        <BasicTypographyWithIcon
          icon={MenuBookTwoToneIcon}
          text="トレーニングメニュー"
          spacing="xxs"
          fontSize="20px"
          iconSize="32px"
          margin="0 0 32px 0 "
        />
        <TrainingMenus />
      </Container>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  background: #f8fbfe;
`;
