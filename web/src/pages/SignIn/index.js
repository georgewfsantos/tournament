import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '../../assets/racket.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid format. Insert a valid email')
    .required('You must insert an email adress'),
  password: Yup.string().required('You must insert your password'),
});

export default function SignIn() {
  /* const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading); */

  /* function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  } */

  return <h1>SignIn</h1>;
}
