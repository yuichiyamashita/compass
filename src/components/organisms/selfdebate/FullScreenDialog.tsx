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
import { openDialogAction, saveThemeAction, handleClickNextStepAction } from "../../../slice/selfdebateSlice";
import { validateEmptyString } from "../../../functions/validations";
import { PrimaryButton } from "../../atoms/button";
import { BasicTypographyWithIcon } from "../../molecules/typography-with-icon";

type StyledProps = {
  color: string;
};

type Props = StyledProps;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <MuiSlide direction="up" ref={ref} {...props} />;
});

const templates = [
  "コロナワクチンは打たなくても良いか、否か",
  "男女の友情は成立するか、しないか",
  "売れないミュージシャンはYoutubeを始めるべきか",
  "Lineの既読スルーはありか、なしか",
  "年収を上げるために会社をすぐ辞めるのはありか、なしか",
];

const FullScreenDialog: React.FC<Props> = React.memo((props) => {
  const { color } = props;
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
    if (inputTheme.length >= 50) {
      toast.error("テーマは50文字以内で入力してください。", {
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
    dispatch(handleClickNextStepAction(1));
    handleClose();
  };

  const handleClose = useCallback(() => {
    dispatch(openDialogAction(false));
  }, [dispatch]);

  return (
    <MuiDialog fullScreen open={dialog} onClose={handleClose} TransitionComponent={Transition}>
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
          iconColor="#33b6b1"
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
            iconColor="#33b6b1"
            spacing="xs"
            margin="0 0 16px 0"
          />
          <span>賛成派と反対派に分けられるテーマを設定しましょう</span>
        </StyledSectionTitleWrap>
        <StyledThemeInputForm onSubmit={handleSubmit}>
          <StyledTextField>
            <MuiTextField
              value={inputTheme}
              placeholder="例）義理チョコにお返しは必要か？"
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
