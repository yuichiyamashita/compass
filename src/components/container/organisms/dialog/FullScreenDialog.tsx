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

import { InputThemeType } from "../../../../types/mainFeaturesTypes";
import { AppDispatch, useSelector } from "../../../../store";
import { openFullScreenDialogAction, selectFullScreenDialog } from "../../../../slice/dialogSlice";
import { validateEmptyString } from "../../../../modules/validations";
import { PrimaryButton } from "../../../presenter/atoms";
import { BasicTypographyWithIcon } from "../../../presenter/molecules";

// テストデータ ===================================
const templates = [
  "コロナワクチンは打たなくても良いか、否か",
  "男女の友情は成立するか、しないか",
  "売れないミュージシャンはYoutubeを始めるべきか",
  "Lineの既読スルーはありか、なしか",
  "年収を上げるために会社をすぐ辞めるのはありか、なしか",
];
// ===============================================

type StyledProps = {
  color: string;
};

type Props = StyledProps & {
  text: string;
  placeholder: string;
  saveThemeAction: (theme: InputThemeType) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <MuiSlide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog: React.FC<Props> = React.memo((props) => {
  const { color, placeholder, text, saveThemeAction } = props;
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(selectFullScreenDialog);
  const isOpen = state.open;
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
    if (inputTheme.length >= 50) {
      toast.error("テーマは50文字以内で入力してください。", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "colored",
      });
      return;
    }
    const newTheme: InputThemeType = {
      text: inputTheme,
      isInputed: true,
    };
    saveThemeAction(newTheme);
    handleClose();
  };

  const handleClose = useCallback(() => {
    dispatch(openFullScreenDialogAction(false));
  }, [dispatch]);

  return (
    <MuiDialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <MuiAppBar sx={{ position: "relative", background: color }}>
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
          iconColor={color}
          spacing="xs"
          margin="0 0 8px 0"
        />
        <MuiList sx={{ height: "250px", overflow: "scroll" }}>
          {templates.map((template, index) => (
            <li key={index}>
              <MuiListItem button>
                ・ <MuiListItemText primary={template} />
              </MuiListItem>
              <MuiDivider />
            </li>
          ))}
        </MuiList>
        <div className="h-module-spacer--xl" />
        <StyledSectionTitleWrap>
          <BasicTypographyWithIcon
            text="自分でテーマを決める"
            fontSize="22px"
            fontWeight={600}
            icon={BorderColorIcon}
            iconSize="32px"
            iconColor={color}
            spacing="xs"
            margin="0 0 16px 0"
          />
          <span>{text}</span>
        </StyledSectionTitleWrap>
        <StyledThemeInputForm onSubmit={handleSubmit}>
          <StyledTextField>
            <MuiTextField
              value={inputTheme}
              placeholder={placeholder}
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
          <StyledButton>
            <PrimaryButton text="決定" color="#fff" background={color} fullWidth />
          </StyledButton>
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
  margin-bottom: 8px;

  span {
    font-size: 14px;
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

const StyledButton = styled.div`
  width: 100%;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 20%;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;
