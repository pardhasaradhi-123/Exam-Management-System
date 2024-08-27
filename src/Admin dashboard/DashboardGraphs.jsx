import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardGraphs = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Students Enrolled",
        data: [100, 200, 300, 250, 400, 500],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Questions Answered",
        data: [50, 150, 200, 300, 350, 400],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Statistics",
      },
    },
  };

  return (
    <div className="mt-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default DashboardGraphs;
