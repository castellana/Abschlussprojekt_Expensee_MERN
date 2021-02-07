// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// GLobal Styled
import GlobalStyle from './components/GlobalStyle';

// import StatusPhone from './components/StatusPhone';
import Navbar from './components/Nav/Navbar';
import BottomNavigation from './components/BottomNavigation';

// Import pages
import HomeStart from './pages/HomeStart';

import AddTransaction from './components/AddTransaction';
import SingleTransaction from './components/SingleTransaction';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        {/* <StatusPhone /> */}

        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomeStart />
          </Route>
          <Route path="/add" component={AddTransaction} />
          <Route path="/transactions/:id" component={SingleTransaction} />
        </Switch>
        <BottomNavigation />
      </Router>
    </div>
  );
}

export default App;
