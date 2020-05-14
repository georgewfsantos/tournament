import React from 'react';

import Header from '~/components/Header';

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
}
