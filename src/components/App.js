import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import '../styles/main.scss';

import Home from '../components/pages/Home';

import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
