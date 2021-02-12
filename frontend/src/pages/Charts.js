import { useEffect, useState } from 'react';

// import ChartData from '../components/ChartData';

import DonutChart from '../components/DonutChart';

import Navbar from '../components/Nav/Navbar';
import BottomNavigation from '../components/BottomNavigation';

import ToggleCat from '../components/ToggleCat';
import KategorieItem2 from '../components/KategorieItem2';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import LineChart from '../components/LineChart';

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
    <>
      <Navbar />
      <motion.section
        className="charts-wrapper"
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="chart-data">
          <DonutChart
            einnahmen={einnahmen}
            ausgaben={ausgaben}
            einnahmenMinusAusgaben={einnahmenMinusAusgaben}
          />
          {/* <ChartData
            einnahmen={einnahmen}
            ausgaben={ausgaben}
            einnahmenMinusAusgaben={einnahmenMinusAusgaben}
          /> */}
        </div>

        <div className="kategorie-wrapper">
          {data1 !== undefined
            ? data1.map((item, index) => (
                <ToggleCat
                  key={index}
                  index={index}
                  title={item._id}
                  total={item.total}
                >
                  {item.totalCategory.map((cat) => (
                    <div className="sub-item">
                      <KategorieItem2
                        key={cat._id}
                        category={cat.category}
                        sum={cat.sum}
                      />
                    </div>
                  ))}
                </ToggleCat>
              ))
            : 'loading'}
          <div className="kategorie-box">
            <div className="kategorie-box-title gelb">
              <h2>Guthaben</h2>
              <h2>{einnahmenMinusAusgaben}€</h2>
            </div>
          </div>
        </div>
        <div className="chart-data">
          <LineChart
            einnahmen={einnahmen}
            ausgaben={ausgaben}
            einnahmenMinusAusgaben={einnahmenMinusAusgaben}
          />
        </div>
      </motion.section>
      <BottomNavigation />
    </>
  );
};

export default CurrentTransactions;
