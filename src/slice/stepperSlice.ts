import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// 型定義
type StepperState = {
  steps: {
    selfDebate: string[];
    fastThinking: string[];
  };
  activeStep: {
    selfDebate: number;
    fastThinking: number;
  };
};

// 初期値
const initialState: StepperState = {
  steps: {
    selfDebate: ["テーマ", "肯定", "否定", "結論"],
    fastThinking: ["テーマ選択", "主張"],
  },
  activeStep: {
    selfDebate: 0,
    fastThinking: 0,
  },
};

// 本体
export const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    moveSelfDebateStepAction: (state, action: PayloadAction<StepperState>) => {
      state.activeStep.selfDebate = action.payload.activeStep.selfDebate;
    },
    moveFastThinkingStepAction: (state, action: PayloadAction<StepperState>) => {
      state.activeStep.fastThinking = action.payload.activeStep.fastThinking;
    },
  },
});

// Actions
export const { moveSelfDebateStepAction, moveFastThinkingStepAction } = stepperSlice.actions;

// Reducer
export default stepperSlice.reducer;

// Selector
export const selectSelfDebateSteps = (state: RootState): string[] => state.stepper.steps.selfDebate;
export const selectSelfDebateActiveStep = (state: RootState): number => state.stepper.activeStep.selfDebate;
export const selectFastThinkingSteps = (state: RootState): string[] => state.stepper.steps.fastThinking;
export const selectFastThinkingActiveStep = (state: RootState): number => state.stepper.activeStep.fastThinking;
