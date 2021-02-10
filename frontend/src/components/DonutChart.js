import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ einnahmen, ausgaben }) => {
  console.log(einnahmen);
  const werte = [einnahmen, ausgaben];
  const data = {
    labels: ['Einnahmen', 'Ausgaben'],
    datasets: [
      {
        label: 'Hallo',
        data: werte,
        backgroundColor: ['rgb(0, 153, 255)', 'rgb(255, 0, 55)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="doughnut-box">
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default DonutChart;
