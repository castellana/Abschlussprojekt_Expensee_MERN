import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
const axios = require('axios').default
// import { useState } from 'react'

const EditSuccessful = () => {
    const { id } = useParams()
    const [data, setData] = useState(undefined) 

    useEffect(() => { 
        axios
            .get(`http://localhost:5000/transactions/${id}`)
            .then((Transaction) => {
                console.log("transaction editada :", Transaction);
                setData(Transaction.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return ( 
        <section>
            <h2>Erfolgreich eingetragen!</h2>
            {data !== undefined ? 
                <div>
                    <p>{data.category}</p>
                    <p>{data.amount}</p>
                </div>
            : 'Loading'}
        </section>

    );
}
export default EditSuccessful

