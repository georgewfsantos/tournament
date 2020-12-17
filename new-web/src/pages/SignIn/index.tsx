import React from 'react';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src="" alt="Tennis Tournament" />

        <form>
          <h1>Faça sua inscrição</h1>

          <input placeholder="Nome" />
          <input placeholder="Telefone" />
          <input placeholder="Classe" />
          <input placeholder="Acompanhante(s) (se houver)" />
          <textarea placeholder="Mensagem" />

          <button type="button">Entrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
