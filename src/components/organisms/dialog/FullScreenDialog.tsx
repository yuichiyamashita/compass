import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  Dialog as MuiDialog,
  ListItemText as MuiListItemText,
  ListItem as MuiListItem,
  List as MuiList,
  TextField as MuiTextField,
  Divider as MuiDivider,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
  Slide as MuiSlide,
  InputAdornment as MuiInputAdornment,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { AppDispatch } from "../../../store";
import { selfDebateSelector } from "../../../Selectors";
import { saveThemeAction } from "../../../slice/selfdebateSlice";
import { PrimaryButton } from "../../atoms/button";

type Props = {
  title: string;
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
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
  const { title, open, onClose } = props;
  const [inputTheme, setInputTheme] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTheme(e.target.value);
  };

  // =============================================
  const state = useSelector(selfDebateSelector);
  const dispatch: AppDispatch = useDispatch();
  const theme = state.theme;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTheme = {
      theme: inputTheme,
      isInputed: true,
    };
    dispatch(saveThemeAction(newTheme));
  };

  return (
    <MuiDialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <MuiAppBar sx={{ position: "relative" }}>
        <MuiToolbar>
          <PrimaryButton color="#fff" onClick={onClose}>
            <CloseIcon />
          </PrimaryButton>
          <MuiTypography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </MuiTypography>
        </MuiToolbar>
      </MuiAppBar>
      <StyledContainer>
        <p>テーマは自分で入力するか、テンプレートやトレンドから選ぶことができます。</p>
        <br />
        <StyledSectionTitle>
          <BorderColorIcon />
          自分でテーマを決める
          <br />
          <span>※肯定派と否定派に分けられるテーマを設定しましょう</span>
        </StyledSectionTitle>
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
          <PrimaryButton text="決定" color="#fff" background="#33b6b1" />
        </StyledThemeInputForm>
        <StyledSectionTitle>テンプレートやトレンドから選ぶ</StyledSectionTitle>
        <MuiList>
          <MuiListItem button>
            <MuiListItemText primary="Phone ringtone" secondary="Titania" />
          </MuiListItem>
          <MuiDivider />
          <MuiListItem button>
            <MuiListItemText primary="Default notification ringtone" secondary="Tethys" />
          </MuiListItem>
        </MuiList>
      </StyledContainer>
    </MuiDialog>
  );
});

export default FullScreenDialog;

const StyledContainer = styled.div`
  min-height: 100vh;
  background: #f8fbfe;
  color: #555;
  padding: 32px 8px;
  @media screen and (min-width: 768px) {
    padding: 64px;
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
const StyledSectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  span {
    font-weight: 400;
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
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
