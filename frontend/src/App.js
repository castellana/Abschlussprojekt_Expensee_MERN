// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// GLobal Styled
import GlobalStyle from './components/GlobalStyle';

import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import SingleTransaction from './components/SingleTransaction';
import CurrentMonth from './components/CurrentMonth';
import EditTransaction from './components/EditTransaction'
import EditSuccessful from './components/EditSuccessful'

// import StatusPhone from './components/StatusPhone';
// import Navbar from './components/Nav/Navbar';
// import BottomNavigation from './components/BottomNavigation';

// Import pages
import HomeStart from './pages/HomeStart';
import Charts from './pages/Charts';
// import TestPage from './pages/TestPage';
// import Login from './components/Login';
// import React, { useState } from 'react';
// import Home from './Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <GlobalStyle />

        <Router>
        {/* <StatusPhone /> */}
            {/* <Navbar /> */}

            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>

                <Route path="/Transactions" component={Transactions} exact />

                <Route path="/HomeStart">
                    <HomeStart />
                </Route>

                <Route path="/charts">
                    <Charts />
                </Route>

            {/* <Route path="/test">
                        <TestPage />
                    </Route> */}

                <Route path="/monthly" component={CurrentMonth} exact />
                <Route path="/add" component={AddTransaction} />
                <Route path="/transactions/:id" component={SingleTransaction} exact/>
                <Route path="/transactions/:id/edit" component={EditTransaction} exact />
                <Route path="/transactions/:id/edited" component={EditSuccessful} exact />
            </Switch>
            {/* <BottomNavigation /> */}
        </Router>
    </div>
  );
}

export default App;
