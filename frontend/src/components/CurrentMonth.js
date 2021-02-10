import { useEffect, useState } from 'react'
import Navbar from './Nav/Navbar';
import BottomNavigation from './BottomNavigation';
const axios = require('axios').default


const CurrentTransactions = () => {
    const [data1, setData1] = useState(undefined) 
    useEffect(() => { 
        axios
            .get('http://localhost:5000/transactions/monthly/current')
            
            .then(transactions => {
                console.log("transactions.data: ", transactions.data);
                setData1(transactions.data)   
                // console.log("transactions.data[0] :", transactions.data[0]);
                // console.log("transactions.data[1] :", transactions.data[1]);
                // console.log(transactions.data[0].totalCategory);
                // console.log("_id :", transactions.data[0]._id)
            })
            .catch(err => console.log(err))
    }, []
    )

    return ( 
        <>
            <Navbar />
                <h2>Hier sind deine Geldtransaktionen vom AKTUELLEN MONATS</h2>
            
                {data1 !== undefined ?
                    data1.map(item => 
                        <div key={item._id}>
                            <p>{item._id}</p>
                            <p>{item.total}</p>
                            
                            {item.totalCategory.map(cat => 
                                <div key={cat._id}>
                                    <p>{cat.category}</p>
                                    <p>{cat.sum}</p>
                                </div>)
                            }
                        </div>  
                    )
                    : "loading"} 
            <BottomNavigation />
        </>
     );
}
 
export default CurrentTransactions;