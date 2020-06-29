import React from 'react';
import { render } from 'react-dom';
import { Atoms, Molecules, Home } from './pages';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

const Root = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/atoms">
          <Atoms></Atoms>
        </Route>
        <Route path="/molecules">
          <Molecules></Molecules>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </HashRouter>
  );
};

render(<Root />, document.getElementById('root'));
