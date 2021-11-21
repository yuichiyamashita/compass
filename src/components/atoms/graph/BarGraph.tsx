import React, { FC } from "react";
import { Bar } from "react-chartjs-2";

type Props = {
  graphData: { label: string; data: number }[];
};

const PieGraph: FC<Props> = (props) => {
  const { graphData } = props;
  const labels = graphData.map((obj) => obj.label);
  const dataset = graphData.map((obj) => obj.data);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "作成したテーマ数",
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "タグ別",
        // データの値
        data: dataset,
        // グラフの背景色
        backgroundColor: [
          "rgba(255,75,0, 0.5)",
          "rgba(0,90,255, 0.5)",
          "rgba(3,175,122, 0.5)",
          "rgba(77,196,255, 0.5)",
          "rgba(246,170,0, 0.5)",
          "rgba(255,241,0, 0.5)",
          "rgba(0,0,0, 0.5)",
        ],
      },
    ],
  };
  return <Bar data={data} options={options} height={320} />;
};

export default PieGraph;
