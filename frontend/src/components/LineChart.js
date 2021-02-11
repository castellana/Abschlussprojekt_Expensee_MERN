import React from 'react';

import { Bar } from 'react-chartjs-2';

const VerticalBar = ({ einnahmen, ausgaben, einnahmenMinusAusgaben }) => {
  const data = {
    labels: ['Ausgaben', 'Einnahmen', 'Guthaben'],
    datasets: [
      {
        label: 'Euro',
        data: [+ausgaben, +einnahmen, einnahmenMinusAusgaben],
        backgroundColor: ['#ff00c8', '#515FEB', '#FFCE56'],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   '#075588',
        //   'rgba(255, 206, 86, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      labels: {
        fontColor: 'white',
        fontSize: 18,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'white',
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'white',
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="line-box">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default VerticalBar;
