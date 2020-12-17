import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';



/* const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid format. Insert a valid email')
    .required('You must insert an email adress'),
  password: Yup.string().required('You must insert your password'),
}); */

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading); 

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  } 

  return (
    <Container>
      <Content>
        <img src="" alt="tournament" />

        <form onSubmit={handleSubmit}>
          <h1>Faça sua inscrição</h1>

          <input name="name" placeholder="Nome Completo" />
          <input name="email" placeholder="E-mail" />
          <input name="category_id" placeholder="Classe" />
          <input name="phone_number" placeholder="Telefone" />
          <input name="guests" placeholder="Acompanhante(s) (se houver)" />
          <textarea  name="restrictions" placeholder="Mensagem" />

          <button type="submit">{loading ? 'Enviar' : '...loading'}</button>
        </form>
      </Content>
    </Container>
  );
}
