
import './App.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom"

import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/" component={Transactions} exact/>
              <Route path="/add" component={AddTransaction} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
