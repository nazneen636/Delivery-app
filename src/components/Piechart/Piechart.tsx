'use client'
// components/PieChart.js
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);




const PieChart = () => {
  const data = {
  
    datasets: [
      {
        data: [600, 57],
        backgroundColor: ['#000000', '#E97A20', '#3357FF'], // Color for each segment
        // hoverBackgroundColor: ['#FF5733', '#33FF57', '#3357FF'], // Color on hover
        // borderColor: ['#FF5733', '#33FF57', '#3357FF'], // Border color
        // borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="pie-chart w-[199px] h-[199px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
