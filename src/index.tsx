import React from 'react';
import { render } from 'react-dom';
import { Atoms, Molecules } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/atoms">
          <Atoms></Atoms>
        </Route>
        <Route path="/molecules">
          <Molecules></Molecules>
        </Route>
        <Route path="/">
          <Molecules></Molecules>
        </Route>
      </Switch>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
