import { BarElement, CategoryScale, Chart, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

const BarChart = ({ project }) => {
  const data = {
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
        label: project.projeAdi,
        data: [
          project.yazilmis,
          project.yayinlanmis,
          project.atanmis,
          project.islemeAlinmis,
          project.redEdilmis,
          project.tamamlanmis,
        ],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
