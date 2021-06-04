import React from 'react';
import {
  BrowerRouter, Route, Switch,
} from 'react-router-dom';
import Homepage from '../pages/homepage';
import Page1 from '../pages/page1';

const Router = () => (
  <BrowerRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/page1" component={Page1} />
    </Switch>
  </BrowerRouter>
);

export default Router;
