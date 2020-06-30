import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/racket.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

function SignIn() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      // formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      /* await signIn({
          email: data.email,
          password: data.password,
        }); */
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // const errors = getValidationErrors(err);
        // formRef.current?.setErrors(errors);
        // return
      }

      /* addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro e não foi possível realizar o login. Verique os dados',
        }); */
    }
  }, []);

  return <h1>Subscriptions</h1>;
}

export default SignIn;
