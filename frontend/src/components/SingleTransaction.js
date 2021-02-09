import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const axios = require('axios').default;

const TransactionShowDel = () => {
    const { id } = useParams();
    const [data, setData] = useState(undefined);

    useEffect(() => {
        axios
        .get(`http://localhost:5000/transactions/${id}`)
        .then((Transaction) => {
            console.log("transaction to delete :", Transaction.data);
            setData(Transaction.data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:5000/transactions/${id}`)
            // .then(result => console.log(result))
            .then(result => window.location.href = '/transactions')
            .catch((err) => console.log(err));
    }

    return (
        <section className="aktion-wrapper">
          {data !== undefined ? 
        //   data.map(item => 
            <form action="">
                <div className="select-wrapper">
                    <p>{data.category}</p>
                </div>

                <div className="select-wrapper">
                    <p>{data.transactionType}</p>
                </div>

                <p>{data.title}</p>
                <p>{data.amount}</p>
                <p>{data.date}</p>
                
                <Link to={`/transactions/${id}/edit`}>Edit</Link>

                <div className="delete">
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </form>
          : 'Loading'}
        </section>
    )
}

export default TransactionShowDel;
