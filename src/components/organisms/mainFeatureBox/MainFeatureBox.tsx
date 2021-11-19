import React, { FC } from "react";
import styled from "styled-components";
import { Grid as MuiGrid } from "@mui/material";

import { PieGraph } from "../../atoms/graph";
import { BasicTabs } from "../../organisms/tabs";

type Props = {
  title: string;
  graphData: {
    labels: string[];
    dataset: number[];
  };
  contents: {
    id: string;
    text: string;
  }[];
};

const MainFeaturesBox: FC<Props> = (props) => {
  const { title, graphData, contents } = props;

  return (
    <>
      <MuiGrid container spacing={5}>
        <MuiGrid item xs={12}>
          <StyledTitle>{title}</StyledTitle>
        </MuiGrid>
        <MuiGrid xs={12} sm={6} item>
          <StyledItemBox>
            <PieGraph graphData={graphData} />
          </StyledItemBox>
        </MuiGrid>
        <MuiGrid xs={12} sm={6} item>
          <BasicTabs contents={contents} />
        </MuiGrid>
      </MuiGrid>
      <div className="h-module-spacer--xxl" />
    </>
  );
};

export default MainFeaturesBox;

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  // margin: 8px 0;
  color: #555;
  letter-spacing: 2px;
`;
const StyledItemBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 360px;
`;
