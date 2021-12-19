import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { InputThemeType } from "../types/mainFeaturesTypes";
// 型定義
type FactionState = {
  position?: string;
  id: string;
  opinions: {
    id: string;
    opinion: string;
  }[];
  isInputed: boolean;
};
type TagsState = {
  id: string;
  name: string;
}[];
type SelfDebateState = {
  id: string;
  created_at: string;
  theme: InputThemeType;
  tags: TagsState;
  positive: FactionState;
  negative: FactionState;
};
type InitialState = {
  list: SelfDebateState[];
  listItem: SelfDebateState;
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
    positive: {
      position: "agree",
      id: "",
      opinions: [],
      isInputed: false,
    },
    negative: {
      position: "disagree",
      id: "",
      opinions: [],
      isInputed: false,
    },
    tags: [
      {
        id: "",
        name: "",
      },
    ],
  },
};

// Slice本体
export const selfDebateSlice = createSlice({
  name: "selfdebate",
  initialState,
  reducers: {
    saveSelfDebateThemeAction: (state, action: PayloadAction<InputThemeType>) => {
      state.listItem.theme = action.payload;
    },
    saveOpinionsAction: (state, action: PayloadAction<FactionState>) => {
      switch (action.payload.position) {
        case "agree":
          state.listItem.positive = action.payload;
          break;
        case "disagree":
          state.listItem.negative = action.payload;
          break;
        default:
          break;
      }
    },
  },
});

// Actions
export const { saveSelfDebateThemeAction, saveOpinionsAction } = selfDebateSlice.actions;

// Reducer
export default selfDebateSlice.reducer;

// Selectors
export const selectSelfDebateTheme = (state: RootState): InputThemeType => state.selfdebate.listItem.theme;
export const selectSelfDebatePositiveOpinions = (state: RootState): FactionState => state.selfdebate.listItem.positive;
