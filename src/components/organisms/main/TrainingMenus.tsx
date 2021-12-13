import React from "react";
import { Grid as MuiGrid } from "@mui/material";

import selfDebateImage from "../../../assets/images/self_debate.svg";
import fastThinkingImage from "../../../assets/images/fast_thinking.svg";
import { TrainingMenuCard } from "./index";

const TrainingMenus: React.FC = React.memo(() => {
  return (
    <MuiGrid container spacing={4}>
      <MuiGrid item xs={12} md={6}>
        <TrainingMenuCard
          color="#71a5f3"
          title="Self debate"
          subTitle="相手に自分の意見を主張するためのトレーニング"
          label="セルフディベートを始める →"
          path="./selfdebate"
          image={selfDebateImage}
        >
          選んだテーマについて、自分自身で肯定と否定の両方を考え討論することで、偏見や飛躍した考えを修正することができます。
          <br />
          また、相手に「なるほど！」と思ってもらえる意見が言えるようになります。
        </TrainingMenuCard>
      </MuiGrid>

      <MuiGrid item xs={12} md={6}>
        <TrainingMenuCard
          color="#fbb73b"
          title="Fast thinking"
          subTitle="瞬時に最適解を導くためのトレーニング"
          label="ファストシンキングを始める →"
          path="./fastthinking"
          image={fastThinkingImage}
        >
          選んだテーマについて、瞬発的に思い浮かんだ原因や解決策を書き出し、思考スピードの向上を図ります。
          <br />
          また、悩みや不安などをテーマにすることで頭の中をクリアにし、実行力を身につけることができます。
        </TrainingMenuCard>
      </MuiGrid>
    </MuiGrid>
  );
});

export default TrainingMenus;
