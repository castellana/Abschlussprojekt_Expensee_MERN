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
    background: #2B2D5B;
    min-height: 100vh;
    padding: 3rem 0 7rem 0rem;
  }

  /* .bg-deco {
    overflow: hidden;
  } */

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
    margin: 0 auto;
    width: 100%;
    margin-bottom: 10%;
    /* background-position: left  100%;
    background-repeat: no-repeat; */
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
    margin-bottom: 2.6rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
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
/*
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
} */


/* AddTransaction */

.aktion-wrapper {
  width: 95%;
  margin: 0 auto;
  margin-top: 7rem;
  /* background-position: center bottom;
  background-repeat: no-repeat; */
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

/* SUCCESS-TICKET */

.test-start{
  background: #040525;
}

.ticket2 {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: 0px;
	filter: drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.15));

	&__header {
		position: relative;
		background-color: #232450;
		padding: 1rem;
		padding-bottom: 0;
		font-size: 1.2rem;
		font-weight: 600;
		border-radius: 15px 15px 0 0;
	}

	&__rip {
		position: relative;
		height: 40px;
		flex-shrink: 0;
		margin: 0 20px;
		background-color: #b61818;

		&::before,
		&::after {
			position: absolute;
			content: "";
			width: 40px;
			height: 40px;
			border: 10px solid transparent;
			border-top-color: #fff;
			border-right-color: #ff0000;
			transform: translate(-50%, -50%) rotate(45deg);
			border-radius: 50%;
			top: 50%;
		}

		&::before {
			left: -20px;
		}

		&::after {
			right: -80px;
			transform: translate(-50%, -50%) rotate(225deg);
		}
	}

	&__body {
		background-color: #232450;
		padding: 1rem;
		border-radius: 0 0 15px 15px;
		padding-top: 2rem;
	}
}

.ticket-line {
  overflow: hidden;
  padding-top: 1rem;
}

.success-title h2 {
  font-size: 2.4rem;
  text-align: center;
  line-height: 120%;
  padding: 5rem;
}

.success-wrapper {
  display: flex;
  justify-content: center;
  height: 50vh;
  margin-top: 10rem;
  position: relative
}

.success-wrapper h3{
  color: #969696;
  margin-bottom: 0.5rem;
}

.success-btn {
  position: absolute;
  top: -4rem;
  z-index: 10;
}

.success-ticket-box {
  padding: 1.5rem;
}

.success-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.2rem;
}

.success-kategorie {
  margin-bottom: 6rem;
}



/* charts */
.charts-wrapper{
  margin-top: 7rem;
  margin-bottom: 7rem;
}

.chart-data {
  margin: 3.4rem 0;
}

