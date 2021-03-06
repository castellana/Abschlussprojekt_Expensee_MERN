import { Link } from 'react-router-dom';
import red from './img/red.svg';
import blue from './img/blue.svg';
import { parseISO, format } from 'date-fns'

const TransactionItem = ({ transaction }) => {

  const color = transaction.transactionType;
  return (
    <>
      <Link to={`/transactions/${transaction._id}`}>
        <div className="transactionItem-wrapper">
          <div className="icon">
            {color === 'Einnahme' ? (
              <img src={blue} alt="blue" />
            ) : (
              <img src={red} alt="red" />
            )}
          </div>
          <div className="item-box">
            <div className="transaktion-title">
              <h2>{transaction.title}</h2>
              <div className="timestamp">
                <div className="date">
                  {/* <p>{transaction.date}</p> */}
                  {/* zum testen von Datum: */}
                  <p>{format(parseISO(transaction.date), "dd/MM/yyyy")}</p>
                </div>
              </div>
            </div>
            <div className="summe">
              <h2>{transaction.amount}€</h2>
            </div>
            {/* <p>{transaction.category}</p> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default TransactionItem;
