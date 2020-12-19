import React from 'react';

import SignIn from './pages/SignIn';
import AdminSignIn from './pages/AdminSignIn';
import Subscriptions from './pages/Subscriptions';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Subscriptions />
      <GlobalStyle />
    </>
  );
};

export default App;
