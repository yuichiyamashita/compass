import React from "react";
import { Grid as MuiGrid } from "@mui/material";

import { TrainingMenuCard } from "./index";

const TrainingMenus: React.FC = React.memo(() => {
  return (
    <MuiGrid container spacing={4}>
      <MuiGrid item xs={12} md={6}>
        <TrainingMenuCard
          color="#33b6b1"
          title="Self debate"
          subTitle="相手に自分の意見を主張するためのトレーニング"
          label="セルフディベートを始める →"
          path="./selfdebate"
        >
          設定したテーマについて、自分自身で肯定派と否定派の両方を考え討論することで、偏見や飛躍した考えを修正することができます。
          <br />
          そして、相手に「なるほど！」と思ってもらえる意見が言えるようになります。
        </TrainingMenuCard>
      </MuiGrid>

      <MuiGrid item xs={12} md={6}>
        <TrainingMenuCard
          color="#71a5f3"
          title="Fast thinking"
          subTitle="瞬時に最適解を導くためのトレーニング"
          label="ファストシンキングを始める →"
          path="./fastthinking"
        >
          設定したテーマについて、瞬発的に思い浮かんだ原因や解決策を書き出し、思考スピードの向上を図ります。
          <br />
          また、悩みや不安などをテーマにすることで頭の中をクリアにし、実行力を身につけることができます。
        </TrainingMenuCard>
      </MuiGrid>
    </MuiGrid>
  );
});

export default TrainingMenus;
