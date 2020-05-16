import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function BracketItem() {
  return (
    <Container>
      <Link to="/class">classe 1</Link>
    </Container>
  );
}

export default BracketItem;
