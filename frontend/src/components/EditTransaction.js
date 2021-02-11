import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Nav/Navbar';
import BottomNavigation from './BottomNavigation';
import { parseISO, format } from 'date-fns';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const axios = require('axios').default;

const EditTransaction = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/transactions/${id}`)
      .then((Transaction) => {
        console.log(Transaction);
        setData(Transaction.data);
        console.log('transaction.data :', Transaction.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (event) => {
    setData((previous) => {
      return {
        ...previous,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/transactions/${id}`, data)
      // .then(response => console.log(response))
      .then((result) => (window.location.href = `/transactions/${id}/edited`))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <motion.section
        className="aktion-wrapper"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        {data !== undefined ? (
          <form action="">
            <div className="select-wrapper">
              <select
                name="category"
                onChange={(e) => handleChange(e)}
                value={data.category}
              >
                <option value="Lohn">Lohn</option>
                <option value="Lotto">Lotto</option>
                <option value="Geschenk">Geschenk</option>
                <option value="Lebensmittel">Lebensmittel</option>
                <option value="Shopping">Shopping</option>
                <option value="Wohnen">Wohnen</option>
                <option value="Mobilität">Mobilität</option>
                <option value="Freizeit">Freizeit</option>
              </select>
            </div>

            <div className="select-wrapper">
              <select
                name="transactionType"
                onChange={(e) => handleChange(e)}
                value={data.transactionType}
              >
                <option value="Ausgabe">Ausgabe</option>
                <option value="Einnahme">Einnahme</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Name der Ausgabe"
              name="title"
              value={data.title}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              placeholder="Betrag in Euros"
              name="amount"
              value={data.amount}
              onChange={(e) => handleChange(e)}
            />

            <input
              type="date"
              placeholder="Datum der Ausgabe"
              name="date"
              // value="2021-02-10"
              value={format(parseISO(data.date), 'yyyy-MM-dd')}
              onChange={(e) => handleChange(e)}
            />

            <button>
              <input type="button" onClick={handleEdit} value="AKTUALISIEREN" />
            </button>
          </form>
        ) : (
          'Loading'
        )}
      </motion.section>
      <BottomNavigation />
    </>
  );
};

export default EditTransaction;
