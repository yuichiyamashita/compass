import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

import { PageTransitionLink } from "../../atoms/link";
import { HistoryBackLinkWithIcon } from "../../molecules/link-with-icon";
import { BasicTypographyWithIcon } from "../../molecules/typography-with-icon";

type StyleProps = {
  color: string;
};
type DataProps = {
  title: string;
  subTitle: string;
  label: string;
  path: string;
};
type Props = StyleProps & DataProps;

const TrainingMenuCard: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { color, title, subTitle, label, path } = props;
  return (
    <StyledCard>
      <StyledTrainingTitle>{title}</StyledTrainingTitle>
      <BasicTypographyWithIcon
        color="#333"
        fontSize="14px"
        fontWeight={600}
        icon={CheckCircleOutlineSharpIcon}
        iconSize="18px"
        justify="center"
        margin="0 0 32px 0"
        spacing="xxs"
        text={subTitle}
      />
      <StyledTrainingText>{children}</StyledTrainingText>
      <StyledTutorialLink>
        <HistoryBackLinkWithIcon
          icon={InfoOutlinedIcon}
          text="使い方を確認する →"
          path="./tutorial/fastthinking"
          background="#fff"
          border={`1px solid ${color}`}
          color={color}
          fontSize="12px"
          iconSize="small"
          padding="2px 4px"
          radius="4px"
          spacing="xxs"
        />
      </StyledTutorialLink>
      <PageTransitionLink text={label} color="#fff" background={color} radius="4px" fullWidth path={path} />
    </StyledCard>
  );
});

export default TrainingMenuCard;

const StyledCard = styled.div`
  box-shadow: 0 0 8px #cbcbcb;
  background: #fff;
  padding: 32px;
`;

const StyledTrainingTitle = styled.h3`
  color: #333;
  font-family: "Sriracha", cursive;
  font-size: 48px;
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  text-align: center;
`;

const StyledTrainingText = styled.div`
  color: #555;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const StyledTutorialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 32px;
`;
