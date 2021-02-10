import { useState } from 'react';
// import Select from 'react-select';


const axios = require('axios').default;
// const dropdownOptions = [Einkommen, Lebensmittel, Shopping, Wohnen, Mobilität, Freizeit]
const AddTransaction = () => {
    // const [selected, setSelected] = useState(dropdownOptions[0])
    
  const [inputs, setInputs] = useState({
    category: 'Please select',
    transactionType: 'Ausgabe',
    title: '',
    amount: '',
    date: new Date(),
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
    // console.log('inputs :', inputs);
    e.preventDefault();
    axios
      .post('http://localhost:5000/transactions', inputs)
    //   .then((response) => console.log('response: ', response))
      .then(response => window.location.href = '/transactions')
      .catch((err) => console.log(err));
  };

  return (
    <section className="aktion-wrapper">
        <form>
            <div className="select-wrapper">
                <select
                    name="category"
                    onChange={(e) => handleChange(e)}
                    value={inputs}
                >
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
                    value={inputs}
                >
                        <option value="Ausgabe">Ausgabe</option>
                        <option value="Einnahme">Einnahme</option>
                </select>
            </div>
             {/* <DropDown 
             dropdownOptions={dropdownOptions}
             selected={selected}
             onSelectedChange={setSelected}/> */}

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
                placeholder="Datum der Ausgabe"
                name="date"
                value={inputs.date}
                onChange={(e) => handleChange(e)}
            />
        
            <input type="button" onClick={handleSubmit} value="Submit" />
        </form>
    </section>
  );
};

export default AddTransaction;
