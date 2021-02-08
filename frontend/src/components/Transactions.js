import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './TransactionItem';

const axios = require('axios').default;

const Transactions = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    axios
      .get('http://localhost:5000/transactions')
      .then((transactions) => {
        setData(transactions.data);
        console.log(transactions.data);
        console.log('hallo');
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="transaction-list">
        {data !== undefined
          ? data.map((transaction, index) => (
              <TransactionItem key={index} transaction={transaction} />
            ))
          : 'loading'}
        <div className="more-action">
          <button>
            <Link to="/add">Neue Transaktion eingeben</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
