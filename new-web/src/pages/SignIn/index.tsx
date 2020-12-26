import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      const { email, password } = data;
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um formato válido de e-mail'),
          password: Yup.string().required().max(10),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email,
          password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'info',
          title: 'Erro na Autenticação',
          description:
            'Não foi possível realizar o login. Verifique seus dados.',
        });
      }
    },
    [addToast, signIn],
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
