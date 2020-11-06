import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './app';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/user' render={() => <App />} />
      <Redirect from={'/'} to={'/user'} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
