// import { Bar } from "react-chartjs-2";

// const Chart = () => {
//   const data = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [65, 59, 80, 81, 56, 55],
//         backgroundColor: [
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(75, 192, 192, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Monthly Sales Chart",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <div style={{ width: "600px", margin: "0 auto" }}>
//         <h2>Sales Data</h2>
//         <Bar data={data} options={options} />
//         helo
//       </div>
//     </div>
//   );
// };

// export default Chart;


import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const chartData = {
    labels: ['test', 'test2', 'test3'],
    datasets: [
      {
        label: 'Temperature',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Humidity',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Brightness',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: false,
        borderColor: 'rgb(255, 206, 86)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
        type: 'linear',
      },
    },
  };
  const chartKey = 'line';

  return (
    <div className="graph--container">
      ĐỒ THỊ
      <Line data={chartData} options={options} />
    </div>
  );
};