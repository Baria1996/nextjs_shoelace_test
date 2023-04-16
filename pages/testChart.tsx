import { rawData } from "@/utils/raw_data";
import EChartsReact from "echarts-for-react";
import { useEffect } from "react";

export default function Charts() {
  useEffect(() => {});
  const directionMap: any = {};
  // prettier-ignore
  ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'].forEach(function (name, index) {
      directionMap[name] = Math.PI / 8 * index;
  });
  const data = rawData.map(function (entry: any) {
    return [entry.time, entry.windSpeed, entry.R, entry.waveHeight];
  });
  const dims = {
    time: 0,
    windSpeed: 1,
    R: 2,
    waveHeight: 3,
    weatherIcon: 2,
    minTemp: 3,
    maxTemp: 4,
  };
  const arrowSize = 10;
  const renderArrow = function (param: any, api: any) {
    const point = api.coord([api.value(dims.time), api.value(dims.windSpeed)]);
    return {
      type: "path",
      shape: {
        pathData: "M31 16l-15-15v9h-26v12h26v9z",
        x: -arrowSize / 2,
        y: -arrowSize / 2,
        width: arrowSize,
        height: arrowSize,
      },
      rotation: directionMap[api.value(dims.R)],
      position: point,
    };
  };

  const chartOptions = {
    grid: {
      top: 260,
      bottom: 125,
    },
    xAxis: {
      type: "time",
      maxInterval: 3600 * 1000 * 24,
      splitLine: {
        lineStyle: {
          color: "#ddd",
        },
      },
    },
    yAxis: [
      {
        name: "y-axis 1",
        nameLocation: "middle",
        nameGap: 35,
        axisLine: {
          lineStyle: {
            color: "#666",
          },
        },
        splitLine: {
          lineStyle: {
            color: "#ddd",
          },
        },
      },
      {
        name: "y-axis 2",
        nameLocation: "middle",
        nameGap: 35,
        max: 6,
        axisLine: {
          lineStyle: {
            color: "#015DD5",
          },
        },
        splitLine: { show: false },
      },
      {
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        type: "line",
        yAxisIndex: 1,
        showSymbol: false,
        emphasis: {
          scale: false,
        },
        symbolSize: 10,
        lineStyle: {
          color: "rgba(88,160,253,1)",
        },
        itemStyle: {
          color: "rgba(88,160,253,1)",
        },
        encode: {
          x: dims.time,
          y: dims.waveHeight,
        },
        data: data,
        z: 2,
      },
      {
        type: "custom",
        renderItem: renderArrow,
        encode: {
          x: dims.time,
          y: dims.windSpeed,
        },
        data: data,
        z: 10,
      },
    ],
  };

  return (
    <div>
      <EChartsReact opts={{ height: 600 }} option={chartOptions} />
    </div>
  );
}
