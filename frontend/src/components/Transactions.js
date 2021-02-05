import { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"
const axios = require('axios').default

const Transactions = () => {
    const [data, setData] = useState(undefined)
    useEffect(() => { 
        axios
            .get('http://localhost:5000/transactions')
            .then(transactions => {
                console.log(transactions)
                setData(transactions.data)
            })
            .catch(err => console.log(err))
    }, [])
    return ( 
        <>
            <h2>Hier sind deine letzte Geldtransaktionen</h2>
            {/* {JSON.stringify(data)} probamos si nos da algo */}
            {data !== undefined ?
                data.map(transaction => <div key={transaction._id}>
                    <h3>{transaction.title}</h3>
                    <p>{transaction.amount}</p>
                    <p>{transaction.category}</p>
                    <p>{transaction.date}</p>

                    {/* <Link to={`/transactions/${transaction._id}`}> Klicke hier </Link> */}
                </div>)
                : "loading"}
        </>
     );
}
 
export default Transactions;