import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 型定義
type ThemeState = {
  theme: string;
  isInputed: boolean;
};
type FactionState = {
  agree: {
    id: string;
    opinions: string[];
    isInputed: boolean;
  };
  disagree: {
    id: string;
    opinions: string[];
    isInputed: boolean;
  };
};
type TagsState = {
  id: string;
  name: string;
}[];
type ConclusionState = {
  judgement: "" | "agree" | "disagree";
  reason: string[];
};
type activeStepState = 0 | 1 | 2 | 3 | 4;

type InitialState = {
  selfDebateId: string;
  created_at: string;
  theme: ThemeState;
  tags: TagsState;
  faction: FactionState;
  conclusion: ConclusionState;
  dialog: boolean;
  activeStep: activeStepState;
};

// 初期値
const initialState: InitialState = {
  selfDebateId: "",
  created_at: "",
  theme: {
    theme: "",
    isInputed: false,
  },
  faction: {
    agree: {
      id: "",
      opinions: [],
      isInputed: false,
    },
    disagree: {
      id: "",
      opinions: [],
      isInputed: false,
    },
  },
  tags: [
    {
      id: "",
      name: "",
    },
  ],
  conclusion: {
    judgement: "",
    reason: [],
  },
  dialog: false,
  activeStep: 0,
};

// Slice本体
export const selfDebateSlice = createSlice({
  name: "selfdebate",
  initialState,
  reducers: {
    openDialogAction: (state, action: PayloadAction<boolean>) => {
      state.dialog = action.payload;
    },
    handleClickNextStepAction: (state, action: PayloadAction<activeStepState>) => {
      state.activeStep = action.payload;
    },
    saveThemeAction: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload;
    },
    saveOpinionsAction: (state, action) => {},
  },
});

export const { openDialogAction, handleClickNextStepAction, saveThemeAction, saveOpinionsAction } =
  selfDebateSlice.actions;
export default selfDebateSlice.reducer;
