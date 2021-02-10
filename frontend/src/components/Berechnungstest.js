import { useEffect, useState } from 'react';

const axios = require('axios').default;

const Berechnungtest = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    axios
      .get('http://localhost:5000/transactions')
      .then((transactions) => {
        setData(transactions.data);
        // console.log(transactions.data);
        // console.log('hallo');
      })
      .catch((err) => console.log(err));
  }, []);

  const einnahmen = [];
  const ausgaben = [];

  const array1 = data;
  const map1 = array1 !== undefined ? array1.map((x) => x.amount) : 'loading';

  const map2 =
    array1 !== undefined
      ? array1.map((x) =>
          x.transactionType === 'Einnahme'
            ? einnahmen.push(x.amount)
            : ausgaben.push(x.amount)
        )
      : 'loading';

  // const filter1 = map2.filter((x) => x === 'Ausgabe');
  // const map2 = array1.map((x) => x.amount);
  // const map3 = array1.map((x) => x.categorie);

  // console.log(filter1);
  console.log(map1);
  console.log(map2);
  // console.log(map3);

  console.log('EINNAHMEN');
  console.log(einnahmen);
  console.log('Ausgaben');
  console.log(ausgaben);

  const test2 = ausgaben.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(test2);

  return <div className="container"></div>;
};

export default Berechnungtest;
