import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Link to="/">Sou admin</Link>
    </Container>
  );
}
