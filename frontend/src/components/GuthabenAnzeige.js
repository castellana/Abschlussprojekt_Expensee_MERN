import { useEffect, useState } from 'react';
import Counter from '../components/Counter';

const axios = require('axios').default;

const GuthabenAnzeige = () => {
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
  const einnahmenMinusAusgaben = einnahmen - ausgaben;
  console.log(einnahmenMinusAusgaben);
  return (
    <div className="guthaben-wrapper">
      <div className="guthaben">
        <Counter
          from={0}
          to={einnahmenMinusAusgaben}
          result={einnahmenMinusAusgaben}
        />
      </div>
      <div className="plus-minus">
        <div className="einnahmen">
          <h3>Einnahmen</h3>
          <h2>{einnahmen}€</h2>
        </div>
        <div className="ausgaben">
          <h3>Ausgaben</h3>
          <h2>-{ausgaben}€</h2>
        </div>
      </div>
    </div>
  );
};

export default GuthabenAnzeige;
