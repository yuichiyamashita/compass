import React, { FC } from "react";
import styled from "styled-components";
import { Grid as MuiGrid, Paper as MuiPaper, Icon as MuiIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MuiQuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MuiQuickreplyIcon from "@mui/icons-material/Quickreply";

import { BarGraph } from "../../atoms/graph";
import { BasicTabs } from "../../organisms/tabs";
import { MuiTheme } from "../../../assets/material-ui";

type Props = {
  title: string;
  graphData: {
    label: string;
    data: number;
  }[];
  contents: {
    id: string;
    text: string;
  }[];
};

const useStyles = makeStyles({
  root: {
    padding: "32px 8px",
    [MuiTheme.breakpoints.up("md")]: {
      padding: "32px",
    },
  },
});

const MainFeaturesBox: FC<Props> = (props) => {
  const classes = useStyles();
  const { title, graphData, contents } = props;

  return (
    <MuiPaper className={classes.root} elevation={4}>
      <MuiGrid container spacing={5}>
        <MuiGrid item xs={12}>
          <StyledTitle>
            {title === "Self Debate" && <MuiIcon component={MuiQuestionAnswerIcon} fontSize="large" />}
            {title === "Fast Thinking" && <MuiIcon component={MuiQuickreplyIcon} fontSize="large" />}
            <span className="w-module-spacer--xs" />
            {title}
          </StyledTitle>
        </MuiGrid>
        <MuiGrid xs={12} sm={6} item>
          <StyledItemBox>
            <BarGraph graphData={graphData} title="タグ別の作成数" />
          </StyledItemBox>
        </MuiGrid>
        {/* <MuiGrid xs={12} sm={6} item>
          <BasicTabs contents={contents} />
        </MuiGrid> */}
      </MuiGrid>
    </MuiPaper>
  );
};

export default MainFeaturesBox;

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  font-family: "Sriracha", cursive;
  text-align: center;
  color: #555;
  letter-spacing: 2px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const StyledItemBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 360px;
`;
