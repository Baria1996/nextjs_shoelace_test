import {
  chartOptions1,
  chartOptions2,
  chartOptions3,
  chartOptions4,
  chartOptions5,
  chartOptions6,
} from "@/utils/chart_options";
import EChartsReact from "echarts-for-react";
import { useState } from "react";
// import { SlButton, SlIcon } from "@/components/SLComponents";

export default function Charts() {
  const [chartConfig, setChartConfig] = useState({ height: 190 });
  const [chartContainerStyle, setChartContainerStyle] = useState({
    height: "110px",
  });

  // TODO: set height of each individual chart based on container height
  // useEffect(() => {
  // const numberOfCharts =
  //   document.querySelector("#charts-wrapper")?.childElementCount || 5;
  // const chartsWrapperHeight =
  //   document.querySelector("#charts-wrapper")?.getBoundingClientRect()
  //     .height || 800;
  // setChartHeight(chartsWrapperHeight / numberOfCharts - 1);
  // }, []);

  return (
    <>
      {/* <div id="tabs-wrapper">
        <div className="play-buttons-wrapper">
          <SlButton>Meteogram</SlButton>
          <div className="custom-divider"></div>
          <SlButton>Ensemble</SlButton>
        </div>
      </div> */}
      <div id="charts-wrapper">
        <EChartsReact
          style={chartContainerStyle}
          option={chartOptions1}
          opts={chartConfig}
        />
        <EChartsReact
          style={chartContainerStyle}
          option={chartOptions2}
          opts={chartConfig}
        />
        <EChartsReact
          style={chartContainerStyle}
          option={chartOptions3}
          opts={chartConfig}
        />
        <EChartsReact
          style={chartContainerStyle}
          option={chartOptions4}
          opts={chartConfig}
        />
        <EChartsReact
          style={chartContainerStyle}
          option={chartOptions5}
          opts={chartConfig}
        />
        <EChartsReact
          style={chartContainerStyle}
          option={chartOptions6}
          opts={chartConfig}
        />
      </div>
    </>
  );
}