.chart1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.chart1 .legende {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.legende-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.legende h3 {
  padding-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.06rem;
}




.sub-item {
  margin-top: 0rem;
  border-radius: 3px;
}

.kategorie-box {
  width: 100%;
  border-radius: 3px;
  padding: 1rem 2rem;
}

.kategorie-box h2 {
  font-size: 2rem;
}

hr.strich-rechnung {
  width: 90%;
  margin: 1rem auto;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #afafaf;
  padding: 0;
}

.rot {
  background-image: linear-gradient(to right, #f63535 0%, #ff009d 90%);
}

.blau {
  background: #515FEB;
}

.dunkelblau {
  background: #32377C;
}


.gelb {
  background: #DCB136;
}

.grau {
  background: #95989a;
}

.kategorieItem-wrapper {
  height: 5.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid #2b2d5b;
}

.kategorieItem-wrapper h2 {
  font-size: 1.5rem;
}

.kategorie-box-title{
  padding: 2.7rem 2rem;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}



.btn{
  color: white;
  box-sizing: content-box;
  position: absolute;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  user-select: none;
  outline: 0;
  width: 56px;
  height: 56px;
  background-image: linear-gradient(to right top, #f63535 0%, #ff009d 90%);

  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translateX(-50%);
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)
}


/* Bottom Navigation */

.btn:hover {
  background-image: linear-gradient(to right top, #a70067 0%, #f63535 90%);
}


.btn:hover{
  cursor: pointer;
}

.iconhover:hover {
  cursor: pointer;
  svg path {
    color:red;
    fill: blue;
  }
}

.btn-content{
  display: flex;
  align-items: center;
  border-radius: inherit;
  color: inherit;
  flex: 1 1 auto;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  width: inherit;
}

.app-bar-bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6rem;
}

.app-bar-bottom:before{
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 3, 59, 0.726);

  clip-path: polygon(0 0,
    calc(50% - 38px) 0,
    calc(50% - 37.487665px) 0.628287px,
    calc(50% - 36.975331px) 1.256382px,
    calc(50% - 36.462997px) 1.884094px,
    calc(50% - 35.912306px) 2.511233px,
    calc(50% - 35.863009px) 3.137607px,
    calc(50% - 35.802788px) 3.763025px,
    calc(50% - 35.731661px) 4.387296px,
    calc(50% - 35.64965px) 5.010232px,
    calc(50% - 35.55678px) 5.631641px,
    calc(50% - 35.453079px) 6.251334px,
    calc(50% - 35.338579px) 6.869124px,
    calc(50% - 35.213314px) 7.484821px,
    calc(50% - 35.077322px) 8.098238px,
    calc(50% - 34.930646px) 8.709188px,
    calc(50% - 34.77333px) 9.317486px,
    calc(50% - 34.605421px) 9.922945px,
    calc(50% - 34.426971px) 10.525381px,
    calc(50% - 34.238035px) 11.124612px,
    calc(50% - 34.038669px) 11.720454px,
    calc(50% - 33.828934px) 12.312725px,
    calc(50% - 33.608895px) 12.901246px,
    calc(50% - 33.378619px) 13.485837px,
    calc(50% - 33.138175px) 14.066321px,
    calc(50% - 32.887636px) 14.642519px,
    calc(50% - 32.62708px) 15.214257px,
    calc(50% - 32.356586px) 15.781361px,
    calc(50% - 32.076235px) 16.343658px,
    calc(50% - 31.786113px) 16.900976px,
    calc(50% - 31.486309px) 17.453146px,
    calc(50% - 31.176915px) 18px,
    calc(50% - 30.858023px) 18.541371px,
    calc(50% - 30.529731px) 19.077094px,
    calc(50% - 30.19214px) 19.607005px,
    calc(50% - 29.845353px) 20.130945px,
    calc(50% - 29.489474px) 20.648752px,
    calc(50% - 29.124612px) 21.160269px,
    calc(50% - 28.750878px) 21.665341px,
    calc(50% - 28.368387px) 22.163813px,
    calc(50% - 27.977255px) 22.655534px,
    calc(50% - 27.5776px) 23.140354px,
    calc(50% - 27.169545px) 23.618125px,
    calc(50% - 26.753214px) 24.088702px,
    calc(50% - 26.328733px) 24.551941px,
    calc(50% - 25.896233px) 25.007701px,
    calc(50% - 25.455844px) 25.455844px,
    calc(50% - 25.007701px) 25.896233px,
    calc(50% - 24.551941px) 26.328733px,
    calc(50% - 24.088702px) 26.753214px,
    calc(50% - 23.618125px) 27.169545px,
    calc(50% - 23.140354px) 27.5776px,
    calc(50% - 22.655534px) 27.977255px,
    calc(50% - 22.163813px) 28.368387px,
    calc(50% - 21.665341px) 28.750878px,
    calc(50% - 21.160269px) 29.124612px,
    calc(50% - 20.648752px) 29.489474px,
    calc(50% - 20.130945px) 29.845353px,
    calc(50% - 19.607005px) 30.19214px,
    calc(50% - 19.077094px) 30.529731px,
    calc(50% - 18.541371px) 30.858023px,
    calc(50% - 18px) 31.176915px,
    calc(50% - 17.453146px) 31.486309px,
    calc(50% - 16.900976px) 31.786113px,
    calc(50% - 16.343658px) 32.076235px,
    calc(50% - 15.781361px) 32.356586px,
    calc(50% - 15.214257px) 32.62708px,
    calc(50% - 14.642519px) 32.887636px,
    calc(50% - 14.066321px) 33.138175px,
    calc(50% - 13.485837px) 33.378619px,
    calc(50% - 12.901246px) 33.608895px,
    calc(50% - 12.312725px) 33.828934px,
    calc(50% - 11.720454px) 34.038669px,
    calc(50% - 11.124612px) 34.238035px,
    calc(50% - 10.525381px) 34.426971px,
    calc(50% - 9.922945px) 34.605421px,
    calc(50% - 9.317486px) 34.77333px,
    calc(50% - 8.709188px) 34.930646px,
    calc(50% - 8.098238px) 35.077322px,
    calc(50% - 7.484821px) 35.213314px,
    calc(50% - 6.869124px) 35.338579px,
    calc(50% - 6.251334px) 35.453079px,
    calc(50% - 5.631641px) 35.55678px,
    calc(50% - 5.010232px) 35.64965px,
    calc(50% - 4.387296px) 35.731661px,
    calc(50% - 3.763025px) 35.802788px,
    calc(50% - 3.137607px) 35.863009px,
    calc(50% - 2.511233px) 35.912306px,
    calc(50% - 1.884094px) 35.950663px,
    calc(50% - 1.256382px) 35.97807px,
    calc(50% - 0.628287px) 35.994517px,
    50% 36px,
    calc(50% + 0.628287px) 35.994517px,
    calc(50% + 1.256382px) 35.97807px,
    calc(50% + 1.884094px) 35.950663px,
    calc(50% + 2.511233px) 35.912306px,
    calc(50% + 3.137607px) 35.863009px,
    calc(50% + 3.763025px) 35.802788px,
    calc(50% + 4.387296px) 35.731661px,
    calc(50% + 5.010232px) 35.64965px,
    calc(50% + 5.631641px) 35.55678px,
    calc(50% + 6.251334px) 35.453079px,
    calc(50% + 6.869124px) 35.338579px,
    calc(50% + 7.484821px) 35.213314px,
    calc(50% + 8.098238px) 35.077322px,
    calc(50% + 8.709188px) 34.930646px,
    calc(50% + 9.317486px) 34.77333px,
    calc(50% + 9.922945px) 34.605421px,
    calc(50% + 10.525381px) 34.426971px,
    calc(50% + 11.124612px) 34.238035px,
    calc(50% + 11.720454px) 34.038669px,
    calc(50% + 12.312725px) 33.828934px,
    calc(50% + 12.901246px) 33.608895px,
    calc(50% + 13.485837px) 33.378619px,
    calc(50% + 14.066321px) 33.138175px,
    calc(50% + 14.642519px) 32.887636px,
    calc(50% + 15.214257px) 32.62708px,
    calc(50% + 15.781361px) 32.356586px,
    calc(50% + 16.343658px) 32.076235px,
    calc(50% + 16.900976px) 31.786113px,
    calc(50% + 17.453146px) 31.486309px,
    calc(50% + 18px) 31.176915px,
    calc(50% + 18.541371px) 30.858023px,
    calc(50% + 19.077094px) 30.529731px,
    calc(50% + 19.607005px) 30.19214px,
    calc(50% + 20.130945px) 29.845353px,
    calc(50% + 20.648752px) 29.489474px,
    calc(50% + 21.160269px) 29.124612px,
    calc(50% + 21.665341px) 28.750878px,
    calc(50% + 22.163813px) 28.368387px,
    calc(50% + 22.655534px) 27.977255px,
    calc(50% + 23.140354px) 27.5776px,
    calc(50% + 23.618125px) 27.169545px,
    calc(50% + 24.088702px) 26.753214px,
    calc(50% + 24.551941px) 26.328733px,
    calc(50% + 25.007701px) 25.896233px,
    calc(50% + 25.455844px) 25.455844px,
    calc(50% + 25.896233px) 25.007701px,
    calc(50% + 26.328733px) 24.551941px,
    calc(50% + 26.753214px) 24.088702px,
    calc(50% + 27.169545px) 23.618125px,
    calc(50% + 27.5776px) 23.140354px,
    calc(50% + 27.977255px) 22.655534px,
    calc(50% + 28.368387px) 22.163813px,
    calc(50% + 28.750878px) 21.665341px,
    calc(50% + 29.124612px) 21.160269px,
    calc(50% + 29.489474px) 20.648752px,
    calc(50% + 29.845353px) 20.130945px,
    calc(50% + 30.19214px) 19.607005px,
    calc(50% + 30.529731px) 19.077094px,
    calc(50% + 30.858023px) 18.541371px,
    calc(50% + 31.176915px) 18px,
    calc(50% + 31.486309px) 17.453146px,
    calc(50% + 31.786113px) 16.900976px,
    calc(50% + 32.076235px) 16.343658px,
    calc(50% + 32.356586px) 15.781361px,
    calc(50% + 32.62708px) 15.214257px,
    calc(50% + 32.887636px) 14.642519px,
    calc(50% + 33.138175px) 14.066321px,
    calc(50% + 33.378619px) 13.485837px,
    calc(50% + 33.608895px) 12.901246px,
    calc(50% + 33.828934px) 12.312725px,
    calc(50% + 34.038669px) 11.720454px,
    calc(50% + 34.238035px) 11.124612px,
    calc(50% + 34.426971px) 10.525381px,
    calc(50% + 34.605421px) 9.922945px,
    calc(50% + 34.77333px) 9.317486px,
    calc(50% + 34.930646px) 8.709188px,
    calc(50% + 35.077322px) 8.098238px,
    calc(50% + 35.213314px) 7.484821px,
    calc(50% + 35.338579px) 6.869124px,
    calc(50% + 35.453079px) 6.251334px,
    calc(50% + 35.55678px) 5.631641px,
    calc(50% + 35.64965px) 5.010232px,
    calc(50% + 35.731661px) 4.387296px,
    calc(50% + 35.802788px) 3.763025px,
    calc(50% + 35.863009px) 3.137607px,
    calc(50% + 35.912306px) 2.511233px,
    calc(50% + 36.462997px) 1.884094px,
    calc(50% + 36.975331px) 1.256382px,
    calc(50% + 37.487665px) 0.628287px,
    calc(50% + 38px) 0,
    100% 0,
    100% 100%,
    0 100%);
}

.home-btn {
  position: absolute;
  top: 1.4rem;
  left: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    padding-top: 0.5rem;
  }
}

.charts-btn {
  position: absolute;
  top: 1.4rem;
  right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    padding-top: 0.5rem;
  }
}

.chart-balken{
  width: 90%;
  margin: 4rem auto;
}


.start-stats-wrapper {
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
}

.globale-summe {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 5rem;
}

.stats-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  h3 {
    margin-bottom: 3rem;
  }
}

.stats-Guthaben {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5%;
}

.stats-Ausgaben {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 5%;
}

.stats-vert {
  height: 80px;
  border-right: 1px solid #afafaf;
}

hr.start-line {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #000000;
  margin: 1em 0; padding: 0;
}

  @media (max-width: 768px) {
  }


`;

export default GlobalStyle;
