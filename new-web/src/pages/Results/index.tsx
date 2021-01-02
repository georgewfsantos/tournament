import React from 'react';
import MatchBox from '../../components/MatchBox';

import { Container } from './styles';

const Results: React.FC = () => {
  return (
    <Container>
      <MatchBox />
      <MatchBox />
      <MatchBox />
      <MatchBox />
      <MatchBox />
    </Container>
  );
};

export default Results;
