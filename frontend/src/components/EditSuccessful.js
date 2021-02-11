import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SuccessButton from './SuccessButton';
import Navbar from './Nav/Navbar';
import BottomNavigation from './BottomNavigation';

import Clock from '../components/Clock';

import ticketLine from './img/ticket-line.svg';

const axios = require('axios').default;
// import { useState } from 'react'

const EditSuccessful = () => {
    const { id } = useParams();
    const [data, setData] = useState(undefined);
    const heute = new Date().toLocaleString();
    useEffect(() => {
        axios
        .get(`http://localhost:5000/transactions/${id}`)
        .then((Transaction) => {
            console.log('transaction editada :', Transaction);
            setData(Transaction.data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
            <Navbar />
            <section>
            {data !== undefined ? (
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
                    {data !== undefined ? (
                        <div className="success-ticket-box">
                        <div className="success-date">
                            <div className="success-datum">
                            <h3>Aktualisiert am</h3>
                            <h2>{heute}</h2>
                            </div>

                            <div className="success-zeit">
                            <h3>Zeit</h3>
                            <Clock />
                            </div>
                        </div>
                        <div className="success-item">
                            <h3>What?</h3>
                            <h2>{data.title}</h2>
                        </div>
                        <div className="success-kategorie">
                            <h3>Kategorie</h3>
                            <h2>{data.category}</h2>
                        </div>
                        <div className="success-summe">
                            <h3>Summe</h3>
                            <h1>{data.amount}€</h1>
                        </div>
                        </div>
                    ) : (
                        'Loading'
                    )}
                    </div>
                </div>
                </div>
            ) : (
                'Loading'
            )}
            </section>
            <BottomNavigation />
        </>
    );
};
export default EditSuccessful;
