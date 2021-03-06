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

import logo from '../../assets/racket.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import AsyncSelectInput from '../../components/AsynSelectInput';

import { Category } from '../Brackets';

const Subscriptions: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const selectRef = useRef(null);

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

        await api.post('/players', data);

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

  const loadOptions = async (inputValue: string, callback: Function) => {
    const response = await api.get('/categories');

    const inputData = response.data.map((category: Category) => ({
      value: category.id,
      label: category.name,
    }));

    callback(inputData);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="Tennis Tournament" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça sua inscrição</h1>

          <Input name="name" icon={FiUser} placeholder="Nome Completo" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <AsyncSelectInput
            name="category_id"
            ref={selectRef}
            cachedOptions
            loadOptions={loadOptions}
            defaultOptions
            icon={FiList}
          />
          <Input name="phone_number" icon={FiPhone} placeholder="Telefone" />
          <Input
            name="guests"
            icon={FiUsers}
            placeholder="Acompanhantes (se houver)"
          />
          <Input name="restrictions" icon={FiEdit} placeholder="Mensagem" />

          <Button type="submit">Enviar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Subscriptions;
