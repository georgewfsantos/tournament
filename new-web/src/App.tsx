import React from 'react';

import SignIn from './pages/SignIn';
import AdminSignIn from './pages/AdminSignIn';
import Subscriptions from './pages/Subscriptions';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
