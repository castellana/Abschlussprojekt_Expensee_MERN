import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
const axios = require('axios').default

const EditTransaction = () => {
    const { id } = useParams()
    const [data, setData] = useState(undefined) 

    useEffect(() => { 
        axios
            .get(`http://localhost:5000/transactions/${id}`)
            .then((Transaction) => {
                console.log(Transaction);
                setData(Transaction.data);
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


    const handleEdit = () => {
        axios
            .put(`http://localhost:5000/transactions/${id}`, data)
            // .then(response => console.log(response))
            //   .then((result) => (window.location.href = `/transactions/${id}`))
            .then(result => window.location.href = `transactions/${id}/edited`)
            .catch(err => console.log(err))   
    }

    return (
        <section className="aktion-wrapper">
            {data !== undefined ? (
                <form action="">
                    <div className="select-wrapper">
                        <select
                            name="category"
                            onChange={(e) => handleChange(e)}
                            value={data}
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
                            value={data}
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
                        value={data.date}
                        onChange={(e) => handleChange(e)}
                    />
                    <button>
                        <input type="button" onClick={handleEdit} value="Edit" />
                    </button>
                    {/* <Link to={`/Contacts/${id}/edit`}>Edit</Link> */}
                </form>
            ): 
        'Loading'}
    </section>
    );
}

export default EditTransaction;