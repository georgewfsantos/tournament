import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Home from '~/pages/Home';

export default function AllRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" component={Home} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
}
