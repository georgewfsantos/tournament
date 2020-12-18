import React, { useCallback } from 'react';
import {
  FiUser,
  FiPhone,
  FiList,
  FiUsers,
  FiEdit,
  FiMail,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback((data: object): void => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <img src="" alt="Tennis Tournament" />

        <Form onSubmit={handleSubmit} initialData={{ name: 'Diego' }}>
          <h1>Faça sua inscrição</h1>

          <Input name="name" icon={FiUser} placeholder="Nome Completo" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="number"
            name="category_id"
            icon={FiList}
            placeholder="Classe"
          />
          <Input name="phone_number" icon={FiPhone} placeholder="Telefone" />
          <Input
            name="guests"
            icon={FiUsers}
            placeholder="Acompanhantes (se houver)"
          />
          <Input name="restrictions" icon={FiEdit} placeholder="Mensagem" />

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
