import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './TransactionItem';
import Navbar from './Nav/Navbar';
import BottomNavigation from './BottomNavigation';
import HomeIntro from '../components/HomeIntro';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

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
    <>
      <Navbar />

      <motion.div
        className="container"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <HomeIntro />
        <div className="transaction-list">
          {data !== undefined
            ? data.map((transaction, index) => (
                <TransactionItem key={index} transaction={transaction} />
              ))
            : '<h2>loading</h2'}
          <div className="more-action">
            <button>
              <Link to="/add">mehr Transaktionen anzeigen</Link>
            </button>
          </div>
        </div>
      </motion.div>
      <BottomNavigation />
    </>
  );
};

export default Transactions;
