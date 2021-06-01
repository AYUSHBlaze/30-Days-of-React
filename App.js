import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home Page, Dawg</h2>
  </div>
);

export default App;
