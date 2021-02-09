import { useEffect, useState } from 'react'
const axios = require('axios').default

const CurrentTransactions = () => {
    const [data, setData] = useState(undefined)
    useEffect(() => { 
        axios
            .get('http://localhost:5000/transactions/monthly/current')

            .then(transactions => {
                // console.log("transactions :", transactions)
                setData(transactions.data)
                // console.log("transactions.data :", transactions.data);
                console.log("data :", data);
                
            })
            .catch(err => console.log(err))
    }, []
    )
    return ( 
        <>
            <h2>Hier sind deine Geldtransaktionen vom AKTUELLEN MONATS</h2>
            {data !== undefined ?
                data.map(transaction => 
                //<Link to={`/transactions/${transaction._id}`}> 
                <div key={transaction._id}>
                    <p>{transaction._id}</p> {/* Hier ist _id die Category! */}
                   
                    <p>{transaction.total}</p> {/* "total" ist die Summe der amounts (pro Category) */}
                </div>  
                 //</Link>
                 )
                : "loading"}
        </>
     );
}
 
export default CurrentTransactions;