import React from 'react';
import { FiUser } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container, Content } from './styles';

export default function Subscriptions() {
  return (
    <Container>
      <Content>
        <img src="" alt="tournament" />

        <form>
          <h1>Faça sua inscrição</h1>

          <input icon = {FiUser} name="name" placeholder="Nome Completo" />
          <input name="email" placeholder="E-mail" />
          <input name="category_id" placeholder="Classe" />
          <input name="phone_number" placeholder="Telefone" />
          <input name="guests" placeholder="Acompanhante(s) (se houver)" />
          <textarea  name="restrictions" placeholder="Mensagem" />

          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Container>
  );
}
