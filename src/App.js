import Header from './Header';
import Home from './Home'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import CheckOut from './CheckOut';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    <Switch>
    <Route exact path="/">
      
      <Home/>
    </Route>
    <Route exact path="/checkout">
        
        <CheckOut/>
    </Route> 
    </Switch>
    </div>
    </Router>
  );
}

export default App;
