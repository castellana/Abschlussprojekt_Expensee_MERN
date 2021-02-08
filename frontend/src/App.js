
import './App.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom"

import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import SingleTransaction from './components/SingleTransaction'
import CurrentMonth from './components/CurrentMonth'
import MonthlyCategories from './components/MonthlyCategories'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/" component={Transactions} exact/>
              <Route path="/add" component={AddTransaction} />
              <Route path="/transactions/:id" component={SingleTransaction}/>
              <Route path="/monthly" component={CurrentMonth} exact/>
              <Route path="/monthly/category" component={MonthlyCategories} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
