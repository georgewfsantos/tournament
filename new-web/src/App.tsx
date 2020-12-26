import React from 'react';

import SignIn from './pages/SignIn';
import AdminSignIn from './pages/AdminSignIn';
import Subscriptions from './pages/Subscriptions';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
