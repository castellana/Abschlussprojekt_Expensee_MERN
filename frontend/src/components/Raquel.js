import { useEffect, useState } from 'react'
const axios = require('axios').default

const CurrentTransactions = () => {
    const [data1, setData1] = useState(undefined) //data der Summen
    const [data2, setData2] = useState(undefined) //data der Kategorien
    // const dataByCategory = transactions.data[0].sortedByCategory
    // const dataByAusgabeEinnahme = data[0].totalAusgabeEinahme
    useEffect(() => { 
        axios
            .get('http://localhost:5000/transactions/monthly/current')
            
            .then(transactions => {
                // const data1 = transactions.data[0].sortedByCategory
                // console.log("data1 : ", data1);
                // console.log("transactions :", transactions)
                setData1(transactions.data[0].totalAusgabeEinahme)
                setData2(transactions.data[0].sortedByCategory)
                
                // console.log("transactions.data[0] :", transactions.data[0]);
                // console.log("data :", data);
                // console.log("data sortedByCategory:", transactions.data[0].sortedByCategory);
                // console.log("data addedByEinAusgabe:", data[0].totalAusgabeEinahme);
            })
            .catch(err => console.log(err))
    }, []
    )

    return ( 
        <>
            <h2>Hier sind deine Geldtransaktionen vom AKTUELLEN MONATS</h2>
            {data1 !== undefined ?
                data1.map(sum => 
                    <div key={sum._id}>
                        <p>{sum._id}</p> 
                        <p>{sum.total}</p> 
                    </div>  
                )
                : "loading"} 

            {data2 !== undefined ?
                data2.map(category => 
                    <div key={category._id}>
                        <p>{category._id}</p> {/* Hier ist _id die Category! */}
                        <p>{category.totalCategory}</p> {/* "total" ist die Summe der amounts (pro Category) */}
                    </div>  
                )
                : "loading"}
        </>
     );
}
 
export default CurrentTransactions;