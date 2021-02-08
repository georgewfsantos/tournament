import React from 'react';
import ListComponent from '../../components/List';
// import TopBackground from '../../components/TopBackground';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ListComponent />
      <ListComponent />
      <ListComponent />
      <ListComponent />
    </Container>
  );
};

export default Dashboard;
