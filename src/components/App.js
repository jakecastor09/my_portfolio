import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/main.scss';

import Home from '../components/pages/Home';
import About from '../components/pages/About';

import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
