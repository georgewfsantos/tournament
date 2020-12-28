import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import {
  FiUser,
  FiPhone,
  FiList,
  FiUsers,
  FiEdit,
  FiMail,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

const Subscriptions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string().email('Digite um formato válido de e-mail'),
          category_id: Yup.number()
            .required()
            .moreThan(0, 'Deve ser um número de 1 a 5')
            .lessThan(6, 'Deve ser um número de 1 a 5'),
          phone_number: Yup.string().required(
            'Número de telefone é obrigatório',
          ),
          guests: Yup.string(),
          restrictions: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/route', data);

        addToast({
          type: 'success',
          title: 'Inscrição realizada com sucesso',
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        addToast({
          type: 'error',
          title: 'Erro na Inscrição',
          description:
            'Não foi possível concluir sua inscrição. Verifique seus dados.',
        });
      }
    },
    [addToast],
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
          <h1>Faça sua inscrição</h1>

          <Input name="name" icon={FiUser} placeholder="Nome Completo" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            type="number"
            name="category_id"
            icon={FiList}
            placeholder="Classe"
            defaultValue={0}
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

export default Subscriptions;
