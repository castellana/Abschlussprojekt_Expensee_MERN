import SuccessButton from './SuccessButton';

import ticketLine from './img/ticket-line.svg';

const SuccessMessage = () => {
  return (
    <>
      <div className="success-wrapper">
        <div className="success-btn">
          <SuccessButton />
        </div>
        <div className="ticket2">
          <header className="ticket2__header">
            <div className="success-title">
              <h2>Erfolgreich eingetragen!</h2>
            </div>
          </header>
          <div className="ticket2__rip">
            <div className="ticket-line">
              <img src={ticketLine} alt="ticketLine" />
            </div>
          </div>
          <div className="ticket2__body">
            <div className="success-ticket-box">
              <div className="success-date">
                <div className="success-datum">
                  <h3>Datum</h3>
                  <h2>22 Oktober 2020</h2>
                </div>
                <div className="success-zeit">
                  <h3>Zeit</h3>
                  <h2>15:00</h2>
                </div>
              </div>
              <div className="success-kategorie">
                <h3>Kategorie</h3>
                <h2>Lebensmittel</h2>
              </div>
              <div className="success-summe">
                <h3>Summe</h3>
                <h2>520.00€</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
