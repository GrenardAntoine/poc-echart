import { EChartOption } from "echarts";
import type { LegendType } from "../business/types";

const TwoBarGraphComponents = (
  amData: number[],
  marketData: number[],
  xAxisData: string[],
  title: string,
  legend?: LegendType
): EChartOption => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    title: { text: title, left: "5%" },
    legend: {
      top: "5%",
      left: "center",
      data: legend?.data,
    },
    xAxis: [
      {
        type: "category",
        data: xAxisData,
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "M €",
        min: 0,
        max: 1000,
        interval: 200,
        axisLabel: {
          formatter: "{value} M €",
        },
      },
    ],
    series: [
      {
        name: "AM Money",
        type: "bar",
        tooltip: {
          formatter: `{value}  M €`,
        },
        data: amData,
        itemStyle: {
          color: "rgba(23, 105, 170, 0.4)",
          borderRadius: 50,
          width: 12, // NOT WORKING
        },
      },
      {
        name: "Market Money",
        type: "bar",
        tooltip: {
          formatter: `{value}  M €`,
        },
        data: marketData,
        itemStyle: {
          color: "#E0E0E0",
          borderRadius: 50,
          width: 12,
        },
      },
    ],
  };
};
export default TwoBarGraphComponents;
