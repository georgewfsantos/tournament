import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Link to="/brackets">Brackets</Link>
    </Container>
  );
};

export default Dashboard;