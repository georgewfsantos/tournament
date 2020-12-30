import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Link to="/brackets">Brackets</Link>
      </Container>
    </>
  );
};

export default Dashboard;
