import EChartsReact from "echarts-for-react";
import { useEffect } from "react";

export default function Charts() {
  useEffect(() => {});

  const chartOptions = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };

  return (
    <div>
      <EChartsReact option={chartOptions} />
    </div>
  );
}
