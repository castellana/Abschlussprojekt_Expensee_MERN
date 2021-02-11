import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ einnahmen, ausgaben, einnahmenMinusAusgaben }) => {
  console.log(einnahmenMinusAusgaben);
  // const werte = [einnahmen, ausgaben];

  const data = {
    labels: ['Ausgaben', 'Einnahmen', 'Guthaben'],
    datasets: [
      {
        data: [ausgaben, einnahmen, einnahmenMinusAusgaben],
        backgroundColor: ['#ff00c8', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#ff00c8', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // const data = {
  //   labels: ['Einnahmen', 'Ausgaben'],
  //   datasets: [
  //     {
  //       label: 'Hallo',
  //       data: werte,
  //       backgroundColor: ['#4d76e6', '#F7313D'],
  //       borderColor: ['#4d76e6', '#F7313D'],
  //       borderWidth: 4,
  //     },
  //   ],
  // };
  return (
    <>
      <div className="doughnut-box">
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default DonutChart;
