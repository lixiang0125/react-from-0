import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Page1 from '../pages/page1';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/page1" component={Page1} />
    </Switch>
  </BrowserRouter>
);

export default Router;
