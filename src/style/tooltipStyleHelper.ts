import { EChartOption } from "echarts";
import { Tooltip } from "./types";

const extraCssText =
  "border: 1px solid #1769AA;padding:8px 16px;border-radius:16px";
const tooltipHtmlTextGenerator = (
  params: EChartOption.Tooltip.Format[]
): string => {
  const tooltipEntries: Array<Tooltip> = [];
  params.forEach((param) => {
    const obj: Tooltip = {
      axisValue: String(param.axisValue),
      data: String(param.data),
      seriesName: String(param.seriesName),
    };
    tooltipEntries.push(obj);
  });
  let result = `<div style="color:#1769AA">${params[0].name}</div>`;
  result += "<hr style='color:#EBEBEB'/>";
  result += "<table >";
  tooltipEntries.forEach(
    (entry) =>
      (result += `<tr><td colspan="2">${entry.seriesName}</td><td>          </td><td style="font-weight: bold;">${entry.data}M €</td><tr>`)
  );
  return "</table>" + result;
};

export { extraCssText, tooltipHtmlTextGenerator };
