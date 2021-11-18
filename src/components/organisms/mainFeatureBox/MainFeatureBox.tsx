import React, { FC } from "react";
import styled from "styled-components";

import { Grid as MuiGrid } from "@mui/material";

type Props = {
  title: string;
  graph: any;
  contents: { id: string; text: string }[];
};

const MainFeaturesBox: FC<Props> = (props) => {
  const { title, graph, contents } = props;

  return (
    <MuiGrid container>
      <MuiGrid item xs={12}>
        <StyledTitle>{title}</StyledTitle>
      </MuiGrid>
      <MuiGrid xs={12} sm={6} item>
        <StyledItemBox>{graph}</StyledItemBox>
      </MuiGrid>
      <MuiGrid xs={12} sm={6} item>
        <StyledItemBox>
          <ul>
            {contents.map((content) => (
              <li key={content.id}>{content.text}</li>
            ))}
          </ul>
        </StyledItemBox>
      </MuiGrid>
    </MuiGrid>
  );
};

export default MainFeaturesBox;

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 16px 0;
`;
const StyledItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
