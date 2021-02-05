
import './App.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom"

import Transactions from './components/Transactions'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path="/" component={Transactions} exact/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
