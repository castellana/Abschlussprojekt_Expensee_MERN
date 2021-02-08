import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --header1: 3rem;
    --header2: 1.7rem;
    --header3: 1.2rem;
    --text: 1.5rem;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 600;
    --font-weight-bold: 800;
    --background-color: #2b2d5b;
    --primary-color: #fff;
    --secondary-color: #232450;
    --special1-color: #906272;
    --special2-color: #f4f4f4;
    --special3-color: #252422;
    --special4-color: #252422;
    scroll-behavior: smooth;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background: rgb(233, 233, 233);
  }

  body {
    background-color: #f7f7f7;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
  }

  h1 {
    font-size: var(--header1);
    font-weight: 400;
    line-height: 90%;
    color: #fff;
  }

  h2 {
    font-size: var(--header2);
    font-weight: 500;
    line-height: 90%;
    color: #fff;
  }

  h3 {
    font-size: var(--header3);
    color: #fff;
    font-weight: 400;
  }

  li,
  button,
  label,
  input,
  a,
  p {
    font-size: var(--text);
  }
  h2 {
    font-size: var(--header2);
  }
  h3 {
    font-size: var(--header3);
  }
  h4,
  h5 {
    font-size: var(--header4);
  }

  ul {
    list-style: none;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;
    color: #fff;
  }

  button,
  button:active,
  button:focus {
    width: 100%;
    background-color: #2b2d5b;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    /* margin: 4px 2px; */
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.5s ease;
    outline: none;
    border: 0;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  button a {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
  }

  button:hover {
    background: lime;
    color: #fff;
  }

  .App {
    background: #2b2d5b;
    min-height: 100vh;
  }
  /* Statusleiste */
  /* .status-phone {
    width: 100%;
    padding: 0 0.8rem;
    height: 2.6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: red;
  } */

  // HomeStart
  .home-start {
    background:blue;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 14%;
  }

  .more-action{
    width: 90%;
    margin: 0 auto;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more-action a {
    font-size: 1.4rem;
  }

  .title-box {
    margin-top: 4.6rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background:#819e00;
  }

  .transaction-list{

  }

  .transactionItem-wrapper{
    width: 90%;
    margin: 0.6rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.5rem;
    padding: 1.2rem;
    border-radius: 5px;
    background: #232450;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }

  .icon {
    flex: 1 1 20%;
  }

  .item-box {
    flex: 1 1 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-box h2 {
    font-size: 1.4rem;
  }

  .date {
    width: 80px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
  }

  .date p {
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }


/* bottom nav */

.bottom-nav {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: red;
  box-shadow: 2px -1px 11px 3px rgba(0,0,0,0.48);
}

.bottom-nav div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.bottom-nav h3 {
  margin-top: 0.5rem;
}

.bottom-nav div:nth-child(1) {
  position: absolute;
  left: 15%;
}

.bottom-nav div:nth-child(2) {
  position: absolute;
  left: 44.7%;
}

.bottom-nav div:nth-child(3) {
  position: absolute;
  right: 15%;
}

.bottomshadow {
  position: fixed;
  bottom: 5%;
  box-shadow: 0px -5px 10px -3px rgba(0, 0, 0, 0.93);
}


/* AddTransaction */

.aktion-wrapper {
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
}



input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  color: #fff;
  background: #232450;
  border: 1px solid #32323b;
  border-radius: 3px;
}

input:focus {
  background-color: #355023;
  color: #fff;
  outline: none;
}

input:hover {
  background-color: #233750;
  color: #fff;
  outline: none;
}

input:hover::placeholder {
  color: red;
}

input[type='number'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  color: #fff;
  background: #232450;
  border: 1px solid #32323b;
  border-radius: 3px;
}

input[type='date'] {
  font-size: 2rem;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(100%);
}

::-webkit-datetime-edit { padding: 1em; }
::-webkit-datetime-edit-fields-wrapper { background: silver; }
::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; }
::-webkit-datetime-edit-month-field { color: blue; }
::-webkit-datetime-edit-day-field { color: green; }
::-webkit-datetime-edit-year-field { color: purple; }
::-webkit-inner-spin-button { display: none; }



/* noch fontawesome installieren für den Pfeil */

.select-wrapper {
  position: relative;

  /* width: 200px; */
}

.select-wrapper::before {
  color: #fff;
  font-size: 20px;
  pointer-events: none;
  position: absolute;
  right: 15px;
  top: 10px;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  width: 100%;
  height: 40px;
  -moz-padding-start: calc(10px - 3px);
  padding-left: 10px;
  background: var(--secondary-color);
  color: #fff;
  font-size: 16px;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  height: 5.6rem;
  margin-bottom: 2.4rem;
}

select::-ms-expand {
  display: none;
}

select option {
  color: #666;
}

select:focus::-ms-value {
  background-color: transparent;
}


.delete{
  margin-top: 4rem;
}


  @media (max-width: 768px) {
  }


`;

export default GlobalStyle;
