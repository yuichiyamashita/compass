import React, { FC } from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NoteIcon from "@mui/icons-material/Note";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {
  contents: {
    id: string;
    text: string;
  }[];
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs: FC<Props> = (props) => {
  const { contents } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "360px",
        color: "#666",
      }}
    >
      <Box sx={{ borderBottom: "1px solid #8bd5da" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab icon={<NoteIcon />} label="最近作成したテーマ" {...a11yProps(0)} />
          <Tab icon={<BookmarkIcon />} label="お気に入り" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box sx={{ height: "280px", overflow: "scroll" }}>
        {/* 最近のテーマ */}
        <TabPanel value={value} index={0}>
          {/* firestoreからデータを取得 */}
          {contents.map((content) => (
            <StyledList key={content.id}>
              <a href="dammy">{content.text}</a>
            </StyledList>
          ))}
        </TabPanel>
        {/* ブックマーク */}
        <TabPanel value={value} index={1}>
          {/* firestoreからデータを取得 */}
          {contents.map((content) => (
            <StyledList key={content.id}>
              <a href="dammy">{content.text}</a>
            </StyledList>
          ))}
        </TabPanel>
      </Box>
    </Box>
  );
};
export default BasicTabs;

const StyledList = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  &:last-child {
    border-bottom: none;
  }
`;
