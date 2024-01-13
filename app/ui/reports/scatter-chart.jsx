import { Chart, PointElement, LinearScale, Title } from "chart.js";
import { Scatter } from "react-chartjs-2";
Chart.register(PointElement, LinearScale, Title);

const ScatterChart = ({ project }) => {
  const data = {
    datasets: [
      {
        label: project.projeAdi,
        data: [
          { x: project.yazilmis, y: project.yayinlanmis },
          { x: project.atanmis, y: project.islemeAlinmis },
          { x: project.redEdilmis, y: project.tamamlanmis },
        ],
        backgroundColor: "rgba(255,99,132,0.6)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Yazılmış Sayısı",
        },
      },
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Yayınlanmış Sayısı",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Projelerin Durumu",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <Scatter data={data} options={options} />;
};

export default ScatterChart;
