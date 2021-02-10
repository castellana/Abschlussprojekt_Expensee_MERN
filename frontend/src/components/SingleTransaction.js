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
            console.log('transaction to delete :', Transaction.data);
            setData(Transaction.data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios
        .delete(`http://localhost:5000/transactions/${id}`)
        .then((result) => (window.location.href = '/transactions/'))
        .catch((err) => console.log(err));
    };

    return (
        <section className="aktion-wrapper">
        {data !== undefined ? (
            <form action="">
            <div className="select-wrapper">
                <div className="select-single">
                <h3>Kategorie</h3>
                <h2>{data.category}</h2>
                </div>
            </div>

            <div className="select-wrapper">
                <div className="select-single">
                <h3>Type</h3>
                <h2>{data.transactionType}</h2>
                </div>
            </div>
            <div className="select-single">
                <h3>Title</h3>
                <p>{data.title}</p>
            </div>
            <div className="select-single">
                <h3>Summe</h3>
                <p>{data.amount}€</p>
            </div>
            <div className="select-single last">
                <h3>Timestamp</h3>
                <p>{data.date}</p>
            </div>

            <button>
                <Link to={`/transactions/${id}/edit`}>Edit</Link>
            </button>

            <div className="delete">
                <button onClick={handleDelete}>Delete</button>
            </div>
            </form>
        ) : (
            'Loading'
        )}
        </section>
    );
};

export default TransactionShowDel;
