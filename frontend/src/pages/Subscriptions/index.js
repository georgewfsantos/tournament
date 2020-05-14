import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Header from '~/components/Header';

import logo from '~/assets/racket.svg';

import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Subscriptions() {
  const title = 'Torneio Ranking Rio Verde -Go';
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {}

  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <img src={logo} alt="Tennis Racket with ball" />
          <div className="title">
            <strong>{title.toUpperCase()}</strong>
          </div>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Seu nome completo" />
            <Input name="category" type="number" placeholder="Classe" />
            <Input
              name="message"
              multiline
              numberOfLines={50}
              placeholder="Digite sua mensagem (opcional)"
            />

            <button type="submit">
              {loading ? 'Carregando...' : 'Enviar'}
            </button>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}
