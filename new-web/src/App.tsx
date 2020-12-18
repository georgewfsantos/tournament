import React from 'react';

import SignIn from './pages/SignIn';
import AdminSignIn from './pages/AdminSignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
