import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import {
  Dialog as MuiDialog,
  ListItemText as MuiListItemText,
  ListItem as MuiListItem,
  List as MuiList,
  TextField as MuiTextField,
  Divider as MuiDivider,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Typography as MuiTypography,
  Slide as MuiSlide,
  InputAdornment as MuiInputAdornment,
  IconButton as MuiIconButton,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TimelineIcon from "@mui/icons-material/Timeline";

import { AppDispatch, useSelector } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { openDialogAction, saveThemeAction } from "../../../slice/selfdebateSlice";
import { validateEmptyString } from "../../../functions/validations";
import { PrimaryButton } from "../../atoms/button";
import { BasicTypographyWithIcon } from "../../molecules/typography-with-icon";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <MuiSlide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(selfDebateSelector);
  const dialog = state.dialog;

  const [inputTheme, setInputTheme] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTheme(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmptyString(inputTheme)) {
      toast.error("テーマが未入力です。", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "colored",
      });
      return;
    }
    const newTheme = {
      theme: inputTheme,
      isInputed: true,
    };
    dispatch(saveThemeAction(newTheme));
    handleClose();
  };

  const handleClose = useCallback(() => {
    dispatch(openDialogAction(false));
  }, [dispatch]);

  return (
    <MuiDialog fullScreen open={dialog} onClose={handleClose} TransitionComponent={Transition}>
      <MuiAppBar sx={{ position: "relative", background: "#71a5f3" }}>
        <MuiToolbar>
          <MuiIconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </MuiIconButton>
          <MuiTypography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            テーマを決めよう
          </MuiTypography>
        </MuiToolbar>
      </MuiAppBar>
      <StyledContainer>
        <BasicTypographyWithIcon
          text="テンプレートやトレンドから選ぶ"
          fontSize="22px"
          fontWeight={600}
          icon={TimelineIcon}
          iconSize="32px"
          iconColor="secondary"
          spacing="xs"
          margin="0 0 8px 0"
        />
        <MuiList>
          <MuiListItem button>
            <MuiListItemText primary="バスや電車の優先席の使用をやめるべきか" />
          </MuiListItem>
          <MuiDivider />
          <MuiListItem button>
            <MuiListItemText primary="高等教育の費用は政府が負担するべきか" />
          </MuiListItem>
          <MuiDivider />
          <MuiListItem button>
            <MuiListItemText primary="日本は再生可能エネルギーをいっそう推進するべきか" />
          </MuiListItem>
          <MuiDivider />
          <MuiListItem button>
            <MuiListItemText primary="社会人は毎日3食ご飯を食べるべきか" />
          </MuiListItem>
          <MuiDivider />
          <MuiListItem button>
            <MuiListItemText primary="社会人は毎日3食ご飯を食べるべきか" />
          </MuiListItem>
        </MuiList>
        <div className="h-module-spacer--xl" />
        <StyledSectionTitleWrap>
          <BasicTypographyWithIcon
            text="自分でテーマを決める"
            fontSize="22px"
            fontWeight={600}
            icon={BorderColorIcon}
            iconSize="32px"
            iconColor="secondary"
            spacing="xs"
            margin="0 0 8px 0"
          />
          <span>※肯定派と否定派に分けられるテーマを設定しましょう</span>
        </StyledSectionTitleWrap>
        <StyledThemeInputForm onSubmit={handleSubmit}>
          <StyledTextField>
            <MuiTextField
              value={inputTheme}
              placeholder="（例）ご飯は毎日3食食べるべきか？"
              margin="none"
              size="small"
              fullWidth
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <TextFieldsIcon />
                  </MuiInputAdornment>
                ),
              }}
            />
          </StyledTextField>
          <PrimaryButton text="決定" color="#fff" background="#71a5f3" />
        </StyledThemeInputForm>
      </StyledContainer>
    </MuiDialog>
  );
});

export default FullScreenDialog;

const StyledContainer = styled.div`
  background: #f8fbfe;
  color: #555;
  height: 100vh;
  padding: 32px 8px;
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;
const StyledThemeInputForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledSectionTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  span {
    font-size: 12px;
  }
`;
const StyledTextField = styled.div`
  width: 100%;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;
