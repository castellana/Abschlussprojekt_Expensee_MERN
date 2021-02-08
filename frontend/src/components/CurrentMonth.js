import { useEffect, useState } from 'react'
const axios = require('axios').default

const CurrentTransactions = () => {
    const [data, setData] = useState(undefined)
    useEffect(() => { 
        axios
            .get('http://localhost:5000/transactions/monthly/current')
            .then(transaction => {
                console.log(transactions)
                setData(transactions.data)
            })
            .catch(err => console.log(err))
    }, [])
    return ( 
        <>
            <h2>Hier sind deine Geldtransaktionen vom AKTUELLEN MONATS</h2>
            {data !== undefined ?
                data.map(transaction => 
                //<Link to={`/transactions/${transaction._id}`}> 
                <div key={transaction._id}>
                    <h3>{transaction.title}</h3>
                    <p>{transaction.amount}</p>
                    <p>{transaction.category}</p>
                    <p>{transaction.date}</p>
                </div>  
                 //</Link>
                 )
                : "loading"}
        </>
     );
}
 
export default CurrentTransactions;