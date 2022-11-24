// src/App.js
import ReactEcharts from "echarts-for-react";
import React from "react";
import { AssetType } from "./business/types";
import TwoBarGraphComponents from "./componentsOptionsProvider/TwoBarGraphComponent";
import worldMap from "./world.json"; // get from https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json
import * as echarts from "echarts";

function App() {
  const verticalBarChart = () => {
    return {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
  };
  const pieOptions = () => {
    return {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    };
  };
  const halfPieOptions = () => {
    return {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 25, name: "Search Engine" },
            { value: 50, name: "Direct" },
            { value: 25, name: "Email" },
            { value: 25, name: "Union Ads" },
            {
              value: 125,
              name: null,
              itemStyle: { opacity: 0 },
              tooltip: { show: false },
            },
          ],
        },
      ],
    };
  };

  const mapOptions = () => {
    return {
      title: { text: "Map Monde de ouf" },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: "right",
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            "#313695",
            "#4575b4",
            "#74add1",
            "#abd9e9",
            "#e0f3f8",
            "#ffffbf",
            "#fee090",
            "#fdae61",
            "#f46d43",
            "#d73027",
            "#a50026",
          ],
        },
        text: ["High", "Low"],
        calculable: true,
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: "left",
        top: "top",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "Map Monde de ouf",
          type: "map",
          roam: true,
          map: "WORLD",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: "France", value: 4822023 },
            { name: "Italy", value: 0 },
          ],
        },
      ],
    };
  };

  echarts.registerMap("WORLD", worldMap);

  const amData = [20.0, 40.9, 70.0, 230.2, 250.6, 760.7, 150.6, 120.2, 320.6];
  const marketData = [
    403.6, 603.9, 903.0, 900.4, 900.7, 700.7, 170.6, 120.2, 480.7,
  ];
  const xAxisData = Object.keys(AssetType);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ReactEcharts option={verticalBarChart()} />

      <ReactEcharts
        style={{
          border: "1px solid red",
          boxSizing: "border-box",
          width: 1065,
          alignSelf: "center",
        }}
        option={TwoBarGraphComponents(
          amData,
          marketData,
          xAxisData,
          "Holdings breakdown by asset type",
          {
            data: [
              {
                name: "AM Money",
                icon: "circle",
              },
              {
                name: "Market Money",
                icon: "circle",
              },
            ],
          }
        )}
      />
      <ReactEcharts option={pieOptions()} />
      <ReactEcharts option={halfPieOptions()} />
      <ReactEcharts option={halfPieOptions()} />
      <ReactEcharts option={mapOptions()} />
    </div>
  );
}

export default App;
