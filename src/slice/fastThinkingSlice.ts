import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// 型定義
type ThemeState = {
  text: string;
  isInputed: boolean;
};
type TagState = {
  id: string;
  name: string;
};
type SolutionState = {
  isInputed: boolean;
  texts: {
    id: string;
    text: string;
  }[];
};

type FastThinkingState = {
  id: string;
  created_at: string;
  theme: ThemeState;
  tag: TagState;
  solutions: SolutionState;
};

type InitialState = {
  list: FastThinkingState[];
  listItem: FastThinkingState;
};

// 初期値
const initialState: InitialState = {
  list: [],
  listItem: {
    id: "",
    created_at: "",
    theme: {
      text: "",
      isInputed: false,
    },
    tag: {
      id: "",
      name: "",
    },
    solutions: {
      isInputed: false,
      texts: [
        {
          id: "",
          text: "",
        },
      ],
    },
  },
};

// 本体
export const fastThinkingSlice = createSlice({
  name: "fastThinking",
  initialState,
  reducers: {
    saveFtTheme: (state, action: PayloadAction<ThemeState>) => {
      state.listItem.theme = action.payload;
    },
    saveFtSolution: (state, action: PayloadAction<SolutionState>) => {
      state.listItem.solutions = action.payload;
    },
  },
});

// Actions
export const { saveFtTheme, saveFtSolution } = fastThinkingSlice.actions;

// Reducer
export default fastThinkingSlice.reducer;

// Selectors
export const selectFtTheme = (state: RootState): ThemeState => state.fastThinking.listItem.theme;
export const selectFtSolutions = (state: RootState): SolutionState => state.fastThinking.listItem.solutions;
