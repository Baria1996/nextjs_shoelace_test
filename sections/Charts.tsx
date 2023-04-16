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

  const seriesData = [12, 23, 22, 21, 13, 14, 15];

  const chartContainerStyle = {
    height: chartContainerHeight,
  };
  const chartConfig = { height: chartHeight };

  const dims = {
    time: 0,
    windSpeed: 1,
    R: 2,
    waveHeight: 3,
    weatherIcon: 2,
    minTemp: 3,
    maxTemp: 4,
  };
  const iconSize = 15;

  const renderWindBarb = function (param: any, api: any) {
    const point = api.coord([api.value(dims.time), api.value(dims.windSpeed)]);
    console.log(point);
    return {
      type: "group",
      children: [
        {
          type: "image",
          style: {
            image: "/assets/images/wind_barbs/wind_barbs_5.png",
            x: -iconSize / 2,
            y: -iconSize / 2,
            width: iconSize,
            height: iconSize,
          },
          // rotation: directionMap[api.value(dims.R)],
          position: point,
        },
      ],
    };
  };

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
        data: seriesData,
        type: "line",
        clip: true,
      },
      {
        type: "custom",
        renderItem: renderWindBarb,
        // encode: {
        //   x: dims.time,
        //   y: dims.windSpeed,
        // },
        data: [2, 13, 5, 2, 13, 24, 5],
        z: 10,
      },
    ],
  };

  const chartOptions2 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: seriesData,
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
        option={chartOptions2}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions2}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions2}
        opts={chartConfig}
      />
      <EChartsReact
        style={chartContainerStyle}
        option={chartOptions2}
        opts={chartConfig}
      />
    </div>
  );
}
