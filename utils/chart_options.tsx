const chartConstants = {
  iconSize: 15,
  fontSize: 9,
  fontWeight: "bold",
  chartLineStyle: {
    width: 1.75,
  },
};

const generateRandomData = (length: number = 21) => {
  return Array.from({ length }, () => Math.floor(Math.random() * length));
};

const xAxisData =
  // prettier-ignore
  [ "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat",  "Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat",  "Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat",  "Sun"];

// TODO: get mock data from wxcharts and use dimentions correctly
const dims = {
  time: 0,
  windSpeed: 1,
  R: 2,
};

const renderWindBarb = function (param: any, api: any) {
  const point = api.coord([api.value(dims.time), api.value(dims.windSpeed)]);
  const randomWindSpeed = Math.ceil(Math.floor(Math.random() * 70) / 5) * 5;
  return {
    type: "group",
    children: [
      {
        type: "image",
        style: {
          //   image: `/assets/images/wind_barbs.svg#svgView(viewBox(32 0 32 32))`,
          image: `/assets/images/wind_barbs_svg/wind_barbs_${randomWindSpeed}.svg`,
          x: -chartConstants.iconSize / 2,
          y: -chartConstants.iconSize / 2,
          width: chartConstants.iconSize,
          height: chartConstants.iconSize,
        },
        rotation: Math.random(),
        position: point,
      },
    ],
  };
};

export const chartOptions1 = {
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  series: [
    {
      data: generateRandomData(),
      type: "line",
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "black",
      },
    },
    {
      data: generateRandomData(),
      type: "line",
      clip: true,
      symbol: "none",
      lineStyle: {
        width: 1.75,
        type: "dashed",
      },
      itemStyle: {
        color: "crimson",
      },
    },
    {
      type: "custom",
      renderItem: renderWindBarb,
      encode: {
        x: dims.time,
        y: dims.windSpeed,
      },
      data: Array(21).fill(20),
      z: 10,
    },
  ],
};

export const chartOptions2 = {
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  series: [
    {
      type: "line",
      data: generateRandomData(),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "goldenrod",
      },
    },
    {
      type: "line",
      data: generateRandomData(),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "red",
      },
    },
  ],
};

export const chartOptions3 = {
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  series: [
    {
      type: "line",
      data: generateRandomData(),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "gray",
      },
    },
    {
      type: "line",
      data: generateRandomData(),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "dodgerblue",
      },
      areaStyle: {},
    },
  ],
};

export const chartOptions4 = {
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  series: [
    {
      type: "line",
      data: generateRandomData(),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "indigo",
      },
    },
    {
      type: "bar",
      data: generateRandomData(),
      clip: true,
      itemStyle: {
        color: "lightseagreen",
      },
    },
    {
      type: "bar",
      data: generateRandomData(),
      clip: true,
      itemStyle: {
        color: "palevioletred",
      },
    },
  ],
};

export const chartOptions5 = {
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  series: [
    {
      type: "line",
      data: Array(21).fill(10),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "palevioletred",
      },
    },
    {
      type: "line",
      data: generateRandomData(),
      clip: true,
      symbol: "none",
      lineStyle: chartConstants.chartLineStyle,
      itemStyle: {
        color: "yellowgreen",
      },
      areaStyle: {},
    },
  ],
};

export const chartOptions6 = {
  xAxis: {
    type: "category",
    data: xAxisData,
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      fontSize: chartConstants.fontSize,
      fontWeight: chartConstants.fontWeight,
    },
  },
  series: [
    {
      type: "bar",
      data: generateRandomData(),
      clip: true,
      itemStyle: {
        color: "lightskyblue",
      },
    },
    {
      type: "bar",
      data: generateRandomData(),
      clip: true,
      itemStyle: {
        color: "lightgreen",
      },
    },
    {
      type: "bar",
      data: generateRandomData(),
      clip: true,
      itemStyle: {
        color: "gold",
      },
    },
    {
      type: "bar",
      data: generateRandomData(),
      clip: true,
      itemStyle: {
        color: "plum",
      },
    },
  ],
};
