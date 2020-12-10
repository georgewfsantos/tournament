import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import AdminBrackets from '~/pages/Dashboard/AdminBrackets';
import AdminBracketItem from '~/pages/Dashboard/AdminBrackets/AdminBracketItem';
import Home from '~/pages/Home';
import Subscriptions from '~/pages/Subscriptions';
import Brackets from '~/pages/Brackets';
import BracketItem from '~/pages/Brackets/BracketItem';

export default function AllRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/subscriptions" component={Subscriptions} />
      <Route path="/dashboard" exact isPrivate component={AdminBrackets} />
      <Route
        path="/dashboard/adminBracketItem/:categoryId"
        isPrivate
        component={AdminBracketItem}
      />
      <Route path="/brackets" exact component={Brackets} />
      <Route path="/brackets/bracketItem/:categoryId" component={BracketItem} />
    </Switch>
  );
}
