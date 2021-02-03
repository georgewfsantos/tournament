import 'react-native-gesture-handler';
import React from 'react';
import AppRoutes from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#afeeee" />
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
