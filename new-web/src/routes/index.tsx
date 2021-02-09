import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { useAuth } from '../hooks/auth';

import SignIn from '../pages/SignIn';
import Subscriptions from '../pages/Subscriptions';
import SubscriptionView from '../pages/SubscriptionView';
import SubscriptionList from '../pages/SubscriptionView/SubscriptionList';

import Brackets from '../pages/Brackets';

import BracketItem from '../pages/Brackets/BracketItem';
import BracketDisplay from '../pages/Brackets/BracketDisplay';
import Results from '../pages/Results';
import EditResults from '../pages/EditResults';
import AdminResults from '../pages/AdminResults';
import CreateClass from '../pages/CreateClass';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Switch>
      <Route path="/" exact strict component={Subscriptions} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/brackets" exact component={Brackets} isPrivate={!!user} />
      <Route
        path="/brackets/bracketDisplay/:categoryId"
        component={BracketDisplay}
      />
      <Route
        path="/brackets/bracketItem/:categoryId"
        component={BracketItem}
        isPrivate
      />
      <Route
        path="/subscriptionView"
        exact
        component={SubscriptionView}
        isPrivate
      />
      <Route
        path="/subscriptionView/subscriptionList/:categoryId"
        component={SubscriptionList}
        isPrivate
      />
      <Route path="/editResults" exact component={EditResults} isPrivate />
      <Route
        path="/editResults/adminResults"
        component={AdminResults}
        isPrivate
      />
      <Route path="/results" component={Results} />
      <Route path="/createClass" component={CreateClass} isPrivate />
    </Switch>
  );
};

export default Routes;
