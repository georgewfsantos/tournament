import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const AdminSignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src="" alt="Tennis Tournament" />

        <form>
          <h1>Acessar como Admin</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Password" />

          <Button type="button">Entrar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default AdminSignIn;
