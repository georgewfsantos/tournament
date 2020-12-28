import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Subscriptions from '../pages/Subscriptions';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/subscriptions" exact component={Subscriptions} />
    </Switch>
  );
};

export default Routes;
