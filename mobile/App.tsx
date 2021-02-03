import React from 'react';
import ListComponent from './src/components/List';
import TopBackground from './src/components/TopBackground';
// import {View} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <TopBackground />
      <ListComponent />
    </>
  );
};

export default App;
