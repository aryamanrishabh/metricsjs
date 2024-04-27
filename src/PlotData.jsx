import React, { useEffect, useState } from "react";
import {
  Title,
  Legend,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PlotData = ({ chartData }) => {
  const [labels, setLabels] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartData?.[""]?.split(" ")?.slice(0, -1)?.join(" "),
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: chartData?.[""],
        data: labels?.map((l) => chartData?.[l]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    if (chartData) {
      const labels = Object.keys(chartData)?.filter((key) => !!key);

      setLabels(labels);
    }
  }, [chartData]);

  return (
    <div className="flex flex-1">
      {chartData && <Line options={options} data={data} />}
    </div>
  );
};

export default PlotData;
