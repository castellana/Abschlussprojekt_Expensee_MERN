import { useEffect, useState } from 'react';

import ChartData from '../components/ChartData';

import DonutChart from '../components/DonutChart';

// import LineChart from '../components/LineChart';

const axios = require('axios').default;

const CurrentTransactions = () => {
  const [data1, setData1] = useState(undefined);
  useEffect(() => {
    axios
      .get('http://localhost:5000/transactions/monthly/current')

      .then((transactions) => {
        console.log('transactions.data: ', transactions.data);
        setData1(transactions.data);
        // console.log("transactions.data[0] :", transactions.data[0]);
        // console.log("transactions.data[1] :", transactions.data[1]);
        // console.log(transactions.data[0].totalCategory);
        // console.log("_id :", transactions.data[0]._id)
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data1);
  const einnahmen = [];
  const ausgaben = [];
  const test1 =
    data1 !== undefined
      ? data1.map((x) =>
          x._id === 'Einnahme'
            ? einnahmen.push(x.total)
            : ausgaben.push(x.total)
        )
      : 'loading';

  console.log(test1);
  console.log('EINNAHMEN');
  console.log(einnahmen);
  console.log('Ausgaben');
  console.log(ausgaben);

  const einnahmenMinusAusgaben = einnahmen - ausgaben;

  console.log(einnahmenMinusAusgaben);

  return (
    <section className="charts-wrapper">
      <div className="chart-data">
        <DonutChart einnahmen={einnahmen} ausgaben={ausgaben} />
        <ChartData einnahmen={einnahmen} ausgaben={ausgaben} />
        {/* <LineChart /> */}
      </div>

      <div className="kategorie-wrapper">
        {data1 !== undefined
          ? data1.map((item, index) => (
              <div key={index} className="kategorie-box">
                <div className={`kategorie-box-title ${item._id}`}>
                  <h2>{item._id}</h2>
                  <h2>{item.total}</h2>
                </div>
                {item.totalCategory.map((cat, index) => (
                  <div key={index} className="kategorieItem-wrapper dunkelblau">
                    <h2>{cat.category}</h2>
                    <h2>{cat.sum}</h2>
                  </div>
                ))}
              </div>
            ))
          : 'loading'}
        <div className="kategorie-box">
          <div className="kategorie-box-title gelb">
            <h2>Guthaben</h2>
            <h2>{einnahmenMinusAusgaben}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentTransactions;
