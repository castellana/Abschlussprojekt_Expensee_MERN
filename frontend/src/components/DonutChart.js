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
        backgroundColor: [
          'rgba(255, 0, 200, 0.801)',
          'rgba(81, 94, 235, 0.815)',
          'rgba(255, 207, 86, 0.801)',
        ],
        hoverBackgroundColor: ['#ff00c8', '#515FEB', '#FFCE56'],
        borderWidth: 0,
        // borderColor: 'rgba(255, 255, 255, 0.24)',
        // hoverBorderColor: [
        //   'rgba(255, 255, 255, 0.507)',
        //   'rgba(255, 255, 255, 0.425)',
        //   'rgba(255, 255, 255, 0.493)',
        // ],
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 12,
        padding: 20,
      },
      display: true,
      position: 'right',
      align: 'start',
    },
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
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default DonutChart;
