import { useState } from 'react';
import Navbar from './Nav/Navbar';
import BottomNavigation from './BottomNavigation';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const axios = require('axios').default;

const AddTransaction = () => {
  const [inputs, setInputs] = useState({
    category: '',
    transactionType: '',
    title: '',
    amount: '',
    date: '',
  });

  const handleChange = (event) => {
    setInputs((previous) => {
      return {
        ...previous,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/transactions', inputs)
      .then((response) => {
        window.location.href = `/transactions/${response.data._id}/edited`;
        console.log('response :', response);
      })
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
        <form>
          <div className="select-wrapper">
            <select
              name="category"
              onChange={(e) => handleChange(e)}
              value={inputs.category}
            >
              <option value="">Bitte Kategorie auswählen</option>
              <option value="Gehalt">Gehalt</option>
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
              value={inputs.transactionType}
            >
              <option value="">Ausgabe oder Einnahme auswählen</option>
              <option value="Ausgabe">Ausgabe</option>
              <option value="Einnahme">Einnahme</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Name der Ausgabe"
            name="title"
            value={inputs.title}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="number"
            placeholder="Betrag in Euros"
            name="amount"
            value={inputs.amount}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="date"
            placeholder="Datum dd/mm/yyyy"
            name="date"
            value={inputs.date}
            onChange={(e) => handleChange(e)}
          />

          <input type="button" onClick={handleSubmit} value="HINZUFÜGEN" />
        </form>
      </motion.section>
      <BottomNavigation />
    </>
  );
};

export default AddTransaction;
