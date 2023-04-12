import EChartsReact from "echarts-for-react";
import { useState } from "react";

export default function Charts() {
  const [chartHeight, setChartHeight] = useState(220);
  const [chartContainerHeight, setChartContainerHeight] = useState("130px");

  // TODO: set height of each individual chart based on container height
  // useEffect(() => {
  // const numberOfCharts =
  //   document.querySelector("#charts-wrapper")?.childElementCount || 5;
  // const chartsWrapperHeight =
  //   document.querySelector("#charts-wrapper")?.getBoundingClientRect()
  //     .height || 800;
  // setChartHeight(chartsWrapperHeight / numberOfCharts - 1);
  // }, []);

  const chartContainerStyle = {
    height: chartContainerHeight,
  };
  const chartConfig = { height: chartHeight };
  const chartOptions1 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [12, 23, 22, 21, 13, 14, 15],
        type: "line",
        clip: true,
      },
    ],
  };

  return (
    <div id="charts-wrapper">
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions1}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions1}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions1}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions1}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions1}
        opts={chartConfig}
      />
    </div>
  );
}
