import { EChartOption } from "echarts";
import type { LegendType } from "../business/types";
import {
  extraCssText,
  tooltipHtmlTextGenerator,
} from "../style/tooltipStyleHelper";

const TwoBarGraphComponents = (
  amData: number[],
  marketData: number[],
  xAxisData: string[],
  title: string,
  legend?: LegendType
): EChartOption => {
  return {
    grid: {
      width: 1065,
      left: 40,
      right: 50,
      top: 60,
      bottom: 50,
    },
    tooltip: {
      trigger: "axis",
      extraCssText: extraCssText,
      formatter: (params) =>
        tooltipHtmlTextGenerator(params as EChartOption.Tooltip.Format[]),
    },
    title: { text: title },
    legend: {
      top: "5%",
      left: "70%",
      data: legend?.data,
    },
    xAxis: [
      {
        type: "category",
        data: xAxisData,
        axisLine: {
          show: false,
        },
        axisTick: "none",
        axisPointer: {
          type: "none",
        },
        axisLabel: {
          color: "#666666",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "M€  ",
        nameTextStyle: { align: "right" },
        min: 0,
        max: 1000,
        interval: 200,
        axisLabel: {
          formatter: "{value}",
          align: "right",
          color: "#666666",
        },
        splitLine: {
          lineStyle: { type: "dashed" },
        },
      },
    ],
    series: [
      {
        name: "AM Money",
        type: "bar",
        barWidth: 12,
        tooltip: {
          formatter: `{value} M€`,
        },
        data: amData,
        itemStyle: {
          color: "#1769AA",
          borderRadius: 50,
        },
      },
      {
        name: "Market Money",
        type: "bar",
        barWidth: 12,
        tooltip: {
          formatter: `{value} M€`,
        },
        data: marketData,
        itemStyle: {
          color: "#E0E0E0",
          borderRadius: 50,
        },
      },
    ],
  };
};
export default TwoBarGraphComponents;
