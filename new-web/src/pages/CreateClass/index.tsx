import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiList } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import { Container, Content } from './sytles';

import logo from '../../assets/racket.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface CreateClassFormData {
  name: string;
}

const CreateClass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: CreateClassFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/categories', data);

        addToast({
          type: 'success',
          title: 'Classe Cadastrada',
          description: 'Classe criada com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description:
            'Não foi possível realizar o login. Verifique seus dados.',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Tennis Tournament" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Acessar como Admin</h1>

          <Input name="name" icon={FiList} placeholder="Nome da Classe" />

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateClass;
