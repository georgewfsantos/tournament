import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/racket.svg';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Profile } from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="Tennis Racket" />
          </NavLink>

          <NavLink
            className="first-link"
            to={`${user ? '/subscriptionView' : '/'}`}
            activeStyle={{ color: '#32067c' }}
          >
            Inscrições
          </NavLink>
          <NavLink to="/brackets" activeStyle={{ color: '#32067c' }}>
            Chaves
          </NavLink>
          {!user && (
            <NavLink to="/signIn" activeStyle={{ color: '#32067c' }}>
              Admin
            </NavLink>
          )}

          <NavLink
            to={`${user ? '/editResults' : '/results'}`}
            activeStyle={{ color: '#32067c' }}
          >
            Resultados
          </NavLink>

          {user && (
            <NavLink to="/createClass" activeStyle={{ color: '#32067c' }}>
              Criar Classe
            </NavLink>
          )}
        </nav>
        {user && (
          <Profile>
            <button type="button" onClick={signOut}>
              Sair
              <FiLogOut size={20} color="#c5392f" />
            </button>
          </Profile>
        )}
      </Content>
    </Container>
  );
};

export default Header;
