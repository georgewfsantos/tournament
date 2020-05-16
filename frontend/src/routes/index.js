import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Home from '~/pages/Home';
import Subscriptions from '~/pages/Subscriptions';
import Brackets from '~/pages/Brackets';

export default function AllRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/subscriptions" component={Subscriptions} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/brackets" component={Brackets} />
    </Switch>
  );
}
