"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

const CircularChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      datalabels: {
        color: "black",
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          const percentage =
            (
              (context.dataset.data[context.dataIndex] /
                context.dataset.data.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2) + "%";
          const realValue = context.dataset.data[context.dataIndex];

          return `   ${label}\n    ${percentage}\n       ${realValue}`;
        },
        anchor: "end",
        align: "start",
        clamp: true,
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
    // Grafiklerin ortasındaki boşluk
    cutout: "50%",
  };

  return (
    <div className="flex flex-wrap p-2 m-5 space-x-4">
      {data.map((project, index) => (
        <div key={index} className="flex-1 p-2 m-5">
          <h3 className="font-bold">{project.projeAdi}</h3>
          <Doughnut data={singleChartData(project)} options={options} />
        </div>
      ))}
    </div>
  );
};

const singleChartData = (project) => {
  return {
    labels: [
      "Yazılmış",
      "Yayınlanmış",
      "Atanmış",
      "İşleme Alınmış",
      "Red Edilmiş",
      "Tamamlanmış",
    ],
    datasets: [
      {
        data: [
          project.yazilmis,
          project.yayinlanmis,
          project.atanmis,
          project.islemeAlinmis,
          project.redEdilmis,
          project.tamamlanmis,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };
};

export default CircularChart;
