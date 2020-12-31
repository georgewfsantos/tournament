import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Subscriptions from '../pages/Subscriptions';
import Brackets from '../pages/Brackets';

import Dashboard from '../pages/Dashboard';
import BracketItem from '../pages/Brackets/BracketItem';
import BracketDisplay from '../pages/Brackets/BracketDisplay';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/subscriptions" component={Subscriptions} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/brackets" exact component={Brackets} />
      <Route path="/brackets/bracketDisplay" component={BracketDisplay} />
      <Route
        path="/brackets/bracketItem/:categoryId"
        component={BracketItem}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
