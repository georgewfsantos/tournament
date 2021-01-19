import React from 'react';
import { Redirect, Route as ReactRoute, RouteProps } from 'react-router-dom';
import Header from '../components/Header';

import { useAuth } from '../hooks/auth';

interface RouteProperties extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProperties> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            <Header />
            <Component />
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/subscriptionView',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
