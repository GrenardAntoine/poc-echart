import { EChartOption } from "echarts";
import { TooltipContentLine } from "./types";

const extraCssText =
  "border: 1px solid #1769AA;padding:8px 16px;border-radius:16px";
const tooltipHtmlTextGenerator = (
  hoveredBarPair: EChartOption.Tooltip.Format[]
): string => {
  const tooltipEntries: Array<TooltipContentLine> = [];

  hoveredBarPair.forEach((bar) => {
    const toolLipLine: TooltipContentLine = {
      axisValue: String(bar.axisValue),
      data: String(bar.data),
      seriesName: String(bar.seriesName),
    };
    tooltipEntries.push(toolLipLine);
  });

  const result = `<div style="display:flex;flex-direction:column; box-sizing:border-box; color:#212121">
    <div style="color:#1769AA">${hoveredBarPair[0].name}</div>
    <hr style='color:#EBEBEB; width: 100%'/>
    <div style="display:flex;flex-direction:row;justify-content: space-between; gap:10px">
      <div>${tooltipEntries[0].seriesName}</div>
      <div style="font-weight: bold;">${tooltipEntries[0].data}M€</div>
    </div>
    <div style="display:flex;flex-direction:row;justify-content: space-between; gap:10px">
      <div>${tooltipEntries[1].seriesName}</div>
      <div style="font-weight: bold;">${tooltipEntries[1].data}M€</div>
    </div>
  </div>`;

  return result;
};

export { extraCssText, tooltipHtmlTextGenerator };
