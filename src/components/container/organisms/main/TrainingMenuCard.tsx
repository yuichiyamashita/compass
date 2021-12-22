import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

import { PageTransitionLink } from "../../../presenter/atoms";
import { BasicTypographyWithIcon, HistoryBackLinkWithIcon } from "../../../presenter/molecules";

type StyleProps = {
  color: string;
};
type DataProps = {
  title: string;
  subTitle: string;
  label: string;
  path: string;
  image: string;
};
type Props = StyleProps & DataProps;

const TrainingMenuCard: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { color, title, subTitle, label, path, image } = props;

  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <BasicTypographyWithIcon
        color="#555"
        fontSize="14px"
        fontWeight={600}
        icon={CheckCircleOutlineSharpIcon}
        iconSize="18px"
        iconColor="action"
        justify="center"
        margin="0 0 32px 0"
        spacing="xxs"
        text={subTitle}
      />
      <StyledImageBox>
        <StyledImage src={image} alt="training image" />
      </StyledImageBox>
      <StyledText>{children}</StyledText>
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
  padding: 32px 16px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

const StyledTitle = styled.h3`
  color: #333;
  font-family: "Sriracha", cursive;
  font-size: 40px;
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const StyledImageBox = styled.div`
  width: 160px;
  height: 160px;
  overflow: hidden;
  margin: 0 auto 16px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledText = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0 auto 16px;
  text-align: center;
`;

const StyledTutorialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 32px;
`;
