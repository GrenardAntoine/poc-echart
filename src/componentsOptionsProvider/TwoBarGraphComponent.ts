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
      width: 1056,
    },
    tooltip: {
      trigger: "axis",
      extraCssText: extraCssText,
      formatter: function (
        args: EChartOption.Tooltip.Format | EChartOption.Tooltip.Format[]
      ) {
        const params = args as EChartOption.Tooltip.Format[];

        const result = tooltipHtmlTextGenerator(params);
        return result;
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
        axisTick: "none",
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
        barWidth: 12,
        tooltip: {
          formatter: `{value}  M €`,
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
          formatter: `{value}  M €`,
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
