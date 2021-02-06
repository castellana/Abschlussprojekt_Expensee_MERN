import { useState } from 'react'
const axios = require('axios').default

const AddTransaction = () => {
    const [inputs, setInputs] = useState ({ category: "Lebensmittel", transactionType: "Ausgabe",
        title: "", amount: "", date: new Date()
    })

    const handleChange = event => {
        setInputs((previous) => {
            return {
                ...previous,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = () => {
        console.log("inputs :", inputs);
        axios
            .post('http://localhost:5000/transactions', inputs)
            .then(response => console.log("response: ", response))
            // .then(response => window.location.href = "/")
            .catch(err => console.log(err))
    }
    
    return ( 
        <>
            <h2>Neue Transaktion eingeben</h2>
            <form>
                <select name="category" onChange={e => handleChange(e)} value={inputs}>
                    <option value="Lebensmittel">Lebensmittel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Wohnen">Wohnen</option>
                    <option value="Mobilität">Mobilität</option>
                    <option value="Freizeit">Freizeit</option>
                </select>
                <select name="transactionType" onChange={e => handleChange(e)} value={inputs}>
                    <option value="Ausgabe">Ausgabe</option>
                    <option value="Einnahme">Einnahme</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Name der Ausgabe" 
                    name="title" 
                    value={inputs.title} 
                    onChange={e => handleChange(e)}/>
                <input 
                    type="number" 
                    placeholder="Betrag in Euros" 
                    name="amount" 
                    value={inputs.amount} 
                    onChange={e => handleChange(e)}/>
                <input 
                    type="date" 
                    placeholder="Datum der Ausgabe" 
                    name="date" 
                    value={inputs.date} 
                    onChange={e => handleChange(e)}/>
                <input 
                    type="button" 
                    onClick={handleSubmit} 
                    value="Submit"/>
            </form>
        </>
     );
}
 
export default AddTransaction;