import React from "react";
import { Grid as MuiGrid } from "@mui/material";

import selfDebateImage from "../../../assets/images/self_debate.svg";
import fastThinkingImage from "../../../assets/images/fast_thinking.svg";
import { TrainingMenuCard } from "./index";

const TrainingMenus: React.FC = React.memo(() => {
  return (
    <MuiGrid container spacing={8}>
      <MuiGrid item xs={12} md={6}>
        <TrainingMenuCard
          color="#3f51b5"
          title="Self debate"
          subTitle="説得力のある意見を主張するためのトレーニング"
          label="セルフディベートを始める →"
          path="./selfdebate"
          image={selfDebateImage}
        >
          設定したテーマについて、自分自身で肯定と否定の両方を考え討論し、偏見や飛躍した考えを修正します。
        </TrainingMenuCard>
      </MuiGrid>

      <MuiGrid item xs={12} md={6}>
        <TrainingMenuCard
          color="#faa50a"
          title="Fast thinking"
          subTitle="瞬時に最適解を導くためのトレーニング"
          label="ファストシンキングを始める →"
          path="./fastthinking"
          image={fastThinkingImage}
        >
          設定したテーマについて、瞬発的に思い浮かんだ原因や解決策を書き出し、思考スピードの向上を図ります。
        </TrainingMenuCard>
      </MuiGrid>
    </MuiGrid>
  );
});

export default TrainingMenus;
