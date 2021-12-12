import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 型定義
type ThemeState = {
  theme: string;
  isInputed: boolean;
};
type OpinionState = {
  affirmative: {
    opinions: string[];
    isInputed: boolean;
  };
  denial: {
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
  opinion: OpinionState;
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
  tags: [
    {
      id: "",
      name: "",
    },
  ],
  opinion: {
    affirmative: {
      opinions: [],
      isInputed: false,
    },
    denial: {
      opinions: [],
      isInputed: false,
    },
  },
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
    handleNextAction: (state, action: PayloadAction<activeStepState>) => {
      state.activeStep = action.payload;
    },
    saveThemeAction: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload;
    },
    saveDebateAction: (state, action) => {
      state.created_at = action.payload.created_at;
      state.selfDebateId = action.payload.selfDebateId;
      state.tags = action.payload.tags;
      state.opinion = action.payload.opinion;
      state.conclusion = action.payload.conclusion;
    },
  },
});

export const { openDialogAction, handleNextAction, saveThemeAction, saveDebateAction } = selfDebateSlice.actions;
export default selfDebateSlice.reducer;
