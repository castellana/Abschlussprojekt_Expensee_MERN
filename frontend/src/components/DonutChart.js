import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ einnahmen, ausgaben }) => {
  const werte = [einnahmen, ausgaben];
  const data = {
    labels: ['Einnahmen', 'Ausgaben'],
    datasets: [
      {
        label: 'Hallo',
        data: werte,
        backgroundColor: ['#4d76e6', '#F7313D'],
        borderColor: ['#4d76e6', '#F7313D'],
        borderWidth: 4,
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
