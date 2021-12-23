import React, { FC } from "react";
import { Pie } from "react-chartjs-2";

type Props = {
  graphData: { label: string; data: number }[];
  title: string;
};

const PieGraph: FC<Props> = React.memo((props) => {
  const { graphData, title } = props;
  const labels = graphData.map((obj) => obj.label);
  const dataset = graphData.map((obj) => obj.data);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "作成数",
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
  return <Pie data={data} options={options} height={320} />;
});

export default PieGraph;
