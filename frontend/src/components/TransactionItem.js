import { Link } from 'react-router-dom';
import red from './img/red.svg';
import blue from './img/blue.svg';

const TransactionItem = ({ transaction }) => {
  // console.log(transaction);

  const color = transaction.transactionType;

  return (
    <div className="transactionItem-wrapper">
      <div className="icon">
        {color === 'Einnahme' ? (
          <img src={blue} alt="green" />
        ) : (
          <img src={red} alt="red" />
        )}
      </div>
      <div className="item-box">
        <div className="transaktion-title">
          <h2>{transaction.title}</h2>
          <div className="timestamp">
            <div className="date">
              <p>{transaction.date}</p>
            </div>
          </div>
        </div>
        <div className="summe">
          <h2>{transaction.amount}€</h2>
        </div>
        {/* <p>{transaction.category}</p> */}
      </div>
      <Link to={`/transactions/${transaction._id}`}>XX</Link>
    </div>
  );
};

export default TransactionItem;
