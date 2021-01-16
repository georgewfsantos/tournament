import React from 'react';

import { Container } from './styles';

const EmptyListContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
};

export default EmptyListContainer;
