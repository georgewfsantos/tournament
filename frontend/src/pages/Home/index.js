import React from 'react';

import Header from '~/components/Header';

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <div className="title">Hello</div>
        </section>
      </Container>
    </>
  );
}
