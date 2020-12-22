import React, { useCallback, useRef, useContext } from 'react';
import * as Yup from 'yup';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import { AuthContext } from '../../context/AuthContext';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      const { email, password } = data;
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email('Digite um formato válido de e-mail'),
          password: Yup.string().required().max(10),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email,
          password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src="" alt="Tennis Tournament" />

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ name: 'Diego' }}
        >
          <h1>Acessar como Admin</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
