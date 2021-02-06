
import './App.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom"

import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import SingleTransaction from './components/SingleTransaction'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/" component={Transactions} exact/>
              <Route path="/add" component={AddTransaction} />
              <Route path="/transactions/:id" component={SingleTransaction}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
